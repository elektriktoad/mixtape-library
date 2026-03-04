# 📼 Mixtape Library Template

A clean, forkable GitHub Pages template for cataloging and sharing your cassette mixtape collection. Built with Jekyll, this static site template makes it easy to showcase your tapes and let friends request loans—no backend required!

## ✨ Features

- **📚 Dual View Modes**: Toggle between grid (catalog) view with hover previews and detailed list view
- **🎨 Fully Customizable**: Theme colors, fonts, and settings via simple YAML files
- **📝 Request Generator**: Client-side form that creates formatted email text for tape requests
- **🔖 Easy Content Management**: Add tapes by creating markdown files—no coding required
- **🌐 GitHub Pages Ready**: Deploy for free with zero configuration
- **♻️ Forkable Design**: Template logic is separate from your content for easy upstream updates
- **📱 Responsive**: Works beautifully on desktop, tablet, and mobile

## 🚀 Quick Start

### 1. Fork This Repository

Click the "Fork" button at the top right of this repository to create your own copy.

### 2. Enable GitHub Pages

1. Go to your fork's **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**

Your site will be available at `https://yourusername.github.io/mixtape-library-template/`

### 3. Customize Your Site

Edit `_data/settings.yml` to personalize:

```yaml
owner:
  name: "Your Name"
  email: "your.email@example.com"
  bio: "Your bio here..."

theme:
  primary_color: "#e63946"
  secondary_color: "#457b9d"
  # ... more theme options
```

### 4. Add Your Tapes

Create new files in the `_tapes/` directory:

```yaml
---
title: "Midnight Dreaming"
author: "self"
length: "90 minutes"
genre: "Shoegaze / Dream Pop"
description: "A hazy journey through reverb-soaked guitars..."
requestable: true
tape_type: "Type II"
dolby: "Dolby B"
front_image: "midnight-dreaming-front.jpg"
back_image: "midnight-dreaming-back.jpg"
tracklist:
  - "Slowdive - Alison"
  - "My Bloody Valentine - When You Sleep"
  # ... more tracks
---
```

### 5. Add Tape Images

1. Scan or photograph your tape covers
2. Save images to the `/images/` directory
3. Name them to match your tape's slug: `tape-slug-front.jpg`

## 📂 Repository Structure

```
mixtape-library-template/
├── _config.yml              # Jekyll configuration
├── _data/
│   ├── settings.yml         # Site owner info, theme, policies
│   └── tape_options.yml     # Tape types, Dolby options, genres
├── _layouts/
│   ├── default.html         # Base layout with nav and footer
│   └── tape.html            # Individual tape detail page layout
├── _tapes/                  # Tape metadata files (your content!)
│   ├── midnight-dreaming.md
│   ├── underground-frequencies.md
│   └── ...
├── assets/
│   ├── scripts/
│   │   ├── catalog.js       # View toggle and checkbox management
│   │   └── request.js       # Request form generator
│   └── styles/
│       └── main.css         # Main stylesheet with CSS variables
├── images/                  # Tape cover artwork
│   └── README.md
├── index.html               # Main catalog page
├── request.html             # Request generator page
└── README.md                # This file
```

## 🎨 Customization Guide

### Theme Colors

Edit `_data/settings.yml`:

```yaml
theme:
  primary_color: "#e63946"      # Buttons, links, headings
  secondary_color: "#457b9d"    # Detail buttons, accents
  background_color: "#f1faee"   # Page background
  text_color: "#1d3557"         # Body text
  accent_color: "#a8dadc"       # Output section background
```

### Typography

```yaml
theme:
  heading_font: "'Courier New', monospace"
  body_font: "'Helvetica Neue', Arial, sans-serif"
```

For custom fonts, add Google Fonts to `_layouts/default.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Exchange Policy

Customize your lending policies in `_data/settings.yml`:

```yaml
policy:
  description: "Your lending philosophy..."
  guidelines:
    - "Tapes are lent for 2-4 weeks"
    - "Return shipping is your responsibility"
  charges:
    type_ii: "$3 for Type II blank tape"
    shipping: "Borrower covers return shipping"
```

### Available Tape Options

Configure what you offer in `_data/tape_options.yml`:

```yaml
tape_types:
  - name: "Type I (Normal/Ferric)"
    available: true
    cost: "Free"
  - name: "Type II (Chrome)"
    available: true
    cost: "$3"

dolby_options:
  - name: "No Dolby NR"
    available: true
  - name: "Dolby B"
    available: true
```

## 📝 Adding Tapes

### 1. Create a Markdown File

In `_tapes/`, create `your-tape-slug.md`:

```yaml
---
title: "Your Tape Title"          # Required
author: "self"                     # Required (or "unknown", "friend", etc.)
length: "90 minutes"               # Required
genre: "Genre / Subgenre"          # Required
description: "Short description"   # Required
requestable: true                  # true or false
tape_type: "Type II"               # Type I, II, or IV
dolby: "Dolby B"                   # none, Dolby B, C, or S
front_image: "your-tape-front.jpg" # Optional (shows placeholder if empty)
back_image: "your-tape-back.jpg"   # Optional
tracklist:                         # YAML list
  - "Artist - Track Title"
  - "Artist - Track Title"
---
```

### 2. Add Images

- Save cover images to `/images/`
- Use consistent naming: `your-tape-slug-front.jpg`
- Recommended: 800x800px minimum, JPEG format
- See `/images/README.md` for detailed guidelines

### 3. Commit and Push

```bash
git add _tapes/your-tape-slug.md images/your-tape-front.jpg
git commit -m "Add new tape: Your Tape Title"
git push
```

GitHub Pages will automatically rebuild your site (usually takes 1-2 minutes).

## 🔄 Updating from Upstream

If the template receives improvements, you can pull them into your fork:

### First Time Setup

```bash
# Add the original template as a remote
git remote add upstream https://github.com/yourusername/mixtape-library-template.git
git fetch upstream
```

### Pulling Updates

```bash
# Fetch latest changes from upstream
git fetch upstream

# Merge upstream changes into your main branch
git merge upstream/main

# Resolve any conflicts if they occur
# (Your tape files and settings should remain untouched)

# Push updated code to your fork
git push origin main
```

### Handling Conflicts

The template is designed so your content (`_tapes/`, `images/`, `_data/settings.yml`) rarely conflicts with upstream updates. If conflicts do occur:

1. Keep your customizations in `_data/settings.yml`
2. Keep all your tape files in `_tapes/`
3. Accept upstream changes for template files (`_layouts/`, `assets/`, etc.)

## 🛠️ Local Development

### Prerequisites

- Ruby 2.7 or higher
- Bundler

### Setup

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# View at http://localhost:4000
```

### Live Reload

```bash
bundle exec jekyll serve --livereload
```

The site will automatically rebuild when you save changes.

## 🌐 Deployment Options

### GitHub Pages (Recommended)

Already configured! Just enable Pages in your repository settings.

### Netlify

1. Connect your GitHub repository
2. Build command: `jekyll build`
3. Publish directory: `_site`

### Custom Server

```bash
# Build static files
bundle exec jekyll build

# Upload contents of _site/ to your server
```

## 📋 How the Request System Works

1. **Browse Catalog**: Users check boxes on tapes they want
2. **Selection Stored**: Choices saved in browser's localStorage
3. **Request Page**: Selected tapes appear in the form
4. **Add Custom Requests**: Users can request custom tapes by genre/inspiration
5. **Generate Email**: Form creates formatted plain text
6. **Copy & Send**: Users copy text and email it to you manually

**Note**: No data is sent anywhere automatically. Users must manually email the request text.

## 🎯 Design Philosophy

This template follows several key principles:

1. **Content/Code Separation**: Your tapes and settings are in dedicated directories, making updates safe
2. **No Dependencies**: Pure HTML/CSS/JS on the client side (Jekyll only builds static files)
3. **Privacy First**: No tracking, no external services, no data collection
4. **Fork Friendly**: Template improvements can be pulled without breaking customizations
5. **Accessible**: Semantic HTML, keyboard navigation, screen reader friendly

## 🤝 Contributing

Found a bug or have a feature idea? Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📜 License

MIT License - feel free to use this template for personal or commercial projects!

## 🙏 Credits

Created with ❤️ for tape enthusiasts everywhere.

Inspired by physical mixtape trading communities and the joy of analog music sharing.

---

## 🆘 Troubleshooting

### Site not building on GitHub Pages

- Check the **Actions** tab for build errors
- Ensure `_config.yml` is valid YAML
- Verify all required files are present

### Images not showing

- Check file paths match exactly (case-sensitive)
- Ensure images are in `/images/` directory
- Verify image filenames in tape metadata

### Request form not working

- Check browser console for JavaScript errors
- Ensure `assets/scripts/*.js` files are loaded
- Try clearing localStorage: `localStorage.clear()`

### Styles not applying

- Clear browser cache
- Check `assets/styles/main.css` is accessible
- Verify CSS custom properties in `_layouts/default.html`

---

**Happy tape cataloging! 📼✨**
