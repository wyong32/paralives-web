<template>
  <WikiCategoryShell
    title="Paralives Skills — Levels, Knowledge &amp; Talents"
    title-id="wiki-skills-leveling-title"
    lead="Verified skill registry, Knowledge families, XP tuning, training routes, career references, Talents and Early Access data limits — a data appendix next to our Skills hub."
    :breadcrumb-parent="{ title: 'Skills', href: '/wiki/skills' }"
    hero-image="/images/guides/guide03-03.webp"
  >
    <aside class="wiki-callout wiki-callout--snapshot" aria-label="Data verification notice">
      <p class="wiki-callout__title">Verification scope</p>
      <p class="wiki-callout__body">
        Based on installed <code>Skills.setting</code>, <code>Translations.setting</code>,
        <code>Interactions.setting</code>, <code>Personalities.setting</code> and
        <code>Occupations.setting</code>. Entries explicitly disabled or present only as translation text are labelled
        separately rather than presented as confirmed playable skills.
      </p>
    </aside>

    <div class="wiki-prose">
      <div class="wiki-skills-stats" aria-label="Verified Paralives skill system summary">
        <div v-for="s in stats" :key="s.label" class="wiki-skills-stat">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
        </div>
      </div>

      <p>
        Need the short Live Mode primer first?
        <a href="/wiki/skills">Paralives Skills hub</a> covers level 20, Knowledge cross-training and everyday slowdowns.
        For job names that reference these skills, see
        <a href="/wiki/careers/occupations">Careers and Occupations</a>.
      </p>
    </div>

    <section id="system" class="wiki-prose">
      <h2>How the Paralives skills system works</h2>
      <p>
        Paralives separates practical skills such as <strong>Programming</strong> or <strong>Exercise</strong> from
        broader <strong>Knowledge</strong> categories. The interface tooltip states that improving a skill beneath a
        Knowledge category also improves that Knowledge, while increasing Knowledge speeds the learning of its linked
        skills.
      </p>
      <div class="wiki-skills-mechanics">
        <div v-for="m in mechanics" :key="m.title" class="wiki-skills-mechanic">
          <strong>{{ m.title }}</strong>
          <p>{{ m.body }}</p>
        </div>
      </div>
    </section>

    <section id="leveling" class="wiki-prose">
      <h2>Verified leveling and experience settings</h2>
      <p>
        The extracted skill settings expose the tuning values below. They show the shape of progression, but avoid
        assuming an exact visible level curve unless the in-game build exposes every calculation step.
      </p>
      <table class="wiki-data-table wiki-skills-table">
        <thead>
          <tr>
            <th scope="col">Setting</th>
            <th scope="col">Verified value</th>
            <th scope="col">What it means in practice</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in levelingRows" :key="row.setting">
            <th scope="row">{{ row.setting }}</th>
            <td>{{ row.value }}</td>
            <td>{{ row.meaning }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="directory" class="wiki-prose">
      <h2>Complete registered skills directory</h2>
      <p>
        The current <code>AllSkills</code> registry contains 23 entries. Eight are Knowledge roots, thirteen are
        activity or subject skills, and two are early-life development skills. Max levels are shown only when an
        explicit value is present in the extracted record.
      </p>
      <table class="wiki-data-table wiki-skills-table">
        <thead>
          <tr>
            <th scope="col">Knowledge category</th>
            <th scope="col">Linked skills</th>
            <th scope="col">Explicit max level</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in directoryRows" :key="row.knowledge">
            <th scope="row">{{ row.knowledge }}</th>
            <td>{{ row.skills }}</td>
            <td>{{ row.max }}</td>
            <td>
              <span
                class="wiki-skills-status"
                :class="row.enabled ? 'wiki-skills-status--on' : 'wiki-skills-status--off'"
              >
                {{ row.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Important Early Access note:</strong> <em>Baking</em> has name and description strings in the
        translation file, but it does not appear in the 23-entry <code>Skills.setting</code> registry. It is therefore
        not counted as a confirmed registered skill on this page.
      </p>
    </section>

    <section id="child-skills" class="wiki-prose">
      <h2>Child and toddler development skills</h2>
      <p>
        Two registered skills sit outside the Knowledge tree and are aimed at early development. These matter for
        family play rather than job specialization.
      </p>
      <table class="wiki-data-table wiki-skills-table">
        <thead>
          <tr>
            <th scope="col">Skill</th>
            <th scope="col">Verified configuration</th>
            <th scope="col">Interface description or role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in childSkillRows" :key="row.skill">
            <th scope="row">{{ row.skill }}</th>
            <td>{{ row.config }}</td>
            <td>{{ row.role }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="training" class="wiki-prose">
      <h2>How to improve skills</h2>
      <p>
        Where the registered skill record links to a specific help prompt, that method is shown below. Generic study
        prompts indicate that the current data directs players toward computer learning rather than documenting a unique
        practical interaction.
      </p>
      <div class="wiki-skills-routes">
        <div v-for="route in trainingRoutes" :key="route.title" class="wiki-skills-route">
          <h3>{{ route.title }}</h3>
          <p v-html="route.body" />
        </div>
      </div>
    </section>

    <section id="careers" class="wiki-prose">
      <h2>Which skills matter for careers?</h2>
      <p>
        The occupation registry includes 126 occupation entries and assigns <code>UsefulSkills</code> to many of them.
        The counts below are references in those occupation definitions, not a promise that each skill is required for
        every applicant.
      </p>
      <table class="wiki-data-table wiki-skills-table">
        <thead>
          <tr>
            <th scope="col">Skill or Knowledge</th>
            <th scope="col">Occupation references</th>
            <th scope="col">Examples found in data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in careerRows" :key="row.skill">
            <th scope="row">{{ row.skill }}</th>
            <td>{{ row.count }}</td>
            <td>{{ row.examples }}</td>
          </tr>
        </tbody>
      </table>
      <p>
        For the complete job directory, salary-backed tracks and application mechanics, continue to
        <a href="/wiki/careers/occupations">Paralives Careers and Occupations</a> or the
        <a href="/wiki/careers">Careers &amp; Economy hub</a>.
      </p>
    </section>

    <section id="talents" class="wiki-prose">
      <h2>Talents and skill-focused personalities</h2>
      <p>
        Skills are not isolated from personality design. The ParaMaker image and the extracted
        <code>Personalities.setting</code> data show a Talent category containing
        <strong>Jack-of-All-Trades</strong>, <strong>Music</strong>, <strong>Fitness</strong>,
        <strong>Food</strong>, <strong>Technology</strong>, <strong>Visual Arts</strong> and
        <strong>Good at Nothing</strong>. The specialist Talent trees define evolution choices such as Knowledge Is
        Power and Great Tutor branches.
      </p>
      <figure class="wiki-skills-figure">
        <img
          :src="talentsFigureSrc"
          alt="Paralives ParaMaker personality screen showing talent choices including Music, Fitness, Food, Technology and Visual Arts"
          width="680"
          height="510"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div class="wiki-skills-talents">
        <div v-for="tip in talentTips" :key="tip.title" class="wiki-skills-talent">
          <h3>{{ tip.title }}</h3>
          <p>{{ tip.body }}</p>
        </div>
      </div>
      <p>
        See also the <a href="/wiki/talents">Talents wiki</a> for Paramaker picks and Live Mode perks.
      </p>
    </section>

    <section id="strategy" class="wiki-prose">
      <h2>Recommended beginner skill plan</h2>
      <ol class="wiki-skills-steps">
        <li v-for="step in beginnerPlan" :key="step">{{ step }}</li>
      </ol>
    </section>

    <section id="data-notes" class="wiki-prose">
      <h2>Data notes and confirmed limits</h2>
      <table class="wiki-data-table wiki-skills-table">
        <thead>
          <tr>
            <th scope="col">Finding</th>
            <th scope="col">How to read it safely</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in dataNotes" :key="row.finding">
            <th scope="row">{{ row.finding }}</th>
            <td>{{ row.reading }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="related" class="wiki-prose">
      <h2>Related Paralives guides</h2>
      <div class="wiki-skills-related">
        <div v-for="card in relatedLinks" :key="card.title" class="wiki-skills-related-card">
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
          <p><a :href="card.href">{{ card.linkLabel }}</a></p>
        </div>
      </div>
    </section>

    <section id="faq" class="wiki-prose wiki-skills-faq">
      <h2>Paralives skills FAQ</h2>
      <div v-for="item in faq" :key="item.q" class="wiki-skills-faq-item">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </div>
    </section>

    <div class="wiki-prose">
      <p class="wiki-skills-updated">
        Updated May 27, 2026 — unofficial reference based on locally installed Paralives Early Access settings data.
        Verify in-game after Steam updates.
      </p>
    </div>

    <template #keep-reading>
      <nav class="wiki-aside-inpage" aria-label="Sections on this page">
        <ul class="wiki-aside-inpage-list">
          <li><a href="#system" class="wiki-aside-inpage-link">Skill system</a></li>
          <li><a href="#leveling" class="wiki-aside-inpage-link">XP settings</a></li>
          <li><a href="#directory" class="wiki-aside-inpage-link">Skill directory</a></li>
          <li><a href="#child-skills" class="wiki-aside-inpage-link">Child skills</a></li>
          <li><a href="#training" class="wiki-aside-inpage-link">Training methods</a></li>
          <li><a href="#careers" class="wiki-aside-inpage-link">Career links</a></li>
          <li><a href="#talents" class="wiki-aside-inpage-link">Talents</a></li>
          <li><a href="#strategy" class="wiki-aside-inpage-link">Beginner plan</a></li>
          <li><a href="#data-notes" class="wiki-aside-inpage-link">Data notes</a></li>
          <li><a href="#related" class="wiki-aside-inpage-link">Related guides</a></li>
          <li><a href="#faq" class="wiki-aside-inpage-link">FAQ</a></li>
        </ul>
      </nav>
    </template>

    <template #aside>
      <section class="wiki-aside-panel">
        <h2 class="wiki-aside-title">Quick facts</h2>
        <ul class="wiki-aside-checklist">
          <li v-for="fact in quickFacts" :key="fact">{{ fact }}</li>
        </ul>
      </section>
    </template>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const talentsFigureSrc = '/images/guides/guide03-04.webp'

const stats = [
  { value: '23', label: 'Registered skill entries' },
  { value: '8', label: 'Knowledge categories' },
  { value: '4 / 3', label: 'Normal / slow XP units per hour' },
  { value: '2', label: 'Entries marked disabled' },
]

const mechanics = [
  {
    title: 'Specialized skills',
    body: 'Actions such as playing guitar, exercising or painting progress a focused activity skill.',
  },
  {
    title: 'Knowledge categories',
    body: 'Music, Food, Fitness, Technology and similar roots connect related learning paths.',
  },
  {
    title: 'Career relevance',
    body: 'Occupation definitions declare useful skills that contribute to applications and work paths.',
  },
]

const levelingRows = [
  { setting: 'Default skill level', value: '1', meaning: 'Skills begin from a defined baseline when available to a Para.' },
  { setting: 'Base experience point cost', value: '10', meaning: 'A base progression-cost parameter exists in the skill system.' },
  { setting: 'Subsequent level extra XP', value: '8', meaning: 'Later level requirements are configured to increase.' },
  { setting: 'Level-up increment', value: '1.2', meaning: 'An additional level-scaling parameter is configured.' },
  { setting: 'Standard gain rate', value: '4 units/hour', meaning: 'The configured normal learning-speed value.' },
  { setting: 'Slow gain rate', value: '3 units/hour', meaning: 'The configured slowed learning-speed value.' },
  { setting: 'Knowledge XP factor', value: '0.25', meaning: 'A dedicated factor governs Knowledge experience linkage.' },
  { setting: 'Knowledge bonus per level', value: '0.25', meaning: 'Knowledge levels are configured to improve related learning.' },
]

const directoryRows = [
  { knowledge: 'Music', skills: 'Piano, Guitar, Triangle', max: '20 for Knowledge root', status: 'Registered', enabled: true },
  { knowledge: 'Food', skills: 'Cooking', max: '20 for Knowledge root', status: 'Registered', enabled: true },
  { knowledge: 'Fitness', skills: 'Exercise, Dance', max: '20 for Knowledge root', status: 'Registered', enabled: true },
  { knowledge: 'Technology', skills: 'Programming, Graphic Design', max: '20 for Knowledge root', status: 'Registered', enabled: true },
  { knowledge: 'Art', skills: 'Painting', max: 'Not declared in record', status: 'Registered', enabled: true },
  { knowledge: 'Repair', skills: 'Standalone Knowledge entry', max: 'Not declared in record', status: 'Registered', enabled: true },
  { knowledge: 'Science', skills: 'Biology, Surgery, Astronomy', max: 'Not declared in record', status: 'Registered', enabled: true },
  {
    knowledge: 'Outdoorsiness',
    skills: 'Fishing',
    max: '20 for Knowledge root',
    status: 'Explicitly disabled',
    enabled: false,
  },
]

const childSkillRows = [
  {
    skill: 'Language',
    config: 'Maximum level 10; restricted life stages defined',
    role: 'Babies and toddlers learn to talk; the interface points players toward Together Cards in a group.',
  },
  {
    skill: 'Potty',
    config: 'Maximum level 2; restricted requirements defined',
    role: 'A dedicated potty-use skill exists for early-life routines.',
  },
]

const trainingRoutes = [
  {
    title: 'Music',
    body: '<strong>Guitar:</strong> practice and play songs on the guitar.<br><strong>Piano:</strong> practice and play songs on the piano.<br><strong>Triangle:</strong> play the triangle.',
  },
  {
    title: 'Fitness',
    body: '<strong>Exercise:</strong> do floor exercises, use exercise machines, run or jog.<br><strong>Dance:</strong> dance anywhere.',
  },
  {
    title: 'Technology',
    body: '<strong>Programming</strong> and <strong>Graphic Design</strong> both use the prompt: improve it directly on the computer.',
  },
  {
    title: 'Art',
    body: '<strong>Painting:</strong> improve it by painting on an easel. The UI also contains a Painting Styles label.',
  },
  {
    title: 'Knowledge and Cooking',
    body: 'Music, Food, Fitness, Technology, Art, Science and Cooking currently point to learning about the subject on the computer.',
  },
  {
    title: 'Repair',
    body: 'The registered Repair record uses the generic computer-learning prompt; a separate localized repair tip also mentions fixing broken items.',
  },
]

const careerRows = [
  { skill: 'Programming', count: '17', examples: 'Gameplay Programmer, Engine Programmer and related technical roles' },
  { skill: 'Repair', count: '15', examples: 'School and restaurant janitor roles, maintenance-oriented work' },
  { skill: 'Graphic Design', count: '14', examples: 'Character Artist, Animator and Graphic Designer roles' },
  { skill: 'Art', count: '11', examples: 'Character Artist, Animator and environment-art paths' },
  { skill: 'Music', count: '10', examples: 'Music teachers, musician roles and music production work' },
  { skill: 'Technology', count: '9', examples: 'Programmer and technical career paths' },
  { skill: 'Food / Cooking', count: '8 each', examples: 'Restaurant staff, cooks and chef-related paths' },
  { skill: 'Exercise / Fitness', count: '6 / 4', examples: 'Gym trainers and physical education teaching' },
  { skill: 'Biology / Science / Surgery', count: '5 / 2 / 1', examples: 'Medical and environmental research paths' },
  { skill: 'Piano / Guitar / Triangle', count: '3 / 3 / 1', examples: 'Music Production Studio roles' },
  { skill: 'Dance / Painting', count: '2 / 1', examples: 'Dancing roles and High School Art Teacher' },
]

const talentTips = [
  {
    title: 'Specialize early',
    body: 'A category Talent is a sensible match when a planned career and household hobby share the same Knowledge family.',
  },
  {
    title: 'Stay flexible',
    body: 'Jack-of-All-Trades is represented separately from domain-specific Talents for broader skill-focused stories.',
  },
  {
    title: 'Watch evolutions',
    body: 'Specialist Talent definitions contain later branch choices, so initial identity can continue evolving through play.',
  },
]

const beginnerPlan = [
  'Pick one practical skill that supports everyday play, such as Cooking, Exercise or Repair.',
  'Pair it with a career-facing focus: Programming or Graphic Design for technology paths, Cooking for restaurants, or Painting for art-oriented play.',
  'Use linked activities instead of scattering time across every category; Knowledge makes related training more valuable over time.',
  'Check job offers for useful-skill alignment before treating a new career as the household income plan.',
  'For family households, remember that Language and Potty are their own development priorities rather than adult career skills.',
  'Treat disabled or translation-only entries as future-facing data, not as goals your current save must be able to complete.',
]

const dataNotes = [
  {
    finding: 'Outdoorsiness and Fishing',
    reading: 'Both are present in the skill registry but explicitly have Enabled:False.',
  },
  {
    finding: 'Baking strings',
    reading: 'Translation entries exist, but no Baking item appears in the active 23-entry skill registry.',
  },
  {
    finding: 'Undeclared max levels',
    reading: 'This appendix does not assign a cap when an individual record does not declare one.',
  },
  {
    finding: 'Repair training text',
    reading: 'A localized fixing-items prompt exists, while the current registered record points to generic computer study.',
  },
  {
    finding: 'Early Access balancing',
    reading: 'Experience values, enabled flags and career assignments may change with later builds.',
  },
]

const relatedLinks = [
  {
    title: 'Beginner tips',
    desc: 'Learn everyday gameplay priorities, routines and mistakes to avoid.',
    href: '/guides/paralives-beginners-guide-tips-mistakes-to-avoid',
    linkLabel: 'Read beginner guide →',
  },
  {
    title: 'Careers and occupations',
    desc: 'Explore the complete occupation directory and job progression structure.',
    href: '/wiki/careers/occupations',
    linkLabel: 'Open occupations appendix →',
  },
  {
    title: 'Economy and bills',
    desc: 'Plan household money while investing time in skills and career routes.',
    href: '/wiki/careers/economy',
    linkLabel: 'Open economy appendix →',
  },
  {
    title: 'Build Mode starter guide',
    desc: 'Create a functional starter home suited to cooking, training and creative objects.',
    href: '/guides/paralives-build-mode-beginner-building-guide',
    linkLabel: 'Read Build Mode guide →',
  },
]

const faq = [
  {
    q: 'How many skills are registered in Paralives?',
    a: 'The installed Early Access Skills.setting registry contains 23 entries. Two of those, Outdoorsiness and Fishing, are explicitly marked disabled.',
  },
  {
    q: 'What is a Knowledge skill in Paralives?',
    a: 'Knowledge is a broader parent category. Current interface text says linked specialist skills improve their Knowledge, while Knowledge improves learning speed for skills beneath it.',
  },
  {
    q: 'Is Baking a confirmed playable skill?',
    a: 'Not in the current extracted skill registry. Baking translation text exists, but Baking is not one of the 23 registered skill entries verified for this appendix.',
  },
  {
    q: 'Which skills have the strongest career connections?',
    a: 'By UsefulSkills references in the occupation data, Programming, Repair, Graphic Design, Art, Music and Technology appear most often among current occupation entries.',
  },
  {
    q: 'How can my Para improve skills?',
    a: 'Verified prompts include practicing guitar or piano, playing triangle, painting on an easel, doing exercise or dancing, and improving Programming or Graphic Design directly on a computer.',
  },
]

const quickFacts = [
  'Knowledge boosts linked learning',
  'Music has three linked skills',
  'Technology feeds many careers',
  'Language caps at level 10',
  'Potty caps at level 2',
  'Fishing is marked disabled',
]
</script>

<style scoped>
.wiki-skills-updated {
  margin-top: 1.5rem !important;
  font-size: 0.88rem !important;
  color: var(--color-ink-muted) !important;
}

.wiki-skills-figure {
  margin: 1.25rem 0;
}

.wiki-skills-figure img {
  width: 100%;
  border-radius: var(--radius-md);
  border: 2px solid color-mix(in srgb, var(--color-sage) 22%, transparent);
}
</style>
