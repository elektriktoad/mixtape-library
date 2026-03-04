# Contributing to Mixtape Library Template

Thank you for your interest in improving this template! This guide will help you contribute effectively.

## 🎯 Types of Contributions

We welcome:

- 🐛 **Bug fixes** - Broken features, styling issues, JavaScript errors
- ✨ **New features** - Enhancements that benefit all users
- 📚 **Documentation** - Improvements to README, guides, or code comments
- 🎨 **Design improvements** - Better UX, accessibility, responsive design
- 🔧 **Performance optimizations** - Faster loading, smaller file sizes

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/yourusername/mixtape-library-template.git
cd mixtape-library-template
```

### 2. Set Up Development Environment

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve --livereload

# Visit http://localhost:4000
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

## 📝 Contribution Guidelines

### Code Style

**HTML/Liquid:**
- Use 2-space indentation
- Keep templates readable with appropriate spacing
- Comment complex Liquid logic

**CSS:**
- Use CSS custom properties for theme values
- Organize by sections (match existing structure)
- Include responsive breakpoints where needed
- Keep specificity low (avoid deep nesting)

**JavaScript:**
- Use vanilla JS (no frameworks)
- Follow existing patterns (IIFE modules)
- Add comments for complex logic
- Use modern ES6+ syntax (transpiling not required)

### Commit Messages

Use clear, descriptive commit messages:

```bash
# Good
git commit -m "Fix: Resolve checkbox sync issue in list view"
git commit -m "Feature: Add filter by genre functionality"
git commit -m "Docs: Update installation instructions"

# Not ideal
git commit -m "fixed stuff"
git commit -m "updates"
```

### Testing Your Changes

Before submitting:

1. ✅ Test in multiple browsers (Chrome, Firefox, Safari)
2. ✅ Check responsive design (mobile, tablet, desktop)
3. ✅ Verify no console errors
4. ✅ Test the request form end-to-end
5. ✅ Ensure sample tapes still display correctly
6. ✅ Check that existing customizations won't break

## 🔀 Submitting a Pull Request

### 1. Push Your Branch

```bash
git push origin feature/your-feature-name
```

### 2. Create Pull Request

- Go to GitHub and click "New Pull Request"
- Choose your branch
- Fill out the PR template:

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Design improvement

## Testing
How did you test these changes?

## Screenshots (if applicable)
Include before/after images for visual changes

## Checklist
- [ ] Code follows project style
- [ ] Tested in multiple browsers
- [ ] Documentation updated (if needed)
- [ ] No breaking changes to user content
```

### 3. Address Review Feedback

Maintainers may request changes:

```bash
# Make requested changes
git add .
git commit -m "Address review feedback: [description]"
git push origin feature/your-feature-name
```

## 🎨 Design Principles

When contributing, keep these principles in mind:

### 1. Content/Code Separation
- User content (`_tapes/`, `_data/settings.yml`, `images/`) should remain untouched by template updates
- Template logic should never require users to edit code files

### 2. Zero Dependencies (Client-Side)
- Avoid adding JavaScript libraries or frameworks
- No jQuery, React, Vue, etc.
- Keep it vanilla and lightweight

### 3. Accessibility First
- Maintain semantic HTML
- Ensure keyboard navigation works
- Keep color contrast ratios accessible
- Add ARIA labels where helpful

### 4. Mobile Responsive
- Test on small screens (320px+)
- Touch-friendly controls
- No horizontal scrolling

### 5. Fork Friendly
- Changes should merge cleanly into forks
- Avoid restructuring core directories
- Document breaking changes clearly

## 🐛 Reporting Bugs

### Before Reporting

1. Search existing issues to avoid duplicates
2. Test on a fresh install to confirm it's not a customization issue
3. Check the browser console for errors

### Bug Report Template

```markdown
**Describe the bug**
Clear description of what's wrong

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g., Windows 10, macOS 13]
- Browser: [e.g., Chrome 120, Firefox 121]
- Jekyll version: [if applicable]

**Additional context**
Any other relevant information
```

## 💡 Feature Requests

We love new ideas! When suggesting features:

1. **Check existing issues** - Your idea may already be discussed
2. **Explain the use case** - Why would this benefit users?
3. **Consider scope** - Does it fit the template's philosophy?
4. **Be specific** - Include mockups or examples if possible

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Who would benefit and how?

**Proposed Implementation**
Ideas on how this could work (optional)

**Alternatives Considered**
Other ways to solve this problem

**Additional Context**
Mockups, examples from other sites, etc.
```

## 📋 Priority Areas

We're especially interested in contributions for:

- **Accessibility improvements** - WCAG compliance, screen reader support
- **Performance optimization** - Smaller files, faster load times
- **Additional view modes** - Timeline view, genre filter, search
- **Internationalization** - Multi-language support
- **Enhanced request form** - More customization options
- **Better mobile experience** - Touch gestures, mobile-first features

## 🚫 Out of Scope

To maintain simplicity, these are generally not accepted:

- Backend functionality (databases, server-side processing)
- JavaScript framework dependencies
- Complex build tools or transpilation requirements
- Features that break the fork-and-customize workflow
- Functionality requiring external services (except optional integrations)

## ❓ Questions?

- 💬 Open a GitHub Discussion for general questions
- 📧 Email maintainer for private inquiries
- 🐛 Use Issues for bug reports and feature requests

## 📜 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers this project.

---

**Thank you for helping make this template better for everyone! 📼✨**
