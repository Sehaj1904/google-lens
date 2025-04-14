# Google Lens Clone

A pixel-perfect clone of Google Lens's React, styled-components, responsiveness, animations.

## Features

### 1. Home Screen
- Responsive search bar with Google's iconic design
- Voice and Lens search options
- Quick action buttons for common searches
- Dynamic info cards (weather, air quality)
- News section with image preview
- Bottom navigation bar

### 2. Search Interface
- **Top Bar**
  - Google logo with search input
  - Voice and Lens shortcuts
  - Profile section

- **Quick Actions**
  - Image search
  - Translate
  - Education
  - Music
  Each with hover effects and color-coded backgrounds

### 3. Lens Modal Flow
1. **Initial View**
   - Full-screen modal with dark theme
   - Demo image display
   - Bottom navigation with Translate/Search/Homework options
   - Search button to initiate cropping

2. **Cropping Interface**
   - Interactive image cropper with 16:9 aspect ratio
   - Smooth drag-and-drop functionality
   - Cancel and Next actions
   - Real-time preview of selection

3. **Results View**
   - Grid layout of visual matches
   - Info banner for search details
   - Tab bar for different result categories
   - Bottom navigation

### Responsiveness
- Flexible layouts using CSS Grid and Flexbox
- Percentage-based dimensions for adaptability
- Media queries for breakpoint handling
- Touch-friendly interaction areas

#### LensModal
```jsx
// Flow:
1. Show demo image
2. Click search to activate cropper
3. Select area and click Next
4. Display results in PostSearchModal
```

#### Image Cropping
```jsx
// Features:
- Maintains aspect ratio
- Real-time preview
- Generates cropped image using canvas
- Smooth transitions
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

- React
- capacitor js
- styled-components
- react-icons
- react-image-crop
- react-router-dom
