# Mohith's Portfolio Website

A modern, professional portfolio website for Mohith - Developer, Designer, and Founder.

## 🎨 Features

- **Modern Design**: Clean, minimal UI with glassmorphism effects
- **Light Mode**: Professional light theme optimized for readability
- **3D Elements**: Interactive 3D animations using Three.js and React Three Fiber
- **Smooth Animations**: Fluid transitions and interactions with Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Friendly**: Built with best practices for search engines

## 📦 Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React & React Icons
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will open at `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section with 3D scene
│   │   ├── Scene3D.jsx         # 3D animation component
│   │   ├── FloatingOrbs.jsx    # Background floating elements
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills and expertise
│   │   ├── Projects.jsx        # Featured projects
│   │   ├── Services.jsx        # Services offered
│   │   ├── Contact.jsx         # Contact section
│   │   └── Footer.jsx          # Footer component
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── assets/
│   └── mohithillus.png         # Profile image
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Project dependencies
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Content
All content is organized in component files. Edit the respective component to update content.

### Images
Replace the image in `/assets/` and update the import path in the About component.

## 📄 Sections

1. **Hero**: Eye-catching introduction with 3D animation and call-to-actions
2. **About**: Personal bio with profile image and key highlights
3. **Skills**: Technical expertise organized by category
4. **Projects**: Featured portfolio projects with descriptions and links
5. **Services**: Offered services and work process
6. **Contact**: Contact form and social media links
7. **Footer**: Quick navigation and social links

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run: `npm run build`
3. Push the `dist/` folder to gh-pages branch

## 📝 Social Links

Update social media links in:
- `Hero.jsx` - Hero section social icons
- `Contact.jsx` - Contact section social links
- `Footer.jsx` - Footer social links

Replace URLs with actual social media profiles:
- GitHub: `https://github.com/mohithprofile`
- LinkedIn: `https://linkedin.com/in/mohithprofile`
- Twitter: `https://twitter.com/mohithhandle`

## ✨ Features Highlights

### 3D Animations
- Interactive Three.js scene with rotating shape
- Floating orbs in the background
- Parallax scrolling effects

### Smooth Interactions
- Hover effects on all interactive elements
- Smooth scroll behavior
- Staggered animations for content sections
- Form submission feedback

### Modern UI
- Glassmorphism effects
- Gradient backgrounds
- Smooth color transitions
- Professional typography

## 🎓 Performance

- Optimized bundle size with Vite
- Lazy loading for images
- Efficient animation with Framer Motion
- CSS optimized with Tailwind CSS

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Tips

1. **Update Email**: Change `hello@mohith.dev` to your actual email
2. **Add Analytics**: Consider adding Google Analytics or similar
3. **Form Integration**: Connect the contact form to a backend service like Formspree or Emailjs
4. **Domain**: Point your custom domain to the hosted portfolio

## 📞 Contact

For questions or support, reach out to: hello@mohith.dev

---

Built with ❤️ by Mohith
