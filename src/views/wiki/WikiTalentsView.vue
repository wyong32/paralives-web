<template>
  <WikiCategoryShell
    title="Paralives Talents"
    lead="One Paramaker pick that speeds matching skills and can grow stronger as your Para earns personality points."
  >
    <div class="wiki-prose">
      <h2>What talents do</h2>
      <p>
        A talent is chosen once when you create a Parafolk. Every Para can still learn every skill in the game
        — talents add perks so related activities level faster. Over a long save, spending personality points
        from completed wants and goals can upgrade a talent, similar to vibe evolutions.
      </p>
      <p>
        Talents are not genetic. Children inherit looks, not your parent’s Art or Music specialty. Personality
        picks stay with the player’s choices in Paramaker and Live Mode progression.
      </p>

      <h2>Confirmed talents (preview reference)</h2>
      <p>
        Seven talents have appeared in official previews. Names and exact bonuses may change before or during
        Early Access — verify in-game after launch.
      </p>
    </div>

    <table class="wiki-data-table wiki-talent-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Talent</th>
          <th scope="col">Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in talents" :key="t.slug">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/talents/${t.icon}`"
              :alt="`${t.name} talent icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ t.name }}</th>
          <td>{{ t.desc }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Talents vs vibes, stats, and perks</h2>
      <p>
        Talents are separate from your seven-point <RouterLink to="/wiki/traits">stat spread</RouterLink>,
        your single <RouterLink to="/wiki/vibes">vibe</RouterLink>, social perk, and lifestyles. Together they
        form the personality bundle that ships as “personality traits” on the official day-one list.
      </p>
      <h2>Modding talents</h2>
      <p>
        Community creators can add custom talents through Workshop-supported mod tools. See
        <RouterLink to="/wiki/modding">modding</RouterLink> for supported systems.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const talents = [
  {
    slug: 'art',
    name: 'Art',
    icon: 'Talent-Art.png',
    desc: 'Faster progress in visual creative skills such as painting — strong for decorator or storyteller play.',
  },
  {
    slug: 'music',
    name: 'Music',
    icon: 'Talent-Music.png',
    desc: 'Boosts instrument skills. Music Knowledge from one instrument can make the next one in the family easier.',
  },
  {
    slug: 'food',
    name: 'Food',
    icon: 'Talent-Food.png',
    desc: 'Pairs with the day-one cooking system — handy for household meals, restaurants, and need management.',
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: 'Talent-Technology.png',
    desc: 'Geared toward tech hobbies and careers once you read job posting requirements.',
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    icon: 'Talent-Fitness.png',
    desc: 'Exercise skills level quicker. Plan showers after workouts — hygiene drains faster when training.',
  },
  {
    slug: 'jack-of-all-trades',
    name: 'Jack-of-All-Trades',
    icon: 'Talent-JackOfAllTrades.png',
    desc: 'Built for Parafolks who sample many hobbies without mastering one lane first.',
  },
  {
    slug: 'good-at-nothing',
    name: 'Good at Nothing',
    icon: 'Talent-GoodAtNothing.png',
    desc: 'Unusual rules instead of a simple speed boost — meant for challenge saves, not min-maxing.',
  },
]
</script>
