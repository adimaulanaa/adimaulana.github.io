# Adi Maulana - Portfolio Website

A minimal, clean portfolio website for Flutter Developer with black/white theme and sky blue accents.

## 🎨 Design Features

- **Full-screen landing page** with centered content
- **Black & white color scheme** with sky blue hover effects
- **Smooth scroll animations** and transitions
- **Responsive design** for all devices
- **Clean typography** using JetBrains Mono and DM Sans

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Styles with animations
├── script.js           # JavaScript for interactions
└── README.md           # This file
```

## 🚀 How to Use

### Option 1: Local Development
1. Download all files to a folder
2. Open `index.html` in your browser
3. That's it! No build process needed.

### Option 2: GitHub Pages Deployment
1. Create a new repository on GitHub (e.g., `adimaulanaa.github.io`)
2. Upload these files to the repository
3. Go to Settings → Pages
4. Select "Deploy from branch" and choose `main` branch
5. Your site will be live at `https://adimaulanaa.github.io`

### Option 3: Netlify/Vercel (Recommended)
1. Create account on [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
2. Connect your GitHub repository or drag & drop the folder
3. Site deploys automatically with custom domain support

## ✏️ Customization Guide

### Update Projects
Edit the project cards in `index.html` (search for `<!-- Project 1: M-LinkPro -->`):
- Add real GitHub links for Attendify
- Update Mitask link when published
- Add more projects by copying the `.project-card` structure

### Update Links
1. **GitHub Link for Attendify**: Replace `#` with your actual repo URL
2. **Download CV**: Update the path to your CV file
3. **Play Store Links**: Already correct, but verify they work

### Change Colors
In `style.css`, modify the CSS variables:
```css
:root {
    --color-black: #000000;        /* Main text color */
    --color-white: #FFFFFF;        /* Background */
    --color-sky-blue: #3B82F6;     /* Hover accent */
    --color-gray: #666666;         /* Secondary text */
}
```

### Add More Sections
Copy any `.section` block in `index.html` and customize the content.

## 📱 GitHub Repository Setup

To make your side projects public:

1. **Attendify**:
   ```bash
   cd attendify-project
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/adimaulanaa/attendify.git
   git push -u origin main
   ```

2. **Mitask**:
   - Same process as above
   - Add good README with screenshots
   - Include architecture diagram if available

## 🎯 Next Steps

1. ✅ Deploy this portfolio to GitHub Pages/Netlify
2. ✅ Make Attendify repository public with proper README
3. ✅ Complete Mitask testing (14 testers) for Play Store launch
4. ✅ Take screenshots of M-LinkPro (if allowed by company policy)
5. ✅ Add real project images/GIFs to enhance visual appeal

## 📸 Adding Screenshots

Create an `images` folder and add project screenshots:
```
portfolio/
├── images/
│   ├── mlinkpro-1.png
│   ├── attendify-1.png
│   └── mitask-1.png
```

Then update project cards in HTML:
```html
<div class="project-image">
    <img src="images/mlinkpro-1.png" alt="M-LinkPro Screenshot">
</div>
```

## 🔧 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📄 License

This portfolio template is free to use and modify for personal use.

---

**Built with minimal tech stack and maximum attention to detail.**
**Good luck with your job applications! 🚀**
