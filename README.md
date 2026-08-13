# MeroEvent - Frontend Interview Task

## 🎯 Task Overview

This is a **venue detail page** for MeroEvent, a platform for discovering and booking event venues in Nepal. The page displays detailed information about **Dusit Thani Himalayan Resort**.

### Your Task

You have **90 minutes** to complete the following:

#### Part 1: Bug Fixes (30 minutes)
This page has **several bugs**. Find and fix them. Bugs may include:
- Broken images
- Accessibility issues
- Layout/responsive problems
- React best practice violations
- Hydration issues

> **Tip:** Check the browser console, try resizing the viewport, and inspect the components carefully.

#### Part 2: Redesign (60 minutes)
Redesign this page to make it look **more modern, polished, and visually appealing**. You can:
- Change the color scheme, typography, and spacing
- Add animations and transitions
- Improve the responsive layout
- Redesign individual components (cards, buttons, sections)
- Add new visual elements

You are free to use any CSS approach (Tailwind utility classes, custom CSS, etc.)

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the page.

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (assembles all components)
├── components/
│   ├── Breadcrumb.tsx       # Navigation breadcrumb
│   ├── NavActions.tsx       # Share, Save, Directions buttons
│   ├── ImagePreviewGrid.tsx # Photo gallery grid
│   ├── VenueDetailInfo.tsx  # Venue info, stats, facilities, description
│   ├── VenueHallCard.tsx    # Individual hall card
│   ├── VenueHallList.tsx    # Available halls section
│   ├── MoreVenueCard.tsx    # Venue recommendation card
│   └── MoreVenues.tsx       # More venues section
├── data/
│   └── venue.ts             # Hardcoded venue data & types
└── public/
    └── images/              # Venue & hall images
```

---

## 📝 Notes

- All data is **hardcoded** in `data/venue.ts` — no API calls needed
- Images are served from `/public/images/`
- The project uses **Next.js App Router**, **TypeScript**, and **Tailwind CSS**
- Icons are from **lucide-react**

---

## ✅ Evaluation Criteria

| Criteria | Weight |
|----------|--------|
| Bug identification & fixes | 30% |
| Visual design quality | 30% |
| Code quality & organization | 20% |
| Responsive design | 10% |
| Attention to detail | 10% |

Good luck! 🎉
