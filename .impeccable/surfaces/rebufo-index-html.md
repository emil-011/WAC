---
version: 1
slug: "rebufo-index-html"
primary_target: "rebufo/index.html"
related_targets: []
---

# Surface brief — Rebufo live-timing dashboard

- Scope: `rebufo/index.html`, a static UI/UX demo of the Rebufo live-timing dashboard.
- Mode: Operate.
- Audience / job / task: motorsport fans following a session live (second screen, laptop-first), reading order, gaps, pace, tyre state, radio and race control at a glance.
- Proof / content: authored synthetic race-weekend data (labelled); existing WAC F1 assets (team logos, driver headshots, flags).
- Constraints: web, static HTML/CSS, no live feed, F1 only for now, no profile surface.
- Revision: the centre was rebuilt on user feedback — the timing tower replaces the stint ribbon as the primary element; the ribbon moves to a second tab; a circuit map and best-lap benchmarks join the right rail. The dock and the visual system are unchanged.

## Direction contract

THESIS: The session is a timing tower first — twenty cars ranked in one instrument board where every column is a fact and the fastest sector is colour. It refuses the card-per-driver or feed arrangement; the stint ribbon, once the hero, becomes evidence one tab away.

OWN-WORLD: The night telemetry cockpit of the existing Rebufo identity — near-black ground, graphite instrument panels lit from within, hairline rules and bezels instead of flat cards, F1 racing red as the sole live accent, compound soft/medium/hard ribbons, Chillax for the wordmark, Quicksand for UI, JetBrains Mono for every number.

STORY: In two seconds a fan reads order, gaps, pace and tyre state from the tower; the circuit map shows where the field is; the dock goes deep on the selected car; the Stints tab explains strategy.

FIRST VIEWPORT: A full-width session header. Below it a tabbed centre panel (`Timing | Stints`) whose Timing tab is a 13-column tower — pos, driver, gap, interval, last, best, micro-sectors, S1–S3, laps, pit, tyre — with a sticky header and a red-washed selected row. The right rail holds the Marina Bay sector map over the best-lap benchmarks. The dock below carries the selected car's telemetry, radio and race control. Primary action: select a tower row.

FORM: The grounded stint-ribbon composition extended, not replaced — the ribbon keeps its build under the Stints tab. Seed key `05cd2ae9`.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
