<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-head">
            <img
              class="logo-img"
              src="/images/logo.webp"
              alt="Paralives Wiki logo"
            />
            <span class="footer-brand-name">Paralives Wiki</span>
          </div>
          <p class="footer-brand-desc">
            The Paralives Wiki — in-depth game reference, player guides, mod notes, EA roadmap summaries,
            town map utilities, and Simulator tools for planning saves while patches roll out.
          </p>
        </div>

        <nav class="footer-col" aria-labelledby="footer-nav-heading">
          <h2 id="footer-nav-heading" class="footer-col-title">Navigate</h2>
          <ul class="footer-col-list">
            <li>
              <a href="/" :class="{ 'router-link-active': footerLinkActive('/') }">Home</a>
            </li>
            <li>
              <a href="/wiki" :class="{ 'router-link-active': footerLinkActive('/wiki') }">
                Wiki / Database
              </a>
            </li>
            <li>
              <a href="/start" :class="{ 'router-link-active': footerLinkActive('/start') }">
                Start Here
              </a>
            </li>
            <li>
              <a href="/guides" :class="{ 'router-link-active': footerLinkActive('/guides') }">
                Guides
              </a>
            </li>
            <li>
              <a href="/mods" :class="{ 'router-link-active': footerLinkActive('/mods') }">Mods</a>
            </li>
            <li>
              <a href="/updates" :class="{ 'router-link-active': footerLinkActive('/updates') }">
                Updates
              </a>
            </li>
            <li>
              <a href="/simulator" :class="{ 'router-link-active': footerLinkActive('/simulator') }">
                Simulator
              </a>
            </li>
            <li>
              <a href="/map" :class="{ 'router-link-active': footerLinkActive('/map') }">Town Map</a>
            </li>
          </ul>
        </nav>

        <nav class="footer-col" aria-labelledby="footer-legal-heading">
          <h2 id="footer-legal-heading" class="footer-col-title">Legal</h2>
          <ul class="footer-col-list">
            <li>
              <a
                href="/legal/privacy-policy"
                :class="{ 'router-link-active': footerLinkActive('/legal/privacy-policy') }"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/legal/terms-of-service"
                :class="{ 'router-link-active': footerLinkActive('/legal/terms-of-service') }"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/legal/copyright"
                :class="{ 'router-link-active': footerLinkActive('/legal/copyright') }"
              >
                Copyright
              </a>
            </li>
            <li>
              <a href="/legal/about-us" :class="{ 'router-link-active': footerLinkActive('/legal/about-us') }">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/legal/contact-us"
                :class="{ 'router-link-active': footerLinkActive('/legal/contact-us') }"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">
          &copy; {{ year }} paralives.wiki. All rights reserved.
        </p>
        <p class="footer-disclaimer">
          The Paralives Wiki is an independent player resource for informational purposes. Paralives and
          related marks are trademarks of their respective owners.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const year = new Date().getFullYear()

function footerLinkActive(path) {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>

<style scoped>
.site-footer {
  position: relative;
  margin-top: auto;
  contain: layout style;
  background: #12151c;
  color: #c8cdd8;
  padding: 2.75rem 0 1.75rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 2.5rem 2rem;
  padding-bottom: 2rem;
}

.footer-brand-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-brand-head .logo-img {
  width: 60px;
  height: 60px;
}

.footer-brand-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: #f4f6fa;
  letter-spacing: 0.02em;
}

.footer-brand-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #9aa3b2;
  max-width: 22rem;
  margin-bottom: 1rem;
}

.footer-brand-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.footer-brand-links a {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e8ecf4;
}

.footer-brand-links a:hover {
  color: var(--color-mint);
}

.footer-col-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f4f6fa;
  margin-bottom: 1rem;
}

.footer-col-list {
  list-style: none;
}

.footer-col-list a {
  display: block;
  padding: 0.3rem 0;
  font-size: 0.9rem;
  color: #9aa3b2;
}

.footer-col-list a:hover,
.footer-col-list a.router-link-active {
  color: #e8ecf4;
}

.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.footer-copy {
  font-size: 0.85rem;
  color: #8b94a3;
  margin-bottom: 0.5rem;
}

.footer-disclaimer {
  font-size: 0.8rem;
  line-height: 1.55;
  color: #6e7686;
  max-width: 40rem;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-brand-head {
    justify-content: center;
  }

  .footer-brand-desc {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }

  .footer-brand-links {
    justify-content: center;
  }
}
</style>
