# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS demo, UI-only — no backend, no live feed, no build step. Chosen from the explicit brief ("demo en html", "solo ui no hace falta que funcione").

## Users

A mixed motorsport audience, web-first for this surface. The recurring scene: the race weekend is on, Rebufo sits on a laptop or a second screen as the live-data companion while the broadcast plays. Also used in short mobile glances and, later, for looking back over a session's data. Mobile is explicitly deferred; the desktop dashboard leads.

## Product Purpose

Rebufo is a live-timing companion for motorsport. This surface is the live dashboard: one screen that makes the state of a session readable at a glance — order, gaps, pace, radio and race control. Success means a fan can glance for two seconds and know who is where and what just changed, without leaving the action.

## Positioning

Rebufo merges timing, telemetry, radio and race control into a single legible read of "what is happening right now". It is not a news site and not a results archive; it is the pulse of the session, one shared language across F1 today and MotoGP and IndyCar later.

## Operating Context

Used during and around sessions — practice, qualifying, sprint and race — often as a second screen beside the broadcast. The rituals of a race weekend: watching gaps swing after stops, reading tyre stints and degradation, catching team radio and race-control messages, checking flags, safety car and weather.

## Capabilities and Constraints

- Timing tower with position, driver, gaps, interval, last/best lap, micro-sectors, sectors, laps, pit count and tyre compound/age.
- A schematic circuit map with sector regions and one dot per running car, plus a best-lap benchmark block.
- The compound stint ribbons live on a second tab (`Timing | Stints`), keeping the strategy view without displacing the tower.
- Live telemetry: speed, throttle/brake, deltas and pace.
- Team radio feed plus race-control messages; flags and safety car states.
- Weather: track and air temperature, conditions.
- F1 only for this build; MotoGP and IndyCar are planned and inherit the same system with their own accent colour.
- UI/UX demo only: static, non-interactive beyond the visual states, no live data source.
- All session data is authored synthetic example content and must be labelled as such.
- No profile or account surface in this demo (explicitly dropped by the user).

## Brand Commitments

- Name: **Rebufo** (rebrand from WAC).
- Wordmark / display voice: **Chillax Variable**.
- General UI face: **Quicksand**.
- Numeric and tabular face: **JetBrains Mono** (or a comparable mono).
- Inherits the existing WAC iconography and category colour language: racing red for F1, orange for MotoGP, green for IndyCar.

## Evidence on Hand

- Existing WAC Android app screenshots (`screenshots/`) and theme code (`app/src/main/java/com/emi/wac/ui/theme/`): Alata type, dark gradient cards, F1 red `#C62828`, MotoGP orange `#EF7810`, IndyCar green `#15A434`, light noise ground.
- F1 assets under `app/src/main/assets/`: team cars, driver headshots, circuit outlines, team logos and country flags.
- No real timing feed, no timing sponsorship, no commercial claims. Synthetic timing data must be labelled synthetic.

## Product Principles

- The session is the story: every element answers "what is happening right now".
- Glanceable before deep: order and change first, detail on demand.
- One language, many categories: F1 leads; MotoGP and IndyCar inherit the system with their own accent.
- Data is the decoration: precision and legibility over ornament.

## Accessibility & Inclusion

No product-specific standard was confirmed. Treat WCAG AA contrast as the floor, and never carry meaning in colour alone — pair category and flag states with labels or icons.
