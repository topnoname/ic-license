# Handoff: IC License Learning Landing Page

## Resume Here

Continue in `ic-license/`. The site is already deployed; do not rebuild it in `ponytail-marketplace/`.

## Goal

Maintain a GitHub Pages landing page that attracts learners to an IC license course. Use the uploaded 4x4 transparent pixel-art sprite at `asset/ChatGPT Image Sep 19, 2026, 06_28_49 PM.png` and keep the speech bubble. Clicking the face or bubble advances a short lesson. The first concept phrase is `alpha beta`; later copy must use accurate IC license content. Text should support Thai and English. No audio is required.

## Confirmed Decisions

- Product/brand landing page, presented as one full-screen scene.
- Bright, playful visual direction.
- Plain HTML, CSS, and JavaScript; no framework or build step.
- Use the uploaded 16-frame transparent PNG as a CSS sprite loop. Do not generate a replacement mascot.
- Deterministic three-step flow: greeting -> micro-lesson -> call to action.
- Click changes the bubble text. Use a readable bubble, not random copy.
- CTA should open `http://www.topyourwisdom.com`.
- Use a new dedicated GitHub repository with a `username.github.io/repository` Pages URL.

## Current State

- Static site is complete in `ic-license/`.
- Public repository: `https://github.com/topnoname/ic-license`.
- Live GitHub Pages site: `https://topnoname.github.io/ic-license/`.
- Uploaded mascot source: `asset/ChatGPT Image Sep 19, 2026, 06_28_49 PM.png`; site copy is `ic-license/assets/mascot-sprite.png`.
- Commits: `29e6449 feat: add IC license learning landing page`, `9e54da0 feat: animate pixel mascot sprite`, `4d0d260 docs: add project handoff`.
- Workspace root: `C:\Users\yourw\Desktop\Ham AI`.
- Root `AGENTS.md` exists and gives repository guidance.
- `ponytail-marketplace/ponytail/` is an existing Ponytail package with its own nested `AGENTS.md`. Do not put the learning site there unless the user explicitly chooses that location.
- The workspace root is not a Git repository and has no local commit history.
- GitHub CLI `gh 2.101.0` is installed, authenticated as `topnoname`, and configured for HTTPS.
- Latest site commit: `4d0d260 docs: add project handoff`.
- Site repository was clean before the current content update.

## Site Files

- `index.html`: page structure, Thai/English bubble, and CTA.
- `styles.css`: responsive layout, accessibility focus styles, reduced-motion support, and 16-frame sprite animation.
- `script.js`: three lesson messages and click handling.
- `assets/mascot-sprite.png`: uploaded transparent pixel-art sprite copied from the workspace asset.

## Remaining Review

1. Review the 16-frame animation, Thai/English wording, and CTA on real mobile devices.
2. Recheck whether the CTA can use HTTPS when the destination is reachable for verification.

## Next Agent Actions

1. Preview with `python -m http.server 8766` and test desktop, mobile, keyboard focus, reduced motion, and CTA navigation.
2. Commit changes, run `git push origin main`, then check `https://topnoname.github.io/ic-license/`.

Current lesson messages are:

- `alpha beta` / `Start with one clear idea.`
- `IC คือผู้แนะนำการลงทุน` / `An Investment Consultant provides investment information and advice.`
- `เรียนรู้ให้พร้อมก่อนให้คำแนะนำ` / `Build knowledge before guiding an investor.`

The copy is a general educational description; replace it with course-specific wording when approved.

## Done When

The current page loads without a build step, uses the uploaded face asset, shows the bubble, advances through all three states, opens the CTA, has no console errors, and works on GitHub Pages.
