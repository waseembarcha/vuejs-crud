# Product Manager - Vue 3 Edition

A modern CRUD application for managing products, built with **Vue 3**, **Vite**, and **Firebase Firestore**.

## Features

- ✨ **Vue 3** with Composition API
- ⚡ **Vite** for fast development and optimized builds
- 🔥 **Firebase Firestore** for real-time database
- 🎨 **Bootstrap 5** for responsive UI
- 📱 Fully responsive design
- 🛠️ Modern ES modules

## Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0

## Installation

1. Clone the repository:
```bash
git clone https://github.com/waseembarcha/vuejs-crud.git
cd vuejs-crud
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.vue           # Navigation component
│   ├── Products.vue         # Products list with CRUD operations
│   └── ProductPage.vue      # Single product detail page
├── services/
│   └── productService.js    # Firebase Firestore API calls
├── db/
│   └── firebaseConfig.js    # Firebase configuration
├── router/
│   └── index.js             # Vue Router configuration
├── App.vue                  # Root component
└── main.js                  # Application entry point
```

## Key Changes from Vue 2

### Dependency Upgrades
- **Vue**: 2.5.2 → 3.3.0
- **Vue Router**: 3.0.1 → 4.2.0
- **Firebase**: 4.12.1 → 10.0.0 (with modern modular API)
- **Bootstrap**: 4.5.0 → 5.3.0

### Build Tool Migration
- **Webpack** → **Vite** (significantly faster development server)

### Component Syntax
- Updated to use **Vue 3 `<script setup>` syntax**
- Replaced Options API with **Composition API**
- Updated template directives to Vue 3 standards

### Firebase Integration
- Migrated from AngularFire to **Firebase SDK v9+** modular API
- Extracted Firebase calls into a dedicated `productService.js`
- Improved error handling with try-catch blocks

### Router Updates
- Updated to **Vue Router 4** API
- Changed from `new Router()` to `createRouter()`
- Updated `RouterView` and `RouterLink` components

### UI Improvements
- Bootstrap 5 data attributes (e.g., `data-bs-toggle` instead of `data-toggle`)
- Enhanced button styling with Bootstrap utility classes
- Better form input handling with modern HTML5 attributes
- Added visual feedback and confirmation dialogs

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2015+ support required

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Author

Waseem Barcha <waseembarcha1993@gmail.com>
