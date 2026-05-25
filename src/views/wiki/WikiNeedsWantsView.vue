<template>
  <WikiCategoryShell
    title="Paralives Needs & Wants"
    lead="Six bars that hurt if you ignore them, optional wants you pick from moods, and longer goals the game suggests."
  >
    <div class="wiki-prose">
      <h2>Three things in the thought panel</h2>
      <p>
        Needs, wants, and goals all show what a Para is thinking about, but they play differently.
        <strong>Needs</strong> are body-and-mind bars — skip them and performance tanks.
        <strong>Wants</strong> are short wishes you choose from
        <RouterLink to="/wiki/emotions">emotion cards</RouterLink>; ignoring them is fine, completing them earns
        personality points.
        <strong>Goals</strong> are longer arcs the game proposes (move towns, buy a washer, meet someone new) — you
        do not pick them from emotions.
      </p>
      <p>
        Early builds used sentence lists for needs and wants. Players asked for clearer UI; the team split them into
        bars vs cards so you can scan green/yellow/red at a glance.
      </p>

      <h2>Quick comparison</h2>
      <table class="wiki-compare-table">
        <thead>
          <tr>
            <th></th>
            <th>Needs</th>
            <th>Wants</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Punished if ignored?</th>
            <td>Usually yes — mood and work suffer</td>
            <td>No</td>
            <td>Depends on the goal</td>
          </tr>
          <tr>
            <th>Who assigns it</th>
            <td>The sim</td>
            <td>You, from an emotion card</td>
            <td>The sim suggests</td>
          </tr>
          <tr>
            <th>Looks like</th>
            <td>10 cartridges per bar</td>
            <td>Cards</td>
            <td>Grouped missions</td>
          </tr>
          <tr>
            <th>Resets</th>
            <td>Always draining</td>
            <td>When they sleep</td>
            <td>Per goal rules</td>
          </tr>
          <tr>
            <th>Personality points</th>
            <td>Indirect through mood</td>
            <td>Yes when done</td>
            <td>Yes; full groups can grant perks</td>
          </tr>
        </tbody>
      </table>

      <h2>Reading need bars</h2>
      <p>
        Open Thoughts on the active Para. Each need uses cartridges — default is ten slots. Green bar means fine,
        yellow is getting urgent, red is trouble. Empty slots are dark blue until you fix it: fridge or restaurants
        for hunger, bed for sleep, toilet for bathroom, shower for hygiene, hobbies or breaks for fun, alone time
        for me time.
      </p>
      <p>
        Hunger and sleep often follow a loose daily rhythm so housemates get hungry around dinner together. During
        emergencies like a house fire, the game can mark needs as ignored so you are not punished for fleeing.
      </p>

      <h2>Wants — optional but useful</h2>
      <p>
        Click an emotion, pick a want. Suggestions weigh vibe, stats, lifestyles, talent, social perk, who is in the
        room, objects nearby, relationships, and short “memories” (recent need levels and events — not a biography).
        Stuck with boring options? Change the scene: cook in the kitchen and food-related wants appear more often.
      </p>

      <h2>Goals — the slow burn</h2>
      <p>
        Goals might be “save for a better stove” or “befriend the neighbor.” Finish them for personality points like
        wants. Complete a whole themed group and you can snag a perk — good incentive to let goals sit on the list
        instead of only chasing daily mood fixes.
      </p>

      <h2>Personality tweaks timing</h2>
      <p>
        <RouterLink to="/wiki/vibes">Jesters</RouterLink> feel boredom sooner, so fun needs pop more.
        <RouterLink to="/wiki/traits">Night Owls</RouterLink> shift sleep and hunger timing. Let needs tank and
        negative emotions spill into <RouterLink to="/wiki/relationships">Together Cards</RouterLink> — mean red
        variants show up more when someone is already furious.
      </p>

      <h2>Town NPCs on launch</h2>
      <p>
        Parafolks you do not control do not run full need simulation — it saves performance. You might still see them
        use a toilet or mime eating as idle flavor, but they will not starve or autonomously cook a full meal like
        your household. Plan town trips for story, not for expecting NPCs to manage their own hunger.
      </p>
    </div>

    <h2 class="wiki-section-heading">The six needs</h2>
    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Need</th>
          <th scope="col">What to do when it drops</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in needs" :key="n.name">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/needs/${n.icon}`"
              :alt="`${n.name} need icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ n.name }}</th>
          <td>{{ n.desc }}</td>
        </tr>
      </tbody>
    </table>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const needs = [
  {
    name: 'Hunger',
    icon: 'Need-Hunger.png',
    desc: 'Empty means starving. Fridge, cooking, eating out. Often follows meal times.',
  },
  {
    name: 'Sleep',
    icon: 'Need-Sleep.png',
    desc: 'Empty means exhausted. Beds and routines; Night Owls hit this on a later clock.',
  },
  {
    name: 'Bathroom',
    icon: 'Need-Bathroom.png',
    desc: 'Find a toilet on the lot or in town venues before it hits red.',
  },
  {
    name: 'Hygiene',
    icon: 'Need-Hygiene.png',
    desc: 'Drains all day; exercise and cleaning speed it up. Showers fix it fast.',
  },
  {
    name: 'Fun',
    icon: 'Need-Fun.png',
    desc: 'Shows when bored from long tasks. Jesters see it more often — plan breaks.',
  },
  {
    name: 'Me Time',
    icon: 'Need-MeTime.png',
    desc: 'Solo recharge. Pairs well with “good at being alone” social perk.',
  },
]
</script>
