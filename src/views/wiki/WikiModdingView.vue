<template>
  <WikiCategoryShell
    title="Paralives Modding"
    lead="Built-in tools, Steam Workshop, and free game updates — how players extend Paralives without waiting on DLC."
  >
    <div class="wiki-prose">
      <h2>Mods are part of the plan</h2>
      <p>
        Paralives ships with in-game mod tools on the day-one Live Mode list. Early Access will still be figuring out
        workflows, but the direction is clear: community content through Steam Workshop, not paid DLC packs for core
        features. Expect furniture drops, personality packs, animations, and gameplay tweaks as creators learn the
        pipeline.
      </p>

      <h2>Workshop in practice</h2>
      <p>
        Subscribe like any Steam game — objects, traits, build pieces, sometimes full Parafolk with genetics embedded.
        Our <a href="/mods">mods hub</a> collects community write-ups when authors share them; still
        read patch notes before you load a year-old save.
      </p>

      <h2>What modders can touch</h2>
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

      <h2>Saves and broken traits</h2>
      <p>
        Trait packs and UI mods are popular — also the first things to break on a new patch. If wants stop refreshing
        or careers freeze, disable recent personality mods and test a backup save. One broken custom emotion can color
        every social roll wrong until you remove it.
      </p>

      <h2>Sharing Parafolks</h2>
      <p>
        Workshop exports carry genetics. Downloaded Parafolks bring inheritable looks; you still choose personality when
        they join your household. Hairstyle mods can flag hair texture (straight, wavy, curly, coily) so kids inherit
        correctly. Accessory mods can add genetic bits like custom ears. Ambitious creators have talked about whole
        new “species” with their own rules — vampires, fairies, etc. — using modded genetics and needs.
      </p>

      <h2>Build sharing limits</h2>
      <p>
        Individual build objects are easy Workshop fodder. You can export buildings, but
        <strong>whole lots are not fully exportable yet</strong> — expect that to improve during EA.
      </p>

      <h2>Relationship mods</h2>
      <p>
        You can add custom <a href="/wiki/relationships">relationship labels</a>, but you cannot rip out
        and replace the core categories (family, romance, enemies, and the rest). Plan modded labels as additions, not
        a full rewrite of social structure.
      </p>

      <h2>Money model for players</h2>
      <p>
        The studio has said major content is meant to arrive through free updates across roughly two years of Early
        Access to 1.0, with mods filling gaps in between. That does not mean every mod is safe or maintained — treat
        Workshop like any community folder: backups, load order discipline, read comments.
      </p>

      <div class="wiki-callout">
        Before you mod-replace a vanilla system, check our <a href="/updates">roadmap</a> so you are not
        duplicating a feature the base game is about to ship.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const modSystems = [
  { system: 'Vibes, talents, social perks', notes: 'New personality picks and perks.' },
  { system: 'Emotions & needs', notes: 'Custom moods and need bars.' },
  { system: 'Skills', notes: 'Extra skills, but they must slot into an existing Knowledge family.' },
  { system: 'Careers', notes: 'Custom jobs, postings, and workplaces.' },
  { system: 'Relationship labels', notes: 'New labels; core categories stay vanilla.' },
  { system: 'Genetics', notes: 'Different inheritance, occult bodies, hairstyle texture flags.' },
  { system: 'Build objects', notes: 'Furniture and decor; partial building sharing today.' },
]
</script>
