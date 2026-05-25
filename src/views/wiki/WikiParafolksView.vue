<template>
  <WikiCategoryShell
    title="Paralives Parafolks & Genetics"
    lead="Make them in Paramaker, live with them in Melino, pass looks to kids — personality stays yours to choose."
  >
    <div class="wiki-prose">
      <h2>Who you are playing</h2>
      <p>
        <strong>Parafolks</strong> (Paras) are the people you customize and steer. Fans voted the name “Parafolk”
        years ago on Patreon. You build them in <strong>Paramaker</strong> — often shortened to PAM — then run
        households in Live Mode. They age through eight stages, can have kids, and eventually die. There is no
        afterlife gameplay.
      </p>

      <h2>What you can still change later</h2>
      <p>
        Day one Paramaker includes sliders, color wheels, tattoos, layered clothes, asymmetry, and multiple outfit
        slots. A lot of style can change in Live Mode — hair at a salon like Headlines, outfits, some details.
        <strong>Body sliders lock</strong> once you leave creation, so bone structure is set.
      </p>
      <p>
        Names, gender, life stage, and voice look fixed after you enter the world — plan identity in PAM. Genetics
        for looks are also fixed even if you recolor hair later.
      </p>

      <h2>Personality is yours, not DNA</h2>
      <p>
        Stats, vibe, talent, social perk, and lifestyles come from your choices and play — not from parents. Kids
        inherit faces, not Dad’s vibe. Full breakdown on
        <RouterLink to="/wiki/traits">stats &amp; personality</RouterLink>.
      </p>

      <h2>Genetics on launch day</h2>
      <p>
        Genetics are in on Early Access launch. From existing household members you can roll children, siblings, or
        parents in Paramaker. A proper <strong>family tree screen</strong> and deeper gene editing are planned later
        in EA — you can play legacies before the tree UI exists.
      </p>

      <h3>Faces and height</h3>
      <p>
        Each facial feature inherits a <strong>whole slider set</strong> from one parent — mom’s nose or dad’s cheeks,
        not a mashed mix that breaks proportions. Height picks a parent’s short/medium/tall band, then randomizes
        inside it so siblings are not clones. Gender nudges the height roll.
      </p>

      <h3>Colors and hair</h3>
      <p>
        Eyes, skin, and hair base color use dominant/recessive style rules — a grandparent’s blue eyes can skip a
        generation. Only the <strong>base</strong> hair color counts for DNA, not highlights or roots. Neon green
        hair is fun in PAM but the game stores a hidden natural color for kids.
      </p>
      <p>
        Skin brightness can land anywhere in a parent’s range; exact hue might differ between swatches. Heterochromia
        is not inherited yet — one eye color is picked for genetics.
      </p>

      <h3>Hair texture</h3>
      <p>
        Straight, wavy, curly, coily — coily wins ties most often, straight is most recessive. Random child hairstyles
        only pull from textures the kid can actually wear.
      </p>

      <div class="wiki-callout wiki-callout--warn">
        Dye jobs do not rewrite DNA. NPC townies carry preset genetics you cannot edit. There is still no in-game
        screen to peek at hidden recessive genes before having kids — that may arrive in a later EA patch.
      </div>

      <h2>Life stages in order</h2>
      <p>
        Baby → Toddler → Child → Preteen → Teenager → Young Adult → Adult → Elder. Babies and toddlers may hide
        sliders until they age up even though genes are already set. Pregnancy and birth are simplified at EA launch
        (no hospital minigame required). Twins and triplets happen but stay rare.
      </p>

      <h2>Getting sick and dying</h2>
      <p>
        Everyone starts able-bodied. Colds can spread from work or school; soup and caring perks help. Serious
        disability gameplay was not targeted for the first EA month, though medical clutter exists for builders.
      </p>
      <p>
        At least <strong>four death types</strong> have been discussed, including old age. You cannot click “die” —
        autonomy fires death when conditions are met, same as other high-stakes actions.
      </p>

      <h2>Thoughts, memories, and panels</h2>
      <p>
        The character panel holds personality, identity, inventory, relationships, jobs, skills, and thoughts.
        “Memories” right now are short-term context — more like “hunger was 8/10 at 8am” than “we met twenty years
        ago.” That data still feeds Together Cards and want suggestions. Tie-in pages:
        <RouterLink to="/wiki/emotions">emotions</RouterLink>,
        <RouterLink to="/wiki/needs-wants">needs &amp; wants</RouterLink>.
      </p>

      <h2>Parli</h2>
      <p>
        Spoken language is gibberish <strong>Parli</strong>. Written text defaults to English; mod tools can change
        that if you care about UI flavor.
      </p>

      <h2>Random townies</h2>
      <p>
        When the game needs a new face — moving someone in, filling the town — it pulls from premade Parafolks,
        including supporter-made characters from development. They are not story NPCs, but their genetics are real in
        the pool.
      </p>

      <h2>Still coming in EA</h2>
      <ul>
        <li>Family tree menu after launch.</li>
        <li>Pets in Paramaker and Live Mode pets on the during-EA list.</li>
        <li>Workshop exports that keep genetics for shared characters.</li>
        <li>Modded species with their own inheritance rules if creators go that far.</li>
      </ul>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
