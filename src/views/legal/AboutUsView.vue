<template>
  <LegalPageLayout
    title="About Us"
    lead="What Paralives Hub is, what we offer players, and how we build our wiki, guides, and tools."
    last-updated="2026-05-19"
  >
    <p>
      Paralives Hub is a dedicated Paralives resource for players who want clear answers before and
      during Early Access on Steam.
    </p>

    <h2>Our Mission</h2>
    <p>
      Life sims are deep systems games. We organize talents, vibes, emotions, careers, build tools,
      and town features into readable guides so you spend less time searching forums and more time
      playing. Our goal is to be the most practical Paralives companion site on the web.
    </p>

    <h2>What You Will Find Here</h2>
    <ul>
      <li><strong>Paralives Wiki</strong> — eleven topic pages with tables, icons, and day-one vs during-EA notes</li>
      <li><strong>Guides</strong> — step-by-step walkthroughs for new players and mode-specific tips</li>
      <li><strong>Mods</strong> — curated community packs with install notes and Workshop links</li>
      <li><strong>Updates</strong> — release roadmap and feature progress aligned with public development news</li>
      <li><strong>Town Map</strong> — venue guide for the open-world town at Early Access launch</li>
      <li><strong>Paralives Simulator</strong> — feature filter, trait planner, color studio, and session roll tools</li>
      <li><strong>Start Guide</strong> — how to play, first-hour checklist, and system requirements</li>
    </ul>

    <h2>How We Work</h2>
    <p>
      Our editors track official announcements, Steam store details, and playtest reports. When Early
      Access goes live, we update wiki pages and guides based on what players actually see in-game.
      We label uncertain or in-development features clearly so you can plan saves with confidence.
    </p>

    <h2>Independence</h2>
    <p>
      Paralives Hub is operated independently. We are not the game developer or the Steam storefront.
      For purchases, legal terms, and official support, use paralives.com and Steam directly. We
      summarize game information to help the community—not to replace official channels.
    </p>

    <h2>Community</h2>
    <p>
      We welcome feedback on errors, missing topics, and guide ideas through our
      <RouterLink to="/legal/contact-us">Contact Us</RouterLink> page. Quality and clarity come first.
    </p>

    <h2>Related Pages</h2>
    <p>
      Read our <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink> and
      <RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink> for site rules and data
      practices.
    </p>
  </LegalPageLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LegalPageLayout from '@/components/legal/LegalPageLayout.vue'
</script>
