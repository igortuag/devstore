# DevStore 🛒

A modern e-commerce demo application built with Next.js 16 for learning purposes. This project demonstrates best practices in building a full-stack online store with server-side rendering, API routes, and responsive design. This project come from rocketseat.

## 📋 About

DevStore is a sample virtual store project created for educational purposes. It showcases the implementation of a modern e-commerce platform using the latest web technologies, focusing on performance, user experience, and clean code architecture. Also a bit of styling

## 🚀 Technologies

This project is built with the following technologies:

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## ✨ Features

- 🏠 Home page with featured products
- 📦 Product listing and filtering
- 🔍 Individual product detail pages
- 🎨 Responsive design with Tailwind CSS
- ⚡ Server-side rendering (SSR) and static generation
- 🔄 Loading states with skeleton screens
- 🛣️ API routes for product data
- 📱 Mobile-first approach

## 📁 Project Structure

```
devstore/
├── app/
│   ├── (store)/          # Store routes group
│   │   ├── (home)/       # Home page
│   │   ├── product/      # Product detail pages
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   ├── data/            # Data fetching utilities
│   └── layout.tsx       # Root layout
├── public/              # Static assets
└── ...config files
```

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/igortuag/devstore
   cd devstore
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## 🎯 Running the Project

### Development Mode
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## 📚 Learning Objectives

This project helps you learn:

- ✅ Next.js App Router and file-based routing
- ✅ Server Components and Client Components
- ✅ API Routes creation and management
- ✅ Data fetching strategies (SSR, SSG, ISR)
- ✅ TypeScript integration with React
- ✅ Tailwind CSS for styling
- ✅ Loading and error states handling
- ✅ Dynamic routing with slugs
- ✅ Component composition and reusability
- ✅ Type-safe data validation with Zod

## 🎨 Routes

- `/` - Home page with featured products
- `/product/[slug]` - Individual product details
- `/api/products` - Products API endpoint
- `/api/products/featured` - Featured products API endpoint

## 📝 License

This is an educational project created for learning purposes. Feel free to use it as a reference for your own projects.

## 🤝 Contributing

As this is a learning project, contributions, suggestions, and feedback are welcome! Feel free to open issues or submit pull requests.

## Test

---

**Made with ❤️ for learning Next.js and modern web development**
