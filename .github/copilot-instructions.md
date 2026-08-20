<!-- E-Portofolio PPG Dashboard - Custom Instructions for GitHub Copilot -->

# E-Portofolio PPG Dashboard - Customization Guide

## Project Overview

This is a modern, responsive e-portfolio dashboard for PPG (Prajabatan Program) teachers and education professionals. It's built with vanilla HTML, CSS, and JavaScript with no build tools required.

## Key Features

- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Dark Mode**: Toggle theme with persistent storage
- **Modern UI**: Gradient backgrounds, smooth animations, and professional styling
- **Fast Loading**: No dependencies, pure vanilla JavaScript
- **Multilingual**: Indonesian language with easy translation support

## File Structure

```
.github/
  └── copilot-instructions.md (this file)
css/
  └── styles.css              (all styling with CSS variables)
js/
  └── script.js               (interactivity and animations)
assets/
  ├── images/                 (for profile photos, screenshots)
  └── icons/                  (optional icon assets)
pages/                         (optional additional pages)
index.html                     (main dashboard)
README.md                      (detailed documentation)
```

## Customization Instructions

### 1. **Color Scheme**
Edit the CSS variables at the top of `css/styles.css`:
- `--primary-color`: Main brand color (default: #6366f1)
- `--secondary-color`: Accent color (default: #8b5cf6)
- `--success-color`, `--danger-color`, `--warning-color`: Status colors
- `--bg-color`, `--text-color`: Theme colors (auto-adjusts in dark mode)

### 2. **Content Sections**

#### Hero Section (First impact)
- Update title, subtitle, and description in `<section class="hero">`
- Replace placeholder icon with relevant icon from Font Awesome
- Adjust button text and links

#### About Section
- Add profile name, role, and bio
- Replace profile image placeholder with actual photo
- Update statistics (years of experience, students, projects)

#### Skills Section
- Modify skill categories (currently: Pedagogical, Technology, Leadership, Research, Analytics, Soft Skills)
- Update icon references (Font Awesome icons)
- Customize tags for each skill
- Add or remove skill cards as needed

#### Projects Section
- Create custom project/achievement cards
- Update categories and descriptions
- Link to project details or external resources
- Modify icons and tags

#### Contact Section
- Update email, phone, location
- Add social media links (LinkedIn, Twitter, Facebook, Instagram)
- Configure form submission (see "Backend Integration" below)

### 3. **Navigation & Menu**
- Update nav links in the navbar
- Add new sections by:
  1. Adding `<section id="new-section">` in HTML
  2. Creating CSS for `.new-section` in styles.css
  3. Adding nav link with `href="#new-section"`
  4. JavaScript automatically updates active link

### 4. **Typography**
- Modify fonts in `body { font-family: ... }`
- Adjust heading sizes and weights
- Update line-heights for readability

### 5. **Images & Media**
- Add images to `assets/images/` folder
- Reference in HTML: `<img src="assets/images/filename.jpg">`
- Use placeholders provided by Font Awesome icons
- Consider optimizing images for web (compress before uploading)

### 6. **Form Configuration**

Currently the contact form shows a success message locally. To enable actual email submission:

**Option A: FormSubmit.co (Recommended)**
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

**Option B: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option C: Custom Backend**
- Update form action in `<form id="contactForm">`
- Modify form handling in `js/script.js` (search for `contactForm.addEventListener`)

### 7. **Dark Mode Customization**
- Dark mode colors defined in `body.dark-mode` selector
- Automatically applies to all elements using CSS variables
- Persistent storage in browser localStorage
- Test both modes during customization

### 8. **Mobile Responsiveness**
- Breakpoints defined:
  - `@media (max-width: 768px)` - Tablets
  - `@media (max-width: 480px)` - Mobile phones
- All layout automatically adjusts
- Test changes on multiple screen sizes

### 9. **Performance & SEO**

Add to `<head>` in index.html:
```html
<meta name="description" content="E-Portofolio for PPG Teachers">
<meta name="keywords" content="portofolio, guru, PPG, pendidikan">
<meta name="author" content="Your Name">
<meta property="og:image" content="assets/images/preview.jpg">
```

### 10. **Animations & Effects**
- Fade-in animations on scroll: Controlled by Intersection Observer in `js/script.js`
- Hover effects: Defined in CSS `.card:hover` selectors
- Smooth scrolling: Enabled by `scroll-behavior: smooth` in CSS
- Modify `@keyframes` in CSS for custom animations

## Common Customization Tasks

### Add a New Skill Card
1. Locate `<div class="skills-grid">` in index.html
2. Duplicate an existing `.skill-card` div
3. Change icon: `<i class="fas fa-icon-name"></i>`
4. Update title, description, and tags

### Add a New Project
1. Find `<div class="projects-grid">` in index.html
2. Duplicate a `.project-card` section
3. Update title, category, description, tags, and link

### Change Color Scheme
1. Edit CSS variables in `css/styles.css` at line 1-13
2. Update both light and dark mode colors
3. No need to modify individual selectors

### Add New Section
1. Add HTML `<section id="my-section">` in index.html
2. Create CSS `.my-section { }` in styles.css
3. Add navigation link: `<a href="#my-section">Section Name</a>`

## Integration Points

### Social Media Links
Update href attributes in Contact Section social links:
```html
<a href="https://linkedin.com/in/yourprofile" class="social-link">
```

### External Links
- Portfolio/blog link: Update hero button href
- Project links: Update project card links
- Resume/CV: Add link in About section

### Analytics (Optional)
Add Google Analytics or similar before closing `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## Deployment Options

### Netlify (Recommended - Free)
1. Drag & drop project folder
2. Automatic builds on git push
3. Free custom domain

### GitHub Pages
1. Push to GitHub repository
2. Enable Pages in Settings
3. Live at `username.github.io/repo-name`

### Traditional Hosting
1. Upload via FTP to cPanel
2. Point domain to hosting
3. Access via your domain

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (12+)
- Mobile browsers: Fully responsive

## Code Style Guidelines

- Use semantic HTML tags
- Use CSS variables for consistency
- Keep JavaScript functions focused and modular
- Comment complex code sections
- Test changes in multiple browsers

## Accessibility

- Alt text for images (add title attributes)
- Semantic HTML structure
- Color contrast ratios meet WCAG AA
- Keyboard navigation support
- Mobile touch-friendly buttons (min 48px)

## Performance Tips

- Optimize images (use WebP format when possible)
- Minify CSS/JS for production (optional)
- Use CDN for Font Awesome (already configured)
- Lazy load images if adding many images
- Cache browser resources

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Links not working | Check href values match section IDs |
| Images not showing | Verify relative paths, use assets/images/ |
| Dark mode not saving | Check if cookies enabled in browser |
| Form not submitting | Implement backend service (FormSubmit/Formspree) |
| Styling not applying | Clear browser cache (Ctrl+F5) |
| Mobile menu stuck | Check JS console for errors |

## Tools & Resources

- **Font Awesome Icons**: [fontawesome.com/icons](https://fontawesome.com/icons)
- **Color Picker**: [colordot.it](https://color.hailpixel.com/)
- **CSS Inspiration**: [cssgradient.io](https://cssgradient.io/)
- **Typography**: [fonts.google.com](https://fonts.google.com/)
- **Responsive Testing**: Browser DevTools (F12)

## Version History

- **v1.0.0** (2024): Initial release
  - Responsive dashboard
  - Dark mode support
  - Contact form
  - Smooth animations
  - Mobile menu

## Support & Contribution

For issues or suggestions:
1. Review README.md for documentation
2. Check browser console for errors (F12)
3. Test in different browsers
4. Clear cache and try again

---

**Happy Customizing! Build an amazing portfolio! 🎓**
