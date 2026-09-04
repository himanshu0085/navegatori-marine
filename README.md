# Navegatori Marine Services — Website

Static HTML website for Navegatori Marine Services.

## Files
- `index.html` — Main website
- `style.css` — All styling
- `main.js` — Nav & form JS
- `.github/workflows/deploy.yml` — Auto deploy to GoDaddy on push

## GitHub → GoDaddy Auto Deploy Setup

1. Go to your GitHub repo → **Settings → Secrets → Actions**
2. Add these 3 secrets:
   - `FTP_SERVER` → Your GoDaddy FTP server (e.g. `ftp.navegatorimarine.com`)
   - `FTP_USERNAME` → GoDaddy cPanel FTP username
   - `FTP_PASSWORD` → GoDaddy cPanel FTP password

3. Every time you push to `main` branch → site auto-deploys to GoDaddy ✅

## Get FTP Credentials
GoDaddy cPanel → Files → FTP Accounts
