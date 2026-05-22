<template>
  <SimulatorLayout
    title="Paramaker color studio"
    lead="Tap a body zone, pick a color, and watch your Parafolk preview update. Copy hex codes into Paramaker’s color wheel — this does not edit your save file."
    accent="palette"
  >
    <section class="sim-console" aria-labelledby="palette-console-title">
      <header class="sim-console-head">
        <div>
          <h2 id="palette-console-title">Paint your Parafolk</h2>
          <p>
            Official Paramaker supports a color wheel and hex entry (public streams). Plan skin, hair,
            and outfit colors here first.
          </p>
        </div>
        <button type="button" class="sim-btn sim-btn--primary" @click="copyText(paletteSummary)">
          {{ copied ? 'Copied!' : 'Copy palette' }}
        </button>
      </header>

      <div class="sim-console-body">
        <div class="sim-palette-layout">
          <ParaColorFigure
            :colors="figureColors"
            :active-zone="activeSlot"
            @select-zone="activeSlot = $event"
          />

          <div>
            <ul class="sim-palette-slots">
              <li
                v-for="slot in paletteSlots"
                :key="slot.id"
                class="sim-palette-slot"
                :class="{ 'is-active': activeSlot === slot.id }"
                @click="activeSlot = slot.id"
              >
                <label :for="`color-${slot.id}`">{{ slot.label }}</label>
                <div class="sim-palette-input-row">
                  <input
                    :id="`color-${slot.id}`"
                    v-model="palette[slot.id]"
                    type="color"
                    class="sim-palette-picker"
                    @focus="activeSlot = slot.id"
                  />
                  <input
                    v-model="palette[slot.id]"
                    type="text"
                    class="sim-palette-hex"
                    maxlength="7"
                    spellcheck="false"
                    :aria-label="`${slot.label} hex`"
                    @blur="normalizeHex(slot.id)"
                    @focus="activeSlot = slot.id"
                  />
                </div>
              </li>
            </ul>

            <div class="sim-output">
              <h3>Palette card</h3>
              <pre>{{ paletteSummary }}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sim-seo" aria-labelledby="sim-seo-palette">
      <h2 id="sim-seo-palette">About the Paramaker color studio</h2>
      <p>
        The <strong>Paramaker color studio</strong> is a visual planner for Parafolk colors. Click a
        body zone on the preview figure — skin, hair, hair tips, top, bottom, or shoes — then pick a
        color or type a <strong>hex code</strong>. Copy the palette card into Paramaker’s color wheel
        when you create characters on Steam Early Access.
      </p>

      <h3>How to use the color studio</h3>
      <ol>
        <li>Click a zone on the Parafolk preview or select a slot in the list on the right.</li>
        <li>
          Use the color picker or edit the hex field (for example <code>#e8b796</code> for skin).
        </li>
        <li>
          Press <strong>Copy palette</strong> to copy all zone codes at once for your build notes.
        </li>
        <li>
          In Paramaker, enter the same hex values on the official color wheel — this tool does not
          export CC or save files.
        </li>
      </ol>

      <h3>Why plan colors here first?</h3>
      <p>
        Paramaker offers deep color control on outfits and body details. Planning a cohesive palette
        before you load the game saves time when you are making multiple Parafolks or matching a
        household theme. For genetics and body shape, see
        <RouterLink to="/wiki/parafolks">Parafolks &amp; Genetics</RouterLink>.
      </p>
    </section>
  </SimulatorLayout>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SimulatorLayout from '../../components/simulator/SimulatorLayout.vue'
import ParaColorFigure from '../../components/simulator/ParaColorFigure.vue'
import { useSimulatorCopy } from '../../composables/useSimulatorCopy.js'

const paletteSlots = [
  { id: 'skin', label: 'Skin tone' },
  { id: 'hair', label: 'Hair' },
  { id: 'hairTip', label: 'Hair tips' },
  { id: 'top', label: 'Top / jacket' },
  { id: 'bottom', label: 'Pants / skirt' },
  { id: 'shoes', label: 'Shoes' },
]

const palette = reactive({
  skin: '#e8b796',
  hair: '#5c3a24',
  hairTip: '#7a4e32',
  top: '#6b9b7b',
  bottom: '#4a6d8c',
  shoes: '#3d4a42',
})

const activeSlot = ref('skin')
const { copied, copyText } = useSimulatorCopy()

const figureColors = computed(() => ({
  skin: palette.skin,
  hair: palette.hair,
  hairTip: palette.hairTip,
  top: palette.top,
  bottom: palette.bottom,
  shoes: palette.shoes,
}))

function normalizeHex(id) {
  let v = palette[id].trim()
  if (!v.startsWith('#')) v = `#${v}`
  if (/^#[0-9A-Fa-f]{6}$/.test(v)) palette[id] = v.toLowerCase()
}

const paletteSummary = computed(() => {
  const lines = ['Paramaker color plan (hex):']
  for (const slot of paletteSlots) {
    lines.push(`${slot.label}: ${palette[slot.id]}`)
  }
  lines.push('Enter these in the in-game color wheel / hex box.')
  return lines.join('\n')
})
</script>
