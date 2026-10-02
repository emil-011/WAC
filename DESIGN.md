---
name: Rebufo — Live Timing
description: A night telemetry cockpit for following a motorsport session live.
colors:
  rebufo-red: "#FF2D1F"
  rebufo-red-bright: "#FF5A48"
  rebufo-red-fill: "#D01C0C"
  rebufo-red-deep: "#9E1206"
  night-ground: "#08090B"
  panel-graphite: "#12161B"
  panel-graphite-deep: "#0E1116"
  panel-graphite-hi: "#181D24"
  telemetry-white: "#F3F6F9"
  ink-white: "#FFFFFF"
  note-black: "#000000"
  read-gray: "#AEB7C2"
  label-gray: "#7E8896"
  slate-light: "#C9D2DC"
  hairline: "rgba(255,255,255,0.065)"
  hairline-soft: "rgba(255,255,255,0.035)"
  hairline-strong: "rgba(255,255,255,0.13)"
  wash: "rgba(255,255,255,0.05)"
  highlight: "rgba(255,255,255,0.28)"
  sector-amber: "#FFC400"
  sector-slow: "#E3C34A"
  track-green: "#2FD36A"
  ers-blue: "#3AA0FF"
  fastest-purple: "#C077FF"
  purple-line: "rgba(177,75,255,0.4)"
  purple-wash: "rgba(177,75,255,0.12)"
  radio-blue: "#9CCBFF"
  track-green-deep: "#1C9E4B"
  ers-blue-deep: "#1E6FBF"
  red-bright-deep: "#C01A10"
  compound-soft: "#FF3B30"
  compound-medium: "#FFC400"
  compound-hard: "#E9EDF2"
  compound-inter: "#38D97A"
  compound-wet: "#3AA0FF"
  team-mclaren: "#FF8000"
  team-red-bull: "#3671C6"
  team-ferrari: "#E8002D"
  team-mercedes: "#27F4D2"
  team-aston-martin: "#229971"
  team-williams: "#64C4FF"
  team-racing-bulls: "#6692FF"
  team-haas: "#B6BABD"
  team-kick-sauber: "#52E252"
  team-alpine: "#FF87BC"
typography:
  display:
    fontFamily: "Chillax, Quicksand, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.35
  label:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.1em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 700
  data-display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "30px"
    fontWeight: 700
  micro-xxs:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "8px"
    fontWeight: 700
  micro-xs:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "8.5px"
    fontWeight: 700
  micro-sm:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "9px"
    fontWeight: 700
  micro:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 700
  micro-md:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "10.5px"
    fontWeight: 700
  label-md:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
  body-md:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 500
  body-lg:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  title-md:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  data-lg:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "16px"
    fontWeight: 700
  data-xl:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "17px"
    fontWeight: 700
  headline-lg:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
  display-sm:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
  display-md:
    fontFamily: "Chillax, Quicksand, system-ui, sans-serif"
    fontSize: "25px"
    fontWeight: 600
  display-xl:
    fontFamily: "Chillax, Quicksand, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 600
rounded:
  micro: "2px"
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  pill: "999px"
spacing:
  xxs: "2px"
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "18px"
  2xl: "24px"
components:
  button-category:
    backgroundColor: "{colors.rebufo-red-fill}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.md}"
    padding: "7px 12px"
  button-tab:
    backgroundColor: "{colors.panel-graphite-deep}"
    textColor: "{colors.read-gray}"
    rounded: "{rounded.md}"
    padding: "7px 8px"
  chip-status:
    backgroundColor: "{colors.panel-graphite-deep}"
    textColor: "{colors.read-gray}"
    rounded: "{rounded.md}"
    padding: "7px 12px"
  compound-chip:
    backgroundColor: "{colors.night-ground}"
    textColor: "{colors.telemetry-white}"
    rounded: "{rounded.pill}"
  panel:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.telemetry-white}"
    rounded: "{rounded.xl}"
    padding: "10px 13px"
  lane-row:
    backgroundColor: "{colors.night-ground}"
    textColor: "{colors.telemetry-white}"
    height: "21px"
---

# Design System: Rebufo — Live Timing

## Overview

**Creative North Star: "La Cabina Nocturna"**

A night telemetry cockpit: the dark of a race-control room, instruments lit from within, and one live light — Rebufo red — carrying every moving state. The screen is a machine you read at a glance, not a page you scroll. Density is the point; every pixel that is not data is structure (rules, bezels, gutters) or air.

The system is **Operate** first. Familiarity outranks expression: a motorsport fan must trust the ordering, the compounds and the gaps within two seconds. Brand lives in the precise details — the Chillax wordmark, the red playhead, the compound-coloured ribbons — never in decoration layered over the task.

The centre of the screen is the **timing tower**: position, driver, gap, interval, last and best lap, fifteen F1-style micro-sectors, S1–S3 with status colour, laps, pit and tyre. To its right sit the **circuit map** (sector-painted trace with a dot per car) and the **best-lap benchmarks**. The compound **stint ribbons** — the previous centrepiece — move one tab away, under `Timing | Stints`, so the ribbon is never lost, only deferred. Selecting any tower row drives the detail dock below.

Depth is built by **instrumental layering**, not by glow. Panels are graphite plates separated by 1px hairlines, a top highlight and a long, low neutral shadow; light comes from the ambient field and from state, never from a zero-offset coloured halo.

**Key Characteristics:**
- Near-black ground; graphite instrument plates; F1 red as the only live accent.
- The timing tower is the centre; the stint ribbon is its second tab.
- Quicksand for chrome, Chillax for the wordmark, JetBrains Mono for every number.
- 1px hairlines, inner top-highlights, and low neutral shadows instead of coloured glows.
- Colour is state: compound, sector, flag and category each own a fixed hue.
- The circuit map paints three fixed sector regions; the driver dots carry team hue.

## Colors

A near-black field with a single hot accent, a five-hue data vocabulary, and two grays for reading.

### Primary
- **Rebufo Red** (#FF2D1F): the live accent. The playhead, the live connection dot, the selected driver, the active category, the delta label. If a state is moving, it is red.
- **Rebufo Red Bright** (#FF5A48): red as *text* where the pure red would fail contrast on graphite (deltas, penalty tags).
- **Rebufo Red Deep** (#9E1206): the far end of the red fill gradient. Solid red fills run `#D01C0C → #9E1206` so white label text clears AA.

### Tertiary (data hues; each carries one meaning only)
- **Sector Amber** (#FFC400): medium compound, safety car, yellow flag, warnings.
- **Track Green** (#2FD36A): track clear, DRS enabled, personal-best sector.
- **ERS Blue** (#3AA0FF): energy recovery / battery gauges, team-radio attribution.
- **Fastest Purple** (#C077FF): session-fastest sector only.
- **Compound Soft / Medium / Hard / Inter / Wet** (#FF3B30 / #FFC400 / #E9EDF2 / #38D97A / #3AA0FF): the stint-ribbon fill. These are data, never chrome.

### Neutral
- **Night Ground** (#08090B): the page field.
- **Panel Graphite** (#12161B): instrument plates (telemetry, radio, race control, cards).
- **Telemetry White** (#F3F6F9): primary reading ink and values.
- **Read Gray** (#AEB7C2): secondary text, descriptions, feed copy.
- **Label Gray** (#7E8896): axis ticks, column headers, units, timestamps.
- **Hairline** (`rgba(255,255,255,0.065)`): every divider; never a heavier stroke for structure. The full neutral-alpha family (`.035` soft, `.13` strong, `.05` wash, `.28` highlight) is the only "colour" allowed to carry structure.
- **Team hues** (`team-*`, ten entries): team identity, applied to the gutter tick and the circuit dots. Data, never chrome.

### Named Rules
**The One Live Light Rule.** Rebufo Red marks only what is live, selected, or the current lap. It never decorates a static object; its scarcity is what makes the playhead legible.

**The Data-Owns-Its-Hue Rule.** Compound, sector, flag and category hues are reserved for their data meaning and are never used as brand chrome.

**The Track-Paint Rule.** The circuit's three sector regions are painted with a fixed triad — S1 ERS Blue, S2 Slate Light, S3 Sector Amber — as spatial identity only. Sector *time* status (purple/green/amber) lives on the timing tower and never on the map.

## Typography

**Display Font:** Chillax (with Quicksand, system-ui)
**Body/UI Font:** Quicksand (with system-ui)
**Numeric Font:** JetBrains Mono (with ui-monospace, SF Mono)

**Character:** Chillax gives the wordmark a rounded geometry that reads as a motorsport roundel without shouting; Quicksand keeps the interface soft and legible at small sizes; JetBrains Mono is not costume — it is the face of measurement, applied to times, gaps, positions, temperatures and codes with tabular figures so columns never jitter.

### Hierarchy
- **Display** (600, 26px, 1): the `rebufo` wordmark and the selected driver's name.
- **Headline** (700, 19px, 1.2): the grand-prix name; panel-level emphasis.
- **Title** (700, 14px): panel headings; driver codes in the gutter.
- **Body** (500, 12px, 1.35): radio and race-control feed copy; never below 11px for functional text.
- **Label** (700, 11px, 0.1em, uppercase): column headers, gauge captions, chips, tags.
- **Data** (700, 11–34px, tabular): every number. The biggest data voice is the delta (30px), then the lap counter (22px).

### Named Rules
**The Numbers-Are-Mono Rule.** Every quantity — time, gap, temperature, speed, gear, position — is set in JetBrains Mono with `font-variant-numeric: tabular-nums`. Prose and labels are never mono.

**The No-Eyebrow Rule.** No small tracked label is placed above a heading. `LIVE TIMING` sits *inside* the wordmark lockup and `R16` is the championship round number, an information value, not a kicker.

## Layout

A full-height instrument shell in five rows: session header (58px), session bar (46px), the main region (flex), the detail dock (270px), and a legend footer (36px).

- **The main region** is a two-column grid: the centre panel takes the remaining width; a 344px right rail holds the circuit map over the benchmarks.
- **The centre panel** is tabbed, `Timing | Stints`. *Timing* is a 13-column tower — pos, driver (team tick + 3-letter code + flag), gap, interval, last, best, 15 micro-sectors, S1–S3, laps, pit, tyre + age — one 20px row per driver with a sticky header. *Stints* is the lap axis over twenty 20px ribbon lanes with the red playhead and the safety-car / yellow bands.
- **Density**: 20 tower rows + tabs + the dock fit a 1440×900 viewport without scrolling. Vertical rhythm is tight (row 20px, panel gaps 10–12px); air is spent between regions, not inside them.
- **Fluid width**: the right rail narrows to 318px at ≤1320. At ≤1120 the main region stacks (centre above a two-up circuit / benchmark row), the dock drops to two columns and the session tabs hide. At ≤900 the shell stacks and the tower scrolls horizontally at a 900px minimum, so no column is ever dropped.

## Elevation & Depth

Depth is **instrumental layering**, never glow. There is no backdrop blur, no coloured halo, no glow on any panel or control. A plate reads as raised through four cheap signals together: a 1px hairline border, a top inner highlight, a vertical graphite gradient, and one long low neutral shadow. Recessed elements (the stint track, gauge bars) invert the top highlight and add an inner shadow.

### Shadow Vocabulary
- **Plate** (`0 1px 0 rgba(255,255,255,.06) inset, 0 22px 40px -34px #000`): every dashboard panel.
- **Bar** (`0 1px 0 rgba(255,255,255,.05) inset, 0 14px 30px -22px #000`): the top bar and session bar.
- **Element** (`0 1px 0 rgba(255,255,255,.08) inset, 0 6px 14px -8px #000`): the wordmark tile, floating tags.
- **Recess** (`inset 0 1px 2px rgba(0,0,0,.7), inset 0 0 0 1px rgba(255,255,255,.035)`): the lane track and gauge troughs.
- **Field** (`inset 0 0 240px 40px rgba(0,0,0,.75)`): the fixed viewport vignette.

### Named Rules
**The No-Halo Rule.** Shadows are neutral and offset. A zero-offset coloured blur is a defect, not a highlight, even when the element is live; liveness is carried by red *fills*, not red halos.

**The Recess Rule.** Anything that holds a value (a track, a trough, a progress bar) is recessed with an inner shadow; anything that presents one is raised with an inner top highlight.

## Shapes

Soft instrument geometry. Corners are modest and consistent: panels 12px, the wordmark tile 11px, chips and tabs 8–10px, small tags 4–5px. Circular forms are reserved for data (compound chips are perfect circles, LED state dots) so shape itself signals "this is a value". Borders are always 1px hairlines; there are no heavy strokes, no left colour bars above 1px, and no angled or notched silhouettes. The stint ribbon is a 12px rounded bar — the recurring signature form of the surface.

## Components

### Buttons
- **Shape:** 8px radius, 7px vertical padding, no border in the active state.
- **Primary (Active Category):** solid red fill (`#D01C0C → #9E1206`), white uppercase label, inner top highlight.
- **Tab (Session / Inactive):** transparent on a graphite trough, Read Gray label; hover raises to a faint white wash; active takes the graphite gradient + hairline.
- **Focus:** 2px Rebufo Red outline, 2px offset, on every control.

### Chips
- **Style:** graphite-deep background, 1px hairline, 8–9px radius, 11px uppercase Label Gray caption beside a mono or semi-bold value.
- **State:** semantic variants only — green for DRS/clear, amber for safety car/yellow, red for penalties. A chip never uses red decoratively.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** `Panel Graphite → Graphite Deep` vertical gradient.
- **Shadow Strategy:** the Plate shadow; 1px hairline border; a centred top highlight hairline.
- **Internal Padding:** 10–13px; panel headings are 11px tracked uppercase.

### Navigation
No page navigation: the surface is a single screen. Wayfinding is the category switch (F1 active; MotoGP and IndyCar shown, marked "coming soon" — they never masquerade as live) and the session tabs. Both are graphite troughs of 8px-radius buttons; only the current one is filled.

### The Timing Tower
The centre of the surface. A 13-column instrument board: pos, driver, gap, interval, last, best, a 15-segment micro-sector bar, S1–S3, laps, pit and tyre + age. Rows are 20px, striped only by a 1px hairline; the selected row takes a red-tinted wash and promotes its driver to the dock below. The header row is sticky and uses 11px tracked-uppercase labels. Micro-segments are 8px bars: purple = session best, green = personal best, amber = slower. Sector cells tint their text and background by status and never hide the time.

### The Circuit Map
An authored SVG trace of Marina Bay (1000×563 user units) with three sector regions painted S1 blue / S2 slate / S3 amber over a dark asphalt base, a white start/finish tick, and one dot per running car placed along the path by its gap to the leader and filled with its team hue. The leader is larger; the selected car takes a red ring. The map is a schematic: it carries position and sector identity, never speed.

### Signature Component: The Stint Ribbon
Under the *Stints* tab. One 20px row per driver: a frozen gutter plus a lane. Each stint is a 12px bar in its compound colour (`soft #FF3B30`, `medium #FFC400`, `hard #E9EDF2`, `inter #38D97A`, `wet #3AA0FF`) with a top highlight, width proportional to laps run, and a mono stint label inside when it is wide enough. Pit stops are amber `P` notches; safety-car and yellow periods are translucent amber bands behind the ribbon. The current stint's leading edge carries a small white live tick.

## Do's and Don'ts

### Do:
- **Do** keep the near-black ground and let red appear only on live/selected/current-lap state (The One Live Light Rule).
- **Do** keep the timing tower as the centre of the surface, with the stint ribbon one tab away.
- **Do** set every number in JetBrains Mono with tabular figures.
- **Do** build depth from hairline + inner top highlight + gradient + one low neutral shadow together.
- **Do** reserve compound, sector, flag and category hues strictly for their data meaning (The Track-Paint Rule governs the map).
- **Do** keep the dock to three panels and the tower to 20 rows within a 1440×900 viewport.
- **Do** label synthetic data as synthetic wherever it ships.

### Don't:
- **Don't** use coloured glow shadows or zero-offset halos, even on live elements.
- **Don't** use gradient text, eyebrow labels above headings, or emoji as icons.
- **Don't** animate layout properties (width/height); animate transform and opacity.
- **Don't** use functional text below 11px, or coloured left borders above 1px.
- **Don't** reformat the timing tower into cards or drop a column instead of scrolling it.
- **Don't** introduce a profile, account, or settings surface into this dashboard.
