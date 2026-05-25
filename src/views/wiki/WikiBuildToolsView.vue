<template>
  <WikiCategoryShell
    title="Paralives Build Mode Tools"
    lead="Paint anything, curve walls, split levels, sculpt terrain — on lots you own, paid for with household money."
  >
    <div class="wiki-prose">
      <h2>Where building happens</h2>
      <p>
        Build Mode is lot work inside Live Mode: walls, rooms, furniture, yard sculpting. You are not editing all of
        Melino at once — whole-town tools are planned later. Everything costs household funds except your time and
        creativity.
      </p>

      <h2>Finding stuff in the catalog</h2>
      <p>
        Four browse tabs plus search: <strong>Structures</strong> (shell pieces), <strong>Customization</strong>
        (paints and surfaces), <strong>Rooms</strong> (themed packs like kitchen or nursery), <strong>Furniture</strong>
        (chairs, beds, clutter), and <strong>Terrain</strong> (trees, rocks, outdoor props). Items can show in multiple
        submenus so searching is worth it on big catalogs.
      </p>

      <h2>Color and sizing</h2>
      <p>
        Swatches are defaults, not limits — the color wheel hits objects, walls, floors, and ceilings. Resize tables,
        couches, counters, beds, and plenty of clutter. Doors stay one size for technical reasons, but
        <strong>wall height</strong> can move. Flip counter handles or toilet paper for left-handed setups. The
        advanced placement tool stacks, rotates, and lifts most pieces off the ground.
      </p>
      <p>
        If you obsess over palettes, test hex ideas in our
        <RouterLink to="/simulator/color-palette">Color Studio</RouterLink> before spending paradimes on paint in-game.
      </p>

      <h2>Grid-free walls and floors</h2>
      <p>
        Walls, half-walls, and fences can be any length and angle. Turn snapping on when you want speed; dial the grid
        when you want help on odd angles. Second floors can snap to walls below, and you can duplicate a whole floor
        instead of tracing it again — huge time saver on rectangular houses.
      </p>

      <h2>Curves and split levels</h2>
      <p>
        Curved walls have been a headline feature since 2019 videos. At EA launch you still cannot put doors or windows
        on curves — that is queued for later EA. Split-level platforms let sunken living rooms or raised entries; stairs
        stretch when the step is too tall for a casual step-up.
      </p>

      <h2>Yard sculpting</h2>
      <p>
        Raise, lower, or flatten terrain on the lot for hills and yards. Pools, lakes, and ponds are on the later list
        if you are planning a beach house on day one.
      </p>
    </div>

    <h2 class="wiki-section-heading">Launch vs later EA</h2>
    <div class="wiki-phase-grid">
      <section class="wiki-phase-card wiki-phase-card--day">
        <h2><span class="wiki-badge wiki-badge--day">Launch</span> In your toolbox May 25</h2>
        <ul>
          <li>Color wheel on surfaces and objects</li>
          <li>Straight and curved walls, optional grid</li>
          <li>Split levels, multi-floor shells, duplicate floor</li>
          <li>Stairs, roofs, fences, move wall, resize</li>
          <li>Terrain raise / lower / flatten</li>
          <li>Snapping, alignment helpers, catalog search</li>
        </ul>
      </section>
      <section class="wiki-phase-card wiki-phase-card--ea">
        <h2><span class="wiki-badge wiki-badge--ea">Later EA</span> On the roadmap</h2>
        <ul>
          <li>Pools, lakes, ponds</li>
          <li>Basements</li>
          <li>Doors and windows on curved walls</li>
          <li>Fancier roofs and stair customization</li>
          <li>Editing Melino itself as a world</li>
          <li>Sharing full lots on Workshop (partial sharing first)</li>
        </ul>
      </section>
    </div>

    <div class="wiki-callout">
      Build objects are Workshop-friendly. After patches, verify furniture mods before loading old saves. Timing for
      world tools lives on our <RouterLink to="/updates">updates</RouterLink> page and
      <RouterLink to="/wiki/modding">modding</RouterLink> notes.
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
