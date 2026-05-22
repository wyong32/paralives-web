<template>
  <figure class="para-figure" aria-label="Parafolk color preview">
    <svg
      class="para-figure-svg"
      viewBox="0 0 200 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="para-fig-title"
    >
      <title id="para-fig-title">Stylized Parafolk preview — click a zone to edit colors</title>

      <defs>
        <filter id="para-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" flood-opacity="0.14" />
        </filter>
      </defs>

      <!-- ground shadow -->
      <ellipse cx="100" cy="346" rx="46" ry="9" fill="rgba(42,56,50,0.11)" />

      <!-- ── Shoes (chunky rounded sneakers) ── -->
      <g
        class="para-zone"
        :class="{ 'is-active': activeZone === 'shoes' }"
        tabindex="0"
        role="button"
        :aria-label="`Shoes, ${colors.shoes}`"
        @click="emitZone('shoes')"
        @keydown.enter="emitZone('shoes')"
      >
        <path
          d="M 62 302
             C 54 302, 48 308, 46 316
             C 44 326, 50 334, 62 336
             L 82 336
             C 90 336, 94 332, 94 324
             L 94 306
             C 94 300, 90 296, 84 296
             L 70 296
             C 66 296, 63 298, 62 302 Z"
          :fill="colors.shoes"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M 106 296
             C 100 296, 96 300, 96 306
             L 96 324
             C 96 332, 100 336, 108 336
             L 138 336
             C 150 334, 156 326, 154 316
             C 152 308, 146 302, 138 302
             C 134 298, 128 296, 122 296
             Z"
          :fill="colors.shoes"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <!-- soles -->
        <path
          d="M 48 328 Q 66 334 84 328 M 100 328 Q 120 334 148 328"
          fill="none"
          stroke="#2a3832"
          stroke-width="1.5"
          stroke-linecap="round"
          opacity="0.45"
          pointer-events="none"
        />
      </g>

      <!-- ── Legs / pants ── -->
      <g
        class="para-zone"
        :class="{ 'is-active': activeZone === 'bottom' }"
        tabindex="0"
        role="button"
        :aria-label="`Bottom clothing, ${colors.bottom}`"
        @click="emitZone('bottom')"
        @keydown.enter="emitZone('bottom')"
      >
        <path
          d="M 78 198
             L 72 292
             C 71 296, 74 298, 78 298
             L 92 298
             L 94 248
             L 106 248
             L 108 298
             L 122 298
             C 126 298, 129 296, 128 292
             L 122 198
             Z"
          :fill="colors.bottom"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <!-- waist band hint -->
        <path
          d="M 78 198 L 122 198"
          stroke="#2a3832"
          stroke-width="1.5"
          opacity="0.2"
          pointer-events="none"
        />
      </g>

      <!-- ── Torso / top ── -->
      <g
        class="para-zone"
        :class="{ 'is-active': activeZone === 'top' }"
        tabindex="0"
        role="button"
        :aria-label="`Top clothing, ${colors.top}`"
        @click="emitZone('top')"
        @keydown.enter="emitZone('top')"
      >
        <path
          d="M 68 128
             Q 100 118, 132 128
             L 128 200
             Q 100 208, 72 200
             Z"
          :fill="colors.top"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <!-- collar -->
        <path
          d="M 88 128 Q 100 136, 112 128"
          fill="none"
          stroke="#2a3832"
          stroke-width="1.5"
          opacity="0.25"
          pointer-events="none"
        />
      </g>

      <!-- ── Arms (skin) ── -->
      <path
        d="M 66 132
           C 48 142, 42 158, 44 178
           C 46 188, 52 192, 58 188
           L 64 168
           C 60 152, 62 140, 66 132 Z
           M 134 132
           C 152 142, 158 158, 156 178
           C 154 188, 148 192, 142 188
           L 136 168
           C 140 152, 138 140, 134 132 Z"
        :fill="colors.skin"
        stroke="#2a3832"
        stroke-width="2"
        stroke-linejoin="round"
        pointer-events="none"
      />

      <!-- ── Hair back (behind head) ── -->
      <g
        class="para-zone"
        :class="{ 'is-active': activeZone === 'hair' }"
        tabindex="0"
        role="button"
        :aria-label="`Hair, ${colors.hair}`"
        @click="emitZone('hair')"
        @keydown.enter="emitZone('hair')"
      >
        <path
          d="M 54 62
             C 48 38, 68 18, 100 16
             C 132 18, 152 38, 146 62
             C 150 78, 148 92, 142 100
             C 138 88, 128 82, 100 84
             C 72 82, 62 88, 58 100
             C 52 92, 50 78, 54 62 Z"
          :fill="colors.hair"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </g>

      <!-- ── Head + neck (skin) ── -->
      <g
        class="para-zone"
        :class="{ 'is-active': activeZone === 'skin' }"
        tabindex="0"
        role="button"
        :aria-label="`Skin tone, ${colors.skin}`"
        @click="emitZone('skin')"
        @keydown.enter="emitZone('skin')"
      >
        <!-- neck -->
        <path
          d="M 90 108
             L 88 126
             Q 100 132, 112 126
             L 110 108
             Z"
          :fill="colors.skin"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <!-- head -->
        <path
          d="M 100 34
             C 72 34, 56 52, 56 76
             C 56 96, 68 112, 84 116
             Q 100 120, 116 116
             C 132 112, 144 96, 144 76
             C 144 52, 128 34, 100 34 Z"
          :fill="colors.skin"
          stroke="#2a3832"
          stroke-width="2.5"
          stroke-linejoin="round"
        />
        <!-- ears -->
        <ellipse cx="54" cy="78" rx="7" ry="9" :fill="colors.skin" stroke="#2a3832" stroke-width="2" />
        <ellipse cx="146" cy="78" rx="7" ry="9" :fill="colors.skin" stroke="#2a3832" stroke-width="2" />
      </g>

      <!-- ── Hair front / bangs (tips) ── -->
      <g
        class="para-zone"
        :class="{ 'is-active': activeZone === 'hairTip' }"
        tabindex="0"
        role="button"
        :aria-label="`Hair tips, ${colors.hairTip}`"
        @click="emitZone('hairTip')"
        @keydown.enter="emitZone('hairTip')"
      >
        <path
          d="M 62 48
             Q 78 36, 100 38
             Q 122 36, 138 48
             Q 132 58, 100 62
             Q 68 58, 62 48 Z"
          :fill="colors.hairTip"
          stroke="#2a3832"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <!-- side strands -->
        <path
          d="M 58 68 Q 64 82, 70 90 M 142 68 Q 136 82, 130 90"
          fill="none"
          stroke="#2a3832"
          stroke-width="1.5"
          stroke-linecap="round"
          opacity="0.35"
          pointer-events="none"
        />
      </g>

      <!-- face (non-interactive) -->
      <g pointer-events="none" aria-hidden="true">
        <!-- eyes -->
        <ellipse cx="84" cy="76" rx="5.5" ry="7" fill="#fffefc" stroke="#2a3832" stroke-width="1.8" />
        <ellipse cx="116" cy="76" rx="5.5" ry="7" fill="#fffefc" stroke="#2a3832" stroke-width="1.8" />
        <circle cx="85" cy="77" r="3" fill="#2a3832" />
        <circle cx="117" cy="77" r="3" fill="#2a3832" />
        <circle cx="86.5" cy="75.5" r="1" fill="#fff" opacity="0.9" />
        <circle cx="118.5" cy="75.5" r="1" fill="#fff" opacity="0.9" />
        <!-- brows -->
        <path
          d="M 76 66 Q 84 62, 92 66"
          fill="none"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M 108 66 Q 116 62, 124 66"
          fill="none"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linecap="round"
        />
        <!-- nose -->
        <ellipse cx="100" cy="86" rx="2" ry="1.5" fill="rgba(42,56,50,0.2)" />
        <!-- mouth -->
        <path
          d="M 92 94 Q 100 100, 108 94"
          fill="none"
          stroke="#2a3832"
          stroke-width="2"
          stroke-linecap="round"
        />
        <!-- blush -->
        <ellipse cx="72" cy="88" rx="6" ry="3.5" fill="rgba(255,140,120,0.22)" />
        <ellipse cx="128" cy="88" rx="6" ry="3.5" fill="rgba(255,140,120,0.22)" />
      </g>

      <!-- hands (skin caps on arms) -->
      <g pointer-events="none" aria-hidden="true">
        <circle cx="46" cy="186" r="9" :fill="colors.skin" stroke="#2a3832" stroke-width="2" />
        <circle cx="154" cy="186" r="9" :fill="colors.skin" stroke="#2a3832" stroke-width="2" />
      </g>
    </svg>

    <figcaption class="para-figure-caption">
      Click a body zone to edit · fan preview, not in-game graphics
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  colors: {
    type: Object,
    required: true,
  },
  activeZone: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select-zone'])

function emitZone(zone) {
  emit('select-zone', zone)
}
</script>

<style scoped>
.para-figure {
  margin: 0;
  text-align: center;
}

.para-figure-svg {
  width: min(100%, 260px);
  height: auto;
  display: block;
  margin: 0 auto;
  filter: drop-shadow(0 12px 22px rgba(42, 56, 50, 0.12));
}

.para-zone {
  cursor: pointer;
  transition: filter 0.15s ease;
}

.para-zone:hover,
.para-zone:focus-visible,
.para-zone.is-active {
  filter: brightness(1.06) drop-shadow(0 0 8px rgba(107, 155, 123, 0.45));
  outline: none;
}

.para-figure-caption {
  margin-top: 0.65rem;
  font-size: 0.78rem;
  color: var(--color-ink-muted);
  font-style: italic;
  max-width: 16rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
