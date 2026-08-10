**Source visual truth**

- `/var/folders/3h/px_6bwl96w50x8y34bkz_k_80000gn/T/TemporaryItems/NSIRD_screencaptureui_QpxNPU/Capture d’écran 2026-08-10 à 15.52.31.png`
- Existing Atlas page template: `../val-doise-sol-formes-urbaines/index.html` and `css/style.css`.

**Implementation evidence**

- Screenshot: `implementation-atlas.png`
- Viewport: 1280 × 720 CSS pixels, density 1.
- State: desktop, horaires théoriques, Monday 08:01.
- Primary interactions tested: theoretical/real-time switch, persistent sidebar, real-time explanation and loader state.
- Console/runtime: no application error observed during the checked state.

**Full-view comparison**

- Header uses the same three-column Atlas structure, Marianne typography, eyebrow/title/subtitle hierarchy and Sources & méthode pill.
- Workspace uses the same 390 px rounded sidebar plus rounded map card, 16 px gutter and shared shadows/tokens.
- The non-standard KPI strip is absent.

**Focused comparison**

- Sidebar header, data selector, day controls, time controls and map status were readable in the full 1280 × 720 capture; no additional crop was required.

**Findings**

- No remaining P0/P1/P2 mismatch in the common page structure.
- Transport-specific controls intentionally differ in content while reusing the standard Atlas component language.

**Comparison history**

- Earlier P1: non-standard KPI strip and full-width utility layout. Fixed by removing the strip and restoring the standard header/sidebar/map-shell composition.
- Earlier P1: real-time mode removed all navigation and explanation. Fixed by keeping the Atlas sidebar, data selector, method access and explicit mode explanation.

**Implementation Checklist**

- Standard Atlas shell: complete.
- Bus/train theoretical controls: retained.
- Real-time loading and explanation: retained.
- Val-d’Oise outline: retained.
- Sources and limits dialog: restored.

final result: passed
