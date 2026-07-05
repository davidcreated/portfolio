# Deploying to Vercel

This project is a static Expo web export, so Vercel just needs to know how to build it
and where the output lives.

## 1. Push the repo to GitHub

The repo already lives at `github.com/davidcreated/portfolio` with the latest commits.
Push any local changes before continuing:

```bash
git push origin main
```

## 2. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New... → Project**.
3. Select **Import Git Repository** and choose `davidcreated/portfolio`.
   - If it doesn't show up, click **Adjust GitHub App Permissions** and grant Vercel
     access to the repo.

## 3. Configure the build

Vercel will try to auto-detect a framework — override it since Expo isn't in its preset
list. In the **Configure Project** screen, set:

| Setting | Value |
|---|---|
| Framework Preset | Other |
| Build Command | `npx expo export --platform web` |
| Output Directory | `dist` |
| Install Command | `yarn install` (leave default) |

## 4. Deploy

Click **Deploy**. Vercel will install dependencies, run the build command, and publish
the `dist/` folder. First deploy takes a couple of minutes — you'll get a
`your-project.vercel.app` URL when it's done.

## 5. Add your custom domain

1. Buy your domain from any registrar (Namecheap, GoDaddy, Porkbun, etc.) if you don't
   already own it.
2. In the Vercel project, go to **Settings → Domains** and add your domain.
3. Vercel shows the DNS records to add. In your registrar's DNS settings:
   - For an apex domain (`example.com`): add the **A record** Vercel gives you.
   - For `www.example.com`: add the **CNAME record** Vercel gives you pointing to
     `cname.vercel-dns.com`.
4. Wait for DNS to propagate (usually minutes, sometimes up to a few hours). Vercel
   auto-issues an SSL certificate once it verifies the domain.

## 6. Redeploys

Every push to `main` triggers a new deploy automatically — no extra setup needed.

## Domain name suggestions

Checked availability via `whois` on 2026-07-05:

- **davidpaulroberts.com** — available, matches your full professional name (best for
  recruiters searching you by name)
- **dpfolorunsho.com** — available, short
- **davidpaulf.com** — available, short
- `davidcreated.com` — already registered (check if that's already yours, since it
  matches your GitHub handle)

Availability changes constantly — re-check on your registrar of choice before buying.
