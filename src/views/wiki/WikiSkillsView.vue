<template>
  <WikiCategoryShell
    title="Paralives Skills"
    lead="Level hobbies and chores up to 20 — with Knowledge families that reward switching instruments or careers smartly."
  >
    <div class="wiki-prose">
      <h2>Skills in plain terms</h2>
      <p>
        Skills are how good your Para is at a specific activity: cooking, guitar, exercising, and whatever else
        ships in your patch. You raise them by doing the thing — using the right object, repeating the action,
        living in Live Mode. There is no sign of a cap on how many skills one character can juggle.
      </p>
      <p>
        Jobs care about skills through
        <a href="/wiki/careers">application points</a>, but plenty of skills are just for home
        life and fun. Do not only grind what your boss lists.
      </p>

      <h2>Level 20 and the white arrows</h2>
      <p>
        Each skill tops out at <strong>level 20</strong>. The bar fills as you practice; little white arrows hint
        whether learning is fast or crawling right now. Developers have said openly that
        <strong>not every level pays out a reward yet</strong> — some tiers are placeholders while Early Access
        fills in. Do not assume level 15 always unlocks a recipe or animation.
      </p>
      <p>
        Small everyday actions can tick skills too. Running downstairs has been shown to nudge exercising briefly —
        worth noticing if you like organic progress instead of dedicated grind sessions.
      </p>

      <h2>Knowledge — the family bonus</h2>
      <p>
        Knowledge is the umbrella over related skills. Music Knowledge is not “can play piano”; it is “gets music.”
        Level guitar and you make piano (and the next instrument) easier. Technology Knowledge helps software-flavored
        work even if you have not maxed every desk skill listed on a job board.
      </p>
      <p>
        You do not perform Knowledge like a skill in daily life. It sits in the background and speeds sibling skills
        while also helping job applications when you are short on one listed requirement but strong in the field.
      </p>

      <h2>What slows you down</h2>
      <p>
        Paramaker <a href="/wiki/talents">talent</a> picks still matter — Food talent and Cooking
        go hand in hand. Bad moods from skipped
        <a href="/wiki/needs-wants">needs</a> drag practice; fix hunger or sleep before a long
        painting session if the arrows look weak. Emotions tie in both ways — stress from work makes skill grind
        worse, and failing skills can feed stress.
      </p>

      <h2>Kids and kitchens</h2>
      <p>
        Toddlers and children will not mirror adult skill ceilings — especially physical skills. Dangerous kitchen
        stuff is meant to happen with supervision or group actions, not a solo child on the stove. Plan family
        cooking as a group command if you role-play safety.
      </p>
    </div>

    <h2 class="wiki-section-heading">Skills spotted in previews</h2>
    <p class="wiki-table-note">
      Not the final EA list — some skills were shelved until they have enough gameplay hooked up.
    </p>
    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Skill</th>
          <th scope="col">Knowledge</th>
          <th scope="col">Player notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in skillRows" :key="s.name">
          <th scope="row">{{ s.name }}</th>
          <td>{{ s.knowledge }}</td>
          <td>{{ s.note }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Coming later in EA</h2>
      <p>
        Gardening and fishing sit on the during-EA Live Mode list, not day one. When they land, expect new outdoor
        skills and objects to practice on. Our <a href="/updates">updates page</a> tracks the
        official split if you are planning a farm save on launch week.
      </p>

      <h2>Mods</h2>
      <p>
        You can add skills through Workshop mods, but they must slot into an existing Knowledge family — you cannot
        invent a brand-new Knowledge category without a deeper mod. See <a href="/wiki/modding">modding</a>.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const skillRows = [
  {
    name: 'Cooking',
    knowledge: 'Food',
    note: 'Day-one meals at home; Food talent speeds the bar. Core for hunger management.',
  },
  {
    name: 'Guitar',
    knowledge: 'Music',
    note: 'Classic cross-training example — feeds Music Knowledge for other instruments.',
  },
  {
    name: 'Piano',
    knowledge: 'Music',
    note: 'Easier if someone in the house already built Music Knowledge.',
  },
  {
    name: 'Graphic Design',
    knowledge: 'Art / Technology',
    note: 'Shown in development streams; pair with desk careers when postings appear.',
  },
  {
    name: 'Exercising',
    knowledge: 'Fitness',
    note: 'Physical grind; watch hygiene after workouts. Life-stage limits for kids.',
  },
  {
    name: 'Running',
    knowledge: 'Fitness',
    note: 'Can tick from everyday movement, not only gym objects.',
  },
  {
    name: 'More in development',
    knowledge: 'Varies',
    note: 'The team has teased additional skills and Knowledge types still being slotted.',
  },
]
</script>
