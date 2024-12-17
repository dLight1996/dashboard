# Dashboard

A modern, responsive admin dashboard built with Next.js 14, NextUI, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 App Router
- 💅 Styled with NextUI and Tailwind CSS
- 🔒 Authentication with NextAuth.js
- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🎯 Clean and intuitive interface
- 🔍 Easy navigation with sidebar
- 📊 Ready for data visualization
- 🛡️ TypeScript support
- 🔄 Prisma as ORM

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [NextUI](https://nextui.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dLight1996/dashboard.git
   ```

2. Install dependencies:
   ```bash
   cd dashboard
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
dashboard/
├── prisma/                # Database schema and migrations
├── public/               # Static files
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # Reusable components
│   ├── config/          # Configuration files
│   ├── lib/             # Utility functions and libraries
│   └── types/           # TypeScript type definitions
├── .env                 # Environment variables
└── package.json         # Project dependencies
```

## Development

- **Routing**: Uses Next.js 14 App Router for file-system based routing
- **State Management**: React's built-in hooks for local state
- **Database**: Prisma ORM with SQLite (can be changed to PostgreSQL, MySQL, etc.)
- **Authentication**: NextAuth.js with customizable providers
- **Styling**: Tailwind CSS with NextUI components

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
