# Blog System - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### 1. Environment Setup
```bash
# Make sure these are in your .env.local
NEXT_PUBLIC_API_URL=http://localhost:3014
NEXT_PUBLIC_BLOG_COLLECTION_ID=6ae81e500e8e4d4d432535bb
```

### 2. Start Backend API
```bash
cd backend
npm run dev
# Should run on http://localhost:3014
```

### 3. Start Frontend
```bash
cd 3D_RND
npm run dev
# Should run on http://localhost:3000
```

### 4. View Blogs
- **Homepage**: http://localhost:3000 (scroll to Insights section)
- **All Blogs**: http://localhost:3000/insights
- **Single Blog**: http://localhost:3000/blogs/[blog-id]

---

## 📝 Adding a New Blog (CMS)

1. Go to: `http://localhost:3014/collections/6ae81e500e8e4d4d432535bb`
2. Click **"Add New Record"**
3. Fill in the form:
   ```
   Title: Your Blog Title
   Slug: your-blog-title (auto-generated)
   Category: Technology
   Image: /uploads/your-image.jpg
   Author: Your Name
   Author Role: Your Role
   Overview: <p>Your content here...</p>
   ```
4. Click **"Save"**
5. View at: `http://localhost:3000/insights`

---

## 🎨 Component Locations

| Component | Path | Purpose |
|-----------|------|---------|
| Homepage Section | `src/components/InsightsSection.tsx` | Shows latest 3 blogs |
| Blog Listing | `src/app/insights/page.tsx` | All blogs with filters |
| Blog Detail | `src/app/blogs/[slug]/page.tsx` | Individual blog page |
| API Service | `src/lib/blogApi.ts` | Fetches from backend |

---

## 🔍 Testing Checklist

### Homepage
- [ ] Navigate to http://localhost:3000
- [ ] Scroll to "Insights" section
- [ ] Verify 3 latest blogs appear
- [ ] Click "View All Dispatches" button
- [ ] Should navigate to `/insights`

### Insights Page
- [ ] Navigate to http://localhost:3000/insights
- [ ] Verify all blogs are displayed
- [ ] Test category filters (click different categories)
- [ ] Test search (type in search box)
- [ ] Click on a blog card
- [ ] Should navigate to blog detail page

### Blog Detail Page
- [ ] Navigate to any blog detail page
- [ ] Verify all content renders (title, image, sections, FAQs)
- [ ] Check prev/next navigation
- [ ] Test "Back to Insights" link
- [ ] Verify author information displays

---

## 🐛 Common Issues & Fixes

### Issue: "No articles available"
**Fix:**
```bash
# 1. Check if backend is running
curl http://localhost:3014/api/data/6ae81e500e8e4d4d432535bb

# 2. Restart frontend dev server
npm run dev
```

### Issue: Images not loading
**Fix:**
- Check image paths in backend data start with `/` or are full URLs
- Verify images exist in `/public` folder
- Example: `/uploads/blog-image.jpg` → File should be at `public/uploads/blog-image.jpg`

### Issue: Search not working
**Fix:**
- Type at least 3 characters
- Check browser console for errors
- Verify blogs have searchable content (title, tagline, category)

---

## 📊 API Endpoints Reference

```bash
# Get all blogs
GET http://localhost:3014/api/data/6ae81e500e8e4d4d432535bb

# Get collections info
GET http://localhost:3014/api/collections/6ae81e500e8e4d4d432535bb

# Response format
{
  "success": true,
  "data": [
    {
      "id": "...",
      "title": "Blog Title",
      "slug": "blog-title",
      "category": "Technology",
      ...
    }
  ]
}
```

---

## 🎯 Key Features

✅ **Dynamic Content** - All blogs from backend CMS  
✅ **Real-time Search** - Filter by title, author, category  
✅ **Category Filter** - Dynamic categories from API  
✅ **SEO Optimized** - Meta tags, OG images, structured data  
✅ **Loading States** - Smooth skeleton loaders  
✅ **Responsive Design** - Works on all devices  
✅ **Animations** - GSAP scroll animations, wave text effects  
✅ **Image Effects** - Print reveal animations  

---

## 📱 Pages Overview

### 1. Homepage (`/`)
- **Section**: Insights Section
- **Shows**: Latest 3 blogs
- **Features**: Image hover effects, CTA button

### 2. Insights Listing (`/insights`)
- **Layout**: Featured + Grid (3 columns)
- **Features**: Search, category filter, pagination-ready
- **Animations**: Scroll-triggered GSAP animations

### 3. Blog Detail (`/blogs/[slug]`)
- **Layout**: Full article view with TOC
- **Features**: Reading progress, audio player, FAQs, author info
- **Navigation**: Prev/Next article links

---

## 🔧 Customization

### Change Number of Homepage Blogs
```typescript
// src/components/InsightsSection.tsx
const blogs = await fetchRecentBlogs(5); // Change from 3 to 5
```

### Change Revalidation Time
```typescript
// src/lib/blogApi.ts
fetch(url, {
  next: { revalidate: 300 }, // Change from 60 to 300 seconds
});
```

### Modify Blog Card Layout
```typescript
// src/app/insights/page.tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Change lg:grid-cols-3 to lg:grid-cols-4 */}
</div>
```

---

## 📈 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before uploading
   - Recommended size: 780x500px

2. **Cache API Calls**
   - Default: 60 seconds revalidation
   - Increase for production: 300 seconds (5 min)

3. **Lazy Loading**
   - Images lazy load by default with Next.js Image
   - Consider implementing infinite scroll for large datasets

---

## 🚢 Deployment Checklist

Before deploying to production:

- [ ] Update `NEXT_PUBLIC_API_URL` to production URL
- [ ] Test all blog pages
- [ ] Verify images load from CDN/production server
- [ ] Check meta tags and OG images
- [ ] Test on mobile devices
- [ ] Run build locally: `npm run build`
- [ ] Check for build errors
- [ ] Test production build: `npm start`

---

## 📚 Additional Resources

- [Full Documentation](./BLOG_SYSTEM_DOCUMENTATION.md)
- [API Reference](./BLOG_SYSTEM_DOCUMENTATION.md#api-functions-reference)
- [Troubleshooting Guide](./BLOG_SYSTEM_DOCUMENTATION.md#troubleshooting)

---

## 💡 Pro Tips

1. **Use Meaningful Slugs**: Good slug = `react-native-guide`, Bad slug = `post-123`
2. **Optimize Overview Text**: Keep first paragraph engaging (shown in previews)
3. **Choose Categories Wisely**: Consistent categorization improves UX
4. **Add Quality Images**: 780x500px aspect ratio works best
5. **Write Compelling Taglines**: Shown in blog cards and meta descriptions

---

**Need Help?** Check the full documentation or contact the development team.

---

**Version**: 2.0.0  
**Last Updated**: November 2026
