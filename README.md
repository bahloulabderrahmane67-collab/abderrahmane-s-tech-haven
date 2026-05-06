# Portfolio — Abderrahmane BAHLOUL

Portfolio personnel construit avec **React + Vite + TanStack Start**.

## Développement local

```bash
bun install
bun run dev
```

## Build de production

```bash
bun run build
```

## Déploiement sur GitHub Pages

Ce projet utilise TanStack Start avec rendu côté serveur par défaut. Pour un hébergement **statique sur GitHub Pages**, deux options :

### Option 1 — Export statique (recommandé)

1. Pousser le projet sur un dépôt GitHub.
2. Dans `Settings → Pages`, choisir **GitHub Actions** comme source.
3. Créer le workflow `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. Ajouter un fichier `public/.nojekyll` vide pour éviter les problèmes Jekyll.
5. Si le repo n'est pas `username.github.io`, configurer `base: '/nom-du-repo/'` dans `vite.config.ts`.

### Option 2 — Vercel / Netlify / Cloudflare Pages

Connectez simplement le dépôt GitHub : la commande `bun run build` et le dossier `dist` sont auto-détectés.

## Ajouter un nouveau projet

Éditez `src/data/portfolio.ts` et ajoutez une entrée dans le tableau `projects` — la carte apparaîtra automatiquement.

## Personnaliser

- **Couleurs / design system** : `src/styles.css`
- **Sections** : `src/components/`
- **CV** : remplacez `public/CV_BAHLOUL_Abderrahmane.pdf`
