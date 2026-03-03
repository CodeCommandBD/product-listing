# LuxeStore — Premium Product Listing Application

A modern, high-performance E-commerce product listing application built with Next.js 15, TypeScript, and Tailwind CSS. This project leverages TanStack Query for efficient data fetching and state management, providing a premium shopping experience with smooth filtering, sorting, and pagination.

## Project Overview

LuxeStore is designed to showcase products from the Fake Store API in an elegant and functional interface. It features server-side rendering for improved SEO and performance, client-side hydration for dynamic interactions, and a robust filtering system.

## Key Features

- Server-Side Data Fetching: Utilizes Next.js App Router for initial data retrieval.
- Client-Side State Management: Uses TanStack Query (React Query) for managing client state and caching.
- Dynamic Filtering: Real-time filtering by category and price range.
- Sophisticated Sorting: Sort products by price (low/high) and availability.
- Custom Pagination: Smooth transition between product pages.
- Responsive Design: Fully optimized for mobile, tablet, and desktop screens.
- Premium UI/UX: Custom skeletons, micro-animations, and a curated color palette.
- Type Safety: Built entirely with TypeScript for better maintainability and error catching.

## Technology Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Data Fetching & Caching: TanStack Query (React Query)
- Icons: Lucide React & Material Symbols Outlined
- Component Architecture: React 19

## Project Structure and File Walkthrough

### Root Directory

- .gitignore: Specifies files and folders to be ignored by Git.
- next.config.ts: Configuration file for Next.js (e.g., remote image patterns).
- package.json: Lists project dependencies and scripts.
- tailwind.config.ts: Custom Tailwind CSS configuration for the design system.
- tsconfig.json: TypeScript configuration rules.

### app Directory (Core Logic & Routing)

- layout.tsx: The root layout defining the structure (Navbar, Footer) and global providers.
- page.tsx: The homepage that fetches initial data and renders the ProductListGrid.
- globals.css: Global styles and Tailwind directives.
- product/[id]/page.tsx: Dynamic route for individual product detail pages.

### components Directory (Reusable UI)

#### layout/

- Navbar.tsx: Global navigation bar with search and logo.
- Footer.tsx: Comprehensive footer with newsletter signup and links.

#### product/

- ProductListGrid.tsx: Main container managing the display, filtering, and sorting of products.
- ProductCard.tsx: Individual product display card with image, price, and rating.
- FilterPanel.tsx: Desktop sidebar for category and price filtering.
- MobileFilterDrawer.tsx: Slide-out drawer for filtering on smaller screens.
- HeroSection.tsx: Page header with sorting options.
- ProductCardSkeleton.tsx: Loading state placeholder for product cards.
- ProductDetailClient.tsx: Client-side component for handling product details view.

#### ui/

- Providers.tsx: Wraps the application with necessary context providers (e.g., QueryClient).
- StarRating.tsx: Visual star rating component.
- Pagination.tsx: Navigation component for multi-page lists.
- EmptyState.tsx: Displayed when no products match the current filters.
- ErrorState.tsx: Graceful error handling UI.

### hooks Directory

- useProductsFilter.ts: A custom hook containing the core logic for filtering, sorting, and paginating the product list.

### lib Directory

- api.ts: Centralized API service for interacting with the Fake Store API.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser to view the application.
