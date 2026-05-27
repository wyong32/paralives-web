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
          poster="/images/map-hero.webp"
          tabindex="-1"
        ></video>
      </div>
      <div class="hero-grid" aria-hidden="true"></div>
      <span class="hero-deco hero-deco--1" aria-hidden="true"></span>
      <span class="hero-deco hero-deco--2" aria-hidden="true"></span>
      <span class="hero-deco hero-deco--3" aria-hidden="true"></span>
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">✦ Paralives Wiki · Steam Early Access (since May 25, 2026)</span>
          <h1 id="hero-heading">
            <span class="title-gradient">Paralives</span>
            Wiki — Guides, Mods &amp; Tools
          </h1>
          <p class="hero-lead">
            The <strong>Paralives Wiki</strong> is unofficial player help for the Steam life sim now
            in <strong>Early Access</strong>: system requirements, eleven reference topics,
            walkthroughs, community mod notes, the <strong>Paralives Simulator</strong> planners, and an
            interactive town map that tracks what shipped on day one versus what is still on the
            public during-EA roadmap.
          </p>
          <div class="hero-tags" aria-label="Paralives game tags">
            <ul>
              <li v-for="tag in heroGameTags" :key="tag">
                <span class="hero-tag-chip">{{ tag }}</span>
              </li>
            </ul>
          </div>
          <div class="hero-actions">
            <a href="/start" class="btn btn-primary">Start Here</a>
            <a href="/wiki" class="btn btn-outline">Wiki</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 广告：banner_1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-1" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
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
              <a :href="item.to" class="quick-card" :style="{ '--card-hue': item.hue }">
                <span class="quick-num">{{ String(i + 1).padStart(2, '0') }}</span>
                <!-- <img :src="imgPlaceholder" :alt="item.alt" width="40" height="40" /> -->
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <span class="quick-tag">{{ item.tag }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 广告：banner_2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-2" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
    </section>
    

    <!-- Hot Guides：上图下文 -->
    <section class="guides-section" aria-labelledby="guides-heading">
      <span class="section-dots" aria-hidden="true"></span>
      <div class="container">
        <div class="guides-content">
          <header class="section-head section-head--light">
            <span class="section-label section-label--light">Walkthroughs</span>
            <h2 id="guides-heading" class="title-gradient title-gradient--light">Paralives Guides Highlights</h2>
            <p>Featured walkthroughs on the Paralives Wiki for Steam Early Access players — updated as we publish more.</p>
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
                    <a :href="guide.to">{{ guide.title }}</a>
                  </h3>
                  <p>{{ guide.excerpt }}</p>
                  <p class="guide-meta">{{ guide.meta }}</p>
                </div>
              </article>
            </li>
          </ul>
          <p v-else class="guides-empty">No featured guides on the homepage right now.</p>
          <p class="section-cta section-cta--on-dark">
            <a href="/guides">All guides →</a>
          </p>
        </div>
      </div>

      <!-- 广告：banner_3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-3" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
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
              build tools, and more. Each article calls out official day-one Early Access scope versus
              mechanics the studio still lists for later in EA.
            </p>
          </header>
          <div class="database-layout">
            <ul class="database-wiki-grid">
              <li v-for="topic in wikiTopics" :key="topic.slug">
                <a :href="topic.to" class="database-wiki-card">
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
                </a>
              </li>
            </ul>
            <aside class="database-aside">
              <span class="aside-sticker" aria-hidden="true">EA</span>
              <h3>Live Mode highlights</h3>
              <ul>
                <li>Personality traits · talents · vibes · stats</li>
                <li>Emotions · wants · six needs · autonomy</li>
                <li>Rabbit-hole careers · bills · museum</li>
                <li>Together Cards · multiselect · relationships</li>
                <li>Genetics · children · aging · mod tools</li>
              </ul>
              <p class="database-aside-link">
                <a href="/updates">Full day-one vs during-EA lists →</a>
              </p>
            </aside>
          </div>
          <p class="section-cta database-cta">
            <a href="/wiki">Browse all wiki topics →</a>
          </p>
        </div>
      </div>

      <!-- 广告：banner_1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-4" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
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
              <a :href="mod.to" class="mod-card-row mod-card-row--link">
                <div class="mod-card-media">
                  <img :src="mod.imageUrl" :alt="mod.imageAlt" width="480" height="260" loading="lazy" />
                </div>
                <div class="mod-card-body">
                  <h3>{{ mod.title }}</h3>
                  <p>{{ mod.desc }}</p>
                  <span class="mod-pill">{{ mod.tag }}</span>
                </div>
              </a>
            </li>
          </ul>
          <p v-else class="mods-empty">No featured mods on the homepage right now.</p>
          <p class="section-cta">
            <a href="/mods">Mods hub →</a>
          </p>
        </div>
      </div>

      <!-- 广告：banner_2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-5" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
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
                  The game is developed by Paralives Studio, led by Alex Massé, with a compact team and
                  strong community support over many years.
                  <strong>Steam Early Access began May 25, 2026</strong> for PC and Mac builds. The
                  team still targets multiple years of free improvements before a 1.0 label, and has
                  pledged <strong>no paid DLC</strong> — only free updates — which matters if you are
                  tired of buying pets, seasons, or build packs separately in other life sims.
                </p>
                <p>
                  The three modes continue to anchor the experience.
                  <strong>Build Mode</strong> focuses on curved walls, split-level floors, resizable
                  furniture, and color control on nearly every surface.
                  <strong>Paramaker</strong> covers height and body sliders, genetics, layered outfits,
                  and personality setup.
                  <strong>Live Mode</strong> is where your Parafolks take jobs, manage needs and
                  emotions, build relationships, pay bills, age, and explore town venues such as shops,
                  restaurants, and the museum. In-game modding tools and Steam Workshop support were on
                  the public day-one checklist; pets, weather seasons, cars, and gardening remain on
                  the documented during-EA roadmap until each update lands.
                </p>
                <ul class="about-facts">
                  <li>
                    Introductory Early Access pricing was listed around $39.99 USD — the studio said
                    it may rise slowly as content stacks up; confirm the price shown in the store
                    before you buy.
                  </li>
                  <li>
                    Treat Early Access as an evolving sandbox — scope still grows through patches, and
                    newer players should expect missing long-term systems until their updates ship.
                  </li>
                  <li>
                    Builders and character creators are a strong draw on day one; Live Mode and town
                    density keep improving through EA feedback.
                  </li>
                  <li>
                    A strong fit if you want deep creative tools, mod support, and transparent “no
                    paid DLC” pricing promises.
                  </li>
                </ul>
              </div>
            </article>
            <!-- 广告：banner_3 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-6" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
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
                  We built the Paralives Wiki because Early Access can still feel like a wall of patch
                  notes. What actually shipped on day one? How do talents differ from vibes? When do
                  wants reset?
                  Our <a href="/start">Start Here</a> page walks through the three modes;
                  the <a href="/wiki">wiki</a> breaks down eleven systems with tables
                  and icons; <a href="/updates">Updates</a> mirrors the studio’s mode
                  lists; and the <a href="/simulator">Simulator</a> helps you sketch
                  ideas before you load a save.
                </p>
                <p>
                  Our goal is to save you time whether you are on the fence, setting up your first
                  household, or comparing Paralives to other life sims you already own. We summarize
                  publicly confirmed design goals and patch-driven reality checks; when systems change,
                  we revise articles to match what players see in-game.
                </p>
                <p>
                  If this site helps you enjoy Paralives more, that is what we are here for. Treat it
                  as a living player resource — the game will change patch by patch, and we will keep
                  updating alongside it. For legal questions or purchase support, talk to the
                  developer or storefront teams directly; we focus on everyday play, not official
                  support.
                </p>
                <ul class="about-facts">
                  <li>Start Here + wiki articles for talents, emotions, careers, build tools, and more</li>
                  <li>Town map and EA feature lists aligned with public development updates</li>
                  <li>Simulator for planning — does not replace in-game Paramaker</li>
                  <li>Unofficial fan content — verify after each patch</li>
                </ul>
              </div>
            </article>
            <!-- 广告：banner_1 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-7" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
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
            <p>Steam Early Access timing, EA pricing habits, specs, mods, and how this fan wiki fits in.</p>
          </header>
          <ul class="faq-list">
            <li v-for="item in faqItems" :key="item.q">
              <article class="faq-item">
                <h3 :class="{ 'faq-item__q--highlight': item.highlight }">{{ item.q }}</h3>
                <p>{{ item.a }}</p>
              </article>
            </li>
          </ul>
        </div>
      </div>
      <!-- 广告：banner_2 -->
    <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">
      <div id="div-gpt-ad-home-8" style="min-width: 300px; min-height: 250px;"></div>
    </aside>
    </section>

    <!-- Footer CTA -->
    <section class="footer-section" aria-labelledby="footer-cta-heading">
      <div class="container">
        <div class="footer-content">
          <img src="/images/ico.webp" alt="Community" />
          <div>
            <h2 id="footer-cta-heading" class="title-gradient title-gradient--light">
              Paralives Early Access — keep learning
            </h2>
            <p>
              Explore the wiki: revisit the beginner walkthrough after each patch, open every topic, or
              sketch your next household in the Simulator utilities.
            </p>
          </div>
          <div class="footer-cta-actions">
            <a href="/start" class="btn btn-primary">Start Here</a>
            <a href="/wiki" class="btn btn-outline btn-outline--light">Wiki</a>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import guides from '@/data/guides.js'
import mods from '@/data/mods.js'
import { pageBannerEntries } from '@/gpt/config'
import { useGptAds } from '@/gpt/ads'

useGptAds(pageBannerEntries('home', 8))

/** Steam / official descriptors — genres, modes, and community-facing features */
const heroGameTags = [
  'Life Simulation',
  'Steam Early Access',
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
    desc: 'Official day-one vs during-EA lists.',
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
    desc: 'Jobs, bills — who works where list when you crave spoilers.',
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
    title: 'Mods & DLC',
    desc: 'Workshop, free updates vs paid DLC.',
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
    q: 'Is Paralives out yet?',
    highlight: true,
    a: 'Yes — it entered Steam Early Access on May 25, 2026 for Windows and macOS builds. The team still describes multiple years of free updates before calling the project 1.0, with no paid DLC planned — only free patches.',
  },
  {
    q: 'How much does Paralives cost during Early Access?',
    highlight: true,
    a: 'The studio publicly quoted an introductory Early Access price near $39.99 USD and warned it may rise gradually as content grows. Always confirm the price shown in the store client you use before buying.',
  },
  {
    q: 'What are the Paralives system requirements?',
    a: 'We mirror the last major public PC and Mac spec table on the Start Here page. Because Unity open-world life sims are GPU- and RAM-sensitive, treat the listed cards as sensible floors — tighten settings if FPS dips.',
  },
  {
    q: 'What is on the Paralives Wiki?',
    a: 'Eleven topics: talents, vibes, skills, stats, emotions, needs & wants, Parafolks & genetics, build tools, careers, relationships, and mods & DLC. Each explains official day-one scope versus roadmap items slated for later in EA.',
  },
  {
    q: 'Where should a new Paralives player start?',
    a: 'Begin with Start Here, then hop into Guides for focused tasks. Drill into wiki articles whenever you need a single system unpacked (careers, build tools, emotions, etc.).',
  },
  {
    q: 'What is the Paralives Simulator?',
    a: 'Lightweight browser tools on this wiki — filter official feature phases, prototype personality spreads, preview Paramaker colors, and roll session challenges. Nothing syncs into the game automatically.',
  },
  {
    q: 'Are Paralives mods supported now?',
    a: 'The public day-one checklist included in-game modding tools and Steam Workshop hooks. Use the Mods & DLC wiki topic for how that fits free updates and curated listings, then verify options inside your build after each patch.',
  },
  {
    q: 'Is the Paralives Wiki official?',
    a: 'No — we are an independent player wiki, not Paralives Studio or Steam. For purchase receipts, refunds, or legal filings, talk to storefront support or the developer. We explain mechanics, not corporate policy.',
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

/* 仅强调问题标题一条：不改变整张卡片底色与边框 */
.faq-item__q--highlight {
  font-size: clamp(1.08rem, 2.35vw, 1.34rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: -0.1rem -0.2rem 0.55rem;
  padding: 0.4rem 0.65rem 0.42rem;
  border-radius: var(--radius-sm);
  color: var(--color-ink);
  border-left: 4px solid var(--color-sage-dark);
  background: linear-gradient(
    105deg,
    color-mix(in srgb, var(--color-lemon) 62%, var(--color-white)) 0%,
    color-mix(in srgb, var(--color-peach) 42%, var(--color-white)) 92%,
    transparent 100%
  );
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-white) 70%, transparent);
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
