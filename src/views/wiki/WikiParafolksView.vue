<template>
  <WikiCategoryShell
    title="Paralives Parafolks & Genetics"
    lead="Create in Paramaker, play in Live Mode, pass looks to children — personality stays player-driven."
    container-class="container--wide"
  >
    <div class="wiki-prose">
      <h2>Who Parafolks are</h2>
      <p>
        Parafolks (often called Paras) are the characters you customize and control. You shape them in
        Paramaker, then manage their home, relationships, skills, and story in Live Mode. They are born, age,
        and eventually die — there is no afterlife system.
      </p>

      <h2>Paramaker customization</h2>
      <p>
        Height, body and face sliders, tattoos, layered clothing, asymmetry, multiple outfit slots, and the color
        wheel on skin, hair regions, and clothes are day-one Paramaker features. Many looks can change later, but
        genetics set at creation stay fixed for inheritance.
      </p>
      <p>
        After leaving creation, full body sliders lock — haircuts and similar services happen in Live Mode at
        venues such as salons on the town map.
      </p>

      <h2>Personality is not genetic</h2>
      <p>
        Stats, vibe, talent, social perk, and lifestyles are chosen by the player. They can grow through
        personality points in Live Mode but do not pass to children. See
        <RouterLink to="/wiki/traits">stats &amp; personality</RouterLink> for the full bundle.
      </p>

      <h2>Genetics at launch</h2>
      <p>
        The genetics system is day one. In Paramaker you can generate children, siblings, or parents from
        existing household members. Advanced genetics editing is planned during Early Access, not at launch. A
        family tree UI is also planned later — genetics and family play work before that menu arrives.
      </p>

      <h3>What passes down</h3>
      <ul>
        <li>
          <strong>Slider sets</strong> — each facial feature inherits a full set from one parent (nose from mom,
          cheeks from dad) to avoid mismatched extremes.
        </li>
        <li>
          <strong>Height</strong> — picks a parent’s short/medium/tall range, then randomizes inside it so
          siblings vary.
        </li>
        <li>
          <strong>Colors</strong> — eye and hair base colors use dominant/recessive style rules; skin brightness
          can shift within a parent’s range.
        </li>
        <li>
          <strong>Hair texture</strong> — straight, wavy, curly, coily with coily most dominant; hairstyles
          randomize from textures the child can wear.
        </li>
      </ul>

      <div class="wiki-callout wiki-callout--warn">
        Genetics are permanent. Recoloring hair later does not change what children inherit. Neon cosmetic colors
        map to a hidden natural gene for inheritance. NPC presets also keep fixed genetics.
      </div>

      <h2>Life stages</h2>
      <p>
        Eight stages appear in public materials: Baby, Toddler, Child, Preteen, Teenager, Young Adult, Adult, and
        Elder. Babies and toddlers may hide sliders until age-up even though genetics exist underneath. Having
        children, aging, and death are day-one Live Mode features.
      </p>

      <h2>Health and illness</h2>
      <p>
        Parafolks can catch minor illnesses — for example a virus from work or school, or spoiled food. It can
        spread in the household; care perks and soup help recovery. More serious disabilities were not planned
        for the May 2026 launch, though decorative medical items exist for builds.
      </p>

      <h2>Thoughts: emotions, needs, wants, goals</h2>
      <p>
        The thought panel bundles mood and objectives. Short-term “memories” track recent need levels and events
        for context (not long autobiographical history yet). Together Cards and wants use that context — see
        <RouterLink to="/wiki/emotions">emotions</RouterLink> and
        <RouterLink to="/wiki/needs-wants">needs &amp; wants</RouterLink>.
      </p>

      <h2>During Early Access</h2>
      <ul>
        <li>Family tree interface — planned after launch.</li>
        <li>Pets in Paramaker and Live Mode pets — on during-EA lists.</li>
        <li>Workshop exports include genetics data for shared characters.</li>
      </ul>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
