<template>
  <WikiCategoryShell
    title="Paralives Economy — Money, Bills & Budget"
    title-id="wiki-careers-econ-title"
    lead="Paradimes, weekly bills, Build Mode meter costs, daycare, museum rewards, Community Center bundles, and emergency costs — framed for Early Access, same spirit as our careers overview."
    :breadcrumb-parent="{ title: 'Careers & Economy', href: '/wiki/careers' }"
    hero-image="/images/wiki-paralives.webp"
  >
    <aside class="wiki-callout wiki-callout--snapshot" aria-label="Early Access snapshot note">
      <p class="wiki-callout__title">Early Access snapshot</p>
      <p class="wiki-callout__body">
        Because Paralives is in Early Access, treat the figures here as a snapshot of a typical installed build —
        tuning, flags, and playable content can change between patches. Big purchases and recurring lines are always
        worth double-checking in your own game.
      </p>
    </aside>

    <div class="wiki-prose">
      <div class="wiki-econ-stats" aria-label="Economy data summary">
        <div class="wiki-econ-stat">
          <strong>$30,000</strong>
          <span>New game starting funds</span>
        </div>
        <div class="wiki-econ-stat">
          <strong>7 days</strong>
          <span>Configured bill cycle</span>
        </div>
        <div class="wiki-econ-stat">
          <strong>15</strong>
          <span>Community Center bundles</span>
        </div>
        <div class="wiki-econ-stat">
          <strong>11</strong>
          <span>Museum reward milestones</span>
        </div>
      </div>

      <aside class="wiki-callout wiki-econ-scope" aria-label="How we describe verified numbers">
        <p class="wiki-econ-scope-lead">
          <strong>How to read this article.</strong>
          We call out numbers and systems that show up clearly in configuration for the current Early Access period.
          When data marks a feature as disabled, we say so — presence in files is not the same thing as guaranteed
          in-game behavior after the next Steam update.
        </p>
      </aside>

      <p>
        Prefer job names and workplaces first?
        <a href="/wiki/careers/occupations">Paralives Careers and Occupations</a> lists every EA role grouping. Need the
        career loop itself?
        <a href="/wiki/careers">Careers &amp; Economy hub</a> stays the short playbook.
      </p>
    </div>

    <section id="overview" class="wiki-prose">
      <h2>What counts as economy?</h2>
      <p>
        <strong>Paradimes</strong> cover furniture and merchandise, but the household economy stretches further. Income
        can come from work, benefits hooks, story card cash bumps, resale, and civic rewards — then you spend on the
        lot, utilities, daycare, groceries, replacements after disasters, and group projects.
      </p>
      <div class="wiki-econ-flow">
        <div class="wiki-econ-flow-card wiki-econ-flow-card--in">
          <h3>Money in</h3>
          <ul>
            <li>Daily salary and rank salary bumps from careers</li>
            <li>Family benefit and unemployment benefit lines on bills</li>
            <li>Story payouts and negotiated bill reductions</li>
            <li>Museum milestones and Community Center bundle rewards</li>
            <li>Selling loot, paintings, and duplicate goods</li>
          </ul>
        </div>
        <div class="wiki-econ-flow-card wiki-econ-flow-card--out">
          <h3>Money out</h3>
          <ul>
            <li>Buying a residence and bulldozing budgets in Build Mode</li>
            <li>Electricity, water, and municipal assessments</li>
            <li>Daycare watches and daycare transport fares</li>
            <li>Catalog shopping, outfits, takeaway orders</li>
            <li>Burn replacements and bundle pledges</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="starting-budget" class="wiki-prose">
      <h2>Starting funds and Build Mode meter costs</h2>
      <p>
        Default new households currently land on <strong>78,000 Paradimes</strong>. Residential lots are purchasable,
        and terraforming shells draw meter-priced charges before you even place clutter.
      </p>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Confirmed cost</th>
            <th scope="col">Configured value</th>
            <th scope="col">Why it bites</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Starting funds</th>
            <td>$78,000</td>
            <td>Baseline balance before first bill</td>
          </tr>
          <tr>
            <th scope="row">Lot terrain</th>
            <td>$5 / m<sup>2</sup></td>
            <td>Large grading edits chew cash fast</td>
          </tr>
          <tr>
            <th scope="row">Walls</th>
            <td>$1 / m<sup>2</sup></td>
            <td>Cheapest structural edits</td>
          </tr>
          <tr>
            <th scope="row">Platforms</th>
            <td>$25 / m<sup>2</sup></td>
            <td>Split levels and elevations cost real Paradimes</td>
          </tr>
          <tr>
            <th scope="row">Residential lots</th>
            <td>Purchasable</td>
            <td>Lot deeds participate in budgeting</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="income" class="wiki-prose">
      <h2>Income, salaries, and tech tracks</h2>
      <p>
        The occupations roster defines salaries, perks, and bill integrations. Roughly twenty-five tech and studio
        roles presently expose readable daily wages in extracted data — other gigs exist without the same published
        line items, so this section sticks to documented ranges rather than guessing.
      </p>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Employer arc</th>
            <th scope="col">Daily pay spread</th>
            <th scope="col">Bonus per rank</th>
            <th scope="col">Roles with values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Parallel Studios</th>
            <td>$250 – $450 / day</td>
            <td>$10 – $15</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">Mapple Web Inc.</th>
            <td>$450 – $800 / day</td>
            <td>$15 – $20</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">ClickWork Industries</th>
            <td>$800 – $2,100 / day</td>
            <td>$20 – $50</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
      <p>
        Concrete datapoints cited in reference material include Parallel gameplay programmers near $250/day, Mapple
        full-stack developers near $450/day, ClickWork product managers near $1,200/day, and the ClickWork exec track
        topping around $2,100/day — always cross-check the hiring panel once you patch. Full role names live in
        <a href="/wiki/careers/occupations">Careers and Occupations</a>.
      </p>
    </section>

    <section id="bills" class="wiki-prose">
      <h2>Bills, utilities, benefits, and daycare</h2>
      <p>
        Bills are enabled on a <strong>10,080-minute</strong> cadence — seven Sim days — with a configured
        <strong>1,440-minute</strong> window to settle after delivery. Mailbox delivery and a <em>Settle</em> action keep
        the loop legible once you memorize the rhythm.
      </p>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Bill line</th>
            <th scope="col">Reference tuning</th>
            <th scope="col">What it implies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Electricity</th>
            <td>$0.076 / kWh; usage cost multiplier 0.12/min</td>
            <td>Lights, electronics, hungry appliances pile on</td>
          </tr>
          <tr>
            <th scope="row">Water</th>
            <td>$0.10 / liter; usage multiplier 0.08/min</td>
            <td>Separate low/high draw categories matter</td>
          </tr>
          <tr>
            <th scope="row">Municipal taxes</th>
            <td>5% charge percent</td>
            <td>Eval-driven property skim</td>
          </tr>
          <tr>
            <th scope="row">Family benefit</th>
            <td>$200 benefit score when rules fire</td>
            <td>Household subsidy entry</td>
          </tr>
          <tr>
            <th scope="row">Unemployment benefits</th>
            <td>$100 benefit score when rules fire</td>
            <td>Safety net line</td>
          </tr>
          <tr>
            <th scope="row">Daycare</th>
            <td>$0.25 / child / minute</td>
            <td>Clocked while kids are checked in</td>
          </tr>
          <tr>
            <th scope="row">Daycare transport</th>
            <td>$20 / child</td>
            <td>Trips from lots you do not own</td>
          </tr>
        </tbody>
      </table>
      <p>
        Career perks can also inject bill bonuses (think “all expenses paid” flavor) or charge training back through
        invoices, so your household finances are not just “salary minus rent.”
      </p>
    </section>

    <section id="shopping" class="wiki-prose">
      <h2>Shopping, food, inventory, and selling</h2>
      <div class="wiki-econ-cards">
        <div class="wiki-econ-card">
          <h3>Catalog scale</h3>
          <p>
            The item catalog is enormous — thousands of entries — with about half carrying explicit price multipliers.
            Build Mode talks to the same economy: buy, sell, duplicate, and broke-player warnings exist for walls,
            platforms, and props.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Household inventory</h3>
          <p>
            UI strings define a household inventory and collection views, so purchases can land in storage instead of
            only dropping straight into a room.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Online orders &amp; food</h3>
          <p>
            “Shop online” is a real interaction bucket, and purchase verbs exist for goods, outfits, and meals — one
            generic food purchase shaves about <strong>$20</strong> in reference captures.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Selling &amp; creative income</h3>
          <p>
            Selling returns Paradimes, wants can nudge painting flips, and talented painters see better resale copy in
            talent text — another reason to fund an easel before a fifth sofa.
          </p>
        </div>
      </div>
      <aside class="wiki-callout wiki-callout--warn">
        <p class="wiki-econ-stores-note">
          <strong>Stores still cooking.</strong>
          Community files describe two specialty shop concepts with daily stock and rebates, but the same configuration
          marks the store rollout as <em>disabled</em> for now. Treat those entries as design scaffolding — not a promise
          that the registers are live in your build.
        </p>
      </aside>
    </section>

    <section id="donations" class="wiki-prose">
      <h2>Museum donations and Community Center bundles</h2>
      <p>
        Long-term goals feed the economy too: museum UI exists, four collectible lanes are defined, and eleven reward
        tiers mix cash, trophies, and utility upgrades. The Community Center lists fifteen bundles across money, food,
        art, and tech donations.
      </p>
      <h3>Museum donation rewards</h3>
      <div class="wiki-econ-rewards" aria-label="Museum milestone rewards">
        <div v-for="r in museumRewards" :key="r.label" class="wiki-econ-reward">
          <strong>{{ r.label }}</strong>
          {{ r.prize }}
        </div>
      </div>
      <h3>Community Center money track</h3>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Bundle</th>
            <th scope="col">Paradimes required</th>
            <th scope="col">Unlock order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Money bundle 1</th>
            <td>$5,000</td>
            <td>Starting gate</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 2</th>
            <td>$20,000</td>
            <td>After bundle 1</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 3</th>
            <td>$50,000</td>
            <td>After bundle 2</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 4</th>
            <td>$125,000</td>
            <td>After bundle 3</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 5</th>
            <td>$500,000</td>
            <td>After bundle 4</td>
          </tr>
        </tbody>
      </table>
      <p>
        Non-cash bundles ask for cooked plates, mushrooms, sale-qualified paintings, and tech hand-ins — good excuses
        to rotate skills instead of hoarding liquid Paradimes.
      </p>
    </section>

    <section id="risk" class="wiki-prose">
      <h2>Emergency costs: fire and broken gear</h2>
      <p>
        Fires are not just drama — they are budget events. Configuration allows multiple burning props, timed spread,
        burnt states, extinguish interactions, and a blunt <em>not enough money to replace</em> failure when you are
        broke mid-crisis.
      </p>
      <div class="wiki-econ-cards wiki-econ-cards--pair">
        <div class="wiki-econ-card">
          <h3>Fire load</h3>
          <p>
            Reference caps talk about double-digit burning items and fire objects, with spread kicking in after about
            fifteen sim minutes if nobody stops it.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Leaks &amp; wear</h3>
          <p>
            Broken household states can chain into water puddles and extra usage, so ignoring maintenance can quietly
            inflate utility bills.
          </p>
        </div>
      </div>
    </section>

    <section id="budget-plan" class="wiki-prose">
      <h2>A practical first-week budget</h2>
      <p>
        Secure shelter with modest terrain edits, feel out the first weekly bill before mega platforms, line up income,
        keep a Paradime cushion for daycare + transport if kids are in play, and only then dump savings into museum
        grinds or Community Center megaprojects.
      </p>
      <p>
        Creative households can lean on painting sales, museum milestones (cash plus solar or turbine rewards), and
        story cards that inject money or shave bill stress — same loop, different flavor.
      </p>
    </section>

    <section id="accuracy" class="wiki-prose">
      <h2>Accuracy and patch drift</h2>
      <p>
        We mirror numbers from a May 2026 Early Access capture: new-game defaults, bill tunings, representative tech
        salaries, bundle ladders, and risk configs. We intentionally skip turning “disabled” systems into shopping
        promises, and we do not pretend the entire catalog has a public price matrix when only multipliers ship in data.
      </p>
      <p>
        Spotted a mismatch after a patch? Your running client always wins — ping the wiki crew with screenshots if a
        value changed and we will realign the article.
      </p>
    </section>

    <section id="faq" class="wiki-prose wiki-econ-faq">
      <h2>Economy FAQ</h2>
      <div v-for="item in faq" :key="item.q" class="wiki-econ-faq-item">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </div>
    </section>

    <div class="wiki-prose">
      <p class="wiki-econ-updated">Updated May 26, 2026 — unofficial reference; verify in-game after Steam updates.</p>
    </div>

    <template #keep-reading>
      <nav class="wiki-aside-inpage" aria-label="Sections on this page">
        <ul class="wiki-aside-inpage-list">
          <li><a href="#overview" class="wiki-aside-inpage-link">Economy overview</a></li>
          <li><a href="#starting-budget" class="wiki-aside-inpage-link">Starting budget</a></li>
          <li><a href="#income" class="wiki-aside-inpage-link">Income &amp; salaries</a></li>
          <li><a href="#bills" class="wiki-aside-inpage-link">Bills &amp; daycare</a></li>
          <li><a href="#shopping" class="wiki-aside-inpage-link">Shopping</a></li>
          <li><a href="#donations" class="wiki-aside-inpage-link">Museum &amp; bundles</a></li>
          <li><a href="#risk" class="wiki-aside-inpage-link">Emergencies</a></li>
          <li><a href="#budget-plan" class="wiki-aside-inpage-link">First-week plan</a></li>
          <li><a href="#accuracy" class="wiki-aside-inpage-link">Accuracy</a></li>
          <li><a href="#faq" class="wiki-aside-inpage-link">FAQ</a></li>
        </ul>
      </nav>
    </template>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const museumRewards = [
  { label: '5 items', prize: '$250 reward' },
  { label: '10 items', prize: 'Laptop reward' },
  { label: '15 items', prize: 'Low trophy' },
  { label: '20 items', prize: '$500 reward' },
  { label: '30 items', prize: 'Solar panel' },
  { label: '40 items', prize: '$1,500 reward' },
  { label: '50 items', prize: 'Mid trophy' },
  { label: '60 items', prize: 'Wind turbine' },
  { label: '70 items', prize: '$2,000 reward' },
  { label: '85 items', prize: 'Top trophy' },
  { label: '90 items', prize: 'Miniature castle' },
]

const faq = [
  {
    q: 'What is the money currency?',
    a: 'Household cash is Paradimes — same wording the UI uses when you buy furniture or goods.',
  },
  {
    q: 'How much does a fresh household start with?',
    a: 'Default new-game configs in the EA capture land on 78,000 Paradimes before first spend.',
  },
  {
    q: 'How often do bills arrive?',
    a: 'Bills are configured around a seven-day cycle, and once a bill is generated you get about one Sim day to settle it.',
  },
  {
    q: 'Are dedicated shops guaranteed active?',
    a: 'Shopping verbs exist broadly, but the specialty store scaffold is flagged off in extracted data until a patch enables it.',
  },
  {
    q: 'Can donations refill the treasury?',
    a: 'Yes — museum milestones pay cash plus objects, and Community Center bundles often grant Paradimes or pricey rewards.',
  },
]
</script>

<style scoped>
.wiki-callout strong {
  color: inherit;
}

.wiki-econ-scope {
  border-left-color: var(--color-sky-deep);
  background: color-mix(in srgb, var(--color-sky) 22%, var(--color-white));
}

.wiki-econ-scope-lead {
  margin: 0;
  font-size: 0.93rem;
  line-height: 1.62;
}

.wiki-econ-updated {
  margin-top: 1.5rem !important;
  font-size: 0.88rem !important;
  color: var(--color-ink-muted) !important;
}

.wiki-econ-stores-note {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
}
</style>
