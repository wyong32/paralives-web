/** Wiki sidebar & cross-links — order matches hub cards */
export const wikiTopics = [
  { slug: 'talents', title: 'Talents', tag: 'Paramaker' },
  { slug: 'vibes', title: 'Vibes', tag: 'Personality' },
  { slug: 'skills', title: 'Skills', tag: 'Live Mode' },
  { slug: 'traits', title: 'Stats & Personality', tag: 'Paramaker' },
  { slug: 'emotions', title: 'Emotions', tag: 'Live Mode' },
  { slug: 'needs-wants', title: 'Needs & Wants', tag: 'Live Mode' },
  { slug: 'parafolks', title: 'Parafolks & Genetics', tag: 'Family' },
  { slug: 'build-tools', title: 'Build Mode', tag: 'Build' },
  { slug: 'careers', title: 'Careers & Economy', tag: 'Live Mode' },
  { slug: 'relationships', title: 'Relationships', tag: 'Social' },
  { slug: 'modding', title: 'Modding', tag: 'Community' },
]

export const wikiQuickLinks = [
  { to: '/wiki', label: 'All wiki topics' },
  { to: '/start', label: 'Start guide' },
  { to: '/updates', label: 'EA roadmap' },
  { to: '/map', label: 'Melino map' },
  { to: '/simulator', label: 'Simulator tools' },
]

export function getWikiSlugFromPath(path) {
  const m = path.match(/^\/wiki\/([^/]+)/)
  return m ? m[1] : null
}

export function getWikiNeighbors(slug) {
  const index = wikiTopics.findIndex((t) => t.slug === slug)
  if (index < 0) return { prev: null, next: null, others: wikiTopics }
  return {
    prev: index > 0 ? wikiTopics[index - 1] : null,
    next: index < wikiTopics.length - 1 ? wikiTopics[index + 1] : null,
    others: wikiTopics.filter((t) => t.slug !== slug),
  }
}
