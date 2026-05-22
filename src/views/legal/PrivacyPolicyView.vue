<template>
  <LegalPageLayout
    title="Privacy Policy"
    lead="How Paralives Hub collects, uses, and protects information when you browse our wiki, guides, mods, and tools."
    last-updated="2026-05-19"
  >
    <p>
      This Privacy Policy explains what data we may process when you visit Paralives Hub (the
      “Site”) and how we handle it. By using the Site, you agree to the practices described below.
    </p>

    <h2>Information We Collect</h2>
    <p>
      Paralives Hub is primarily an informational website. We do not require an account to read
      articles, use the Simulator, or browse the wiki. We may automatically receive standard
      technical data from your browser or device, such as:
    </p>
    <ul>
      <li>IP address (often truncated or anonymized by analytics providers)</li>
      <li>Browser type, language, and general device information</li>
      <li>Pages visited, referral URL, and approximate visit time</li>
      <li>Cookie or local storage identifiers, if you accept optional cookies</li>
    </ul>
    <p>
      If you contact us by email, we receive the information you choose to send (name, email address,
      message content).
    </p>

    <h2>How We Use Information</h2>
    <p>We use collected information to:</p>
    <ul>
      <li>Operate, secure, and improve the Site and its content</li>
      <li>Understand aggregate traffic patterns and fix errors</li>
      <li>Respond to support or legal requests you send us</li>
      <li>Comply with applicable laws and enforce our Terms of Service</li>
    </ul>
    <p>We do not sell your personal information to third parties.</p>

    <h2>Cookies and Similar Technologies</h2>
    <p>
      The Site may use essential cookies needed for basic functionality. Optional analytics or
      preference cookies, if enabled, help us measure performance. You can control cookies through
      your browser settings; disabling cookies may affect some features.
    </p>

    <h2>Third-Party Services</h2>
    <p>
      Our pages may link to external services (for example Steam, Discord, or Patreon). Those
      sites have their own privacy policies. Embedded content or analytics tools operated by third
      parties may collect data under their terms—we encourage you to review their policies before
      interacting with them.
    </p>

    <h2>Data Retention</h2>
    <p>
      Server logs and analytics records are kept only as long as needed for security, troubleshooting,
      and reporting, then deleted or aggregated.
    </p>

    <h2>Your Rights</h2>
    <p>
      Depending on your location, you may have rights to access, correct, delete, or restrict certain
      processing of personal data. To exercise these rights, contact us via the
      <RouterLink to="/legal/contact-us">Contact Us</RouterLink> page.
    </p>

    <h2>Children</h2>
    <p>
      The Site is not directed at children under 13. We do not knowingly collect personal information
      from children. If you believe a child has provided us data, please contact us so we can remove it.
    </p>

    <h2>Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. The “Last updated” date at the top reflects
      the current version. Continued use of the Site after changes means you accept the revised policy.
    </p>

    <h2>Contact</h2>
    <p>
      Questions about privacy? Visit <RouterLink to="/legal/contact-us">Contact Us</RouterLink> or email
      <a href="mailto:paralives@wyong.com">paralives@wyong.com</a>.
    </p>
  </LegalPageLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LegalPageLayout from '@/components/legal/LegalPageLayout.vue'
</script>
