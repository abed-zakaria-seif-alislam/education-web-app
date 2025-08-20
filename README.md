# UMEDIFY - Educational Platform for Algerian Students

A modern educational platform built with Next.js 14, Tailwind CSS, and Supabase, designed specifically for university students in Algeria.

## 🚀 Features

- **Multi-language Support**: French (default), Arabic (RTL), English
- **Resource Management**: Courses, TDs, TPs organized by university, department, and year
- **Premium AI Assistant**: "Dr. Medibot" for educational Q&A
- **Flexible Subscription**: Manual payment via BaridiMob or CCP
- **Admin Dashboard**: Complete content and user management
- **Modern UI**: Purple-themed design with shadcn/ui components

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Backend**: Supabase (Auth, Database, Storage, RLS)
- **AI Integration**: OpenAI API
- **Deployment**: Vercel

## 🎨 Design System

### Color Palette
- Primary: `#7E57C2` (Soft Purple)
- Secondary: `#512DA8` (Deep Violet)
- Accent: `#9575CD` (Lavender)
- Background: `#FAFAFA` (Light Neutral)
- Text: `#1F2937` (Dark Slate)

### Typography
- Main: System fonts with fallbacks
- Arabic: Noto Kufi Arabic
- Style: Rounded corners, subtle shadows, gradient effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abed-zakaria-seif-alislam/education-web-app.git
   cd education-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🗄 Database Schema

### Core Tables
- `universities` - Algerian universities
- `departments` - Academic departments
- `profiles` - User profiles with premium status
- `resources` - Educational content (courses, TDs, TPs)
- `payments` - Manual payment tracking
- `ai_chats` - AI conversation history

## 💳 Subscription Tiers

| Tier | Price | Duration | Features |
|------|-------|----------|-----------|
| Free | 0 DZD | Forever | Public resources only |
| Semester | 500 DZD | 4 months | Full access + AI assistant |
| Yearly | 1000 DZD | 12 months | Best value + priority support |

## 🔒 User Roles

- **Guest**: Landing page access only
- **Free User**: Public resources, basic features
- **Premium User**: Full content access + AI chat
- **Admin**: Complete platform management

## 🌍 Internationalization

- **French** 🇫🇷: Default language
- **Arabic** 🇩🇿: RTL support for Algerian users
- **English** 🇬🇧: International accessibility

## 📱 Pages & Routes

### Public Pages
- `/` - Landing page
- `/auth/login` - User login
- `/auth/signup` - User registration
- `/auth/reset-password` - Password recovery

### Dashboard (Authenticated)
- `/dashboard` - Resource browser
- `/dashboard/upload` - File upload
- `/dashboard/subscription` - Payment management
- `/dashboard/profile` - User settings
- `/dashboard/ai-chat` - Premium AI assistant

### Admin Panel
- `/admin` - Admin overview
- `/admin/payments` - Payment verification
- `/admin/users` - User management
- `/admin/resources` - Content moderation
- `/admin/settings` - Platform settings

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For support, email contact@umedify.dz or create an issue in this repository.

## 📄 License

This project is developed for educational purposes and is tailored specifically for Algerian university students.

---

Made with ❤️ for Algerian students
