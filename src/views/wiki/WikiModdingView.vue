<template>
  <WikiCategoryShell
    title="Paralives Modding"
    lead="Day-one mod tools, Steam Workshop, and free updates instead of paid DLC — how players extend Paralives."
  >
    <div class="wiki-prose">
      <h2>Official mod support</h2>
      <p>
        Paralives ships with tools to add and edit content inside the game client — listed on the official
        day-one Live Mode feature sheet. Exact workflows will mature during Early Access, but the intent is a
        mod-friendly sim similar to other community-driven life games.
      </p>

      <h2>Steam Workshop</h2>
      <p>
        Workshop browsing is targeted for Early Access. Expect furniture packs, trait tweaks, animations, build
        objects, and personality additions. Our <RouterLink to="/mods">mods hub</RouterLink> collects community
        listings when creators share links — always read compatibility notes after patches.
      </p>

      <h2>What modders can change</h2>
      <p>Public developer chats confirm moddable gameplay layers including:</p>
      <ul>
        <li>Vibes, talents, and social perks</li>
        <li>Emotions, needs, and skills (skills must fit an existing Knowledge type)</li>
        <li>Genetics rules — hairstyles can declare hair texture for inheritance</li>
        <li>New accessories can introduce genetic traits (custom ears, etc.)</li>
        <li>Build objects and partial lot sharing</li>
      </ul>

      <h2>Custom traits and saves</h2>
      <p>
        Trait packs, animation overrides, and UI tweaks are popular categories. After each official update, verify
        mod versions before loading long saves — broken traits can stall wants or careers until removed.
      </p>

      <h2>Sharing Parafolks</h2>
      <p>
        Workshop exports embed genetics data. Downloaded characters bring inheritable visuals — useful for legacy
        challenges and storytelling collabs. Personality picks still belong to the player when you adopt a premade
        Para into your household.
      </p>

      <h2>No paid DLC model</h2>
      <p>
        The studio has communicated a no paid DLC approach for major content — growth is meant to come through free
        updates across the ~two-year Early Access path to 1.0, plus community mods.
      </p>

      <div class="wiki-callout">
        Pair mod plans with the <RouterLink to="/updates">Early Access roadmap</RouterLink> so you know which
        vanilla systems exist before you depend on a custom replacement.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
