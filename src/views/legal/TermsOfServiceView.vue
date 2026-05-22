<template>
  <LegalPageLayout
    title="Terms of Service"
    lead="Rules for using Paralives Hub, our wiki, guides, mods listings, Simulator tools, and related content."
    last-updated="2026-05-19"
  >
    <p>
      Welcome to Paralives Hub. These Terms of Service (“Terms”) govern your access to and use of
      this website. If you do not agree, please do not use the Site.
    </p>

    <h2>About the Site</h2>
    <p>
      Paralives Hub provides Paralives game guides, wiki articles, mods information, development
      updates, maps, and planning tools for players. Game names, logos, and assets may be trademarks
      of their respective owners. We are an independent resource site focused on helping players
      learn and enjoy Paralives.
    </p>

    <h2>Acceptable Use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use the Site for unlawful, harmful, or fraudulent purposes</li>
      <li>Attempt to disrupt servers, scrape at abusive rates, or bypass security</li>
      <li>Post or transmit malware, spam, or misleading content through any form we provide</li>
      <li>Misrepresent affiliation with Paralives Studio, Steam, or other rights holders</li>
      <li>Copy large portions of the Site for republication without permission, except as allowed by law</li>
    </ul>

    <h2>Content and Accuracy</h2>
    <p>
      We work to keep guides and wiki pages accurate and useful, especially around Early Access
      updates. Game mechanics, dates, and prices can change. Content is provided for general
      information only—not professional, legal, or purchase advice. Verify important details on
      official storefronts and patch notes before making decisions.
    </p>

    <h2>Mods and External Links</h2>
    <p>
      Mod listings and download links may point to third-party sites or Steam Workshop. We do not
      guarantee mod safety, compatibility, or licensing. Install community content at your own risk
      and follow creator instructions.
    </p>

    <h2>Simulator Tools</h2>
    <p>
      Paralives Simulator features are planning aids only. They do not connect to the game, import
      saves, or guarantee in-game outcomes. Use them as a supplement to official Paramaker and
      Build Mode tools.
    </p>

    <h2>Intellectual Property</h2>
    <p>
      Original text, layout, and branding on Paralives Hub are protected by applicable copyright
      laws. See our <RouterLink to="/legal/copyright">Copyright</RouterLink> page for more detail.
      Other trademarks belong to their owners.
    </p>

    <h2>Disclaimer of Warranties</h2>
    <p>
      THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
    </p>

    <h2>Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, Paralives Hub and its operators shall not be liable for
      indirect, incidental, special, or consequential damages arising from your use of the Site or
      reliance on its content.
    </p>

    <h2>Changes</h2>
    <p>
      We may modify these Terms at any time. Material changes will be reflected by updating the date
      above. Your continued use constitutes acceptance of the revised Terms.
    </p>

    <h2>Contact</h2>
    <p>
      For questions about these Terms, use our <RouterLink to="/legal/contact-us">Contact Us</RouterLink>
      page.
    </p>
  </LegalPageLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LegalPageLayout from '@/components/legal/LegalPageLayout.vue'
</script>
