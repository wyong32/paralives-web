<template>
  <LegalPageLayout
    title="Contact Us"
    lead="Reach the Paralives Hub team for corrections, copyright notices, partnerships, or general questions."
    last-updated="2026-05-19"
  >
    <p>
      We read messages regularly and aim to respond within a few business days. Email us at
      <a href="mailto:paralives@wyong.com">paralives@wyong.com</a> and include a clear subject line
      for your topic.
    </p>

    <h2>General Inquiries</h2>
    <p>
      Questions about wiki articles, guides, the Simulator, or site features — use subject
      <strong>General</strong> when writing to
      <a href="mailto:paralives@wyong.com?subject=General">paralives@wyong.com</a>.
    </p>

    <h2>Content Corrections</h2>
    <p>
      Spotted a wrong stat, outdated Early Access date, or broken link? Email
      <a href="mailto:paralives@wyong.com?subject=Corrections">paralives@wyong.com</a> with subject
      <strong>Corrections</strong>, the page URL, and what should change. Screenshots from the
      current game build help us verify fixes faster.
    </p>

    <h2>Copyright and Mod Listings</h2>
    <p>
      For DMCA notices, mod takedown requests, or attribution updates, contact
      <a href="mailto:paralives@wyong.com?subject=Legal">paralives@wyong.com</a> with subject
      <strong>Legal</strong>. See our
      <RouterLink to="/legal/copyright">Copyright</RouterLink> page for required notice details.
    </p>

    <h2>Business and Press</h2>
    <p>
      Partnership or press inquiries:
      <a href="mailto:paralives@wyong.com?subject=Press">paralives@wyong.com</a> with subject
      <strong>Press</strong>.
    </p>

    <h2>What We Cannot Help With</h2>
    <ul>
      <li>Steam refunds, account access, or game bugs — contact Steam or Paralives Studio support</li>
      <li>Installing mods on your PC — follow creator instructions and Workshop pages</li>
      <li>Recovering lost saves — use in-game or platform backup tools</li>
    </ul>

    <h2>Mailing Information</h2>
    <p>
      Paralives Hub is an online-only publication. If postal contact is required for legal service,
      email <a href="mailto:paralives@wyong.com?subject=Legal">paralives@wyong.com</a> with subject
      <strong>Legal</strong> to request current processing details.
    </p>

    <p>
      Thank you for helping us improve Paralives Hub for players worldwide.
    </p>
  </LegalPageLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LegalPageLayout from '@/components/legal/LegalPageLayout.vue'
</script>
