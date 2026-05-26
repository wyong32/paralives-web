export default [
  {
    id: 1,
    title: 'Getting Started with Paralives Early Access',
    description:
      'Your first-hour checklist: what Early Access means, how Build / Paramaker / Live Mode fit together, and what to expect before you click Play.',
    tags: ['Beginner', 'Early Access', 'Overview'],
    publishDate: '2026-05-19',
    imageUrl: '/images/guides/guide01.webp',
    imageAlt: 'Getting started with Paralives Early Access — beginner guide cover',
    seo: {
      title: 'Paralives Getting Started — Early Access Beginner Guide',
      description:
        'Paralives beginner guide for Early Access: three modes, first-hour checklist, smart expectations, and launch tips before Steam on May 25, 2026.',
      keywords:
        'Paralives getting started, Paralives beginner guide, Early Access, Steam, Build Mode, Paramaker, Live Mode, May 25 2026',
    },
    addressBar: 'getting-started',
    isHome: true,
    detailsHtml: `
      <p class="guide-lead">
        Welcome to <strong>Paralives</strong> — or at least, welcome to the week before you finally
        click <em>Play</em>. This guide is written for players who want a clear picture of what
        Early Access actually is, how the three main modes connect, and what a sensible first session
        looks like. No hype, no spoilers — just practical prep from a fan who plans to live in this
        town for a long time.
      </p>

      <div class="guide-callout guide-callout--tip">
        <strong>Quick take:</strong> Paralives is strongest on creativity (build + create) at EA launch.
        Live Mode is playable and improving, but treat your first save as a learning sandbox, not a
        finished story.
      </div>

      <h2>What Early Access Really Means for You</h2>
      <p>
        Early Access is not the full game — it is a funded beta you choose to join. The team targets
        roughly <strong>two years</strong> in EA before 1.0, with free updates and no paid DLC packs.
        That is good news for your wallet, but it also means bugs, missing features, and balance
        changes are normal, not emergencies.
      </p>
      <p>
        At launch you get the core loop: design Parafolks in <strong>Paramaker</strong>, build homes in
        <strong>Build Mode</strong>, and run households in <strong>Live Mode</strong> in an open-world
        town. Modding tools and Workshop support are planned for EA; pets, weather, cars, and gardening
        are confirmed to arrive <em>during</em> Early Access — not necessarily on day one.
      </p>

      <h2>Before You Launch the Game</h2>
      <ul>
        <li><strong>Check specs:</strong> 12 GB RAM and a GTX 1060–class GPU are common minimums — headroom helps in busy lots.</li>
        <li><strong>Set expectations:</strong> ~$39.99 at EA launch; price may rise slowly as content grows.</li>
        <li><strong>Pick a goal:</strong> Builder? Storyteller? Try one focus for your first session so you do not bounce between modes confused.</li>
        <li><strong>Update GPU drivers</strong> and close heavy background apps — life sims love RAM.</li>
      </ul>

      <h2>The Three Modes — How They Fit Together</h2>

      <h3>Paramaker (Create)</h3>
      <p>
        This is where your Parafolks are born: body sliders, genetics, layered outfits, and personality
        knobs. Spend time here if you care about legacy play — genetics matter for children later.
        Any clothing on any body type is a headline feature; asymmetry and tattoos add personality.
      </p>

      <h3>Build Mode</h3>
      <p>
        Grid-less curves, split-level platforms, resizable furniture, and deep color control are the
        selling point for many players. You can toggle a grid when you want precision. Treat your first
        house as a sketch — learn walls, platforms, and the color wheel before chasing a Pinterest-perfect
        mansion.
      </p>

      <h3>Live Mode</h3>
      <p>
        Needs, emotions, careers (often rabbit-hole style at EA), bills, relationships, and town venues
        like shops and the museum. Multiselect lets you direct small groups. Live Mode is the area most
        likely to feel “in progress” — fun, but expect rough edges compared to build tools.
      </p>

      <div class="guide-callout guide-callout--note">
        <strong>Player tip:</strong> A great first session is Paramaker → small starter home → move in
        with one or two Parafolks. Save ambitious stories for after you understand bills and needs.
      </div>

      <h2>Your First Hour — A Simple Checklist</h2>
      <ol class="guide-steps">
        <li>Create one Parafolk you actually like — you will stare at them for hours.</li>
        <li>Build or pick a starter lot; learn one Build Mode trick (split level or curved wall).</li>
        <li>Move in, turn on needs display, and follow one career or skill goal.</li>
        <li>Visit one town lot (shop, museum, or park) so you learn travel and venues.</li>
        <li>Save often; note one bug or wish in a personal list — EA feedback helps everyone.</li>
      </ol>

      <h2>What Is Probably Not on Day One</h2>
      <p>
        Roadmap features like pets, full weather, drivable cars, gardening, fishing, and a town editor
        are slated for <strong>during</strong> EA. If your reason to buy is “I need seasons and pets
        like my old save,” wait or buy with eyes open. Follow patch notes on our Updates section and
        adjust your saves as systems land.
      </p>

      <h2>Where to Go Next on Paralives Wiki</h2>
      <p>
        When you are ready to go deeper, browse the Wiki for system breakdowns, check Mods once
        Workshop goes live, check Updates for patch notes, and explore the Town Map for venues. More
        step-by-step guides will land here as Early Access progresses — bookmark the Guides index
        and check back after each major patch.
      </p>

      <p class="guide-outro">
        Have fun building your parallel life — and be kind to a small team shipping a huge genre
        dream. See you in town.
      </p>
    `,
  },
  {
    id: 2,
    title: 'Paralives Cheat & Console Commands',
    description:
      'Open the cheat console, money and bills shortcuts, time and sun controls, needs, fire debug tools, plus how to list every command — with patch safety notes.',
    tags: ['Live Mode', 'Cheats', 'Mods or Configuration'],
    publishDate: '2026-05-26',
    readTime: '7 min read',
    imageUrl: '/images/guides/guide02.webp',
    imageAlt:
      'Paralives cheat guide — developer console shortcuts for Paradimes and testing',
    seo: {
      title: 'Paralives Cheat Codes — Console Commands & Cheat Codes',
      description:
        'Paralives Early Access cheat console: Ctrl+Shift+C, Paradimes cheats, bills, time, needs, fire commands, skill helpers, and backing up saves before testing.',
      keywords:
        'Paralives cheats, Paralives console, Paradimes, jackpot, cheats guide, Early Access',
    },
    addressBar: 'cheat-console-commands',
    isHome: true,
    detailsHtml: `
      <p class="guide-lead">
        This Wiki guide summarizes <strong>console / cheat commands</strong> commonly shared by players
        in Early Access — originally compiled as a Steam Community guide credited to
        <strong>Cometa Maria</strong> under the category &ldquo;Modding or Configuration.&rdquo;
        Commands can be renamed, gated, or removed in patches: always verify in your current build before
        relying on cheats in long-term saves.
      </p>

      <div class="guide-callout guide-callout--note">
        <strong>Safety:</strong> Cheats skip normal economy and pacing. Duplicate households, stash a
        backup save folder, test on a throwaway household first, and read patch notes — especially after hotfixes.
      </div>

      <h2>Open the console</h2>
      <p>
        Close other text inputs, then press
        <strong>Ctrl + Shift + C</strong>
        (repeat or use the same chord your build lists in options if it differs — some players also check the in-game help).
      </p>

      <h2>Money &amp; households</h2>
      <p>Examples from player documentation (names are case-sensitive in many Unity-style consoles):</p>
      <ul>
        <li><strong>jackpot</strong> — large Paradimes lump sum (often cited as ~50,000).</li>
        <li><strong>makeitrain</strong> — another large grant (often cited ~10,000).</li>
        <li><strong>payday</strong> — smaller grant (often cited ~200).</li>
        <li><strong>piggybank</strong> — medium grant (~1,000 in community notes).</li>
        <li><strong>lottery</strong> — random Paradimes payout.</li>
        <li>
          <strong>printmoney &lt;amount&gt;</strong> — add to current household funds
          (<em>e.g.</em>, <code>printmoney 2000</code>).
        </li>
        <li>
          <strong>setmoney &lt;amount&gt;</strong> — set household funds to the exact total
          (<em>e.g.</em>, <code>setmoney 10000</code>).
        </li>
      </ul>

      <h2>Bills &amp; outages</h2>
      <ul>
        <li><strong>causeoutage</strong> / <strong>fixoutage</strong></li>
        <li><strong>generatebill</strong></li>
        <li><strong>clearbills</strong></li>
        <li><strong>clearselectedcharactersbills</strong></li>
      </ul>

      <h2>Time &amp; sun</h2>
      <ul>
        <li><strong>sethour</strong>, <strong>advancehour</strong>, <strong>advanceday</strong></li>
        <li>
          Sun tuning (names only — check in-game docs for ranges):
          <strong>setsunhour</strong>, <strong>afternoonsun</strong>, <strong>dawnsun</strong>,
          <strong>dusksun</strong>, <strong>midnightsun</strong>, <strong>noonsun</strong>,
          <strong>clearsun</strong>
        </li>
        <li><strong>skipto5minutesbeforework</strong></li>
      </ul>

      <h2>Needs</h2>
      <ul>
        <li>
          <strong>reliefneed &lt;need name&gt;</strong> —
          refill a named need (<em>e.g.</em>, <code>reliefneed sleep</code>).
        </li>
        <li><strong>reliefallneeds</strong></li>
        <li><strong>reliefallneedsofallcharacters</strong></li>
      </ul>

      <p class="guide-lead-sub">
        Players also report variants such as <code>changeneed</code> /
        <code>decayneed</code> with need id + intensity, or commands like
        <code>completecurrentwants</code>; treat these as community-sourced extras until confirmed in your build&apos;s cheat list or official notes.
      </p>

      <h2>Fire &amp; items</h2>
      <ul>
        <li><strong>selectedcharactersonfire</strong></li>
        <li><strong>extinguishselectedcharactersonfire</strong></li>
        <li><strong>setitemonfire</strong></li>
        <li><strong>extinguishallfires</strong></li>
      </ul>

      <h2>List every command</h2>
      <p>
        Type <strong>help</strong> in the console when available — most builds expose the authoritative
        autocomplete / dump for your version.
      </p>

      <h2>Gag / fun commands</h2>
      <ul>
        <li><strong>cat</strong>, <strong>bear</strong></li>
        <li><strong>8ball</strong>, <strong>eightball</strong>, <strong>eighteightball</strong></li>
        <li><strong>equifax</strong>, <strong>hotel</strong>, <strong>spin</strong></li>
      </ul>

      <h2>Skills, relationships &amp; debug (community additions)</h2>
      <p>
        Comment threads attach additional prefixes such as <code>levelupskill …</code>
        (<em>e.g.</em>, music / cooking / exercising), <code>leveluppersonality</code>,
        <code>resetpersonality</code>, various relationship debug strings, inventory helpers (<code>printinventory</code>, <code>additemtoinventory</code>, etc.), and life-stage jumpers (<code>setage …</code>).
      </p>
      <p>
        Those entries were not always part of the original guide body and vary by EA patch —
        typing <strong>help</strong> plus testing on a disposable save stays the quickest way to see what shipped in <em>your</em> exe.
      </p>

      <div class="guide-callout guide-callout--tip">
        <strong>About the Steam source:</strong> Community guides sometimes show moderation or compatibility banners.
        Treat Steam posts as snapshots; this Wiki page is rewritten for clarity — if a command behaves differently now, ping us via Contact and cite your game version plus build number.
      </div>

      <p class="guide-outro">
        Cheats exist to fix stuck saves and learn systems fast — balance them against the challenge you actually want when you settle into Melino long term.
      </p>
    `,
  },
]
