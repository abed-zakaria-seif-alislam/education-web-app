# 🎓 UMEDIFY - Educational Platform for Algerian Students

**UMEDIFY** is a comprehensive educational platform designed specifically for Algerian university students across all majors. Built with Next.js 14, Tailwind CSS, and Supabase, it provides access to categorized academic resources including Courses, TDs (Travaux Dirigés), and TPs (Travaux Pratiques).

## ✨ Features

### 🎯 Core Platform Features
- **Multi-Major Support**: Resources for Medicine, Engineering, Law, Computer Science, and more
- **Organized Content**: Resources classified by University, Department, Year (1-7), and Type
- **Access Levels**: Public resources for free users, Premium content for subscribers
- **Premium AI Assistant**: "Dr. Medibot" for educational Q&A (Premium only)
- **Manual Payment System**: Integration with BaridiMob and CCP (Algerian payment methods)

### 🌍 Multilingual Support
- **French** 🇫🇷 (Default)
- **Arabic** 🇩🇿 (RTL support)
- **English** 🇬🇧

### 🎨 Design System
- **Primary Color**: Soft Purple (#7E57C2)
- **Secondary Color**: Deep Violet (#512DA8)
- **Accent Color**: Lavender (#9575CD)
- **Typography**: Inter with Arabic fallback (Cairo/Noto Kufi Arabic)
- **Theme**: Professional, accessible, academic with rounded corners and subtle shadows

## 🏗 Architecture

### Tech Stack
- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Supabase (Auth, Database, Storage, RLS, Edge Functions)
- **Deployment**: Vercel (recommended)
- **TypeScript**: Full type safety

### User Roles
- **Guest**: Landing page access only
- **Free User**: Public resources, limited downloads
- **Premium User**: Full access + AI Assistant
- **Admin**: Full platform management

### Subscription Tiers
| Tier | Price (DZD) | Duration | Features |
|------|-------------|----------|----------|
| Free | 0 | Forever | Public resources, 5 downloads/day |
| Semester | 500 | ~4 months | Full access + AI Assistant |
| Yearly | 1000 | ~12 months | Full access + Priority support |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Git

### Installation

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
```

Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
OPENAI_API_KEY=your_openai_api_key # For AI Chat feature
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Set up Supabase**
- Create a new Supabase project
- Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
- Enable Row Level Security (RLS) policies
- Set up Storage buckets for file uploads

5. **Start development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   └── reset-password/
│   ├── dashboard/           # User dashboard
│   │   ├── ai-chat/        # Premium AI Assistant
│   │   ├── profile/        # User settings
│   │   ├── subscription/   # Payment management
│   │   └── upload/         # Resource upload
│   ├── admin/              # Admin panel (coming soon)
│   ├── explore/            # Resource browser
│   ├── pricing/            # Subscription plans
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── navbar.tsx         # Main navigation
│   └── dashboard-layout.tsx # Dashboard layout
├── lib/                   # Utilities
│   ├── supabase.ts       # Supabase client & types
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── supabase-schema.sql   # Database schema
```

## 🔧 Database Schema

The platform uses Supabase with the following main tables:

- **universities**: Algerian universities
- **departments**: Academic departments/specialties  
- **profiles**: Extended user information
- **resources**: Educational files and metadata
- **payments**: Manual payment verification
- **ai_chats**: AI conversation history

See `supabase-schema.sql` for complete schema with RLS policies.

## 🎨 Pages Overview

### Public Pages
- **Landing Page** (`/`): Hero, features, pricing, testimonials
- **Explore** (`/explore`): Resource browser with filters
- **Pricing** (`/pricing`): Subscription plans and payment info
- **Authentication**: Login, signup, password reset

### Dashboard Pages (Authenticated)
- **Dashboard** (`/dashboard`): Overview with stats and recent resources
- **AI Chat** (`/dashboard/ai-chat`): Premium AI assistant
- **Upload** (`/dashboard/upload`): Multi-step resource upload
- **Subscription** (`/dashboard/subscription`): Payment management
- **Profile** (`/dashboard/profile`): User settings

### Admin Panel (Coming Soon)
- **Overview** (`/admin`): Platform statistics
- **Payment Verification** (`/admin/payments`): Manual payment approval
- **User Management** (`/admin/users`): User roles and status
- **Content Moderation** (`/admin/resources`): Resource management

## 🔐 Security & Permissions

### Row-Level Security (RLS)
- Users can only access their own data
- Public resources visible to all
- Premium resources require subscription
- Department-private resources for same department members
- Admin access to all data

### File Storage
- Secure file uploads to Supabase Storage
- Access control based on resource visibility
- File type validation and size limits

## 🌍 Internationalization

The platform supports three languages with dynamic switching:

- **French**: Default language for forms and content
- **Arabic**: RTL layout support with proper typography
- **English**: Full English translation

Language preference is stored per user and affects:
- Navigation menu
- Form labels and messages  
- AI Assistant responses
- Error messages

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy**: Automatic deployment on git push

### Manual Deployment

1. **Build the application**
```bash
npm run build
```

2. **Start production server**
```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for Algerian students by Algerian developers
- Inspired by the need for organized educational resources
- Thanks to the open-source community for the amazing tools

---

**UMEDIFY** - Explorez, Apprenez, et Réussissez 🎓
