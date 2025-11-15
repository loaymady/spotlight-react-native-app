# 📱 Spotlight – React Native Social Media App

## 🚀 Overview

**Spotlight** is a full-stack social media mobile application built with **React Native** and **Expo**, designed to deliver a modern **Instagram-like experience**. The app leverages cutting-edge technologies including **Convex** for the backend database, **Clerk** for authentication, and **React Native** with **Expo Router** for navigation to create a seamless, scalable, and user-friendly social platform.

It runs on **Android** and **iOS**, offering a smooth, responsive, and visually appealing social media experience.

---

## 📦 Download

👉 [Download the latest Android APK Release](https://github.com/loaymady/spotlight-react-native-app-/releases)

<div align="center">
  <img src="./spotlight-app-demo.webp" alt="Spotlight App Demo" width="300"/>
</div>

---

## ✨ Features

- **🔐 Google OAuth Integration**: Seamless sign-in with Google accounts using Clerk
- **👤 User Management**: Profile creation, editing, and user discovery
- **📸 Post Sharing**: Upload photos with captions from gallery or camera
- **💬 Social Interactions**: Like, comment, and bookmark posts
- **📱 Instagram-like Feed**: Displays posts in reverse chronological order with real-time updates
- **📖 Stories Section**: Visual stories display (UI ready for future implementation)
- **🔔 Real-time Notifications**: Live notifications for likes, comments, and follows
- **👥 Follow System**: Follow/unfollow functionality with real-time counts
- **📑 Bookmarks**: Save and view bookmarked posts in a dedicated section
- **🎨 Dark Theme**: Modern dark color scheme with green accent
- **🔄 Pull-to-Refresh**: Refresh feed content and user data
- **📱 Responsive Design**: Optimized for both iOS and Android devices

## 🛠️ Technologies Used

### Frontend

- **React Native**: Cross-platform mobile development framework
- **Expo**: Development platform for universal React applications
- **Expo Router**: File-based routing system for React Native
- **React Navigation**: Navigation library with bottom tabs
- **TypeScript**: Type-safe development
- **Expo Image**: Optimized image component with caching
- **Expo Image Picker**: Image selection from gallery or camera
- **Expo File System**: File system access and management
- **Expo Blur**: Native blur effects
- **Expo Haptics**: Haptic feedback
- **React Native Gesture Handler**: Enhanced gesture support
- **React Native Reanimated**: Smooth animations and transitions
- **React Native WebView**: In-app web browsing
- **Date-fns**: Modern date utility library

### Backend

- **Convex**: Real-time backend with database and file storage
- **Clerk**: Authentication and user management backend
- **Svix**: Webhook handling for Clerk integrations
- **Node.js**: Runtime environment for server functions

---

## 📂 Project Structure

```
spotlight-app/
├── app/                          # Expo Router file-based routing
│   ├── _layout.tsx              # Root authentication redirect
│   ├── (auth)/                  # Authentication screens
│   │   ├── _layout.tsx          # Auth layout wrapper
│   │   └── login.tsx            # Google OAuth login screen
│   ├── (tabs)/                  # Main app tab navigation
│   │   ├── _layout.tsx          # Tab navigator configuration
│   │   ├── index.tsx            # Home feed screen
│   │   ├── bookmarks.tsx        # Bookmarks collection
│   │   ├── create.tsx           # Post creation screen
│   │   ├── notifications.tsx    # Activity notifications
│   │   └── profile.tsx          # User profile screen
│   └── user/                    # User profile pages
│       ├── _layout.tsx          # User layout wrapper
│       └── [id].tsx             # Dynamic user profile screen
├── components/                   # Reusable UI components
│   ├── Comment.tsx              # Individual comment component
│   ├── CommentsModal.tsx        # Comments overlay modal
│   ├── InitialLayout.tsx        # App initialization wrapper
│   ├── Loader.tsx               # Loading spinner component
│   ├── Notification.tsx         # Notification item component
│   ├── Post.tsx                 # Main post component
│   ├── SignOutButton.tsx        # Logout button component
│   ├── Stories.tsx              # Stories section component
│   └── Story.tsx                # Individual story component
├── constants/                    # App constants and configuration
│   ├── mock-data.ts             # Sample data for development
│   └── theme.ts                 # Color scheme and styling constants
├── convex/                       # Backend database functions
│   ├── auth.config.ts           # Authentication configuration
│   ├── bookmarks.ts             # Bookmark-related functions
│   ├── comments.ts              # Comment management functions
│   ├── http.ts                  # HTTP endpoints and webhooks
│   ├── notifications.ts         # Notification handling functions
│   ├── posts.ts                 # Post management functions
│   ├── schema.ts                # Database schema definition
│   └── users.ts                 # User management functions
├── providers/                    # React context providers
│   └── ClerkAndConvexProvider.tsx # Authentication and database provider
├── styles/                       # Screen-specific styling
│   ├── auth.styles.ts           # Authentication screen styles
│   ├── create.styles.ts         # Post creation screen styles
│   ├── feed.styles.ts           # Feed and post component styles
│   ├── notifications.styles.ts  # Notifications screen styles
│   └── profile.styles.ts        # Profile screen styles
├── assets/                       # Static assets and media
│   ├── fonts/                   # Custom font files
│   └── images/                  # App icons and images
├── android/                     # Android-specific configuration
├── package.json                 # Dependencies and scripts
├── app.json                     # Expo configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🔧 Key Screens & Functionality

### 📱 Main App Flow

#### **🏠 Feed Screen** (`app/(tabs)/index.tsx`)

- Displays all posts in reverse chronological order
- Stories section with horizontal scrollable stories
- Pull-to-refresh functionality
- Infinite scrolling through posts
- Real-time updates for likes, comments, and new posts

#### **👤 Profile Screen** (`app/(tabs)/profile.tsx`)

- User statistics (posts, followers, following counts)
- Profile information display (name, username, bio)
- Instagram-style 3-column grid of user's posts
- Profile editing modal
- Post preview in full-screen modal
- Secure logout functionality

#### **📸 Create Post Screen** (`app/(tabs)/create.tsx`)

- Image selection from device gallery
- Caption input for posts
- Image preview before posting
- Upload progress feedback
- Automatic navigation to feed after successful post

#### **🔖 Bookmarks Screen** (`app/(tabs)/bookmarks.tsx`)

- View all saved/bookmarked posts
- 3-column grid layout display
- Full-screen post preview modal
- Empty state with friendly message

#### **🔔 Notifications Screen** (`app/(tabs)/notifications.tsx`)

- Activity feed for all user interactions
- Real-time notification delivery
- Navigation to related users or posts
- Visual indicators for different notification types

#### **👥 User Profile Screen** (`app/user/[id].tsx`)

- View other users' complete profiles
- Follow/unfollow functionality
- Grid view of user's posts
- Smooth navigation back to previous screen

### 🔐 Authentication Flow

1. **Initial Load**: App checks authentication status via Clerk
2. **Unauthenticated**: Redirects to login screen with Google OAuth
3. **Authentication**: Google OAuth flow handled by Clerk
4. **User Creation**: Webhook creates user profile in Convex database
5. **Authenticated**: Redirects to main app with persistent session

## 🗄️ Database Schema

### Users Collection

```typescript
{
  _id: Id<"users">,
  clerkId: string,
  email: string,
  fullName: string,
  username: string,
  bio?: string,
  imageUrl: string,
  followers: number,
  following: number,
  postsCount: number,
  _creationTime: number
}
```

### Posts Collection

```typescript
{
  _id: Id<"posts">,
  userId: Id<"users">,
  imageUrl: string,
  caption: string,
  likes: number,
  commentsCount: number,
  _creationTime: number
}
```

### Interactions Collections

```typescript
// Likes
{
  _id: Id<"likes">,
  userId: Id<"users">,
  postId: Id<"posts">,
  _creationTime: number
}

// Comments
{
  _id: Id<"comments">,
  userId: Id<"users">,
  postId: Id<"posts">,
  content: string,
  _creationTime: number
}

// Bookmarks
{
  _id: Id<"bookmarks">,
  userId: Id<"users">,
  postId: Id<"posts">,
  _creationTime: number
}

// Follows
{
  _id: Id<"follows">,
  followerId: Id<"users">,
  followingId: Id<"users">,
  _creationTime: number
}
```

## 🌐 Backend API

The Spotlight app uses **Convex** as its backend-as-a-service, providing:

- **Base URL**: Configured via environment variable `EXPO_PUBLIC_CONVEX_URL`
- **Real-time Database**: Live queries and mutations
- **File Storage**: Secure image upload and retrieval
- **Authentication**: Integration with Clerk for user management
- **Webhooks**: Automatic user synchronization

## ⚡ Performance Optimizations

- **🖼️ Image Caching**: Aggressive caching with `expo-image`
- **🧠 Memory Management**: Efficient handling of large image feeds
- **🚀 Navigation Optimization**: Efficient routing with Expo Router
- **📦 Bundle Splitting**: Optimized app size with code splitting
- **⚡ Real-time Features**: Live updates with optimistic UI updates
- **🔄 Offline Support**: Graceful degradation when network unavailable

## 🏗️ Installation & Setup

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** (`npm install -g @expo/cli`)
- **Convex CLI** (`npm install -g convex`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

### Environment Variables

Create a `.env` file in the project root with:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CONVEX_DEPLOYMENT=your_convex_deployment
EXPO_PUBLIC_CONVEX_URL=your_convex_url
CLERK_WEBHOOK_SECRET=your_webhook_secret
```

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/loaymady/spotlight-react-native-app-.git
   cd spotlight-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Convex backend**

   ```bash
   npx convex dev
   ```

4. **Set up Clerk authentication**

   - Create a Clerk account
   - Configure Google OAuth provider in Clerk dashboard
   - Set up webhook endpoint for user synchronization
   - Copy your publishable key to environment variables

5. **Start the development server**

   ```bash
   npm start
   ```

6. **Run on specific platforms**

   ```bash
   # iOS (requires Xcode on macOS)
   npm run ios

   # Android (requires Android Studio)
   npm run android

   # Web
   npm run web
   ```

## 📱 Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm start`       | Start Expo development server  |
| `npm run android` | Run on Android device/emulator |
| `npm run ios`     | Run on iOS device/simulator    |
| `npm run web`     | Run in web browser             |
| `npx convex dev`  | Start Convex backend           |

## 🎨 UI/UX Features

- **🌙 Dark Theme**: Modern dark color scheme with green accent
- **✨ Smooth Animations**: Page transitions and micro-interactions
- **📱 Responsive Design**: Optimized for different screen sizes
- **⏳ Loading States**: Skeleton loaders and loading indicators
- **❌ Error Handling**: Graceful error states and user feedback
- **🎯 Native Performance**: Uses native components where possible
