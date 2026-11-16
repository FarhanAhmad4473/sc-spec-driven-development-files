---
name: changelog
description: Create or update AgentClinic's CHANGELOG.md (in the my-agentclinic project root) from git history, with one `## YYYY-MM-DD` heading per date and a bullet per change. Use when the user says "update the changelog", "use your changelog skill", or invokes /changelog, and run it before merging a feature branch into main.
---

# Changelog

Keep `CHANGELOG.md` in the AgentClinic project root (the folder with `package.json`,
`my-agentclinic/` in this repo) up to date from git history. The user runs this
by hand before merging a branch, so the changelog lands in the same merge as the work.

## Format

```markdown
# Changelog

All notable changes to AgentClinic, newest first.

## 2026-11-16

- Added a responsive, mobile-first stylesheet.
- Added Vitest component tests for the layout.

## 2026-11-15

- Created the project constitution: mission, tech stack and roadmap.
```

- One `## YYYY-MM-DD` heading per date, **newest first**. Dates use the commit's
  author date in local time (`git log --date=short`).
- Under each date, one bullet per meaningful change, in past tense ("Added",
  "Changed", "Fixed", "Removed"), written for a reader of the product, not as a
  raw commit message. Merge several commits about the same change into one bullet.
- Leave out merge commits, typo-only fixes, and changes outside the project folder.
- Never put a date heading in twice. If a date already exists, add the new bullets
  under it and skip any bullet that already says the same thing.

## Steps

1. **Find the project root:** `git rev-parse --show-toplevel`, then the
   `my-agentclinic/` folder inside it. Run all git commands below with
   `-- my-agentclinic` (or from inside that folder with `-- .`) so only project
   changes count.

2. **If there is no `CHANGELOG.md`:** build it from the whole history:
   ```bash
   git log --no-merges --date=short --format='%ad%x09%h%x09%s%n%b' -- my-agentclinic
   ```
   Group the commits by date and write one bullet per meaningful change.

3. **If `CHANGELOG.md` exists:** take the newest date heading in it as `LAST`, then
   look only at commits from that date on:
   ```bash
   git log --no-merges --date=short --since="$LAST 00:00" --format='%ad%x09%h%x09%s%n%b' -- my-agentclinic
   ```
   For `LAST` itself, add only the changes it doesn't already list.

4. **Include the branch's work that isn't committed yet.** The skill runs just before
   merging, so check `git status --short -- my-agentclinic` and
   `git diff HEAD --stat -- my-agentclinic`. Describe any uncommitted changes under
   **today's** date (`date +%F`).

5. **Write the file:** keep the title and intro line, insert new date sections in
   newest-first order, and leave older sections as they are.

6. **Report:** tell the user which dates and bullets you added. Don't commit; the
   user commits the changelog together with the work being merged.
