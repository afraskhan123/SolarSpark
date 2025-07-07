# Solar Pakistan - React Website

A modern, responsive React website for a solar panel company based in Pakistan with location-based content delivery.

## 🌟 Features

### Location-Based Content
- **Geolocation Detection**: Automatically detects user's location using IP geolocation
- **Pakistan-Specific Content**: Shows tailored content for users in Pakistan
- **International Content**: Displays global information for international visitors
- **Dynamic Messaging**: Different CTAs, pricing, and contact information based on location

### Modern Design
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Solar Theme**: Beautiful orange/yellow color scheme representing solar energy
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Professional Layout**: Clean, modern design with excellent typography

### Key Pages
1. **Home Page**: Hero section, features, location-specific content, statistics
2. **About Page**: Company story, mission, team, achievements
3. **Services Page**: Service offerings, pricing, process, location-specific services
4. **Contact Page**: Contact form, FAQ, location information

### Technical Features
- **React 18**: Latest React version with hooks and modern patterns
- **React Router**: Client-side routing for smooth navigation
- **CSS Grid & Flexbox**: Modern layout techniques
- **Mobile-First Design**: Responsive design approach
- **Form Handling**: Contact form with validation and submission simulation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git installed
   git clone <repository-url>
   
   # Or simply download and extract the ZIP file
   ```

2. **Navigate to the project directory**
   ```bash
   cd solar-pakistan-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The website will open automatically at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to the URL

## 📱 How It Works

### Location Detection
The website uses the `ipapi.co` service to detect the user's country:
- If the user is in Pakistan (PK), they see Pakistan-specific content
- If the user is from any other country, they see international content

### Content Adaptation
- **Pakistan Users**: See local pricing (PKR), local contact info, Pakistan-specific services
- **International Users**: See international pricing (USD), global services, international support

### Key Differences by Location

| Feature | Pakistan Users | International Users |
|---------|----------------|-------------------|
| Pricing | PKR (150,000+) | USD ($1,500+) |
| Contact | Local numbers | International numbers |
| Services | Local regulations | Global standards |
| Support | Urdu + English | Multi-language |
| Financing | Pakistani banks | International options |

## 🛠️ Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #f39c12;    /* Main orange */
  --secondary-color: #e67e22;  /* Darker orange */
  --accent-color: #f1c40f;     /* Yellow accent */
  --dark-color: #2c3e50;       /* Dark blue */
  --success-color: #27ae60;    /* Green */
}
```

### Content
- Update company information in the respective page components
- Modify pricing in `src/pages/Services.js`
- Change contact details in `src/pages/Contact.js`

### Images
- Replace emoji placeholders with actual images
- Add company logo to the header
- Include real photos of installations and team members

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Header.css
│   ├── Footer.js       # Site footer
│   └── Footer.css
├── pages/              # Main page components
│   ├── Home.js         # Homepage
│   ├── Home.css
│   ├── About.js        # About page
│   ├── About.css
│   ├── Services.js     # Services page
│   ├── Services.css
│   ├── Contact.js      # Contact page
│   └── Contact.css
├── App.js              # Main app component
├── App.css             # App-specific styles
├── index.js            # React entry point
└── index.css           # Global styles
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
1. **Netlify**: Drag and drop the `build` folder
2. **Vercel**: Connect your GitHub repository
3. **GitHub Pages**: Use `gh-pages` package
4. **Traditional Hosting**: Upload the `build` folder to your web server

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📞 Support

For questions or support:
- Email: info@solarpakistan.com
- Phone: +92 300 1234567
- Website: www.solarpakistan.com

## 📄 License

This project is created for demonstration purposes. Feel free to modify and use for your solar energy business.

---

**Built with ❤️ for the solar energy revolution in Pakistan and beyond!** 