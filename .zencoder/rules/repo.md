---
description: Repository Information Overview
alwaysApply: true
---

# Academy Finder Information

## Summary
Academy Finder is a Next.js application that helps users find and manage information about art and sports academies. The application provides functionality to view, create, and manage academy details including trainers, achievements, programs, and ratings.

## Structure
- **app/**: Contains Next.js application components, API routes, and controllers
- **models/**: MongoDB schema definitions for academy data
- **utils/**: Utility functions including MongoDB connection
- **public/**: Static assets and SVG files
- **.next/**: Next.js build output (generated)

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.x, ES2017 target
**Build System**: Next.js 15.4.6
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- Next.js 15.4.6: React framework
- React 19.1.0: UI library
- MongoDB 6.18.0: Database driver
- Mongoose 8.17.1: MongoDB ODM
- Express 5.1.0: Web server framework
- Axios 1.11.0: HTTP client
- Dotenv 17.2.1: Environment variable management

**Development Dependencies**:
- TypeScript 5.x: Type checking
- ESLint 9.x: Code linting
- Tailwind CSS 4.x: Utility-first CSS framework

## Build & Installation
```bash
# Install dependencies
npm install

# Development server with turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Database
**Type**: MongoDB
**Connection**: Uses environment variables (MONGODB_URI, ATLASMONGODB_URI, or MONGO_DB)
**Models**:
- Academic: Stores academy details with nested schemas for address, trainers, achievements, and programs
- Ratings: Manages user ratings for academies
- Enquiries: Handles user inquiries about academies

## API Structure
**Framework**: Next.js API Routes + Express.js
**Endpoints**:
- `/api/academic`: CRUD operations for academy details
- `/api/ratings`: Manage ratings for academies
- `/api/enquiries`: Handle user inquiries

## Frontend
**Framework**: React with Next.js App Router
**Styling**: Tailwind CSS
**Components**:
- Academy Card: Displays academy information in a card format
- Academy Details: Shows detailed information about a specific academy
- Client Wrapper: Handles client-side rendering