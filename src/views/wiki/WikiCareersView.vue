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

      <p class="wiki-careers-appendix-titles-line">
        Paralives Careers and Occupations<span aria-hidden="true" class="wiki-careers-appendix-titles-sep"> · </span>
        Paralives Economy — Bills, Shopping &amp; Budget
      </p>

      <div class="wiki-careers-cta-row">
        <aside class="wiki-careers-cta" aria-label="Paralives Careers and Occupations">
          <span class="wiki-careers-cta-eyebrow">Spoiler cheat sheet</span>
          <p class="wiki-careers-cta-desc">
            Hospitals, cafés, studios, schools — open each lot and skim who could clock in. Handy when you're sketching a
            household before you load the game.
          </p>
          <a class="btn btn-primary wiki-careers-cta-btn" href="/wiki/careers/occupations">Open the workplace list →</a>
        </aside>

        <aside class="wiki-careers-cta wiki-careers-cta--economy" aria-label="Paralives Economy — Bills, Shopping &amp; Budget">
          <span class="wiki-careers-cta-eyebrow">Household money</span>
          <p class="wiki-careers-cta-desc">
            Starting Paradimes, meter-priced Build Mode edits, weekly bills, daycare burn, museum ladders, Community
            Center bundles, and what fires do to your wallet — without treating disabled store flags as live shopping.
          </p>
          <a class="btn btn-primary wiki-careers-cta-btn" href="/wiki/careers/economy">Open the economy guide →</a>
        </aside>
      </div>

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
      <p class="wiki-careers-cta-tail">
        Want the spoiler role list or the Paradimes appendix first? Jump to
        <a href="/wiki/careers/occupations"><strong>Careers and Occupations</strong></a>
        or
        <a href="/wiki/careers/economy"><strong>Money, bills &amp; budget</strong></a>
        — both assume the same rabbit-hole career rules described here.
      </p>

      <h2>Applying — points, not perfection</h2>
      <p>
        Each posting shows skill requirements as <strong>application points</strong>. You need enough total points
        across the listed skills — not max level in every line. Some jobs demand a minimum in one core skill. If you
        are short, experience in the same Domain can partially cover the gap, and the right
        <a href="/wiki/traits">stat</a> can add points when skills lag.
      </p>
      <p>
        Grind <a href="/wiki/skills">skills</a> and Knowledge <em>before</em> you chase senior titles.
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
        elsewhere when a doctor posting's points line up. Jumping employers in the same Domain is normal — like
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
        Electricity and lot bills hit day one — check finances after big Build Mode sprees. For bill cadence, daycare
        lines, and museum math, see the
        <a href="/wiki/careers/economy">economy appendix</a>. Melino has shops, restaurants, and a museum for long
        collections. Our <a href="/map">town map</a> helps plan first errands.
      </p>

      <h2>House fires</h2>
      <p>
        Cooking and electronics can burn the house down on day one. Keep extinguishers handy if you let Paras cook on
        autonomy.
      </p>

      <div class="wiki-callout">
        Deeper workplaces and more jobs are on the during-EA list. If you are planning a career legacy, skim our
        <a href="/updates">updates page</a> so you know what is actually in build one.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
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

<style scoped>
.wiki-careers-appendix-titles-line {
  margin: 1.25rem 0 0.75rem;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.2vw, 1.28rem);
  font-weight: 800;
  line-height: 1.3;
  color: var(--color-ink);
}

.wiki-careers-appendix-titles-sep {
  color: var(--color-ink-muted);
  font-weight: 700;
}

.wiki-careers-cta-row {
  display: grid;
  gap: 1rem;
  margin: 0 0 1.85rem;
}

@media (min-width: 720px) {
  .wiki-careers-cta-row {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }
}

.wiki-careers-cta {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0;
  padding: 1.25rem 1.35rem 1.35rem;
  border-radius: var(--radius-lg);
  border: 3px solid var(--color-sage-dark);
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--color-lemon) 72%, var(--color-white)) 0%,
    color-mix(in srgb, var(--color-mint) 48%, var(--color-white)) 52%,
    color-mix(in srgb, var(--color-peach) 35%, var(--color-white)) 100%
  );
  box-shadow:
    0 5px 0 color-mix(in srgb, var(--color-sage-dark) 22%, transparent),
    var(--shadow-card);
}

.wiki-careers-cta--economy {
  border-color: color-mix(in srgb, var(--color-coral-deep) 35%, var(--color-sage-dark));
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--color-peach) 38%, var(--color-white)) 0%,
    color-mix(in srgb, var(--color-lemon) 55%, var(--color-white)) 48%,
    color-mix(in srgb, var(--color-mint) 52%, var(--color-white)) 100%
  );
}

.wiki-careers-cta-eyebrow {
  display: inline-block;
  width: fit-content;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  font-family: var(--font-cartoon);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-sage-dark);
  background: color-mix(in srgb, var(--color-white) 78%, transparent);
  border: 2px dashed color-mix(in srgb, var(--color-sage) 45%, transparent);
}

.wiki-careers-cta-desc {
  margin: 0 0 0.15rem;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--color-ink-muted);
  max-width: none;
}

.wiki-careers-cta-btn {
  align-self: flex-start;
  margin-top: 0.35rem;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.65rem 1.25rem;
}

.wiki-careers-cta-tail {
  margin-top: 0;
  font-size: 0.98rem;
  color: var(--color-ink-muted);
}

@media (max-width: 520px) {
  .wiki-careers-cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
