<template>
  <article class="home-page">
    <!-- Hero：背景视频 /video/hero-bg.mp4 + 网格 -->
    <section ref="heroSectionRef" class="hero-section" aria-labelledby="hero-heading">
      <div class="hero-bg" aria-hidden="true">
        <video
          ref="heroVideoRef"
          class="hero-bg-video"
          src="/video/hero-bg.mp4"
          fetchpriority="high"
          muted
          loop
          playsinline
          disablepictureinpicture
          disableremoteplayback
          preload="metadata"
          poster="https://placehold.co/1920x900/5a8f6e/ffdac1?text="
          tabindex="-1"
        ></video>
      </div>
      <div class="hero-grid" aria-hidden="true"></div>
      <span class="hero-deco hero-deco--1" aria-hidden="true"></span>
      <span class="hero-deco hero-deco--2" aria-hidden="true"></span>
      <span class="hero-deco hero-deco--3" aria-hidden="true"></span>
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">✦ Paralives Wiki · Steam launch May 25, 2026</span>
          <h1 id="hero-heading">
            <span class="title-gradient">Paralives</span>
            Wiki — Guides, Mods &amp; Tools
          </h1>
          <p class="hero-lead">
            The <strong>Paralives Wiki</strong> is unofficial help for the life sim: release date and
            roadmap on Steam, system requirements, eleven reference topics, player guides, community
            mods, and the <strong>Paralives Simulator</strong> to plan your first save before launch day.
          </p>
          <div class="hero-tags" aria-label="Paralives game tags">
            <ul>
              <li v-for="tag in heroGameTags" :key="tag">
                <span class="hero-tag-chip">{{ tag }}</span>
              </li>
            </ul>
          </div>
          <div class="hero-actions">
            <RouterLink to="/start" class="btn btn-primary">Start Here</RouterLink>
            <RouterLink to="/wiki" class="btn btn-outline">Wiki</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick -->
    <section class="quick-section" aria-labelledby="quick-heading">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="quick-content">
          <header class="section-head">
            <span class="section-label">Jump in</span>
            <h2 id="quick-heading" class="title-gradient">Paralives Quick Paths</h2>
            <p>Shortcuts across the Paralives Wiki — each card opens a finished section.</p>
          </header>
          <ul class="quick-grid">
            <li v-for="(item, i) in quickLinks" :key="item.title">
              <RouterLink :to="item.to" class="quick-card" :style="{ '--card-hue': item.hue }">
                <span class="quick-num">{{ String(i + 1).padStart(2, '0') }}</span>
                <!-- <img :src="imgPlaceholder" :alt="item.alt" width="40" height="40" /> -->
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <span class="quick-tag">{{ item.tag }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Hot Guides：上图下文 -->
    <section class="guides-section" aria-labelledby="guides-heading">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="guides-content">
          <header class="section-head section-head--light">
            <span class="section-label section-label--light">Walkthroughs</span>
            <h2 id="guides-heading" class="title-gradient title-gradient--light">Paralives Guides Highlights</h2>
            <p>Featured walkthroughs on the Paralives Wiki for the Steam launch — updated as we publish more.</p>
          </header>
          <ul v-if="hotGuides.length" class="guides-grid">
            <li v-for="guide in hotGuides" :key="guide.to">
              <article class="guide-card-stack">
                <div class="guide-card-media">
                  <img :src="guide.imageUrl" :alt="guide.alt" width="480" height="260" loading="lazy" />
                  <span class="guide-cat-badge">{{ guide.category }}</span>
                </div>
                <div class="guide-card-body">
                  <h3>
                    <RouterLink :to="guide.to">{{ guide.title }}</RouterLink>
                  </h3>
                  <p>{{ guide.excerpt }}</p>
                  <p class="guide-meta">{{ guide.meta }}</p>
                </div>
              </article>
            </li>
          </ul>
          <p v-else class="guides-empty">No featured guides on the homepage right now.</p>
          <p class="section-cta section-cta--on-dark">
            <RouterLink to="/guides">All guides →</RouterLink>
          </p>
        </div>
      </div>
    </section>

    <!-- Database -->
    <section class="database-section" aria-labelledby="database-heading">
      <div class="container">
        <div class="database-content">
          <header class="section-head">
            <span class="section-label">Wiki</span>
            <h2 id="database-heading" class="title-gradient">Paralives Wiki Database</h2>
            <p>
              The Paralives Wiki covers eleven topics — talents, vibes, emotions, needs, careers,
              build tools, and more. Each article notes what ships on Steam at launch vs later updates.
            </p>
          </header>
          <div class="database-layout">
            <ul class="database-wiki-grid">
              <li v-for="topic in wikiTopics" :key="topic.slug">
                <RouterLink :to="topic.to" class="database-wiki-card">
                  <img
                    v-if="topic.icon"
                    class="database-wiki-icon"
                    :src="topic.icon"
                    :alt="`${topic.title} icon`"
                    width="36"
                    height="36"
                    loading="lazy"
                  />
                  <div class="database-wiki-text">
                    <h3>{{ topic.title }}</h3>
                    <p>{{ topic.desc }}</p>
                    <span class="database-wiki-tag">{{ topic.tag }}</span>
                  </div>
                </RouterLink>
              </li>
            </ul>
            <aside class="database-aside">
              <span class="aside-sticker" aria-hidden="true">Day 1</span>
              <h3>Live Mode at launch</h3>
              <ul>
                <li>Personality traits · talents · vibes · stats</li>
                <li>Emotions · wants · six needs · autonomy</li>
                <li>Rabbit-hole careers · bills · museum</li>
                <li>Together Cards · multiselect · relationships</li>
                <li>Genetics · children · aging · mod tools</li>
              </ul>
              <p class="database-aside-link">
                <RouterLink to="/updates">Full day-one vs during-EA lists →</RouterLink>
              </p>
            </aside>
          </div>
          <p class="section-cta database-cta">
            <RouterLink to="/wiki">Browse all wiki topics →</RouterLink>
          </p>
        </div>
      </div>
    </section>

    <!-- Hot Mods：左图右文 -->
    <section class="mods-section" aria-labelledby="mods-heading">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="mods-content">
          <header class="section-head">
            <span class="section-label">Community</span>
            <h2 id="mods-heading" class="title-gradient">Paralives Mods Highlights</h2>
            <p>Highlighted Paralives mods and community packs — full listings on the Mods hub.</p>
          </header>
          <ul v-if="featuredMods.length" class="mods-list">
            <li v-for="mod in featuredMods" :key="mod.slug">
              <RouterLink :to="mod.to" class="mod-card-row mod-card-row--link">
                <div class="mod-card-media">
                  <img :src="mod.imageUrl" :alt="mod.imageAlt" width="480" height="260" loading="lazy" />
                </div>
                <div class="mod-card-body">
                  <h3>{{ mod.title }}</h3>
                  <p>{{ mod.desc }}</p>
                  <span class="mod-pill">{{ mod.tag }}</span>
                </div>
              </RouterLink>
            </li>
          </ul>
          <p v-else class="mods-empty">No featured mods on the homepage right now.</p>
          <p class="section-cta">
            <RouterLink to="/mods">Mods hub →</RouterLink>
          </p>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="about-section" aria-labelledby="about-heading">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="about-content">
          <header class="section-head">
            <span class="section-label">Our Story</span>
            <h2 id="about-heading" class="title-gradient">About the Paralives Wiki</h2>
            <p>What the game is, what this wiki offers, and why we built it for players like you.</p>
          </header>
          <div class="about-blocks">
            <article class="about-row">
              <figure class="about-row-media">
                <img src="/images/about-01.webp" alt="Paralives life simulation — build, create and live" width="480" height="260" />
              </figure>
              <div class="about-row-body">
                <h3>What Is Paralives?</h3>
                <p>
                  If you grew up on life sims and always wanted more freedom in how you build, dress,
                  and live, <strong>Paralives</strong> is the indie answer many of us have been
                  watching for years. It is a sandbox life simulation where you shape homes without a
                  rigid grid, design characters down to small details, and send them into an open-world
                  town to work, socialize, age, and write their own stories.
                </p>
                <p>
                  The game is developed by Paralives Studio, led by Alex Massé, with a small team and
                  years of community-backed development. Early Access on PC and Mac is planned for
                  <strong>May 25, 2026</strong>, with roughly two years in preview before a full 1.0
                  release. The team has pledged <strong>no paid DLC</strong> — only free updates —
                  which matters if you are tired of buying pets, seasons, or build packs separately in
                  other games.
                </p>
                <p>
                  At launch, three pillars carry the experience. <strong>Build Mode</strong> gives you
                  curved walls, split-level floors, resizable furniture, and color control on nearly
                  every surface. <strong>Paramaker</strong> covers height and body sliders, genetics,
                  layered outfits, and personality setup. <strong>Live Mode</strong> is where your
                  Parafolks find jobs, manage needs and emotions, build relationships, pay bills, age,
                  and explore town spots like shops, restaurants, and the museum. Modding tools and
                  Workshop support are planned for launch; pets, weather, cars, and gardening are slated
                  to arrive in later Steam updates.
                </p>
                <ul class="about-facts">
                  <li>Launch price around $39.99 USD — likely to rise slowly as content is added</li>
                  <li>Not a day-one Sims replacement — scope still grows through post-launch updates</li>
                  <li>Build and Paramaker are strong early; Live Mode is the area still being polished</li>
                  <li>A good fit if you value fair pricing, mods, and deep creative tools</li>
                </ul>
              </div>
            </article>
            <article class="about-row about-row--reverse">
              <figure class="about-row-media">
                <img src="/images/about-02.webp" alt="Paralives Wiki — player guides and database" width="480" height="260" />
              </figure>
              <div class="about-row-body">
                <h3>What Is the Paralives Wiki?</h3>
                <p>
                  The Paralives Wiki is a <strong>fan-made</strong> guide site built by players, for
                  players. We are not the developers or the storefront — we are a focused wiki when
                  you want clear, practical answers without digging through scattered posts and outdated
                  threads.
                </p>
                <p>
                  We built the Paralives Wiki because a Steam launch can feel like a wall of questions. What
                  actually ships on day one? How do talents differ from vibes? When do wants reset?
                  Our <RouterLink to="/start">Start Here</RouterLink> page walks through the three modes;
                  the <RouterLink to="/wiki">wiki</RouterLink> breaks down eleven systems with tables
                  and game icons; <RouterLink to="/updates">Updates</RouterLink> tracks the official
                  roadmap; and the <RouterLink to="/simulator">Simulator</RouterLink> helps you plan
                  before you spend an evening in-game.
                </p>
                <p>
                  Our goal is to save you time before and after launch. Whether you are deciding to
                  wishlist, planning your first household, or comparing Paralives to life sims you
                  already own, we want you to make informed choices. We track publicly confirmed
                  features and playtest feedback; when the game goes live, we will revise guides based
                  on what players actually experience in-game.
                </p>
                <p>
                  If this site helps you enjoy Paralives more, that is what we are here for. Treat it
                  as a living player resource — the game will change patch by patch, and we will keep
                  updating alongside it. For major announcements and legal details, always rely on
                  the developers and storefront directly; we summarize what matters to everyday
                  players, not replace official channels.
                </p>
                <ul class="about-facts">
                  <li>Start Here + wiki articles for talents, emotions, careers, build tools, and more</li>
                  <li>Town map and EA feature lists aligned with public development updates</li>
                  <li>Simulator for planning — does not replace in-game Paramaker</li>
                  <li>Unofficial fan content — verify after each patch</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section" aria-labelledby="faq-heading">
      <div class="container">
        <div class="faq-content">
          <header class="section-head">
            <span class="section-label">Questions</span>
            <h2 id="faq-heading" class="title-gradient">Paralives FAQ</h2>
            <p>Release date, Steam price, system requirements, mods, and how this fan hub fits in.</p>
          </header>
          <ul class="faq-list">
            <li v-for="item in faqItems" :key="item.q">
              <article class="faq-item">
                <h3>{{ item.q }}</h3>
                <p>{{ item.a }}</p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="footer-section" aria-labelledby="footer-cta-heading">
      <div class="container">
        <div class="footer-content">
          <img src="/images/ico.webp" alt="Community" />
          <div>
            <h2 id="footer-cta-heading" class="title-gradient title-gradient--light">
              Paralives on Steam — Plan Your Launch
            </h2>
            <p>
              Explore the Paralives Wiki: start with our beginner guide, browse every topic, or plan
              your first household in the Simulator.
            </p>
          </div>
          <div class="footer-cta-actions">
            <RouterLink to="/start" class="btn btn-primary">Start Here</RouterLink>
            <RouterLink to="/wiki" class="btn btn-outline btn-outline--light">Wiki</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import guides from '@/data/guides.js'
import mods from '@/data/mods.js'

/** Steam / official descriptors — genres, modes, and community-facing features */
const heroGameTags = [
  'Life Simulation',
  'Steam Launch',
  'Sandbox',
  'Open World',
  'Build Mode',
  'Paramaker',
  'Parafolks',
  'Character Customization',
  'Grid-less Building',
  'Steam Workshop',
  'No Paid DLC',
]

const heroSectionRef = ref(null)
const heroVideoRef = ref(null)

let heroObserver = null
let heroOnVisibilityChange = null

onMounted(() => {
  const section = heroSectionRef.value
  const video = heroVideoRef.value
  if (!section || !video) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    video.style.display = 'none'
    return
  }

  const playWhenReady = () => {
    if (video.paused) {
      const p = video.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
  }

  const onCanPlay = () => {
    if (section.getBoundingClientRect().bottom > 0) playWhenReady()
  }

  if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) onCanPlay()
  else video.addEventListener('canplay', onCanPlay, { once: true })

  heroObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !document.hidden) playWhenReady()
      else video.pause()
    },
    { threshold: 0.08, rootMargin: '80px 0px' },
  )
  heroObserver.observe(section)

  heroOnVisibilityChange = () => {
    if (document.hidden) video.pause()
    else if (section.getBoundingClientRect().top < window.innerHeight) playWhenReady()
  }
  document.addEventListener('visibilitychange', heroOnVisibilityChange)
})

onUnmounted(() => {
  heroObserver?.disconnect()
  if (heroOnVisibilityChange) {
    document.removeEventListener('visibilitychange', heroOnVisibilityChange)
  }
  heroVideoRef.value?.pause()
})

const quickLinks = [
  {
    title: 'Start Here',
    desc: 'Three modes, first-hour goals, specs at the end.',
    tag: 'Walkthrough',
    to: '/start',
    alt: 'Start here',
    hue: '42',
  },
  {
    title: 'Talents & Vibes',
    desc: 'Seven talents, eight vibes, Paramaker picks.',
    tag: 'Wiki',
    to: '/wiki/talents',
    alt: 'Talents wiki',
    hue: '268',
  },
  {
    title: 'Emotions & Needs',
    desc: 'Mood cards, six needs, wants vs goals.',
    tag: 'Wiki',
    to: '/wiki/emotions',
    alt: 'Emotions wiki',
    hue: '18',
  },
  {
    title: 'Town Map',
    desc: 'Shops, museum, venues — day one vs later.',
    tag: 'Map',
    to: '/map',
    alt: 'Town map',
    hue: '195',
  },
  {
    title: 'Simulator',
    desc: 'Filter EA features, trait points, colors.',
    tag: 'Tools',
    to: '/simulator',
    alt: 'Simulator',
    hue: '155',
  },
  {
    title: 'EA Roadmap',
    desc: 'Official day-one and during-EA lists.',
    tag: 'Updates',
    to: '/updates',
    alt: 'Development updates',
    hue: '8',
  },
]

const hotGuides = guides
  .filter((g) => g.isHome)
  .map((g) => ({
    title: g.title,
    excerpt: g.description,
    category: g.tags?.[0] ?? 'Guide',
    meta: g.tags?.slice(1).join(' · ') || g.publishDate || 'Guide',
    to: `/guides/${g.addressBar}`,
    alt: g.imageAlt,
    imageUrl: g.imageUrl,
  }))

const wikiTopics = [
  {
    slug: 'talents',
    title: 'Talents',
    desc: 'Art, Music, Food, Tech, Fitness, and more.',
    tag: 'Paramaker',
    to: '/wiki/talents',
    icon: '/images/wiki/talents/Talent-Art.png',
  },
  {
    slug: 'vibes',
    title: 'Vibes',
    desc: 'Energetic, Serious, Jester — launch vs later.',
    tag: 'Personality',
    to: '/wiki/vibes',
    icon: '/images/wiki/vibes/Vibe-Energetic.png',
  },
  {
    slug: 'traits',
    title: 'Stats & Personality',
    desc: '7-point spread, lifestyles, social perks.',
    tag: 'Paramaker',
    to: '/wiki/traits',
    icon: null,
  },
  {
    slug: 'skills',
    title: 'Skills',
    desc: 'Level 20 cap, Knowledge cross-training.',
    tag: 'Live Mode',
    to: '/wiki/skills',
    icon: null,
  },
  {
    slug: 'emotions',
    title: 'Emotions',
    desc: '15 preview moods with icons and intensity.',
    tag: 'Live Mode',
    to: '/wiki/emotions',
    icon: '/images/wiki/emotions/Emotion-Happy.png',
  },
  {
    slug: 'needs-wants',
    title: 'Needs & Wants',
    desc: 'Six needs, sleep reset for wants.',
    tag: 'Live Mode',
    to: '/wiki/needs-wants',
    icon: '/images/wiki/needs/Need-Hunger.png',
  },
  {
    slug: 'parafolks',
    title: 'Parafolks & Genetics',
    desc: 'Inheritance, life stages, health.',
    tag: 'Family',
    to: '/wiki/parafolks',
    icon: null,
  },
  {
    slug: 'build-tools',
    title: 'Build Mode Tools',
    desc: 'Grid-free walls, pools during EA.',
    tag: 'Build',
    to: '/wiki/build-tools',
    icon: null,
  },
  {
    slug: 'careers',
    title: 'Careers & Economy',
    desc: 'Jobs, bills, museum collections.',
    tag: 'Live Mode',
    to: '/wiki/careers',
    icon: null,
  },
  {
    slug: 'relationships',
    title: 'Relationships',
    desc: 'Together Cards, six social perks.',
    tag: 'Social',
    to: '/wiki/relationships',
    icon: '/images/wiki/social-perks/SocialPerk-GoodAtMakingFriends.png',
  },
  {
    slug: 'modding',
    title: 'Modding',
    desc: 'Workshop, no paid DLC.',
    tag: 'Community',
    to: '/wiki/modding',
    icon: null,
  },
]

const featuredMods = mods
  .filter((m) => m.isHome)
  .map((m) => ({
    slug: m.addressBar,
    title: m.title,
    desc: m.description,
    tag: m.tags?.[0] ?? 'Mod',
    to: `/mods/${m.addressBar}`,
    imageUrl: m.imageUrl,
    imageAlt: m.imageAlt,
  }))

const faqItems = [
  {
    q: 'When is Paralives coming out on Steam?',
    a: 'The game launches on Steam May 25, 2026 for Windows and Mac. The team targets about two years in preview before a full 1.0 release, with free updates and no paid DLC. Check the Paralives Wiki Updates page for roadmap notes.',
  },
  {
    q: 'How much does Paralives cost on Steam?',
    a: 'The planned launch price is around $39.99 USD, with the team noting it may rise slowly as content is added. Check the Steam store page for the latest price before you buy or pre-order.',
  },
  {
    q: 'What are the Paralives system requirements?',
    a: 'Official PC and Mac specs are on the Paralives Wiki Start Here page and on Steam. As a Unity life sim with open-world town travel, a mid-range GPU and enough RAM help — verify the store page before launch day.',
  },
  {
    q: 'What is on the Paralives Wiki?',
    a: 'Eleven topics: talents, vibes, skills, stats, emotions, needs & wants, Parafolks & genetics, build tools, careers, relationships, and modding. Each page explains what ships on Steam at launch vs later in development.',
  },
  {
    q: 'Where should a new Paralives player start?',
    a: 'On the Paralives Wiki, begin with Start Here, then open Guides for mode tips. Jump to a wiki article when you need one system (emotions, careers, or build tools).',
  },
  {
    q: 'What is the Paralives Simulator?',
    a: 'Browser tools on the Paralives Wiki — filter official launch features, allocate personality points, preview Paramaker colors, and roll session challenges. Nothing imports into the game.',
  },
  {
    q: 'Are Paralives mods supported at launch?',
    a: 'In-game modding tools and Steam Workshop are on the official day-one list. The Paralives Wiki Mods section lists community packs when creators publish links.',
  },
  {
    q: 'Is the Paralives Wiki official?',
    a: 'No — we are a fan-run Paralives Wiki, not Paralives Studio or Steam. For legal details and announcements use paralives.com and the storefront; we summarize what matters to everyday players.',
  },
]
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}

/* Quick — 奶油黄渐变 */
.quick-section {
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(180deg, var(--color-cream) 0%, var(--color-lemon) 45%, var(--color-peach) 100%);
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.15rem;
  position: relative;
  z-index: 2;
}

.quick-card {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1.2rem;
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 3px solid var(--color-white);
  box-shadow: var(--shadow-card);
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.quick-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(
    90deg,
    hsl(var(--card-hue, 160) 70% 55%),
    hsl(calc(var(--card-hue, 160) + 40) 70% 65%)
  );
}

.quick-card:hover {
  transform: translateY(-5px) rotate(1deg);
  color: inherit;
}

.quick-num {
  font-family: var(--font-cartoon);
  font-size: 1.75rem;
  font-weight: 700;
  color: color-mix(in srgb, var(--color-sage) 40%, transparent);
  line-height: 1;
}

.quick-card h3 {
  font-family: var(--font-cartoon);
  font-size: 1.05rem;
}

.quick-card p {
  font-size: 0.88rem;
  color: var(--color-ink-muted);
  flex: 1;
}

.quick-tag {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-sage-dark);
  letter-spacing: 0.06em;
}

/* Guides — 薄荷绿渐变 */
.guides-section {
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(145deg, var(--color-mint-deep) 0%, var(--color-sage) 40%, var(--color-sky-deep) 100%);
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.35rem;
  position: relative;
  z-index: 2;
}

.guide-card-body h3 a {
  color: var(--color-ink);
  font-family: var(--font-cartoon);
}

.guide-card-body h3 a:hover {
  color: var(--color-coral);
}

.guide-meta {
  margin-top: auto;
  padding-top: 0.65rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-sage-dark);
}

.guides-section .guides-empty {
  text-align: center;
  font-size: 0.95rem;
  color: color-mix(in srgb, var(--color-white) 80%, transparent);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.mods-empty {
  text-align: center;
  font-size: 0.95rem;
  color: var(--color-ink-muted);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.section-cta--on-dark {
  text-align: center;
  margin-top: 2rem;
  font-weight: 800;
  position: relative;
  z-index: 2;
}

.section-cta--on-dark a {
  color: var(--color-lemon);
  font-family: var(--font-cartoon);
}

.section-cta--on-dark a:hover {
  color: var(--color-white);
}

/* Database — 天空粉紫渐变 */
.database-section {
  padding: 4rem 0;
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-sky) 50%, var(--color-lavender) 100%);
}

.database-layout {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 1.75rem;
  align-items: start;
}

.database-wiki-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}

.database-wiki-card {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.85rem 1rem;
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 2px solid color-mix(in srgb, var(--color-mint) 40%, transparent);
  box-shadow: var(--shadow-card);
  height: 100%;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
  color: inherit;
}

.database-wiki-card:hover {
  transform: translateY(-3px);
  border-color: var(--color-sage);
}

.database-wiki-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 6px;
  background: color-mix(in srgb, var(--color-sage) 15%, #1a2a3a);
  padding: 0.2rem;
}

.database-wiki-text h3 {
  font-family: var(--font-cartoon);
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}

.database-wiki-text p {
  font-size: 0.8rem;
  color: var(--color-ink-muted);
  line-height: 1.45;
  margin-bottom: 0.35rem;
}

.database-wiki-tag {
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-sage-dark);
}

.database-cta {
  margin-top: 1.5rem;
}

.database-aside-link {
  margin-top: 1rem;
  font-size: 0.88rem;
  font-weight: 700;
}

.database-aside-link a {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.database-aside {
  position: relative;
  background: linear-gradient(160deg, var(--color-peach) 0%, var(--color-coral) 100%);
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  border: 4px solid var(--color-white);
  box-shadow: var(--shadow-soft);
  color: var(--color-ink);
}

.aside-sticker {
  position: absolute;
  top: -12px;
  right: 1.25rem;
  background: var(--color-lemon);
  font-family: var(--font-cartoon);
  font-weight: 700;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  border: 3px solid var(--color-white);
  transform: rotate(6deg);
}

.database-aside ul {
  margin-top: 1rem;
}

.database-aside li {
  padding: 0.35rem 0 0.35rem 1.2rem;
  position: relative;
  font-size: 0.92rem;
}

.database-aside li::before {
  content: '★';
  position: absolute;
  left: 0;
  color: var(--color-white);
}

/* Mods — 清爽天蓝，与下方 Footer 暖色/深色区分开 */
.mods-section {
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(165deg, #eef9ff 0%, #c8ecfa 45%, #9edcf0 100%);
}

.mods-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 2;
}

.mod-card-row--link {
  color: inherit;
  text-decoration: none;
}

.mod-card-body h3 {
  font-family: var(--font-cartoon);
}

.section-cta {
  text-align: center;
  margin-top: 1.75rem;
  font-weight: 800;
  font-family: var(--font-cartoon);
}

.section-cta a {
  color: var(--color-sage-dark);
}

/* About — 图文左右交替 */
.about-section {
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(180deg, #fff9f4 0%, #ffe8d6 50%, #ffd4bc 100%);
}

.about-blocks {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.about-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  background: var(--color-white);
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  border: 3px solid var(--color-white);
  box-shadow: var(--shadow-card);
}

.about-row--reverse .about-row-media {
  order: 2;
}

.about-row--reverse .about-row-body {
  order: 1;
}

.about-row-media {
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 3px solid var(--color-peach);
}

.about-row-media img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.about-row-body h3 {
  font-family: var(--font-cartoon);
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.about-row-body p {
  font-size: 0.95rem;
  color: var(--color-ink-muted);
}

.about-row-body p a {
  color: var(--color-sage-dark);
  font-weight: 600;
}

.about-facts {
  margin-top: 0.85rem;
}

.about-facts li {
  font-size: 0.9rem;
  padding: 0.3rem 0 0.3rem 1.15rem;
  position: relative;
  color: var(--color-ink-muted);
}

.about-facts li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-sage-dark);
  font-weight: 800;
}

/* FAQ — 全部展开展示 */
.faq-section {
  padding: 4rem 0;
  background: linear-gradient(165deg, #f0faf4 0%, #d8f0e4 50%, #c5e8dc 100%);
}

.faq-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.faq-item {
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 2px solid color-mix(in srgb, var(--color-sage) 35%, transparent);
  box-shadow: var(--shadow-card);
  padding: 1.15rem 1.25rem;
  height: 100%;
}

.faq-item h3 {
  font-family: var(--font-cartoon);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-sage-dark);
}

.faq-item p {
  font-size: 0.92rem;
  color: var(--color-ink-muted);
  line-height: 1.6;
}

/* Footer CTA — 深紫珊瑚暮色，与 Mods 冷色、页脚奶油色区分 */
.footer-section {
  padding: 3rem 0;
  background: linear-gradient(120deg, #3a2d52 0%, #5a4578 42%, #c45c4a 100%);
  border-bottom: none;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

.footer-content img {
  display: block;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  object-fit: contain;
  border-radius: var(--radius-sm);
  border: 3px solid var(--color-peach);
}

.footer-content p {
  color: color-mix(in srgb, var(--color-white) 82%, transparent);
}

.footer-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-left: auto;
}

.footer-section .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
  background: color-mix(in srgb, var(--color-white) 12%, transparent);
}

.footer-section .btn-outline:hover,
.footer-section .btn-outline--light:hover {
  background: var(--color-white);
  color: #3a2d52;
}

.footer-section .btn-outline--light {
  border-color: color-mix(in srgb, var(--color-white) 75%, transparent);
  color: var(--color-white);
  background: transparent;
}

@media (max-width: 1024px) {
  .database-layout {
    grid-template-columns: 1fr;
  }

  .database-wiki-grid {
    grid-template-columns: 1fr;
  }

  .about-row,
  .about-row--reverse {
    grid-template-columns: 1fr;
  }

  .about-row--reverse .about-row-media,
  .about-row--reverse .about-row-body {
    order: unset;
  }

  .faq-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .quick-section,
  .guides-section,
  .mods-section,
  .about-section,
  .database-section,
  .faq-section,
  .footer-section {
    padding: 2.75rem 0;
  }

  .quick-grid,
  .guides-grid,
  .database-wiki-grid,
  .faq-list {
    grid-template-columns: 1fr;
  }
}
</style>
