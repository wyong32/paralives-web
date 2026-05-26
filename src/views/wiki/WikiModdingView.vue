<template>
  <WikiCategoryShell
    title="Paralives Modding"
    lead="Steam Workshop community packs, in-game tools, and how Early Access frames paid DLC versus free patches — plus how this wiki ties into the curated Mods list."
    hero-image="/images/mods/mod01.webp"
  >
    <div class="wiki-prose">
      <h2>Mods in one sentence</h2>
      <p>
        <strong>Mods</strong> are player- or creator-made additions you subscribe to (usually through
        <strong>Steam Workshop</strong> and the <strong>in-game mod UI</strong>) — furniture packs, gameplay tweaks,
        Paramaker presets, genetics-friendly accessories, UI helpers, and more. They complement the base game; they do
        not replace reading patch notes or backing up saves.
      </p>

      <h2>Paid DLC vs free updates (official stance)</h2>
      <p>
        Paralives Studio has publicly described <strong>no paid DLC</strong> roadmap for slicing core life-sim depth
        into premium packs, and instead shipping <strong>free updates across several years</strong> of Early Access on
        the way toward <strong>1.0</strong>, with mods filling creative gaps between patches. Pricing and storefront
        details still live on <strong>Steam</strong>; if that policy ever changes, the developer announcement and store
        page win over anything on this fan wiki.
      </p>
      <p>
        On this site, the <a href="/updates">Roadmap &amp; Early Access status</a> page tracks the same public
        day-one vs during-EA feature lists we reference here — use it before you assume a missing feature “needs a
        mod forever.”
      </p>

      <h2>Steam Workshop &amp; in-game tools</h2>
      <p>
        Early Access was pitched with <strong>in-game modding tools</strong> and <strong>Workshop integration</strong>
        so you can browse, subscribe, and manage packs like many other Steam titles. Exact menus and labels can shift
        per build; after every patch, confirm what your client shows and re-test critical mods.
      </p>
      <ul>
        <li>
          <strong>Subscribe on Steam</strong> when you want packs tied to your account — typical for furniture, CAS
          pieces, and scripted gameplay helpers.
        </li>
        <li>
          <strong>Use the in-game browser</strong> for day-to-day enable/disable without leaving Paralives (wording
          varies by version).
        </li>
        <li>
          <strong>Own the game on Steam</strong> for normal Workshop access; without a licence, storefront limits may
          block browsing or downloads.
        </li>
      </ul>

      <div class="wiki-callout">
        <p>
          <strong>Browse our listings:</strong> the
          <a href="/mods">Paralives Mods</a> page is this wiki’s <em>curated</em> directory — short articles, version
          notes, and Workshop links when authors provide them. It is <strong>not</strong> a complete mirror of the
          entire Workshop; use Steam for exhaustive search and comments.
        </p>
      </div>

      <h2>What modders usually change</h2>
      <p>
        The table below is a practical summary of where custom content shows up most often. Game updates can retire or
        restrict hooks — treat it as orientation, not a contract.
      </p>
      <table class="wiki-data-table">
        <thead>
          <tr>
            <th scope="col">System</th>
            <th scope="col">Typical mods</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in modSystems" :key="row.system">
            <th scope="row">{{ row.system }}</th>
            <td>{{ row.notes }}</td>
          </tr>
        </tbody>
      </table>

      <h2>Saves, conflicts, and patch day</h2>
      <p>
        Trait packs, emotions, and UI tweaks are popular — they are also the first to throw errors after a breaking
        patch. If wants stop ticking, careers stall, or moodlets look wrong, disable the most recent installs, load a
        backup save, and reintroduce mods in small batches.
      </p>

      <h2>Sharing Parafolks through Workshop</h2>
      <p>
        Workshop exports can carry genetics. Downloaded households often keep inheritable visuals; personality may still
        be chosen when they enter your save. Hairstyle mods can expose texture categories (straight, wavy, curly, coily)
        so children inherit convincingly; ambitious projects discuss occult archetypes layered on genetics and needs.
      </p>

      <h2>Builds and lots</h2>
      <p>
        Individual objects and room sets ship easily via Workshop. Sharing <strong>entire playable lots</strong> was
        still described as evolving during Early Access — expect workflow improvements rather than assuming “one-click
        full town port” on day one.
      </p>

      <h2>Relationship mods vs core social</h2>
      <p>
        You can bolt on custom <a href="/wiki/relationships">relationship labels</a>; you cannot silently delete the core
        family / romance / rival scaffolding the mode expects. Design additions as overlays, not full replacements for
        the social graph.
      </p>

      <div class="wiki-callout">
        Before you permanently mod over a vanilla system, skim <a href="/updates">updates</a> — you may be duplicating a
        feature shipping in the next free patch.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const modSystems = [
  { system: 'Vibes, talents, social perks', notes: 'New personality picks and perks.' },
  { system: 'Emotions & needs', notes: 'Custom moods and need bars.' },
  { system: 'Skills', notes: 'Extra skills that still sit inside an existing Knowledge family.' },
  { system: 'Careers', notes: 'Custom jobs, postings, and workplaces.' },
  { system: 'Relationship labels', notes: 'New labels; core categories stay vanilla.' },
  { system: 'Genetics & CAS', notes: 'Inheritance tweaks, accessories, texture flags, stylized species ideas.' },
  { system: 'Build & Buy', notes: 'Furniture and decor; whole-lot sharing still maturing during EA.' },
]
</script>
