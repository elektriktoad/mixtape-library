# Testing Checklist

Use this checklist to verify everything works before deploying your site.

## 🔧 Initial Setup Tests

### Jekyll Build
- [ ] `bundle install` runs without errors
- [ ] `bundle exec jekyll serve` starts successfully
- [ ] Site loads at `http://localhost:4000`
- [ ] No build warnings in terminal
- [ ] All pages are accessible

## 📄 Page Tests

### Index Page (Catalog)
- [ ] Page loads without errors
- [ ] All 4 sample tapes display
- [ ] Images load (or show placeholders)
- [ ] Grid view displays correctly
- [ ] List view toggle works
- [ ] View preference persists on reload
- [ ] Hover overlays work on grid items
- [ ] "Request" checkboxes are functional
- [ ] Request counter updates when checking boxes
- [ ] "Not Available" shows for non-requestable tapes

### Individual Tape Pages
- [ ] Clicking tape opens detail page
- [ ] All metadata displays correctly
- [ ] Images show (front and back if available)
- [ ] Tracklist renders properly
- [ ] "Back to Catalog" link works
- [ ] Checkbox state persists
- [ ] "Go to Request Page" link works

### Request Page
- [ ] Page loads without errors
- [ ] Policy information displays
- [ ] Selected tapes appear in list
- [ ] Can remove tapes from selection
- [ ] Custom request form fields work
- [ ] All radio buttons function
- [ ] Checkboxes for genres work
- [ ] Text areas accept input
- [ ] Required fields are enforced

### Request Generator
- [ ] "Generate Request Email" creates output
- [ ] Output text is properly formatted
- [ ] Selected tapes appear in output
- [ ] Custom request details included
- [ ] Preferences are reflected
- [ ] Contact info is included
- [ ] "Copy to Clipboard" works
- [ ] Success message appears after copy
- [ ] "Edit Request" returns to form
- [ ] "Open in Email Client" creates mailto link

## 🎨 Visual/Style Tests

### Colors & Theme
- [ ] Custom colors from settings.yml apply
- [ ] CSS variables load correctly
- [ ] All text is readable (contrast check)
- [ ] Buttons have clear hover states
- [ ] Links are distinguishable

### Layout
- [ ] Navigation bar is visible
- [ ] Footer appears on all pages
- [ ] Content is centered and readable
- [ ] No horizontal scrolling (desktop)
- [ ] Spacing looks consistent

### Images
- [ ] Tape images maintain aspect ratio
- [ ] Placeholders show when no image exists
- [ ] Images don't overflow containers
- [ ] Image captions display correctly

## 📱 Responsive Tests

### Desktop (1200px+)
- [ ] 4-column grid displays correctly
- [ ] List view shows 3-column layout
- [ ] All controls are accessible
- [ ] Hover effects work

### Tablet (768-1199px)
- [ ] Grid adjusts to 2-3 columns
- [ ] List view remains readable
- [ ] Navigation stays functional
- [ ] Form fields fit screen

### Mobile (< 768px)
- [ ] Grid becomes 1-2 columns
- [ ] List view stacks vertically
- [ ] Navigation remains accessible
- [ ] Form is easy to fill out
- [ ] Buttons are touch-friendly
- [ ] No tiny text (minimum 14px)

### Small Mobile (< 480px)
- [ ] Single column layout
- [ ] All content remains accessible
- [ ] No overflowing elements
- [ ] Touch targets are adequate (44px+)

## 🌐 Browser Tests

Test in multiple browsers:

### Chrome
- [ ] All features work
- [ ] No console errors

### Firefox
- [ ] All features work
- [ ] No console errors

### Safari
- [ ] All features work
- [ ] No console errors

### Edge
- [ ] All features work
- [ ] No console errors

### Mobile Browsers
- [ ] iOS Safari works
- [ ] Chrome Mobile works

## ♿ Accessibility Tests

### Keyboard Navigation
- [ ] Can tab through all controls
- [ ] Focus indicators are visible
- [ ] Can activate buttons with Enter/Space
- [ ] Can check checkboxes with Space
- [ ] No keyboard traps

### Screen Reader (Optional)
- [ ] Page structure makes sense
- [ ] Images have alt text
- [ ] Form labels are properly associated
- [ ] Buttons have descriptive text

### Color Contrast
- [ ] Text meets WCAG AA standards (4.5:1)
- [ ] Large text meets AA standards (3:1)
- [ ] Interactive elements are distinguishable

## 🔄 Data Persistence Tests

### LocalStorage
- [ ] Selected tapes persist on page reload
- [ ] View preference persists on page reload
- [ ] Can clear selections (checkbox unchecked)
- [ ] LocalStorage syncs between pages

## 📊 Content Tests

### Adding New Tape
- [ ] Create new tape .md file
- [ ] Tape appears in catalog
- [ ] Detail page generates correctly
- [ ] Requestable status works
- [ ] Non-requestable status works

### Editing Settings
- [ ] Change owner name → reflects on site
- [ ] Change email → updates in request form
- [ ] Change colors → theme updates
- [ ] Change policy → displays on request page

### Image Handling
- [ ] Tape with front image only works
- [ ] Tape with front + back images works
- [ ] Tape with no images shows placeholder
- [ ] Wrong filename shows placeholder

## 🚀 Deployment Tests

### GitHub Pages
- [ ] Repository settings configured
- [ ] Main branch selected
- [ ] Build completes successfully
- [ ] Site is publicly accessible
- [ ] All assets load over HTTPS
- [ ] No mixed content warnings

### Performance
- [ ] Page loads in < 3 seconds
- [ ] No unnecessary requests
- [ ] Images are optimized
- [ ] CSS/JS files load quickly

## 🐛 Error Handling

### JavaScript Errors
- [ ] No console errors on any page
- [ ] Form validation works
- [ ] Clipboard fallback works
- [ ] LocalStorage errors are caught

### Missing Data
- [ ] Empty tracklist handles gracefully
- [ ] Missing images show placeholder
- [ ] Optional fields work when empty

### Edge Cases
- [ ] Very long tape titles display correctly
- [ ] Large tracklists remain readable
- [ ] Many selected tapes don't break layout
- [ ] Long custom requests format properly

## ✅ Final Checks

- [ ] README.md is complete and accurate
- [ ] QUICKSTART.md guides users correctly
- [ ] All sample tapes are appropriate
- [ ] LICENSE file is present
- [ ] .gitignore excludes build files
- [ ] No sensitive data in repository
- [ ] All links in documentation work
- [ ] Sample images referenced (even if placeholders)

---

## 🔍 Testing Tips

**Browser DevTools:**
```javascript
// Check localStorage
localStorage.getItem('mixtape_selected_tapes')

// Clear selections
localStorage.clear()

// Test responsive
// Chrome: Cmd/Ctrl + Shift + M
```

**Common Issues:**
- **Images not loading**: Check file paths and names (case-sensitive!)
- **Styles not applying**: Hard refresh (Cmd/Ctrl + Shift + R)
- **Checkboxes not syncing**: Clear localStorage and reload
- **Jekyll errors**: Check YAML syntax in frontmatter

**Performance Check:**
- Lighthouse in Chrome DevTools
- PageSpeed Insights
- GTmetrix

---

**Once all tests pass, you're ready to deploy! 🎉**
