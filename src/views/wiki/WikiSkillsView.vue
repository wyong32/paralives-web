<template>
  <WikiCategoryShell
    title="Paralives Skills"
    lead="Practice hobbies and daily tasks in Live Mode — level 20 cap, Knowledge cross-training, and career requirements."
  >
    <div class="wiki-prose">
      <h2>How skills work</h2>
      <p>
        Skills measure how capable a Parafolk is at specific activities. Use related objects and actions in Live
        Mode to fill a progress bar; white arrows on the bar hint at current learning speed. There does not
        appear to be a hard cap on how many skills one Para can learn.
      </p>

      <h2>Leveling up to 20</h2>
      <p>
        Each skill can reach level 20. During the November 2025 Live Mode stream, developers noted that not
        every level grants a new reward yet — some tiers are still being filled in during Early Access.
      </p>

      <h2>Knowledge and cross-training</h2>
      <p>
        Skills group into Knowledge types (for example Music). Leveling guitar builds Music Knowledge that later
        makes piano easier. Pair hobbies intentionally if you want efficient mastery across an instrument
        family or creative lane.
      </p>

      <h2>Talents, emotions, and needs</h2>
      <p>
        Your Paramaker <RouterLink to="/wiki/talents">talent</RouterLink> speeds matching skills. Negative
        <RouterLink to="/wiki/emotions">emotions</RouterLink> — especially from neglected
        <RouterLink to="/wiki/needs-wants">needs</RouterLink> — slow practice. Feed, rest, or socialize before
        a long skill session if the arrows look weak.
      </p>

      <h2>Careers and job postings</h2>
      <p>
        Job postings weigh skills alongside <RouterLink to="/wiki/careers">career progression</RouterLink>.
        Build relevant skills before applying for higher roles, not only after you are hired.
      </p>

      <h2>Cooking and life stages</h2>
      <p>
        Cooking is both a day-one household system and a skill line. Younger Parafolks may need supervision or
        group activities for dangerous kitchen tools. Toddlers and other young life stages cannot learn every
        skill or reach the same peak as adults — especially physical skills like fitness.
      </p>

      <div class="wiki-callout">
        <strong>Gardening and fishing</strong> are on the during-EA Live Mode list, not the day-one list. Expect
        new outdoor skills when those features ship. Check our
        <RouterLink to="/updates">development updates</RouterLink> page for the latest official split.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
