import { createRouter, createWebHistory } from 'vue-router'

import { seoConfig } from '@/seo/config.js'
import {
  applyDocumentSeo,
  buildArticleJsonLd,
  resolveCanonicalUrl,
} from '@/seo/documentMeta.js'

function getByAddressBar(list, slug) {
  if (!slug || !Array.isArray(list)) return null
  const key = String(slug).replace(/^\/+|\/+$/g, '')
  return list.find((item) => item.addressBar === key) ?? null
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Paralives — Game Wiki, Guides, Mods, Simulator & Map',
        description:
          'Complete Paralives hub: wiki with icons, walkthroughs, mods library, EA roadmap, town map, simulator tools, and start guide with system requirements.',
        keywords:
          'Paralives, Paralives game, Paralives wiki, Paralives guides, Paralives mods, Paralives simulator, Paralives release date, Paralives Steam, Early Access',
      },
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/StartView.vue'),
      meta: {
        title: 'Paralives Start Guide — How to Play on Steam Early Access',
        description:
          'Paralives start guide: Build Mode, Paramaker, Live Mode walkthrough, first-hour checklist, Steam download, PC/Mac specs, and Early Access launch May 25, 2026.',
        keywords:
          'Paralives start guide, how to play Paralives, Paralives download PC, system requirements, Early Access, Steam, May 25 2026',
      },
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('../views/WikiView.vue'),
      meta: {
        title: 'Paralives Wiki — Talents, Vibes, Skills & Game Systems',
        description:
          'Paralives Wiki — 11 topics: talents, vibes, skills, stats, emotions, needs, Parafolks, build tools, careers, relationships, and modding for Early Access.',
        keywords:
          'Paralives wiki, Paralives talents, Paralives vibes, Paralives skills, emotions, build mode, careers, modding, Early Access',
      },
    },
    {
      path: '/wiki/talents',
      name: 'wiki-talents',
      component: () => import('../views/wiki/WikiTalentsView.vue'),
      meta: {
        title: 'Paralives Talents Wiki — Art, Music, Food & More',
        description:
          'Paralives talents guide: Art, Music, Food, Technology, Fitness, Jack-of-All-Trades, and Good at Nothing — how talents boost skills in Live Mode at Early Access.',
        keywords:
          'Paralives talents, Art talent, Music talent, Food talent, Paramaker, skills, Live Mode, Early Access',
      },
    },
    {
      path: '/wiki/vibes',
      name: 'wiki-vibes',
      component: () => import('../views/wiki/WikiVibesView.vue'),
      meta: {
        title: 'Paralives Vibes Wiki — Energetic, Serious, Jester & More',
        description:
          'Paralives vibes explained: launch vibes, evolutions, emotions, Together Cards, and how vibes differ from talents and stats in Paramaker and Live Mode.',
        keywords:
          'Paralives vibes, Energetic, Gloomy, Jester, Serious, Overjoyed, personality, Paramaker, Together Cards',
      },
    },
    {
      path: '/wiki/skills',
      name: 'wiki-skills',
      component: () => import('../views/wiki/WikiSkillsView.vue'),
      meta: {
        title: 'Paralives Skills Wiki — Leveling, Knowledge & Careers',
        description:
          'Paralives skills guide: level cap 20, Knowledge cross-training, talent bonuses, cooking, and career skill gates during Steam Early Access on May 25, 2026.',
        keywords:
          'Paralives skills, skill leveling, Knowledge, careers, cooking, Live Mode, Early Access, Steam',
      },
    },
    {
      path: '/wiki/traits',
      name: 'wiki-traits',
      component: () => import('../views/wiki/WikiTraitsView.vue'),
      meta: {
        title: 'Paralives Stats Wiki — Physique, Mind, Creativity, Charisma',
        description:
          'Paralives stats guide: 7-point Paramaker spread, max 3 per stat, lifestyles, social perks, and what carries into Live Mode on Steam Early Access day one.',
        keywords: 'Paralives stats, Physique, Mind, Creativity, Charisma, personality, Paramaker, lifestyles',
      },
    },
    {
      path: '/wiki/emotions',
      name: 'wiki-emotions',
      component: () => import('../views/wiki/WikiEmotionsView.vue'),
      meta: {
        title: 'Paralives Emotions Wiki — Mood, Wants & Together Cards',
        description:
          'Paralives emotions guide: happy, angry, flirty, stressed moods, thought panel, skill and career effects, and Together Cards during Steam Early Access.',
        keywords:
          'Paralives emotions, mood, happy, angry, flirty, stressed, Together Cards, wants, Live Mode',
      },
    },
    {
      path: '/wiki/needs-wants',
      name: 'wiki-needs-wants',
      component: () => import('../views/wiki/WikiNeedsWantsView.vue'),
      meta: {
        title: 'Paralives Needs & Wants Wiki — Hunger, Sleep, Fun & Goals',
        description:
          'Paralives needs and wants: hunger, sleep, bathroom, hygiene, fun, me time, want reset rules, and NPC autonomy behavior at Early Access launch on Steam.',
        keywords:
          'Paralives needs, Paralives wants, hunger, sleep, hygiene, fun, autonomy, Live Mode, Early Access',
      },
    },
    {
      path: '/wiki/parafolks',
      name: 'wiki-parafolks',
      component: () => import('../views/wiki/WikiParafolksView.vue'),
      meta: {
        title: 'Paralives Parafolks Wiki — Genetics, Aging & Family',
        description:
          'Paralives Parafolks guide: genetics, height, hair texture, life stages, children, aging, death, family play, and Paramaker pets during Early Access.',
        keywords:
          'Paralives Parafolks, genetics, life stages, children, aging, death, Paramaker, family, Early Access',
      },
    },
    {
      path: '/wiki/build-tools',
      name: 'wiki-build-tools',
      component: () => import('../views/wiki/WikiBuildToolsView.vue'),
      meta: {
        title: 'Paralives Build Mode Wiki — Walls, Floors & Color Wheel',
        description:
          'Paralives Build Mode tools: curved walls, split levels, moving walls, pools in EA, roofs, stairs, fences, and the color wheel for Steam Early Access builders.',
        keywords:
          'Paralives Build Mode, curved walls, split level, color wheel, building, pools, Early Access',
      },
    },
    {
      path: '/wiki/careers',
      name: 'wiki-careers',
      component: () => import('../views/wiki/WikiCareersView.vue'),
      meta: {
        title: 'Paralives Careers Wiki — Jobs, Bills & Shopping',
        description:
          'Paralives careers guide: rabbit-hole jobs, progression, bills, shops, museum collections, house fires, and the Early Access economy in Live Mode town.',
        keywords:
          'Paralives careers, work, rabbit hole, bills, shops, museum, money, Live Mode, Early Access',
      },
    },
    {
      path: '/wiki/relationships',
      name: 'wiki-relationships',
      component: () => import('../views/wiki/WikiRelationshipsView.vue'),
      meta: {
        title: 'Paralives Relationships Wiki — Social Perks & Together Cards',
        description:
          'Paralives relationships: social perks, Together Cards, multiselect groups, parties during EA, and planned phone or chat features in Live Mode social play.',
        keywords:
          'Paralives relationships, social perks, Together Cards, romance, friends, multiselect, parties',
      },
    },
    {
      path: '/wiki/modding',
      name: 'wiki-modding',
      component: () => import('../views/wiki/WikiModdingView.vue'),
      meta: {
        title: 'Paralives Modding Wiki — Steam Workshop & Custom Content',
        description:
          'Paralives modding guide: in-game tools, Steam Workshop, custom traits, emotions, needs, skills, and genetics mods — full Workshop support and free game updates.',
        keywords:
          'Paralives modding, Steam Workshop, mod tools, custom content, traits mods, Early Access',
      },
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('../views/GuidesView.vue'),
      meta: {
        title: 'Paralives Guides — Steam Early Access Walkthroughs & Tips',
        description:
          'Paralives Guides: step-by-step walkthroughs for Build Mode, Paramaker, and Live Mode — beginner paths, mode tips, and Early Access strategies on Paralives Hub.',
        keywords:
          'Paralives guides, walkthrough, tips, Early Access, getting started, tutorial, Steam, beginner',
      },
    },
    {
      path: '/guides/:slug',
      name: 'guide-detail',
      component: () => import('../views/GuideDetailView.vue'),
    },
    {
      path: '/mods',
      name: 'mods',
      component: () => import('../views/ModsView.vue'),
      meta: {
        title: 'Paralives Mods — Steam Workshop & Community Creations',
        description:
          'Paralives mods hub: Build Mode packs, Paramaker items, gameplay tweaks, install notes, and Steam Workshop links for community creations at Early Access launch.',
        keywords:
          'Paralives mods, Steam Workshop, custom content, furniture pack, community mods, Build Mode',
      },
    },
    {
      path: '/mods/:slug',
      name: 'mod-detail',
      component: () => import('../views/ModDetailView.vue'),
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('../views/UpdatesView.vue'),
      meta: {
        title: 'Paralives Roadmap & Release Date — EA Progress 2026',
        description:
          'Paralives release date and Early Access roadmap on Steam (May 25, 2026): Live, Build, and Paramaker day-one vs during-EA feature lists updated for players.',
        keywords:
          'Paralives roadmap, Paralives release date, Paralives progress, Early Access, May 25 2026, Steam, development',
      },
    },
    {
      path: '/simulator',
      name: 'simulator',
      component: () => import('../views/simulator/SimulatorHubView.vue'),
      meta: {
        title: 'Paralives Simulator — Feature Filter, Traits & Colors',
        description:
          'Paralives Simulator: feature filter, trait planner, color studio, and session roll — plan Paramaker builds, personalities, and goals before Steam Early Access.',
        keywords:
          'Paralives simulator, feature filter, personality points, color palette, Paramaker, Early Access, Steam',
      },
    },
    {
      path: '/simulator/feature-filter',
      name: 'simulator-feature-filter',
      component: () => import('../views/simulator/SimulatorFeatureFilterView.vue'),
      meta: {
        title: 'Paralives Feature Filter — Early Access Wish Checker',
        description:
          'Paralives Early Access feature filter: compare wishes to day-one and during-EA lists. See what ships on Steam May 25, 2026 before you start a new save.',
        keywords:
          'Paralives Early Access features, wish filter, day one, roadmap, simulator, development',
      },
    },
    {
      path: '/simulator/trait-points',
      name: 'simulator-trait-points',
      component: () => import('../views/simulator/SimulatorTraitPointsView.vue'),
      meta: {
        title: 'Paralives Personality Points — Paramaker Trait Planner',
        description:
          'Plan 7 Paralives personality points in Paramaker — Physique, Mind, Creativity, Charisma. Balance stats and preview your Parafolk before Steam Early Access.',
        keywords:
          'Paralives personality points, traits, Paramaker, character creator, simulator, stats',
      },
    },
    {
      path: '/simulator/color-palette',
      name: 'simulator-color-palette',
      component: () => import('../views/simulator/SimulatorColorPaletteView.vue'),
      meta: {
        title: 'Paralives Color Studio — Paramaker Hex Preview Tool',
        description:
          'Paralives Color Studio: preview Parafolk skin, hair, and outfit hex colors for Paramaker. Plan character looks before Steam Early Access on May 25, 2026.',
        keywords:
          'Paralives colors, Paramaker hex, character colors, palette, simulator, Parafolk',
      },
    },
    {
      path: '/simulator/session-roll',
      name: 'simulator-session-roll',
      component: () => import('../views/simulator/SimulatorSessionRollView.vue'),
      meta: {
        title: 'Paralives Session Roll — Random Early Access Challenges',
        description:
          'Roll random Paralives session goals from day-one Early Access mechanics. Build, Live Mode, or Paramaker challenges for focused, varied play on Steam.',
        keywords:
          'Paralives challenge, session ideas, Early Access, play goals, simulator, Build Mode',
      },
    },
    {
      path: '/planners',
      redirect: '/simulator',
    },
    {
      path: '/tool',
      redirect: '/simulator',
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
      meta: {
        title: 'Paralives Map — Paralives Interactive Map & Melino POI 2026',
        description:
          'Paralives map for Early Access: Paralives Interactive Map of Melino with pan, zoom, and filters for shops, schools, museum, bus stops, and 50–70 lots. Town guide for May 25, 2026.',
        keywords:
          'Paralives map, Paralives Interactive Map, Melino map, town map, interactive map, shops, museum, bus stops, Early Access 2026, Live Mode',
      },
    },
    {
      path: '/legal/privacy-policy',
      name: 'legal-privacy',
      component: () => import('../views/legal/PrivacyPolicyView.vue'),
      meta: {
        title: 'Privacy Policy — Paralives Hub Data & Cookies',
        description:
          'Paralives Hub Privacy Policy: data we collect, cookies, third-party links, retention, your rights, and how to contact us about personal information.',
        keywords:
          'Paralives Hub privacy policy, cookies, personal data, GDPR, data collection, contact',
      },
    },
    {
      path: '/legal/terms-of-service',
      name: 'legal-terms',
      component: () => import('../views/legal/TermsOfServiceView.vue'),
      meta: {
        title: 'Terms of Service — Paralives Hub Site Rules',
        description:
          'Paralives Hub Terms of Service: acceptable use, content accuracy, mods, external links, Simulator tools, disclaimers, liability limits, and policy updates.',
        keywords:
          'Paralives Hub terms of service, site rules, acceptable use, disclaimer, liability',
      },
    },
    {
      path: '/legal/copyright',
      name: 'legal-copyright',
      component: () => import('../views/legal/CopyrightView.vue'),
      meta: {
        title: 'Copyright — Paralives Hub & Game Content Notice',
        description:
          'Copyright notice for Paralives Hub: site content rights, game trademarks, community mods, third-party assets, and how to submit DMCA or attribution requests.',
        keywords:
          'Paralives Hub copyright, DMCA, intellectual property, game trademarks, mod copyright',
      },
    },
    {
      path: '/legal/about-us',
      name: 'legal-about',
      component: () => import('../views/legal/AboutUsView.vue'),
      meta: {
        title: 'About Us — Paralives Hub Wiki, Guides & Tools',
        description:
          'About Paralives Hub: mission, wiki and guides, Simulator and map tools, editorial standards, and how we help Paralives players during Steam Early Access.',
        keywords:
          'About Paralives Hub, Paralives wiki, guides, mission, player resource, Early Access',
      },
    },
    {
      path: '/legal/contact-us',
      name: 'legal-contact',
      component: () => import('../views/legal/ContactUsView.vue'),
      meta: {
        title: 'Contact Us — Paralives Hub Support & Legal',
        description:
          'Contact Paralives Hub: general questions, wiki corrections, copyright notices, press inquiries, and topics we route to Steam or the developer support teams.',
        keywords:
          'Contact Paralives Hub, support email, corrections, copyright, press, legal contact',
      },
    },
  ],
})

router.afterEach(async (to) => {
  if (to.name === 'guide-detail') {
    const slug = to.params.slug
    const { default: guides } = await import('@/data/guides.js')
    const g = getByAddressBar(guides, slug)
    const path = g ? `/guides/${g.addressBar}` : to.path
    if (!g) {
      applyDocumentSeo({
        path,
        title: 'Paralives Guide Not Found — Browse All Guides',
        description:
          'The requested Paralives guide is not available. Browse Paralives Guides for Early Access walkthroughs and tips.',
        keywords: seoConfig.defaults.keywords,
      })
      return
    }
    const description = g.seo?.description || g.description || seoConfig.defaults.description
    const keywords = g.seo?.keywords || seoConfig.defaults.keywords
    const title = g.seo?.title || g.title
    applyDocumentSeo({
      path,
      title,
      description,
      keywords,
      ogImage: g.imageUrl,
      ogType: 'article',
      jsonLd: buildArticleJsonLd({
        headline: title,
        description,
        url: resolveCanonicalUrl(path),
        datePublished: g.publishDate,
        imageUrl: g.imageUrl,
      }),
    })
    return
  }

  if (to.name === 'mod-detail') {
    const slug = to.params.slug
    const { default: mods } = await import('@/data/mods.js')
    const m = getByAddressBar(mods, slug)
    const path = m ? `/mods/${m.addressBar}` : to.path
    if (!m) {
      applyDocumentSeo({
        path,
        title: 'Paralives Mod Not Found — Browse All Mods',
        description:
          'The requested Paralives mod is not available. Browse the mods hub for community packs and Workshop links.',
        keywords: seoConfig.defaults.keywords,
      })
      return
    }
    const description = m.seo?.description || m.description || seoConfig.defaults.description
    const keywords = m.seo?.keywords || seoConfig.defaults.keywords
    const title = m.seo?.title || m.title
    applyDocumentSeo({
      path,
      title,
      description,
      keywords,
      ogImage: m.imageUrl,
      ogType: 'article',
      jsonLd: buildArticleJsonLd({
        headline: title,
        description,
        url: resolveCanonicalUrl(path),
        datePublished: m.publishDate,
        imageUrl: m.imageUrl,
      }),
    })
    return
  }

  applyDocumentSeo({
    path: to.path,
    title: to.meta?.title ?? seoConfig.defaults.title,
    description: to.meta?.description || seoConfig.defaults.description,
    keywords: to.meta?.keywords || seoConfig.defaults.keywords,
    ogImage: to.meta?.ogImage,
  })
})

export default router
