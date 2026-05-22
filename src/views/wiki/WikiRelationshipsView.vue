<template>
  <WikiCategoryShell
    title="Paralives Relationships & Social"
    lead="Social perks, Together Cards, multiselect groups, and how friendships and romance grow in Live Mode."
  >
    <div class="wiki-prose">
      <h2>Relationship development</h2>
      <p>
        Relationships deepen through repeated social play with labeled ties — friends, romance, family, and more.
        The system is a core day-one Live Mode feature. Your Paramaker social perk biases which interactions feel
        natural and which rewards you earn.
      </p>

      <h2>Together Cards</h2>
      <p>
        After enough progress in a social interaction (roughly twenty minutes on the Together bar in previews), an
        icon appears on the active Para’s portrait. Click it to choose one of three Together Cards — story forks,
        not line-by-line chat options.
      </p>
      <p>
        Cards are context-sensitive: location, mood, recent memories, nearby objects, and who is involved all
        filter the list. Some cards show success odds, relationship perks, or vibe icons so you can plan outcomes.
      </p>

      <h3>Emotional variants</h3>
      <p>
        Many cards offer color-coded variants — neutral white, friendship green, romance pink, skill/hobby blue,
        mean red, discomfort dark red. The same root action can shift tone: a sincere compliment vs an ironic one
        changes relationship impact. Strong current
        <RouterLink to="/wiki/emotions">emotions</RouterLink> make variants more likely.
      </p>

      <h3>Initiative cards</h3>
      <p>
        Sometimes the other Para proposes the card — job offers, romantic gestures, surprises. The prompt still
        appears on your active Para so you can accept or steer the moment.
      </p>

      <h2>Multiselect group play</h2>
      <p>
        Select multiple household members for one group command — cook together, travel as a group, or socialize.
        Pairs well with need and mood management when you run a busy household.
      </p>
    </div>

    <h2 class="wiki-section-heading">Social perks (Paramaker)</h2>
    <p class="wiki-table-note">Pick one at creation; more can unlock with personality points.</p>
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

    <div class="wiki-phase-grid">
      <section class="wiki-phase-card wiki-phase-card--ea">
        <h2><span class="wiki-badge wiki-badge--ea">During EA</span> Social features later</h2>
        <ul>
          <li>Organized parties and weddings</li>
          <li>Phone calls to invite Parafolks over</li>
          <li>Online chat between Parafolks</li>
        </ul>
        <p class="wiki-phase-lead">
          Until then, meet townies on the <RouterLink to="/map">town map</RouterLink>, host at home, and use
          Together Cards at restaurants.
        </p>
      </section>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const socialPerks = [
  {
    name: 'Good at being alone',
    icon: 'SocialPerk-GoodAtBeingAlone.png',
    desc: 'Solo-focused saves; me-time needs and independent hobbies shine.',
  },
  {
    name: 'Good at cooperation',
    icon: 'SocialPerk-GoodAtCooperation.png',
    desc: 'Group chores, duo skills, and multiselect outings — great for team households.',
  },
  {
    name: 'Good at making friends',
    icon: 'SocialPerk-GoodAtMakingFriends.png',
    desc: 'Faster friendship growth and broader social card variety.',
  },
  {
    name: 'Good at romantic relationships',
    icon: 'SocialPerk-GoodAtRomanticRelationships.png',
    desc: 'Romance arcs and flirty Together Cards are easier to sustain.',
  },
  {
    name: 'Good at taking care of others',
    icon: 'SocialPerk-GoodAtTakingCareOfOthers.png',
    desc: 'Caregiving, soup when sick, and supportive family dynamics.',
  },
  {
    name: 'Good with family',
    icon: 'SocialPerk-GoodWithFamily.png',
    desc: 'Multi-generation legacies and relative-focused wants.',
  },
]
</script>
