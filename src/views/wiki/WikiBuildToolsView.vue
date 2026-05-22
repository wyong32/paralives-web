<template>
  <WikiCategoryShell
    title="Paralives Build Mode Tools"
    lead="Grid-free walls, split levels, color on every surface, and terrain editing at Early Access launch."
  >
    <div class="wiki-prose">
      <h2>What Build Mode covers</h2>
      <p>
        Build Mode lets you place and customize structures and decor on lots you own in Live Mode. World editing
        for the whole town is a separate planned feature — at launch you focus on household lots. Everything costs
        household funds except creative freedom on placement.
      </p>

      <h2>Object customization</h2>
      <p>
        Catalog items ship with preset swatches, but the color wheel can repaint most objects, walls, floors, and
        ceilings. Many pieces resize (tables, couches, counters, beds, clutter). Doors stay fixed size for
        technical reasons. Wall height can change. Handles on counters and even toilet paper can flip for
        left/right realism. The advanced placement tool stacks, rotates, and elevates most items.
      </p>
      <p>
        Plan palettes with our <RouterLink to="/simulator/color-palette">Paramaker Color Studio</RouterLink>
        before you spend in-game money on paint.
      </p>

      <h2>Grid-free building</h2>
      <p>
        Walls, half-walls, and fences can sit at any angle or length. Optional snapping and adjustable grids help
        when you want speed over freeform curves. Upper floors can snap to walls below; you can duplicate an entire
        floor instead of redrawing it.
      </p>

      <h2>Curved walls and split levels</h2>
      <p>
        Curved walls are a headline feature from early previews. At Early Access launch, doors and windows cannot
        sit on curves yet — that support is on the during-EA roadmap. Split-level platforms raise or lower floor
        sections for sunken living rooms or split entries; stairs stretch to fit taller steps.
      </p>

      <h2>Terrain</h2>
      <p>
        Terrain tools raise, lower, or flatten ground on the lot — useful for hills, yards, and outdoor decor
        before advanced water features arrive.
      </p>
    </div>

    <h2 class="wiki-section-heading">Day one vs during Early Access</h2>
    <div class="wiki-phase-grid">
      <section class="wiki-phase-card wiki-phase-card--day">
        <h2><span class="wiki-badge wiki-badge--day">Day one</span> Build at launch</h2>
        <ul>
          <li>Color wheel on objects, walls, floors, ceilings</li>
          <li>Curved and straight walls with optional grid</li>
          <li>Split-level platforms and multi-floor shells</li>
          <li>Stairs, roofs, fences, move wall, resize objects</li>
          <li>Terrain raise / lower / flatten</li>
        </ul>
      </section>
      <section class="wiki-phase-card wiki-phase-card--ea">
        <h2><span class="wiki-badge wiki-badge--ea">During EA</span> Planned later</h2>
        <ul>
          <li>Pools, lakes, and pond tools</li>
          <li>Basements</li>
          <li>Doors and windows on curved walls</li>
          <li>Advanced roof and stair customization</li>
          <li>Workshop building sharing (full lot export still limited)</li>
        </ul>
      </section>
    </div>

    <div class="wiki-callout">
      Build objects and lots can be modded through Workshop. See
      <RouterLink to="/wiki/modding">modding</RouterLink> and the official
      <RouterLink to="/updates">roadmap</RouterLink> for timing.
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
