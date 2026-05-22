<template>
  <WikiCategoryShell
    title="Paralives Emotions"
    lead="How mood cards shape work, skills, social play, and the wants you choose each day in Live Mode."
  >
    <nav class="wiki-toc" aria-label="On this page">
      <strong>On this page</strong>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#gain">How you get emotions</a></li>
        <li><a href="#deal">What to do with emotions</a></li>
        <li><a href="#stacking">Multiple emotions &amp; intensity</a></li>
        <li><a href="#list">Emotions seen in previews</a></li>
        <li><a href="#colors">Colors on emotion cards</a></li>
        <li><a href="#mods">Modding emotions</a></li>
      </ul>
    </nav>

    <div class="wiki-prose">
      <h2 id="overview">Overview</h2>
      <p>
        Emotions track your Parafolk’s state of mind in Live Mode. They are not picked manually — everyday
        events, unmet needs, personality, and social moments create them. Emotions can be both the cause and
        the result of other systems: a bad day at work might leave someone stressed, while being stressed can
        make the next work shift harder.
      </p>
      <p>
        Strong moods also show up in animations, including idle poses when a Para has nothing queued. That
        helps households feel reactive even between player commands.
      </p>

      <h2 id="gain">How you get emotions</h2>
      <p>
        Only gameplay can add an emotion. The same event can hit two Parafolks differently depending on their
        <RouterLink to="/wiki/vibes">vibe</RouterLink>, <RouterLink to="/wiki/traits">stats</RouterLink>,
        social perk, and what was happening around them.
      </p>
      <p>
        <RouterLink to="/wiki/relationships">Together Cards</RouterLink> can push moods on purpose when you
        pick an emotional variant of a social option — useful for romance, rivalry, or comedy story beats.
      </p>

      <h2 id="deal">What to do with emotions</h2>
      <p>
        Active emotions appear as cards in the thought panel. Click a card to set a
        <RouterLink to="/wiki/needs-wants">Want</RouterLink> tied to that mood — a short goal for how your Para
        wants to feel or act next. Wants refresh when the Para sleeps (not at midnight), and finishing them
        earns personality points you can spend on vibe evolutions, talents, or extra perks.
      </p>
      <p>
        Ignoring emotions does not always stop the game, but negative moods can drag down job performance,
        skill practice, and social success until you address the underlying cause (often a need or a bad
        interaction).
      </p>

      <h2 id="stacking">Multiple emotions and intensity</h2>
      <p>
        Parafolks can hold several emotions at once — for example happy about a promotion and sad after a
        breakup. Each card shows an intensity number; hover for a breakdown of what contributed. Not every mood
        counts equally: a strong anger can stay dominant even if something small made the Para briefly amused.
      </p>
      <p>
        The strongest emotion appears on the portrait icon at the bottom of the screen. Check the thought
        bubble tab on the active Para to see the full list at any time.
      </p>

      <h2 id="list">Emotions seen in previews</h2>
      <p>
        Paralives Studio has not published a final launch list yet. Official videos and UI previews have
        already shown these names — treat them as a working reference until Early Access (May 25, 2026) ships:
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Emotion</th>
          <th scope="col">Player notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in emotionRows" :key="row.name">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/emotions/${row.icon}`"
              :alt="`${row.name} emotion icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ row.name }}</th>
          <td>{{ row.note }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2 id="colors">Colors on emotion cards</h2>
      <p>
        Emotions use icon-style art plus color cues on cards. Previews have shown white, green, orange, red,
        burgundy, pink, and grey tones. Some colors seem tied to a specific mood (flirty cards often lean pink),
        while others share a color across different feelings — both angry and sad have appeared in orange in
        early footage. The studio has not fully explained the color rules yet; expect tweaks during Early
        Access.
      </p>

      <h2 id="mods">Modding emotions</h2>
      <p>
        Custom emotions are supported through the game’s mod tools and community Workshop packs. After each
        patch, check mod compatibility before loading older saves. See our
        <RouterLink to="/wiki/modding">modding guide</RouterLink> for what systems modders can extend.
      </p>
    </div>

    <div class="wiki-callout">
      More emotions are planned during Early Access alongside extra traits, wants, and jobs. Compare the
      official <RouterLink to="/updates">development roadmap</RouterLink> on this site for day-one vs later
      Live Mode features.
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const emotionRows = [
  { name: 'Amused', icon: 'Emotion-Amused.png', note: 'Light, playful mood — often from fun social moments.' },
  { name: 'Angry', icon: 'Emotion-Angry.png', note: 'Hurts work and social outcomes until calmed or resolved.' },
  { name: 'Anxiety', icon: 'Emotion-Anxiety.png', note: 'Shown as “Anxious” in some UI; may affect confidence actions.' },
  { name: 'Bored', icon: 'Emotion-Bored.png', note: 'Tied to the fun need when activities drag on too long.' },
  { name: 'Disgust', icon: 'Emotion-Disgust.png', note: 'Reaction to unpleasant objects or situations.' },
  { name: 'Embarrassed', icon: 'Emotion-Embarassed.png', note: 'Social slip-ups and awkward Together Card outcomes.' },
  { name: 'Fear', icon: 'Emotion-Fear.png', note: 'Stressful events; pairs with safety-focused wants.' },
  { name: 'Fire', icon: 'Emotion-Fire.png', note: 'Context emotion linked to house-fire danger in previews.' },
  { name: 'Flirty', icon: 'Emotion-Flirty.png', note: 'Romance-oriented social play and Together Cards.' },
  { name: 'Happy', icon: 'Emotion-Happy.png', note: 'General positive state; common after fulfilling wants.' },
  { name: 'Inspired', icon: 'Emotion-Inspired.png', note: 'Creative boost — useful before skill grinding.' },
  { name: 'Sad', icon: 'Emotion-Sad.png', note: 'Low mood after loss, rejection, or neglected social ties.' },
  { name: 'Sick', icon: 'Emotion-Sick.png', note: 'Illness-related; chicken soup and care perks matter.' },
  { name: 'Sleep', icon: 'Emotion-Sleep.png', note: 'Fatigue signal — overlaps with the sleep need bar.' },
  { name: 'Stressed', icon: 'Emotion-Stressed.png', note: 'Work pressure, bills, or stacked negative events.' },
]
</script>
