# 🚀 Deployment Guide

This guide covers different ways to deploy your Mixtape Library site.

---

## 🌟 Option 1: GitHub Pages (Recommended)

**Best for**: Most users, completely free, automatic builds

### Prerequisites
- GitHub account
- Forked repository

### Setup Steps

1. **Navigate to Repository Settings**
   - Go to your forked repository on GitHub
   - Click **Settings** (top right)
   - Click **Pages** (left sidebar)

2. **Configure Source**
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master**)
   - Folder: **/ (root)**
   - Click **Save**

3. **Wait for Build**
   - First build takes 1-3 minutes
   - Check **Actions** tab to monitor progress
   - Green checkmark = successful build

4. **Access Your Site**
   - URL: `https://yourusername.github.io/repository-name/`
   - Link appears at top of Pages settings when ready
   - Bookmark this URL!

### Custom Domain (Optional)

1. **Buy a domain** (Namecheap, Google Domains, etc.)

2. **Add domain to GitHub**
   - In Pages settings, enter domain in "Custom domain"
   - Click Save

3. **Configure DNS**
   - Add CNAME record pointing to: `yourusername.github.io`
   - Or A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

4. **Enable HTTPS**
   - Check "Enforce HTTPS" in Pages settings
   - Wait 24 hours for certificate provisioning

### Troubleshooting GitHub Pages

**Build Failed?**
- Check Actions tab for error details
- Verify `_config.yml` has valid YAML
- Ensure Gemfile specifies Jekyll version

**404 Errors?**
- Check Pages settings are correct
- Verify main branch is selected
- Wait a few minutes and refresh

**Assets Not Loading?**
- Images should be in `/images/` directory
- Check paths are relative: `{{ '/images/file.jpg' | relative_url }}`
- File names are case-sensitive!

---

## 🔷 Option 2: Netlify

**Best for**: Custom domains, preview deployments, advanced features

### Setup Steps

1. **Create Netlify Account**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up (GitHub integration recommended)

2. **Connect Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Grant Netlify access

3. **Configure Build Settings**
   ```
   Build command: jekyll build
   Publish directory: _site
   ```

4. **Deploy**
   - Click "Deploy site"
   - Site goes live in ~1 minute
   - Auto-deploys on every push to main

### Custom Domain on Netlify

1. **Domain Settings**
   - Site settings → Domain management
   - Click "Add custom domain"

2. **Update DNS**
   - Add Netlify DNS servers at your registrar
   - Or add CNAME pointing to your Netlify subdomain

3. **Enable HTTPS**
   - Automatic with Let's Encrypt
   - Free SSL certificate

### Netlify Advantages

- ✅ Instant preview deployments for PRs
- ✅ Form handling (if you add forms later)
- ✅ Faster build times
- ✅ Better deploy previews
- ✅ Redirect rules support

---

## 🟢 Option 3: Vercel

**Best for**: Fast builds, modern workflow, great DX

### Setup Steps

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com/)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects Jekyll

3. **Deploy**
   - Click "Deploy"
   - Live in seconds
   - Auto-deploys on push

### Custom Domain on Vercel

1. **Add Domain**
   - Project settings → Domains
   - Enter your domain
   - Follow DNS instructions

2. **SSL**
   - Automatic HTTPS
   - Instant certificate

---

## 🖥️ Option 4: Self-Hosted

**Best for**: Full control, existing server, custom setup

### Build Locally

```bash
# Install dependencies
bundle install

# Build static site
JEKYLL_ENV=production bundle exec jekyll build

# Output is in _site/ directory
```

### Deploy to Server

**Via FTP/SFTP:**
```bash
# Upload _site/ contents to web root
# Example with rsync:
rsync -avz _site/ user@yourserver.com:/var/www/html/
```

**Via SSH:**
```bash
# On server:
cd /var/www/html
git clone https://github.com/yourusername/repo.git .
bundle install
bundle exec jekyll build

# Set up cron job for auto-updates:
# 0 */6 * * * cd /var/www/html && git pull && bundle exec jekyll build
```

### Web Server Configuration

**Apache (.htaccess):**
```apache
# Enable clean URLs
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]
```

**Nginx:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html/_site;
    
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

---

## 📦 Option 5: Other Platforms

### CloudFlare Pages
1. Connect GitHub repository
2. Build command: `jekyll build`
3. Output directory: `_site`

### Render
1. New Static Site
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`

### GitLab Pages
1. Add `.gitlab-ci.yml`:
```yaml
pages:
  script:
    - bundle install
    - bundle exec jekyll build -d public
  artifacts:
    paths:
      - public
  only:
    - main
```

### AWS S3 + CloudFront
1. Build site locally
2. Upload `_site/` to S3 bucket
3. Configure bucket for static hosting
4. Add CloudFront for CDN

---

## 🔄 Continuous Deployment

### Automatic Updates

All these platforms support auto-deploy:

```bash
# Make changes locally
git add .
git commit -m "Add new tape"
git push origin main

# Platform automatically:
# 1. Detects push
# 2. Builds site
# 3. Deploys changes
# 4. Site updated in ~1-3 minutes
```

### Build Status Badges

Add to README.md:

**GitHub Pages:**
```markdown
![Deploy](https://github.com/user/repo/actions/workflows/pages.yml/badge.svg)
```

**Netlify:**
```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-ID/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
```

---

## ⚡ Performance Tips

### Before Deploying

1. **Optimize Images**
   ```bash
   # Use ImageOptim, TinyPNG, or:
   find images -name "*.jpg" -exec jpegoptim --max=85 {} \;
   ```

2. **Minify CSS** (optional)
   - Use online tool or plugin
   - Keep original for development

3. **Check File Sizes**
   ```bash
   # Images should be < 500KB each
   du -sh images/*
   ```

### After Deploying

1. **Test Performance**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - Lighthouse in Chrome DevTools

2. **Enable CDN** (if available)
   - CloudFlare (free tier)
   - Platform's built-in CDN

3. **Monitor Uptime**
   - [UptimeRobot](https://uptimerobot.com/) (free)
   - Platform's built-in monitoring

---

## 🔒 Security Checklist

- [ ] No sensitive data in repository
- [ ] Email address is public (expected)
- [ ] HTTPS enabled
- [ ] Dependencies up to date
- [ ] No API keys in code
- [ ] `.gitignore` includes `_site/` and `Gemfile.lock`

---

## 📊 Analytics (Optional)

If you want to track visitors:

### Google Analytics

Add to `_layouts/default.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Privacy-Friendly Alternatives

- **Plausible** - Privacy-focused, GDPR compliant
- **Fathom** - Simple, no cookies
- **Cloudflare Analytics** - Server-side, no JS

---

## ✅ Post-Deployment Checklist

- [ ] Site is publicly accessible
- [ ] All pages load correctly
- [ ] Images display (or show placeholders)
- [ ] Request form works
- [ ] Copy to clipboard functions
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Social sharing works
- [ ] Tested in multiple browsers

---

## 🆘 Getting Help

**Build Issues:**
- Check platform's build logs
- Verify Gemfile dependencies
- Test locally first

**Styling Issues:**
- Hard refresh: Cmd/Ctrl + Shift + R
- Check CSS file loads
- Verify CSS custom properties

**JavaScript Issues:**
- Open browser console
- Check for error messages
- Verify JS files load

**Need Support?**
- Open GitHub issue
- Check documentation
- Community forums

---

**Congratulations! Your mixtape library is now live! 🎉📼**
