import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import guides from '../src/data/guides.js'
import mods from '../src/data/mods.js'
import { seoConfig } from '../src/seo/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullDomain = seoConfig.fullDomain.replace(/\/+$/, '')

const staticRoutes = [
  { path: '/', name: 'home' },
  { path: '/start', name: 'start' },
  { path: '/wiki', name: 'wiki' },
  { path: '/wiki/talents', name: 'wiki-talents' },
  { path: '/wiki/vibes', name: 'wiki-vibes' },
  { path: '/wiki/skills', name: 'wiki-skills' },
  { path: '/wiki/traits', name: 'wiki-traits' },
  { path: '/wiki/emotions', name: 'wiki-emotions' },
  { path: '/wiki/needs-wants', name: 'wiki-needs-wants' },
  { path: '/wiki/parafolks', name: 'wiki-parafolks' },
  { path: '/wiki/build-tools', name: 'wiki-build-tools' },
  { path: '/wiki/careers', name: 'wiki-careers' },
  { path: '/wiki/relationships', name: 'wiki-relationships' },
  { path: '/wiki/modding', name: 'wiki-modding' },
  { path: '/guides', name: 'guides' },
  { path: '/mods', name: 'mods' },
  { path: '/updates', name: 'updates' },
  { path: '/simulator', name: 'simulator' },
  { path: '/simulator/feature-filter', name: 'simulator-feature-filter' },
  { path: '/simulator/trait-points', name: 'simulator-trait-points' },
  { path: '/simulator/color-palette', name: 'simulator-color-palette' },
  { path: '/simulator/session-roll', name: 'simulator-session-roll' },
  { path: '/map', name: 'map' },
  { path: '/legal/privacy-policy', name: 'legal-privacy' },
  { path: '/legal/terms-of-service', name: 'legal-terms' },
  { path: '/legal/copyright', name: 'legal-copyright' },
  { path: '/legal/about-us', name: 'legal-about' },
  { path: '/legal/contact-us', name: 'legal-contact' },
]

function getPriority(name) {
  return (seoConfig.priorities && seoConfig.priorities[name]) ?? 0.7
}

function getChangefreq(name) {
  return (seoConfig.changefreq && seoConfig.changefreq[name]) ?? 'monthly'
}

function urlNode(loc, lastmod, changefreq, priority) {
  const p = String(Math.round((priority ?? 0.7) * 100) / 100)
  return `  <url>
    <loc>${fullDomain}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${p}</priority>
  </url>`
}

function generate() {
  const lastmod = new Date().toISOString().split('T')[0]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  for (const r of staticRoutes) {
    xml += `\n${urlNode(r.path, lastmod, getChangefreq(r.name), getPriority(r.name))}`
  }

  const guideList = Array.isArray(guides) ? guides : guides.default || []
  for (const g of guideList) {
    if (!g?.addressBar) continue
    const slug = String(g.addressBar).replace(/^\/+|\/+$/g, '')
    const guidePath = `/guides/${slug}`
    const date = g.publishDate ? String(g.publishDate).split('T')[0] : lastmod
    xml += `\n${urlNode(guidePath, date, getChangefreq('guide-detail'), getPriority('guide-detail'))}`
  }

  const modList = Array.isArray(mods) ? mods : mods.default || []
  for (const m of modList) {
    if (!m?.addressBar) continue
    const slug = String(m.addressBar).replace(/^\/+|\/+$/g, '')
    const modPath = `/mods/${slug}`
    const date = m.publishDate ? String(m.publishDate).split('T')[0] : lastmod
    xml += `\n${urlNode(modPath, date, getChangefreq('mod-detail'), getPriority('mod-detail'))}`
  }

  xml += '\n</urlset>'

  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  const publicDir = path.dirname(publicPath)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log('Sitemap written to public/sitemap.xml')

  const count = (xml.match(/<url>/g) || []).length
  console.log(`Total URLs: ${count} (${fullDomain})`)
}

generate()
