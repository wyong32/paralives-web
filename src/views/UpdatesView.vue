<template>
  <article class="updates-page">
    <section class="page-hero-section page-hero-section--updates" aria-labelledby="updates-title">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="page-hero-row">
          <div class="page-hero-content">
            <span class="section-label">Development</span>
            <h1 id="updates-title" class="title-gradient">Paralives Roadmap &amp; Early Access Status</h1>
            <p>
              Paralives is in <strong>Steam Early Access</strong> as of May 25, 2026 — this page keeps
              Paralives Studio’s public mode-by-mode lists (day one vs later in EA), a short dated
              milestone timeline, and what is still planned on the road to 1.0.
            </p>
          </div>
          <figure class="page-hero-visual">
            <img
              src="/images/update-01.webp"
              alt="Paralives Steam Early Access launch and roadmap"
              width="680"
              height="510"
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </div>

      <!-- 广告：GPT slot 1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-updates-1" class="gpt-banner-ad"></div>
    </aside>
    </section>

    <div class="updates-body">
      <div class="container">
        <section class="updates-block updates-launch" aria-labelledby="launch-heading">
          <div class="updates-launch-card">
            <img src="/images/update-01.webp" alt="Paralives Early Access launch" width="100%">
            
            <p class="updates-launch-date">
              <time datetime="2026-05-25">EARLY ACCESS — MAY 25, 2026</time>
            </p>
            <h2 id="launch-heading">Steam Early Access began May 25, 2026</h2>
            <p class="updates-launch-summary">
              Paralives entered Early Access on Steam on May 25, 2026 — the date the studio posted
              publicly for more than a year. The team previously moved the window from December 8,
              2025 (June 2025 announcement) to May 2026 after November 14, 2025 playtest feedback around
              Live Mode stability and town activities; that extra time fed build, Paramaker, and Live
              content before the storefront build went public.
            </p>
            <ul class="updates-facts">
              <li>
                Current status: live in Steam Early Access · content still grows through free updates
                toward 1.0
              </li>
              <li>
                Announced Early Access start: May 25, 2026 (public development communications)
              </li>
              <li>
                Earlier target was December 8, 2025; delay to May 2026 cited Live Mode polish and
                town activity depth
              </li>
            </ul>
          </div>
        </section>

        <!-- 广告：GPT slot 2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-updates-2" class="gpt-banner-ad"></div>
    </aside>

        <section class="updates-block" aria-labelledby="modes-heading">
          <header class="updates-section-head">
            <h2 id="modes-heading">Official Early Access Feature Lists</h2>
            <p>
              Wording below matches the Development page section titles. “Day one” and “during Early
              Access” are the studio’s own labels — not predictions from this wiki.
            </p>
          </header>
          <div class="updates-modes-grid">
            <article
              v-for="mode in modes"
              :key="mode.id"
              class="updates-mode-card"
              :class="`updates-mode-card--${mode.id}`"
            >
              <header>
                <h3>{{ mode.name }}</h3>
                <p>{{ mode.tagline }}</p>
              </header>
              <div class="updates-mode-col">
                <h4>Features available on day one of Early Access</h4>
                <ul>
                  <li v-for="item in mode.dayOne" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="updates-mode-col updates-mode-col--later">
                <h4>Planned to come out during Early Access</h4>
                <ul>
                  <li v-for="item in mode.duringEa" :key="item">{{ item }}</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <!-- 广告：GPT slot 3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-updates-3" class="gpt-banner-ad"></div>
    </aside>

        <section class="updates-block" aria-labelledby="timeline-heading">
          <header class="updates-section-head">
            <h2 id="timeline-heading">Dated milestones (official posts)</h2>
            <p>
              Short timeline with source notes — not the full monthly dev log on the Development page.
            </p>
          </header>
          <ol class="updates-timeline">
            <li v-for="event in timeline" :key="event.iso" class="updates-timeline-item">
              <time :datetime="event.iso">{{ event.label }}</time>
              <h3>{{ event.title }}</h3>
              <p>{{ event.text }}</p>
              <p v-if="event.source" class="updates-timeline-source">Source: {{ event.source }}</p>
            </li>
          </ol>
        </section>

        <section class="updates-block" aria-labelledby="status-heading">
          <header class="updates-section-head">
            <h2 id="status-heading">Current focus after launch</h2>
            <p>
              Early Access is underway. Following the studio’s public updates, work now centers on
              post-launch patches, performance, and roadmap features that were always marked for
              “during Early Access” rather than day one.
            </p>
          </header>
          <ul class="updates-status">
            <li>
              Play the live Steam Early Access build — expect bugs, tuning passes, and evolving town
              scope.
            </li>
            <li>
              Track day-one vs later-in-EA systems with the official mode lists (mirrored above) and
              your in-game patch notes.
            </li>
            <li>
              Weather, pets, vehicles, swimming, and world-editing tools remain on the documented
              during-EA roadmap until each ships.
            </li>
          </ul>
        </section>

        <!-- 广告：GPT slot 4 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-updates-4" class="gpt-banner-ad"></div>
    </aside>

        <section class="updates-block" aria-labelledby="roadmap-heading">
          <header class="updates-section-head">
            <h2 id="roadmap-heading">Full development roadmap</h2>
            <p>
              For a line-by-line list of completed tasks and what is still in progress, follow
              Paralives Studio’s published development roadmap and news posts. Paralives Wiki does not
              clone that database — we summarize the major mode buckets so players can see scope at a
              glance.
            </p>
          </header>
        </section>

        <!-- 广告：GPT slot 5 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-updates-5" class="gpt-banner-ad"></div>
    </aside>

        <p class="updates-disclaimer">
          Paralives Wiki is an unofficial player resource. Treat this page as a convenience summary
          only — it cannot replace Paralives Studio announcements, storefront purchase details, or
          in-game patch notes. When in doubt, rely on the developer’s latest public message and what
          you see in your installed build.
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
import { GPT_SLOTS_UPDATES } from '@/config/gptPageSlots'
import { useGptAds } from '@/utils/gptAds'

useGptAds(GPT_SLOTS_UPDATES)

/** Mode lists — English bullets aligned with Paralives Studio public Early Access roadmap copy */
const modes = [
  {
    id: 'live',
    name: 'Live mode',
    tagline:
      'Manage the lives, the relationships, the careers and the family of your Parafolks',
    dayOne: [
      'Open world town',
      'Day-night cycle',
      'Work (rabbit holes)',
      'Career progression',
      'Personality traits',
      'Emotions',
      'Wants',
      'Skills',
      'Needs',
      'Social interactions',
      'Relationship development',
      'Multiselecting characters and doing anything as a group',
      'Cooking system',
      'House fires',
      'Bills',
      'Having children',
      'Aging and death',
      'Character autonomy',
      'Shops and restaurants',
      'Museum and collections',
      'Modding tools to add and edit the game’s content',
    ],
    duringEa: [
      'Weather and seasons',
      'Calendar',
      'Family tree',
      'Dogs, cats and horses',
      'Cars and bikes',
      'Boats and houseboats',
      'Swimming',
      'Story progression for NPCs',
      'Gardening and fishing',
      'Organizing social events (parties, weddings)',
      'Calling Paras over the phone and chatting online',
      'Tools to edit and create towns',
      'More personality traits, wants, emotions, jobs, etc',
    ],
  },
  {
    id: 'build',
    name: 'Build mode',
    tagline: 'Create a beautiful home for your Parafolks',
    dayOne: [
      'Color wheel for everything',
      'Flexible wall placement tools (curved and at any angle)',
      'Optional grid for wall placement',
      'Split-level platforms',
      'Building multiple floors',
      'Moving existing walls',
      'Object resizing',
      'Stairs and roof placement',
      'Fences',
    ],
    duringEa: [
      'Pools',
      'Advanced roof tools',
      'Advanced stairs tools',
      'Placing windows and doors on curved walls',
      'Basement tools',
      'Lake and pond tools',
      'More furnitures and objects',
    ],
  },
  {
    id: 'paramaker',
    name: 'Paramaker',
    tagline: 'Make your household of Parafolks and design their outfits',
    dayOne: [
      'Color wheel for everything',
      'Height slider',
      'Body and face sliders',
      'Tattoo placement tool',
      'Layering and mixing of tops (undershirt with a jacket)',
      'Asymmetry (for eye color, socks and more)',
      'Genetics System',
      'Creating and managing multiple outfits',
    ],
    duringEa: [
      'Creating pets in the Paramaker',
      'Editing the genetics of a Para with advanced tools',
      'More clothing items, hairstyles and accessories',
    ],
  },
]

const timeline = [
  {
    iso: '2026-05-25',
    label: 'May 25, 2026',
    title: 'Steam Early Access goes live',
    text: 'Paralives releases to players in Steam Early Access on the long-announced May 25, 2026 date. The studio continues development with free updates toward 1.0.',
    source: 'Paralives Studio public launch communications',
  },
  {
    iso: '2025-11-14',
    label: 'November 14, 2025',
    title: 'Release window moved to May 25, 2026',
    text: 'Team update from Alex Massé: shift from the December 2025 target; additional months for Live Mode fixes and richer town activities before the public EA build.',
    source: 'Paralives Studio team message (Nov 2025)',
  },
  {
    iso: '2025-06-10',
    label: 'June 10, 2025',
    title: 'December 8, 2025 EA date announced',
    text: 'Studio news: target Steam Early Access for December 8, 2025, with ongoing free updates after — superseded later by the May 2026 window.',
    source: 'Paralives Studio news (Jun 2025)',
  },
  {
    iso: '2024-02-01',
    label: 'February 2024',
    title: '2025 Early Access year signaled',
    text: 'Public development recap frames 2025 as the goal year for EA alongside deeper Live Mode demonstrations.',
    source: 'Paralives Studio development timeline',
  },
  {
    iso: '2019-06-01',
    label: 'January–June 2019',
    title: 'Project start',
    text: 'History shared by the team: prototyping with a build-focused vertical slice, opening community channels, and laying the foundation for long-term crowdfunding support.',
    source: 'Paralives Studio founding history notes',
  },
]
</script>

<style scoped>
.updates-hero-meta {
  margin-top: 0.85rem;
  font-size: 0.9rem;
  opacity: 0.92;
}

.updates-source {
  margin-top: 0.85rem;
  font-size: 0.88rem;
  line-height: 1.5;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;
}

.updates-body {
  padding: 2.5rem 0 4.5rem;
  background: var(--color-white);
}

.updates-block {
  margin-bottom: 3rem;
}

.updates-section-head {
  margin-bottom: 1.5rem;
  max-width: 52rem;
}

.updates-section-head h2 {
  font-family: var(--font-cartoon);
  font-size: 1.45rem;
  color: var(--color-ink);
  margin-bottom: 0.5rem;
}

.updates-section-head p {
  color: var(--color-ink-muted);
  line-height: 1.6;
}

.updates-launch-card {
  padding: 1.75rem 2rem;
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-peach) 35%, var(--color-white));
  border: 3px solid color-mix(in srgb, var(--color-coral) 45%, transparent);
  box-shadow: var(--shadow-card);
}

.updates-launch-date {
  font-family: var(--font-cartoon);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-coral-deep);
  margin-bottom: 0.35rem;
}

.updates-launch-card h2 {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  color: var(--color-ink);
  margin-bottom: 0.75rem;
}

.updates-launch-summary {
  color: var(--color-ink-muted);
  line-height: 1.65;
  margin-bottom: 1rem;
  max-width: 60rem;
}

.updates-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  list-style: none;
}

.updates-facts li {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-sage-dark);
  padding-left: 1rem;
  position: relative;
}

.updates-facts li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-coral);
  font-weight: 800;
}

.updates-modes-grid {
  display: grid;
  gap: 1.35rem;
}

.updates-mode-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 3px solid color-mix(in srgb, var(--color-mint) 50%, transparent);
  padding: 1.35rem 1.5rem;
  box-shadow: var(--shadow-card);
}

.updates-mode-card--live {
  border-color: color-mix(in srgb, var(--color-sage) 55%, transparent);
}

.updates-mode-card--build {
  border-color: color-mix(in srgb, var(--color-sky-deep) 40%, transparent);
}

.updates-mode-card--paramaker {
  border-color: color-mix(in srgb, var(--color-lavender-deep) 40%, transparent);
}

.updates-mode-card header h3 {
  font-family: var(--font-cartoon);
  font-size: 1.2rem;
  color: var(--color-ink);
  margin-bottom: 0.35rem;
}

.updates-mode-card header p {
  font-size: 0.95rem;
  color: var(--color-ink-muted);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.updates-mode-col h4 {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-coral-deep);
  margin-bottom: 0.5rem;
}

.updates-mode-col--later h4 {
  color: var(--color-sage-dark);
}

.updates-mode-col ul {
  margin: 0 0 1rem 1.1rem;
  font-size: 0.92rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
}

.updates-mode-col li {
  margin-bottom: 0.35rem;
}

@media (min-width: 768px) {
  .updates-mode-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;
    align-items: start;
  }

  .updates-mode-card header {
    grid-column: 1 / -1;
  }

  .updates-mode-col ul {
    margin-bottom: 0;
  }
}

.updates-timeline {
  position: relative;
  padding-left: 1.75rem;
  border-left: 4px solid var(--color-coral);
  list-style: none;
}

.updates-timeline-item {
  position: relative;
  padding: 0 0 1.75rem 1.25rem;
}

.updates-timeline-item::before {
  content: '';
  position: absolute;
  left: -1.95rem;
  top: 0.35rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-lemon);
  border: 3px solid var(--color-coral);
}

.updates-timeline-item time {
  font-family: var(--font-cartoon);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-coral-deep);
}

.updates-timeline-item h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  margin: 0.3rem 0 0.4rem;
  color: var(--color-ink);
}

.updates-timeline-item p {
  font-size: 0.95rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
  max-width: 40rem;
}

.updates-timeline-source {
  font-size: 0.8rem;
  color: var(--color-ink-muted);
  margin-top: 0.35rem;
  font-style: italic;
}

.updates-status {
  list-style: none;
  display: grid;
  gap: 0.65rem;
  max-width: 40rem;
}

.updates-status li {
  padding: 0.85rem 1rem;
  background: color-mix(in srgb, var(--color-peach) 30%, var(--color-white));
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--color-coral);
  font-size: 0.95rem;
  color: var(--color-ink);
  line-height: 1.5;
}

.updates-disclaimer {
  font-size: 0.88rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
  padding: 1rem 1.15rem;
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--color-lemon) 35%, var(--color-white));
  border: 1px solid color-mix(in srgb, var(--color-peach) 80%, transparent);
  max-width: 52rem;
}
</style>
