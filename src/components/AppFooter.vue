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
            The Paralives Wiki — in-depth game reference, player guides, mods library, Steam launch
            roadmap, town map, and Simulator tools to plan your next save.
          </p>
        </div>

        <nav class="footer-col" aria-labelledby="footer-nav-heading">
          <h2 id="footer-nav-heading" class="footer-col-title">Navigate</h2>
          <ul class="footer-col-list">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/wiki">Wiki / Database</RouterLink></li>
            <li><RouterLink to="/start">Start Here</RouterLink></li>
            <li><RouterLink to="/guides">Guides</RouterLink></li>
            <li><RouterLink to="/mods">Mods</RouterLink></li>
            <li><RouterLink to="/updates">Updates</RouterLink></li>
            <li><RouterLink to="/simulator">Simulator</RouterLink></li>
            <li><RouterLink to="/map">Town Map</RouterLink></li>
          </ul>
        </nav>

        <nav class="footer-col" aria-labelledby="footer-legal-heading">
          <h2 id="footer-legal-heading" class="footer-col-title">Legal</h2>
          <ul class="footer-col-list">
            <li><RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink></li>
            <li><RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink></li>
            <li><RouterLink to="/legal/copyright">Copyright</RouterLink></li>
            <li><RouterLink to="/legal/about-us">About Us</RouterLink></li>
            <li><RouterLink to="/legal/contact-us">Contact Us</RouterLink></li>
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
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
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
