# Portfolio Setup Guide

## Prerequisites

Before running this portfolio, you need to install Node.js and npm.

### Installing Node.js

1. **Download Node.js**:
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for Windows
   - Run the installer and follow the setup wizard

2. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

## Project Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## GitHub Pages Deployment

### Initial Setup

1. **Create GitHub Repository**:
   - Go to GitHub and create a new repository named `rhulane-portfolio`
   - Make sure the repository is public for free GitHub Pages

2. **Update package.json**:
   - The homepage URL is already set to `https://rhulaneTheDeveloper.github.io/rhulane-portfolio`
   - Update this if your GitHub username is different

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Manual GitHub Pages Setup

If you prefer manual setup:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Select "/ (root)" folder

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.js` - Main introduction
- `src/components/About.js` - Personal details and education
- `src/components/Contact.js` - Contact information
- `src/components/Projects.js` - Your projects

### Styling

- `src/index.css` - Global styles
- `src/components/*.css` - Component-specific styles
- Colors can be changed in CSS variables or gradient definitions

### Content

- Add your own projects in `src/components/Projects.js`
- Update skills in `src/components/Skills.js`
- Modify contact information in `src/components/Contact.js`

## Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   npm start -- --port 3001
   ```

2. **Build errors**:
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Clear npm cache: `npm cache clean --force`

3. **GitHub Pages not updating**:
   - Wait 5-10 minutes for GitHub to process
   - Check repository settings
   - Ensure gh-pages branch exists

### Support

If you encounter issues:
- Check the React documentation
- Review GitHub Pages documentation
- Ensure all dependencies are installed correctly

## Next Steps

1. Install Node.js
2. Run `npm install`
3. Customize the content
4. Deploy to GitHub Pages
5. Share your portfolio!

---

**Note**: This portfolio is ready to use once Node.js is installed. All the code is complete and functional.
