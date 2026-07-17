# WAV ProjectFlow Studio — Preservation Build

This repository contains the full ProjectFlow interface and the original REDCAT ShootReady interface as one connected browser application.

## What is preserved

- GEM 50th Anniversary project and creative workspace
- GEM AI Workbench / assistant packet
- REDCAT production project
- Original ShootReady pages, calculations, checklists, live mode, print views, estimator handoff, and exports
- Jerome, Nathaniel, and Paula role views
- Mobile menu and simple/full views
- ProjectFlow workspaces, versions, approvals, assets, files, CEO Studio, and activity history

## Connected storage

ProjectFlow and ShootReady still use browser storage, so data remains specific to one browser/device until cloud sync is added. They now share the REDCAT ShootReady record on the same site.

Use **Backup** or **Download / Export → Download Everything** to create one complete JSON containing:

- all ProjectFlow projects and settings
- the connected REDCAT ShootReady record

Importing that complete backup restores both parts.

## Repository structure

```text
index.html
shared.js
shootready/index.html
data/redcat-shootready.json
CNAME
.nojekyll
```

## Publish an update

1. Replace the files in the local `wav-projectflow` repository with this package.
2. Keep any previous working copy outside the repository as a backup.
3. In GitHub Desktop, review the changes.
4. Commit to `main`.
5. Push origin.
6. Wait for GitHub Pages to deploy, then refresh the live site.

## Login preview

The Owner, Collaborator, and Client entrances are a role-view preview only. They are not security. Cloudflare Access can protect the hostname; true per-record user permissions require database-backed authentication later.

## Important

Do not commit private exported backup JSON files to this public repository.
