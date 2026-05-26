<template>
  <WikiCategoryShell
    title="Paralives Careers and Occupations"
    title-id="wiki-careers-occ-title"
    lead="Every role name on one scroll — cafes, clinics, campuses, studios, shops. Cross-check hires in-game after patches."
    :breadcrumb-parent="{ title: 'Careers & Economy', href: '/wiki/careers' }"
    hero-image="/images/guides/guide02.webp"
  >
    <aside class="wiki-callout wiki-callout--snapshot" aria-label="Early Access snapshot note">
      <p class="wiki-callout__title">Early Access snapshot</p>
      <p class="wiki-callout__body">
        Because Paralives is in Early Access, this directory should be treated as a snapshot of the currently installed
        build rather than a permanent final balance sheet.
      </p>
    </aside>

    <div class="wiki-prose">
      <p class="wiki-occ-lead-tip">
        If a workplace name here doesn&rsquo;t match your client after a patch, trust what you see in-game &mdash;
        readers help keep this list tidy; it isn&rsquo;t a studio press release.
        For Paradimes, bills, and shopping math, see the <a href="/wiki/careers/economy">economy appendix</a>.
      </p>

      <div class="wiki-occ-stats" aria-label="Rough scale of what's listed">
        <div class="wiki-occ-stat">
          <strong>{{ stats.occupations }}</strong>
          <span>Role chips in this round-up</span>
        </div>
        <div class="wiki-occ-stat">
          <strong>{{ stats.workplaces }}</strong>
          <span>Workplaces listed</span>
        </div>
        <div class="wiki-occ-stat">
          <strong>{{ stats.careerFields }}</strong>
          <span>Ways postings get tagged</span>
        </div>
        <div class="wiki-occ-stat">
          <strong>{{ stats.skills }}</strong>
          <span>Skill veins the careers UI cares about</span>
        </div>
      </div>

      <p>
        Stuck on vibes, bosses, perks, rabbit-holes, and whether your Para teleports until travel ships? Stay on the
        <a href="/wiki/careers">Careers & Economy hub</a> — it's the playbook. Wander over here when you want gossip
        energy: exactly which benches, counters, corner offices, or weird hospital IT chairs count as someone's job,
        lumped under the café or hospital you'd walk past on the map.
      </p>
    </div>

    <section id="careers-basics" class="wiki-prose">
      <h2>How hunting a job actually feels</h2>
      <p>
        Paid work and school shifts both count as <strong>occupations</strong> under the hood. You hunt postings, cash
        in application points, juggle calendars, chase promotions, flirt with perks — exactly what the careers article
        explains. What's different on this appendix is naming the stage: here's the cast list taped to each set.
      </p>
      <div class="wiki-occ-mechanics">
        <div v-for="m in mechanics" :key="m.n" class="wiki-occ-mechanic">
          <b>{{ m.n }}</b>
          <h3>{{ m.title }}</h3>
          <p>{{ m.body }}</p>
        </div>
      </div>
    </section>

    <section id="job-filters" class="wiki-prose">
      <h2>Where the filters echo the board</h2>
      <p>
        These tags mirror what you browse when postings get sorted — same spirit as Domains over on the main careers
        page, except here you're glancing sideways while daydreaming a household.
      </p>
      <div class="wiki-occ-fields" aria-label="Named career fields">
        <span v-for="field in careerFields" :key="field" class="wiki-occ-field">{{ field }}</span>
      </div>
    </section>

    <section id="by-workplace" class="wiki-prose">
      <h2>Workplaces & every role</h2>
      <p>
        Roughly {{ stats.occupations }} role labels in this Early Access roundup — skim by sector below. Patches rename
        things sometimes; what's in Paralives on your PC wins.
      </p>
      <div v-for="sector in sectors" :key="sector.name" class="wiki-occ-sector">
        <div class="wiki-occ-sector-head">
          <h3>{{ sector.name }}</h3>
          <span class="wiki-occ-sector-count">{{ sector.roleCount }} roles</span>
        </div>
        <div
          v-for="wp in sector.workplaces"
          :key="wp.name"
          class="wiki-occ-workplace-card"
        >
          <h4 class="wiki-occ-workplace-title">
            {{ wp.name }}
            <span class="wiki-occ-workplace-count">({{ wp.roles.length }})</span>
          </h4>
          <div class="wiki-occ-role-list">
            <span v-for="(role, ri) in wp.roles" :key="`${wp.name}-${ri}`" class="wiki-occ-role">{{ role }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="list-source" class="wiki-prose">
      <h2>When this cheatsheet slips</h2>
      <p>
        Editors sync these names from Early Access guts so new players aren't guessing blindly. Salary math, moods,
        strikes — still tuned in-game. If a café suddenly gains a tenth barista overnight, rejoice, screenshot it, poke
        us politely. Your install beats our static page every time Steam ships a chunky patch.
      </p>
    </section>

    <section id="careers-faq" class="wiki-prose wiki-occ-faq">
      <h2>Quick answers</h2>
      <div v-for="item in faq" :key="item.q" class="wiki-occ-faq-item">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </div>
    </section>

    <div class="wiki-prose">
      <p style="margin-top: 1.75rem">
        Updated May 26, 2026 — unofficial wiki sauce, patched when someone remembers.
      </p>
    </div>

    <template #keep-reading>
      <nav class="wiki-aside-inpage" aria-label="Sections on this page">
        <ul class="wiki-aside-inpage-list">
          <li>
            <a href="#careers-basics" class="wiki-aside-inpage-link">How jobs work</a>
          </li>
          <li>
            <a href="#job-filters" class="wiki-aside-inpage-link">Search tags</a>
          </li>
          <li>
            <a href="#by-workplace" class="wiki-aside-inpage-link">All workplaces</a>
          </li>
          <li>
            <a href="#list-source" class="wiki-aside-inpage-link">When the list drifts</a>
          </li>
          <li>
            <a href="#careers-faq" class="wiki-aside-inpage-link">Q&amp;A</a>
          </li>
        </ul>
      </nav>
    </template>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

/** Role grids — tweak when EA renames workplaces (sync with shipped strings when you can). */

const stats = {
  occupations: 126,
  workplaces: 22,
  careerFields: 11,
  skills: 23,
}

const careerFields = [
  'Software Development',
  'Service',
  'Music',
  'Education',
  'Management',
  'Food',
  'Art',
  'Maintenance',
  'Healthcare',
  'Science',
  'Fitness',
]

const mechanics = [
  {
    n: '01',
    title: 'Hunt postings',
    body: 'Filters nudge similar gigs together; you smash application points onto the flyer you care about.',
  },
  {
    n: '02',
    title: 'Clock juggling',
    body: 'Shifts collide like real chores — the HUD whines when two timelines demand the same butt in a cubicle.',
  },
  {
    n: '03',
    title: 'Good week / harsh week',
    body: 'Mood, coworkers, and growth feed the dreaded performance roll — gravy days bank upgrade chances, flops stack strikes.',
  },
  {
    n: '04',
    title: 'Extras & quirks',
    body: 'Perks braid into perks; similar gigs often share vibes so your nurse can flex into caregiver tangents.',
  },
]

const sectors = [
  {
    name: 'Technology and Creative Studios',
    roleCount: 29,
    workplaces: [
      {
        name: 'Parallel Studios',
        roles: [
          'Gameplay Programmer',
          'Character Artist',
          'Animator',
          'Studio Director',
          'Environment Artist',
          'Engine Programmer',
          'Janitor',
        ],
      },
      {
        name: 'Mapple Web Inc.',
        roles: [
          'Full-Stack Developer',
          'Back-End Developer',
          'Front-End Developer',
          'UX Researcher',
          'UI Artist',
          'Graphic Designer',
          'Creative Director',
          'Technical Director',
          'CEO',
          'Janitor',
        ],
      },
      {
        name: 'ClickWork Industries',
        roles: [
          'Systems Engineer',
          'Cybersecurity Engineer',
          'Digital Marketing Designer',
          'Branding Artist',
          'Creative Director',
          'Technical Director',
          'Product Manager',
          'Operations Director',
          'Chief Happiness Officer',
          'CEO',
          'General Practitioner',
          'Janitor',
        ],
      },
    ],
  },
  {
    name: 'Healthcare and Wellness',
    roleCount: 24,
    workplaces: [
      {
        name: 'Hospital',
        roles: [
          'Hospital Clerk',
          'Janitor',
          'Cook',
          'Receptionist',
          'Caregiver',
          'Nurse',
          'Nursing Supervisor',
          'Midwife',
          'General Practitioner',
          'Dermatologist',
          'Surgeon',
          'Music Therapist',
          'Programmer',
          'Systems Engineer',
        ],
      },
      {
        name: 'Clinic',
        roles: ['Receptionist', 'Janitor', 'Nurse', 'General Practitioner'],
      },
      {
        name: 'Gym',
        roles: [
          'Front Desk Associate',
          'Manager',
          'Janitor',
          'Assistant Trainer',
          'Trainer',
          'Celebrity Trainer',
        ],
      },
    ],
  },
  {
    name: 'Education and Research',
    roleCount: 24,
    workplaces: [
      {
        name: 'Elementary School',
        roles: [
          'Student',
          'Janitor',
          'Teacher',
          'Music Teacher',
          'Physical Education Teacher',
          'Principal',
        ],
      },
      {
        name: 'High School',
        roles: [
          'Student',
          'Janitor',
          'Teacher',
          'Music Teacher',
          'Art Teacher',
          'Science Teacher',
          'Physical Education Teacher',
          'Principal',
        ],
      },
      {
        name: 'University Research Lab',
        roles: [
          'Astronomy Researcher',
          'Astronomy Research Supervisor',
          'Environmental Researcher',
          'Environmental Research Supervisor',
        ],
      },
      {
        name: 'Space Agency',
        roles: [
          'Astronomer',
          'Mission Coordinator',
          'Astronaut Trainer',
          'Astronaut',
          'CEO',
          'Janitor',
        ],
      },
    ],
  },
  {
    name: 'Food, Cafes and Hospitality',
    roleCount: 22,
    workplaces: [
      {
        name: 'Chez Maurice',
        roles: ['Cook', 'Waiter', 'Janitor', 'Manager'],
      },
      {
        name: 'Italian Restaurant',
        roles: ['Cook', 'Waiter', 'Janitor', 'Manager'],
      },
      {
        name: 'Fancy Restaurant',
        roles: [
          'Cook',
          'Assistant Chef',
          'Chef',
          'Waiter',
          'Head Waiter',
          'Janitor',
          'Assistant Manager',
          'Manager',
        ],
      },
      {
        name: 'Crème Café',
        roles: ['Barista', 'Janitor', 'Manager'],
      },
      {
        name: "Sip N' Read Bookshop",
        roles: ['Mixologist', 'Janitor', 'Manager'],
      },
    ],
  },
  {
    name: 'Culture, Music, Retail and Services',
    roleCount: 27,
    workplaces: [
      {
        name: 'Music Production Studio',
        roles: [
          'Studio Receptionist',
          'Audio Engineer',
          'Guitarist',
          'Pianist',
          'Lead Guitarist',
          'Lead Pianist',
          'Manager',
          'Multi-Instrumentalist',
        ],
      },
      {
        name: 'Museum/Library',
        roles: [
          'Receptionist',
          'Tour Guide',
          'Guard',
          'Manager',
          'Janitor',
          'Researcher',
          'Curator',
        ],
      },
      {
        name: 'Plant Shop',
        roles: ['Store Clerk', 'Florist', 'Manager'],
      },
      {
        name: 'Hair Salon',
        roles: ['Store Clerk', 'Hairdresser', 'Manager'],
      },
      {
        name: 'Antique Shop',
        roles: ['Store Clerk', 'Manager'],
      },
      {
        name: 'General Store',
        roles: ['Store Clerk', 'Manager'],
      },
      {
        name: "Clothing Store L'Armoire",
        roles: ['Store Clerk', 'Manager'],
      },
    ],
  },
]

const faq = [
  {
    q: 'How many jobs ship in EA right now?',
    a: 'This rundown tracks 126 role slots counting students plus paying gigs — cribbed during an Early Access build. Steam later might add or shave rows; shrug and trust your HUD.',
  },
  {
    q: 'Can mix-and-match vibes exist?',
    a: 'Yep. Postings flirt with broader tags — your barista saga can rhyme with gigs filed under hospitality and customer service chaos.',
  },
  {
    q: 'Promotion sounds grindy?',
    a: 'You stack upgrade points across happy-ish shifts and pick cards that widen pay bumps or perk paths before leaping sideways to fancier postings.',
  },
  {
    q: 'Twin careers possible?',
    a: 'If the calendar agrees. Clashing mandatory hours yell at you before payroll pretends otherwise.',
  },
]
</script>
