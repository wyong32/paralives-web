<template>
  <WikiCategoryShell
    title="Paralives Careers & Economy"
    lead="Rabbit-hole jobs, application points, career upgrades, bills, and town spending at Early Access launch."
  >
    <div class="wiki-prose">
      <h2>Jobs and paradimes</h2>
      <p>
        Careers let Parafolks earn money (paradimes) for bills, shopping, and build purchases. At Early Access
        launch every workplace is a rabbit hole — your Para travels off-lot while you manage the household. Jobs
        still tie to real buildings in town; you just do not follow them inside the workplace yet.
      </p>

      <h2>Finding work</h2>
      <p>
        Browse job postings from commercial buildings or phone ads. Offers sort into Domains — themed industries
        such as Art, Education, Fitness, Food, Healthcare, Maintenance, Management, Music, Science, Service, and
        Software development. The same job title can appear in more than one Domain (a waiter under Food and
        Service, for example).
      </p>

      <h2>Application points</h2>
      <p>
        Each posting lists skill requirements as application points. You do not need to max every skill — you need
        enough total points across listed skills. Some roles demand a minimum in a core skill. Experience in the
        same Domain can partially offset missing skills, and relevant stats can add points when skills fall short.
      </p>
      <p>
        Build <RouterLink to="/wiki/skills">skills</RouterLink> before applying for senior roles, not only after
        hire.
      </p>

      <h2>Performance and upgrades</h2>
      <p>
        Showing up matters, but mood, coworker relationships, and skill growth also shape performance. Good days
        grant upgrade points; open the career panel to pick one of three cards. Expertise upgrades raise salary;
        extra upgrades might boost skills or workplace relationships. Options depend on personality and current
        job context — two Paras in the same title can roll different cards.
      </p>

      <h2>Non-linear careers</h2>
      <p>
        Promotion is not always automatic. A nurse does not silently become a doctor — they can invest upgrades to
        become a better-paid nurse, then apply elsewhere when they meet posting requirements. Switching workplaces
        in the same Domain is a valid way to jump salary and perks, similar to changing employers in real life.
      </p>

      <h2>Schedules and attendance</h2>
      <p>
        Hiring lets you pick preset work hours and days from a dropdown. Parafolks can hold multiple jobs if
        schedules do not clash; students can take part-time work when school hours allow. Early Access builds may
        auto-teleport Paras to work with reminders — walking to the physical workplace and lateness consequences
        are planned as the system matures.
      </p>

      <h2>Bills, shops, and museum</h2>
      <p>
        Bills (electricity and lot costs) are day one — check finances after big purchases. The open-world town
        includes shops and restaurants; the museum supports long-term collections. Use our
        <RouterLink to="/map">town map guide</RouterLink> to plan first outings.
      </p>

      <h2>House fires</h2>
      <p>
        House fires are a day-one risk from cooking and electronics. Keep extinguishers and safe kitchen habits in
        mind, especially with autonomous Parafolks.
      </p>

      <div class="wiki-callout">
        More jobs and deeper simulation are on the during-EA list alongside extra traits, wants, and emotions.
        Compare <RouterLink to="/updates">development updates</RouterLink> before planning a career-focused save.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
