<template>
  <div class="melino-map">
    <div class="melino-map-controls">
      <label class="melino-map-search">
        <span class="visually-hidden">Search locations</span>
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Search Melino…"
          autocomplete="off"
        />
      </label>
      <div class="melino-map-zoom" role="group" aria-label="Map zoom">
        <button type="button" class="btn btn-outline melino-map-zoom-btn" @click="zoomIn">+</button>
        <button type="button" class="btn btn-outline melino-map-zoom-btn" @click="zoomOut">−</button>
        <button type="button" class="btn btn-outline melino-map-zoom-btn" @click="resetView">Reset</button>
      </div>
    </div>

    <div class="melino-map-body">
      <aside class="melino-map-legend" aria-label="Map legend and filters">
        <div class="melino-map-legend-head">
          <h3>Legend</h3>
          <div class="melino-map-legend-actions">
            <button type="button" class="melino-map-legend-link" @click="showAllGroups">All</button>
            <span aria-hidden="true">·</span>
            <button type="button" class="melino-map-legend-link" @click="hideAllGroups">None</button>
          </div>
        </div>
        <ul class="melino-map-legend-list">
          <li v-for="group in MELINO_MAP.groups" :key="group.id">
            <label class="melino-map-legend-item">
              <input v-model="activeGroups" type="checkbox" :value="group.id" />
              <img
                v-if="group.iconUrl"
                :src="group.iconUrl"
                :alt="''"
                class="melino-map-legend-icon"
                loading="lazy"
                decoding="async"
              />
              <span>{{ group.name }}</span>
              <span class="melino-map-legend-count">{{ countByGroup[group.id] || 0 }}</span>
            </label>
          </li>
        </ul>
        <p class="melino-map-legend-note">
          Map data and icons from
          <a href="https://paralives.wiki.gg/wiki/Melino" target="_blank" rel="noopener noreferrer"
            >Paralives Wiki — Melino</a
          >. Unofficial fan reference.
        </p>
      </aside>

      <div
        ref="viewportRef"
        class="melino-map-viewport"
        :class="{ 'melino-map-viewport--dragging': isDragging }"
        @wheel.prevent="onWheel"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @pointerleave="onPointerUp"
      >
        <div class="melino-map-stage" :style="panStyle">
          <div ref="innerRef" class="melino-map-inner" :style="scaleStyle">
            <img
              class="melino-map-bg"
              :src="MELINO_MAP.image"
            :width="MELINO_MAP.width"
            :height="MELINO_MAP.height"
            :style="{ aspectRatio: `${MELINO_MAP.width} / ${MELINO_MAP.height}` }"
              alt="Melino town map — Paralives Early Access open world"
              draggable="false"
              decoding="async"
              @load="schedulePinUpdate"
            />
          </div>
        </div>
        <div class="melino-map-pins-layer" aria-hidden="false">
          <button
            v-for="marker in visibleMarkers"
            :key="marker.id"
            type="button"
            class="melino-map-pin"
            :class="{
              'melino-map-pin--active': selectedId === marker.id,
              'melino-map-pin--dim': selectedId && selectedId !== marker.id,
            }"
            :style="pinStyle(marker)"
            :aria-label="`${marker.name}, ${marker.groupName}`"
            :aria-pressed="selectedId === marker.id ? 'true' : 'false'"
            @click.stop="selectMarker(marker)"
          >
            <img
              v-if="iconByGroup[marker.groupId]"
              :src="iconByGroup[marker.groupId]"
              alt=""
              class="melino-map-pin-icon"
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      </div>

      <aside
        v-if="selectedMarker"
        class="melino-map-detail"
        aria-live="polite"
        aria-label="Selected location"
      >
        <button type="button" class="melino-map-detail-close" aria-label="Close details" @click="clearSelection">
          ×
        </button>
        <p class="melino-map-detail-type">{{ selectedMarker.groupName }}</p>
        <h3>{{ selectedMarker.name }}</h3>
        <p v-if="selectedMarker.description" class="melino-map-detail-desc">{{ selectedMarker.description }}</p>
        <p v-else class="melino-map-detail-desc melino-map-detail-desc--muted">No description on the community map.</p>
        <p v-if="selectedMarker.article && selectedMarker.article !== 'Town'" class="melino-map-detail-ref">
          Wiki article: <strong>{{ selectedMarker.article }}</strong>
        </p>
      </aside>
    </div>

    <p class="melino-map-hint">
      Scroll to zoom · drag to pan · click a pin for details · filter categories in the legend
    </p>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { MELINO_MAP } from '@/data/melinoMap.js'

const MIN_SCALE = 0.45
const MAX_SCALE = 2.75

const viewportRef = ref(null)
const innerRef = ref(null)
const pinPositions = ref({})
const scale = ref(1)
const panX = ref(0)
const panY = ref(0)
const searchQuery = ref('')
const selectedId = ref(null)
const activeGroups = ref(MELINO_MAP.groups.map((g) => g.id))

const isDragging = ref(false)
let dragPointerId = null
let dragStartX = 0
let dragStartY = 0
let panStartX = 0
let panStartY = 0
let pinRafId = 0
let resizeObserver = null

const iconByGroup = Object.fromEntries(MELINO_MAP.groups.map((g) => [g.id, g.iconUrl]))

const countByGroup = computed(() => {
  const counts = {}
  for (const m of MELINO_MAP.markers) {
    counts[m.groupId] = (counts[m.groupId] || 0) + 1
  }
  return counts
})

const visibleMarkers = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return MELINO_MAP.markers.filter((m) => {
    if (!activeGroups.value.includes(m.groupId)) return false
    if (!q) return true
    return (
      m.name.toLowerCase().includes(q) ||
      m.groupName.toLowerCase().includes(q) ||
      (m.description && m.description.toLowerCase().includes(q))
    )
  })
})

const selectedMarker = computed(() =>
  MELINO_MAP.markers.find((m) => m.id === selectedId.value) ?? null,
)

const panStyle = computed(() => ({
  transform: `translate(${panX.value}px, ${panY.value}px)`,
}))

const scaleStyle = computed(() => ({
  transform: `scale(${scale.value})`,
}))

function updatePinPositions() {
  const inner = innerRef.value
  const viewport = viewportRef.value
  if (!inner || !viewport) return

  const mapRect = inner.getBoundingClientRect()
  const viewRect = viewport.getBoundingClientRect()
  const next = {}

  for (const m of visibleMarkers.value) {
    next[m.id] = {
      left: mapRect.left - viewRect.left + (m.xPct / 100) * mapRect.width,
      top: mapRect.top - viewRect.top + (m.yPct / 100) * mapRect.height,
    }
  }

  pinPositions.value = next
}

function schedulePinUpdate() {
  if (pinRafId) return
  pinRafId = requestAnimationFrame(() => {
    pinRafId = 0
    updatePinPositions()
  })
}

function pinStyle(marker) {
  const pos = pinPositions.value[marker.id]
  if (!pos) {
    return { visibility: 'hidden', pointerEvents: 'none' }
  }
  return {
    left: `${pos.left}px`,
    top: `${pos.top}px`,
  }
}

function selectMarker(marker) {
  selectedId.value = marker.id
}

function clearSelection() {
  selectedId.value = null
}

function showAllGroups() {
  activeGroups.value = MELINO_MAP.groups.map((g) => g.id)
}

function hideAllGroups() {
  activeGroups.value = []
}

function clampScale(v) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, v))
}

function zoomIn() {
  scale.value = clampScale(scale.value * 1.2)
  schedulePinUpdate()
}

function zoomOut() {
  scale.value = clampScale(scale.value / 1.2)
  schedulePinUpdate()
}

function resetView() {
  scale.value = 1
  panX.value = 0
  panY.value = 0
  schedulePinUpdate()
}

function onWheel(event) {
  const delta = event.deltaY > 0 ? 0.9 : 1.1
  scale.value = clampScale(scale.value * delta)
  schedulePinUpdate()
}

function onPointerDown(event) {
  if (event.button !== 0) return
  if (event.target.closest('.melino-map-pin')) return
  isDragging.value = true
  dragPointerId = event.pointerId
  dragStartX = event.clientX
  dragStartY = event.clientY
  panStartX = panX.value
  panStartY = panY.value
  viewportRef.value?.setPointerCapture(event.pointerId)
}

function onPointerMove(event) {
  if (!isDragging.value || event.pointerId !== dragPointerId) return
  panX.value = panStartX + (event.clientX - dragStartX)
  panY.value = panStartY + (event.clientY - dragStartY)
  schedulePinUpdate()
}

function onPointerUp(event) {
  if (event.pointerId !== dragPointerId) return
  isDragging.value = false
  dragPointerId = null
  viewportRef.value?.releasePointerCapture(event.pointerId)
}

watch(visibleMarkers, (list) => {
  if (selectedId.value && !list.some((m) => m.id === selectedId.value)) {
    selectedId.value = null
  }
  schedulePinUpdate()
})

watch([scale, panX, panY], () => {
  schedulePinUpdate()
})

function onKeydown(event) {
  if (event.key === 'Escape') clearSelection()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  nextTick(() => {
    updatePinPositions()
    if (viewportRef.value) {
      resizeObserver = new ResizeObserver(() => schedulePinUpdate())
      resizeObserver.observe(viewportRef.value)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  resizeObserver?.disconnect()
  if (pinRafId) cancelAnimationFrame(pinRafId)
})
</script>

<style scoped>
.melino-map {
  margin-top: 1.25rem;
}

.melino-map-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.melino-map-search {
  flex: 1;
  min-width: min(100%, 220px);
  max-width: 320px;
}

.melino-map-search input {
  width: 100%;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  border: 2px solid color-mix(in srgb, var(--color-sage) 45%, transparent);
  font-family: var(--font-body);
  font-size: 0.92rem;
  background: var(--color-white);
}

.melino-map-search input:focus {
  outline: none;
  border-color: var(--color-sage);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-mint) 50%, transparent);
}

.melino-map-zoom {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.melino-map-zoom-btn {
  min-width: 2.5rem;
  padding: 0.4rem 0.65rem;
  font-family: var(--font-cartoon);
  font-weight: 800;
}

.melino-map-body {
  display: grid;
  gap: 1rem;
  align-items: stretch;
}

@media (max-width: 1023px) {
  .melino-map-legend {
    order: 3;
    max-height: none;
  }

  .melino-map-viewport {
    order: 1;
  }

  .melino-map-detail {
    order: 2;
  }
}

@media (min-width: 1024px) {
  .melino-map-body {
    grid-template-columns: 200px minmax(0, 1fr);
  }

  .melino-map-body:has(.melino-map-detail) {
    grid-template-columns: 200px minmax(0, 1fr) 240px;
  }
}

.melino-map-legend {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-mint) 18%, var(--color-cream));
  border: 2px solid color-mix(in srgb, var(--color-sage) 35%, transparent);
  max-height: 520px;
  overflow: auto;
}

.melino-map-legend-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
}

.melino-map-legend-head h3 {
  font-family: var(--font-cartoon);
  font-size: 0.95rem;
  margin: 0;
}

.melino-map-legend-actions {
  font-size: 0.78rem;
}

.melino-map-legend-link {
  background: none;
  border: none;
  padding: 0;
  font-weight: 700;
  color: var(--color-sage-dark);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.melino-map-legend-link:hover {
  color: var(--color-coral-deep);
}

.melino-map-legend-list {
  list-style: none;
  display: grid;
  gap: 0.35rem;
}

.melino-map-legend-item {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  cursor: pointer;
  line-height: 1.3;
}

.melino-map-legend-item input {
  flex-shrink: 0;
}

.melino-map-legend-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0;
}

.melino-map-legend-count {
  margin-left: auto;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-ink-muted);
}

.melino-map-legend-note {
  margin-top: 0.85rem;
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--color-ink-muted);
}

.melino-map-legend-note a {
  color: var(--color-sage-dark);
  font-weight: 600;
}

.melino-map-viewport {
  position: relative;
  height: min(70vh, 560px);
  min-height: 320px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 3px solid var(--color-sage);
  background: #1a2420;
  cursor: grab;
  touch-action: none;
  user-select: none;
}

.melino-map-viewport--dragging {
  cursor: grabbing;
}

.melino-map-stage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.melino-map-inner {
  position: relative;
  width: min(100%, 790px);
  transform-origin: center center;
  will-change: transform;
}

.melino-map-bg {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: top;
  pointer-events: none;
}

.melino-map-pins-layer {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
}

.melino-map-pin {
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  pointer-events: auto;
  transition:
    filter 0.15s ease,
    opacity 0.15s ease;
}

.melino-map-pin-icon {
  display: block;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  max-width: 28px;
  max-height: 28px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.45));
}

.melino-map-pin--active .melino-map-pin-icon {
  filter: drop-shadow(0 0 6px var(--color-lemon)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
}

.melino-map-pin--dim {
  opacity: 0.45;
}

.melino-map-detail {
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: var(--color-white);
  border: 2px solid color-mix(in srgb, var(--color-coral) 40%, transparent);
  box-shadow: var(--shadow-card);
  position: relative;
}

@media (max-width: 1023px) {
  .melino-map-detail {
    grid-column: 1 / -1;
  }
}

.melino-map-detail-close {
  position: absolute;
  top: 0.5rem;
  right: 0.55rem;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  background: var(--color-cream);
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  color: var(--color-ink-muted);
}

.melino-map-detail-close:hover {
  background: var(--color-peach);
  color: var(--color-ink);
}

.melino-map-detail-type {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-sage-dark);
  margin-bottom: 0.25rem;
}

.melino-map-detail h3 {
  font-family: var(--font-cartoon);
  font-size: 1.1rem;
  margin: 0 1.5rem 0.5rem 0;
  line-height: 1.25;
}

.melino-map-detail-desc {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-ink-muted);
}

.melino-map-detail-desc--muted {
  font-style: italic;
}

.melino-map-detail-ref {
  margin-top: 0.65rem;
  font-size: 0.82rem;
  color: var(--color-ink-muted);
}

.melino-map-hint {
  margin-top: 0.65rem;
  font-size: 0.8rem;
  color: var(--color-ink-muted);
  text-align: center;
}
</style>
