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

      <p class="wiki-skills-appendix-titles-line">
        Paralives Skills — Levels, Knowledge &amp; Talents
      </p>

      <aside class="wiki-skills-cta" aria-label="Paralives Skills — Levels, Knowledge and Talents">
        <span class="wiki-skills-cta-eyebrow">Data-verified appendix</span>
        <p class="wiki-skills-cta-desc">
          Full skill registry, XP tuning, Knowledge directory, training routes, career reference counts, Talents
          cross-check and Early Access limits — verified from installed game settings.
        </p>
        <a class="btn btn-primary wiki-skills-cta-btn" href="/wiki/skills/leveling">Open the leveling appendix →</a>
      </aside>

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

      <p class="wiki-skills-cta-tail">
        Want the verified registry and career cross-check?
        Jump to <a href="/wiki/skills/leveling"><strong>Levels, Knowledge &amp; Talents</strong></a>
        — it assumes the same Live Mode skill rules described here.
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

<style scoped>
.wiki-skills-appendix-titles-line {
  margin: 1.25rem 0 0.75rem;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.2vw, 1.28rem);
  font-weight: 800;
  line-height: 1.3;
  color: var(--color-ink);
}

.wiki-skills-cta {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0 0 1.85rem;
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

.wiki-skills-cta-eyebrow {
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

.wiki-skills-cta-desc {
  margin: 0 0 0.15rem;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--color-ink-muted);
  max-width: none;
}

.wiki-skills-cta-btn {
  align-self: flex-start;
  margin-top: 0.35rem;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.65rem 1.25rem;
}

.wiki-skills-cta-tail {
  margin-top: 0;
  font-size: 0.98rem;
  color: var(--color-ink-muted);
}

@media (max-width: 520px) {
  .wiki-skills-cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
