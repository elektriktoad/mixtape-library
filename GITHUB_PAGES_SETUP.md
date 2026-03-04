# GitHub Pages Setup Instructions

## Critical First Step: Configure `baseurl`

When you fork this repository and deploy to GitHub Pages, you **must** update the `baseurl` in `_config.yml` or images and links will not work.

### How to Find Your `baseurl`

1. **Go to your GitHub repository**
2. **Settings → Pages**
3. Look at your site URL

Your URL will be one of these formats:

#### Format 1: Project Site (Most Common)
```
https://yourusername.github.io/mixtape-library-template/
                                   ├─────────────────────┘
                                   This is your baseurl
```
**Set in `_config.yml`:**
```yaml
baseurl: "/mixtape-library-template"
```

#### Format 2: User/Organization Site
```
https://yourusername.github.io/
                               └─ (no path)
```
**Set in `_config.yml`:**
```yaml
baseurl: ""
```

#### Format 3: Custom Domain
```
https://yourmixtepes.com/
                         └─ (no path)
```
**Set in `_config.yml`:**
```yaml
baseurl: ""
```

---

## Step-by-Step Setup

### 1. Fork the Repository
- Click the "Fork" button on GitHub
- This creates your own copy

### 2. Edit `_config.yml`
- Open your forked repository on GitHub
- Click the pencil icon to edit `_config.yml`
- Find this line:
  ```yaml
  baseurl: "/mixtape-library-template"
  ```
- Replace with your repository name
- Click "Commit changes"

### 3. Enable GitHub Pages
- Go to **Settings → Pages**
- Under "Source": select **Deploy from a branch**
- Choose **main** branch and **/ (root)** folder
- Click **Save**
- Wait 1-3 minutes

### 4. Test Your Site
- Visit your GitHub Pages URL
- All images should load ✓
- All links should work ✓
- If they don't, double-check your `baseurl`

---

## Troubleshooting

### Images Still Not Loading?

1. **Verify `baseurl` is correct**
   - Go to your site in browser
   - Right-click → "View Page Source"
   - Search for `<img src=`
   - The path should start with your `baseurl`
   - Example: `src="/mixtape-library-template/images/..."`

2. **Check image filenames**
   - Image files are **case-sensitive**
   - Must match exactly what's in tape metadata
   - Example: If metadata says `midnight-dreaming-front.jpg`
   - File must be exactly `midnight-dreaming-front.jpg` (not `.JPG` or `Midnight-Dreaming-front.jpg`)

3. **Hard refresh your browser**
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
   - This clears cached CSS/JS that might be outdated

### Links Don't Work?

1. **Verify `baseurl` in browser**
   - Right-click on a link → "Copy link address"
   - Should start with your full GitHub Pages URL
   - Example: `https://yourusername.github.io/mixtape-library-template/tape/midnight-dreaming/`

2. **Check the `_config.yml` change was committed**
   - Make a test commit in GitHub interface
   - Wait for GitHub Actions to complete (check "Actions" tab)
   - Refresh your site

### Build Failing?

1. **Check Actions tab**
   - Go to your repository's "Actions" tab
   - Click the failed workflow
   - Read the error message
   - Common issues:
     - Invalid YAML in `_data/settings.yml`
     - Missing image files referenced in tape metadata
     - Typo in `_config.yml`

---

## Once It Works

After your site is live and working:

1. **Customize your content**
   - Edit `_data/settings.yml`
   - Add your tapes in `_tapes/`
   - Add images to `images/`

2. **Pull upstream updates** (see DEPLOYMENT.md)
   ```bash
   git fetch upstream
   git merge upstream/main
   ```
   Your `baseurl` and content will be preserved!

---

## Questions?

- See **README.md** for full documentation
- See **QUICKSTART.md** for 5-minute setup
- See **DEPLOYMENT.md** for other hosting options
- Check existing GitHub Issues for similar problems

**Your site should now be live with working images and links! 🎉**
