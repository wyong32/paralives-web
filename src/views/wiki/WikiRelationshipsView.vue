<template>
  <WikiCategoryShell
    title="Paralives Relationships & Social"
    lead="Multiple relationship labels per pair, Together Cards every ~20 minutes of social time, and perks when bonds level up."
  >
    <div class="wiki-prose">
      <h2>More than one bar per person</h2>
      <p>
        Two Parafolks are rarely just “friends.” They might be <strong>friends lvl6</strong>,
        <strong>coworkers lvl3</strong>, and <strong>family</strong> at the same time — separate
        <strong>relationship labels</strong> you unlock by playing, not one slider.
      </p>
      <p>
        Labels can be <strong>one-sided</strong>. Your Para might have Crush lvl8 while the other person does not
        feel it — you can still get special interactions like anonymous love letters. Keep playing
        Together Cards together and labels level; high levels unlock
        perks (Cooking Buddies lvl20 cooking faster together is the classic example).
      </p>
      <p>
        Dating does not erase friendship — you stack labels. If two labels are both high, you might unlock a
        <strong>combo label</strong> like Productive Duo from Coworker + Creative Buddy with beefier perks.
      </p>
      <p>
        Family, friends, romance, work ties, enemies, and hobby partners are different buckets. Family tree UI is not
        at launch, so labels also mark who is related until that menu arrives.
      </p>

      <h2>Together Cards — story forks</h2>
      <p>
        Social interactions fill a Together bar. After roughly <strong>twenty minutes</strong> of progress, an icon
        appears on the <strong>active</strong> Para’s portrait. Click it, choose one of three cards. These are not
        chat lines — they are branches (“compliment sincerely” vs “compliment sarcastically”) with consequences.
      </p>
      <p>
        The game weighs location, mood, recent memories, objects nearby, and who is involved. Many cards show success
        odds, vibe icons, or which label might level if you pick them.
      </p>

      <h3>Colored variants</h3>
      <ul>
        <li><strong>White</strong> — neutral tone</li>
        <li><strong>Green</strong> — friendship</li>
        <li><strong>Pink</strong> — romance</li>
        <li><strong>Dark blue</strong> — skills and hobbies</li>
        <li><strong>Red</strong> — mean</li>
        <li><strong>Dark red</strong> — discomfort</li>
      </ul>
      <p>
        Strong <a href="/wiki/emotions">emotions</a> make emotional variants more likely — angry Paras
        see more red-tinged options.
      </p>

      <h3>When the other person starts it</h3>
      <p>
        Sometimes the NPC proposes the card — job offer out of nowhere, a romantic gesture, a surprise. The prompt still
        lands on your active Para so you can accept or shut it down.
      </p>

      <h2>Social perks at creation</h2>
      <p>
        Pick one perk in Paramaker; earn more later with personality points. Perks bias which cards appear and how
        often they succeed — “good at romantic relationships” really does make flirty routes easier.
      </p>
    </div>

    <ul class="wiki-ref-grid">
      <li v-for="p in socialPerks" :key="p.name" class="wiki-ref-card wiki-ref-card--icon">
        <img
          class="wiki-ref-card-icon"
          :src="`/images/wiki/social-perks/${p.icon}`"
          :alt="`${p.name} social perk icon`"
          width="56"
          height="56"
          loading="lazy"
        />
        <h3>{{ p.name }}</h3>
        <p>{{ p.desc }}</p>
      </li>
    </ul>

    <div class="wiki-prose">
      <h2>Group commands</h2>
      <p>
        Multiselect lets several household members cook, travel, or hang out under one order — great when you are
        juggling multiple need bars.
      </p>

      <h2>What launch is missing</h2>
      <p>
        Town NPCs will not grow relationships on their own at EA launch — not with you, not with each other. That
        autonomy is planned later. Parties, weddings, phone invites, and Para-to-Para online chat are also later-list
        features. For now, meet people on the <a href="/map">map</a>, invite them home, and play cards
        at restaurants.
      </p>

      <h2>Mods</h2>
      <p>
        You can add custom relationship labels through mods, but the big categories (family, romance, enemies, etc.)
        stay fixed. See <a href="/wiki/modding">modding</a>.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const socialPerks = [
  {
    name: 'Good at being alone',
    icon: 'SocialPerk-GoodAtBeingAlone.png',
    desc: 'Solo saves feel natural — me time and quiet hobbies are easier to satisfy.',
  },
  {
    name: 'Good at cooperation',
    icon: 'SocialPerk-GoodAtCooperation.png',
    desc: 'Group chores and duo activities — strong with multiselect households.',
  },
  {
    name: 'Good at making friends',
    icon: 'SocialPerk-GoodAtMakingFriends.png',
    desc: 'Friend labels climb faster; more friendly card variety.',
  },
  {
    name: 'Good at romantic relationships',
    icon: 'SocialPerk-GoodAtRomanticRelationships.png',
    desc: 'Romance labels and pink cards are easier to land and maintain.',
  },
  {
    name: 'Good at taking care of others',
    icon: 'SocialPerk-GoodAtTakingCareOfOthers.png',
    desc: 'Caregiving, soup when sick, supportive family play.',
  },
  {
    name: 'Good with family',
    icon: 'SocialPerk-GoodWithFamily.png',
    desc: 'Multi-generation saves — family-flavored wants and interactions.',
  },
]
</script>
