# Alafolie - French Bakery Website

A modern React website for Alafolie French Bakery featuring a responsive navigation bar with a mega menu dropdown.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Mega Menu**: Hover-activated dropdown menu with smooth animations
- **Modern Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Accessibility**: Full keyboard navigation and screen reader support
- **Animations**: Smooth transitions powered by Framer Motion

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alafolie
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Main navigation component
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Navbar Content

Edit the `columns` array in `src/components/Navbar.tsx` to customize the mega menu content:

```typescript
const columns: Column[] = [
  {
    heading: "Your Section",
    items: [
      { 
        icon: <YourIcon className="size-5" />, 
        title: "Your Title", 
        desc: "Your description" 
      },
    ],
  },
];
```

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in individual components

### Branding

Update the logo text in the Navbar component:
```typescript
<a href="#" className="font-semibold text-xl tracking-wide">
  Your Brand Name
</a>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
