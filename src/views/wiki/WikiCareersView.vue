<template>
  <WikiCategoryShell
    title="Paralives Careers & Economy"
    lead="Rabbit-hole jobs tied to real Melino buildings, application points instead of perfect skill charts, and money for bills plus Build Mode."
  >
    <div class="wiki-prose">
      <h2>Money and jobs</h2>
      <p>
        <strong>Paradimes</strong> pay bills, buy furniture, and fund paint. Early Access uses
        <strong>rabbit-hole jobs</strong> — your Para leaves the lot, you stay with the household. That does not mean
        fiction-only employers: Bloom, Headlines, the Museum, and other lots are real places in town; you just do not
        follow them inside the workplace yet. Work-from-home is not in at launch but might show up later.
      </p>

      <h2>Domains — how job boards are sorted</h2>
      <p>
        Postings group under industry themes called <strong>Domains</strong>. A museum receptionist might list under
        Art even if the day job is not painting. A waiter can appear under both Food and Service. Domains help you
        browse, not perfectly describe every task.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Domain</th>
          <th scope="col">Covers</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in domains" :key="d.name">
          <th scope="row">{{ d.name }}</th>
          <td>{{ d.theme }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Applying — points, not perfection</h2>
      <p>
        Each posting shows skill requirements as <strong>application points</strong>. You need enough total points
        across the listed skills — not max level in every line. Some jobs demand a minimum in one core skill. If you
        are short, experience in the same Domain can partially cover the gap, and the right
        <RouterLink to="/wiki/traits">stat</RouterLink> can add points when skills lag.
      </p>
      <p>
        Grind <RouterLink to="/wiki/skills">skills</RouterLink> and Knowledge <em>before</em> you chase senior titles.
        Showing up hired is not the same as being qualified for the next posting.
      </p>

      <h2>Good days, bad days, strikes</h2>
      <p>
        Performance looks at mood at work, relationships with coworkers, skill growth, and more. Too many rough shifts
        earn <strong>strikes</strong>; enough strikes and you are fired. Good stretches grant upgrade points — open the
        career panel, pick one of three cards:
      </p>
      <ul>
        <li><strong>Expertise</strong> — pay bump</li>
        <li><strong>Extra</strong> — skill progress or better ties at work</li>
      </ul>
      <p>
        Some cards care about household savings (retirement perks, for example). Two Paras with the same job title can
        still see different cards because the roll reads personality and context.
      </p>

      <h2>Careers are not a straight ladder</h2>
      <p>
        A nurse does not auto-become a doctor. You invest perks to become a stronger, better-paid nurse, then apply
        elsewhere when a doctor posting’s points line up. Jumping employers in the same Domain is normal — like
        leaving a starter café for a busier restaurant with higher pay and perks.
      </p>

      <h2>Schedules and the teleport quirk</h2>
      <p>
        Hiring lets you pick preset hours and days. Multiple jobs work if times do not clash; students can take
        part-time work when school allows. Right now a reminder pops up, then Paras
        <strong>teleport to work</strong> — no walking in late yet, no skipping with consequences. Devs have said that
        is temporary until they wire travel to the actual building and penalties for absence.
      </p>

      <h2>Bills, shopping, museum</h2>
      <p>
        Electricity and lot bills hit day one — check finances after big Build Mode sprees. Melino has shops,
        restaurants, and a museum for long collections. Our <RouterLink to="/map">town map</RouterLink> helps plan
        first errands.
      </p>

      <h2>House fires</h2>
      <p>
        Cooking and electronics can burn the house down on day one. Keep extinguishers handy if you let Paras cook on
        autonomy.
      </p>

      <div class="wiki-callout">
        Deeper workplaces and more jobs are on the during-EA list. If you are planning a career legacy, skim our
        <RouterLink to="/updates">updates page</RouterLink> so you know what is actually in build one.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const domains = [
  { name: 'Art', theme: 'Galleries, design, visual work' },
  { name: 'Education', theme: 'Teaching and childcare paths' },
  { name: 'Fitness', theme: 'Sports, coaching, physical jobs' },
  { name: 'Food', theme: 'Cooking and serving food' },
  { name: 'Healthcare', theme: 'Care and keeping Paras healthy' },
  { name: 'Maintenance', theme: 'Buildings, repairs, environment' },
  { name: 'Management', theme: 'Leading teams and daily ops' },
  { name: 'Music', theme: 'Instruments and performance' },
  { name: 'Science', theme: 'Research and lab-style work' },
  { name: 'Service', theme: 'Retail and customer help' },
  { name: 'Software development', theme: 'Code and computers' },
]
</script>
