<template>
  <WikiCategoryShell
    title="Paralives Emotions"
    lead="Mood cards you do not pick yourself — but you can answer them with wants and fix what caused them."
  >
    <template #aside>
      <nav class="wiki-aside-panel wiki-aside-toc" aria-label="On this page">
        <h2 class="wiki-aside-title">On this page</h2>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#gain">How moods show up</a></li>
          <li><a href="#deal">What to do with a card</a></li>
          <li><a href="#stacking">Several at once</a></li>
          <li><a href="#list">Moods seen so far</a></li>
          <li><a href="#colors">Card colors</a></li>
          <li><a href="#mods">Mods</a></li>
        </ul>
      </nav>
    </template>

    <div class="wiki-prose">
      <h2 id="overview">Overview</h2>
      <p>
        Emotions are your Para’s current headspace in Live Mode. You cannot click a menu to feel Happy — events,
        needs, work, and social moments create moods for you. They loop into everything else: a rough shift can
        leave someone Stressed, and staying Stressed makes the next shift and the next conversation harder.
      </p>
      <p>
        When the queue is empty, idle animations still show mood — multiple idle variants per emotion have been
        shown in previews, so two Happy Parafolks might not stand the same way.
      </p>

      <h2 id="gain">How moods show up</h2>
      <p>
        The same thing can land differently on two Parafolks. Vibe, stats, social perk, and what just happened all
        weigh in. A promotion might make one Para Overjoyed and another only mildly Happy if they were already
        stressed about bills.
      </p>
      <p>
        <RouterLink to="/wiki/relationships">Together Cards</RouterLink> can push emotions on purpose when you pick
        a colored variant — flirty pink options for romance, red mean options for rivalry, and so on.
      </p>

      <h2 id="deal">What to do with a card</h2>
      <p>
        Open the thought panel on your active Para. Emotions sit there as cards. Click one to pin a
        <RouterLink to="/wiki/needs-wants">Want</RouterLink> — a short, optional goal tied to that feeling (“cheer
        up,” “apologize,” “blow off steam”). Wants clear when the Para sleeps, not at midnight, and finishing them
        feeds personality points for vibe evolutions and talent upgrades.
      </p>
      <p>
        You can ignore a card, but negative moods often drag job performance, skill practice, and social rolls until
        you fix the root cause — usually a need bar or a relationship sting.
      </p>

      <h2 id="stacking">Several at once</h2>
      <p>
        Parafolks can be happy about a raise and sad about a breakup at the same time. Each card shows an intensity
        number; hover to see what stacked it. Strong moods outweigh weak ones — a big Angry can stay on the portrait
        even if something small made them Amused for a minute.
      </p>
      <p>
        The dominant mood shows on the portrait icon bottom-left. The thought bubble tab lists everything if you
        want the full picture.
      </p>

      <h2 id="list">Moods seen so far</h2>
      <p>
        The studio has not shipped a final launch list. These names already appeared in UI and videos — handy for
        planning stories, but expect additions and renames during Early Access:
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Emotion</th>
          <th scope="col">What it usually means in play</th>
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
      <h2 id="colors">Card colors</h2>
      <p>
        Icons plus card color give a quick read. Previews used white, green, orange, red, burgundy, pink, and grey.
        Flirty tends pink; angry and sad have both shown orange at different times, so color rules are not fully
        documented yet — assume tweaks in patches.
      </p>

      <h2 id="mods">Mods</h2>
      <p>
        Custom emotions are supported for Workshop mods. After an update, test emotion packs on a spare save — a
        broken mood can stall wants or careers until you remove the mod. Details on our
        <RouterLink to="/wiki/modding">modding</RouterLink> page.
      </p>
    </div>

    <div class="wiki-callout">
      More emotions are slated during Early Access alongside jobs and wants. Our
      <RouterLink to="/updates">updates tracker</RouterLink> lists what Live Mode ships day one vs later.
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const emotionRows = [
  { name: 'Amused', icon: 'Emotion-Amused.png', note: 'Light, playful — often after fun social beats.' },
  { name: 'Angry', icon: 'Emotion-Angry.png', note: 'Work and social suffer until you cool things down.' },
  { name: 'Anxiety', icon: 'Emotion-Anxiety.png', note: 'UI sometimes says Anxious — nerves before bold actions.' },
  { name: 'Bored', icon: 'Emotion-Bored.png', note: 'Tied to fun need when tasks run too long.' },
  { name: 'Disgust', icon: 'Emotion-Disgust.png', note: 'Bad smells, gross objects, rough moments.' },
  { name: 'Embarrassed', icon: 'Emotion-Embarassed.png', note: 'Awkward social outcomes or failed cards.' },
  { name: 'Fear', icon: 'Emotion-Fear.png', note: 'Stressful events; safety-flavored wants follow.' },
  { name: 'Fire', icon: 'Emotion-Fire.png', note: 'Context mood around house-fire danger in previews.' },
  { name: 'Flirty', icon: 'Emotion-Flirty.png', note: 'Romance routes and pink Together variants.' },
  { name: 'Happy', icon: 'Emotion-Happy.png', note: 'General good mood — common after wants land.' },
  { name: 'Inspired', icon: 'Emotion-Inspired.png', note: 'Nice before creative skill sessions.' },
  { name: 'Sad', icon: 'Emotion-Sad.png', note: 'Loss, rejection, neglected ties.' },
  { name: 'Sick', icon: 'Emotion-Sick.png', note: 'Illness — soup and care perks help.' },
  { name: 'Sleep', icon: 'Emotion-Sleep.png', note: 'Fatigue cue alongside the sleep need bar.' },
  { name: 'Stressed', icon: 'Emotion-Stressed.png', note: 'Work pressure, bills, stacked bad days.' },
]
</script>
