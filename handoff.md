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
- Commits: `29e6449 feat: add IC license learning landing page`, `9e54da0 feat: animate pixel mascot sprite`.
- Workspace root: `C:\Users\yourw\Desktop\Ham AI`.
- Root `AGENTS.md` exists and gives repository guidance.
- `ponytail-marketplace/ponytail/` is an existing Ponytail package with its own nested `AGENTS.md`. Do not put the learning site there unless the user explicitly chooses that location.
- The workspace root is not a Git repository and has no local commit history.
- GitHub CLI `gh 2.101.0` is installed, authenticated as `topnoname`, and configured for HTTPS.
- Latest site commit: `9e54da0 feat: animate pixel mascot sprite`.
- Site repository was clean after the latest push.

## Site Files

- `index.html`: page structure, Thai/English bubble, and CTA.
- `styles.css`: responsive layout, accessibility focus styles, reduced-motion support, and 16-frame sprite animation.
- `script.js`: three lesson messages and click handling.
- `assets/mascot-sprite.png`: uploaded transparent pixel-art sprite copied from the workspace asset.

## Remaining Review

1. Confirm that “IC license” means Investment Consultant license and replace placeholder lesson copy with approved course wording.
2. Review the 16-frame animation, Thai/English wording, and CTA on real mobile devices.
3. Decide whether the CTA should use an HTTPS version of `http://www.topyourwisdom.com`.

## Next Agent Actions

1. Resolve the remaining content and link review.
2. From `ic-license/`, run `node --check script.js`.
3. Preview with `python -m http.server 8766` and test desktop, mobile, keyboard focus, reduced motion, and CTA navigation.
4. Commit changes, run `git push origin main`, then check `https://topnoname.github.io/ic-license/`.

Current placeholder messages are:

- `alpha beta` / `Start with one clear idea.`
- `เรียนรู้ทีละแนวคิด` / `Build your IC License foundation step by step.`
- `พร้อมเริ่มบทเรียนแล้วหรือยัง?` / `Your next step is ready.`

## Done When

The current page loads without a build step, uses the uploaded face asset, shows the bubble, advances through all three states, opens the CTA, has no console errors, and works on GitHub Pages.
