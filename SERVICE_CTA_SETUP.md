# Service CTA Collection Setup

This document describes the service CTA collection structure for managing the Service Conversion CTA section content dynamically.

## Collection Schema

### Collection Name: `service_cta`

### Collection ID
`6afa791e7c6f2ff3937c04d4`

### Access URL
`http://localhost:3058/collections/6afa791e7c6f2ff3937c04d4?collectionName=service_cta`

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `badge` | String | No | Badge text displayed above the title (e.g., "Turnkey Commission Dialogue") |
| `title` | String | No | Main heading text for the CTA section |
| `subtitle` | String | No | Subtitle/description text below the title |
| `tagline` | String | No | Alternative subtitle field (fallback for subtitle) |
| `status` | Boolean | No | Whether the CTA is active (default: true) |
| `created_at` | Date | Auto | Creation timestamp |
| `updated_at` | Date | Auto | Last update timestamp |

## Backend API Endpoint

### GET /api/data/service_cta

Fetch all service CTA records.

### POST /api/data/service_cta

Create a new service CTA record.

### PUT /api/data/service_cta/:id

Update an existing service CTA record.

## Example Document

```json
{
  "badge": "Turnkey Commission Dialogue",
  "title": "Ready to Architect Your Next Project?",
  "subtitle": "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  "tagline": "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  "status": true
}
```

## Frontend Usage

The `ServiceConversionCTA` component automatically fetches data from the `service_cta` collection. No props are required for the heading content - it will use the backend data with fallbacks to defaults.

### Component Usage

```tsx
import ServiceConversionCTA from "@/components/ServiceConversionCTA";

// Minimal usage - heading content comes from backend
<ServiceConversionCTA
  id="inquire-form"
  defaultService="Website Design & Development"
  category="technology-solution"
/>

// Optional: Override with props (props take precedence over backend data)
<ServiceConversionCTA
  id="inquire-form"
  defaultService="Website Design & Development"
  category="technology-solution"
  badge="Custom Badge"
  title="Custom Title"
  subtitle="Custom subtitle text"
/>
```

## Data Priority Order

The component uses the following priority for heading content:

1. Props passed to the component (`badge`, `title`, `subtitle`)
2. Backend data from `service_cta` collection
3. Default values in `DEFAULT_SERVICE_CTA`

## Default Values

If no backend data is available, the component uses these defaults:

```typescript
{
  badge: "Turnkey Commission Dialogue",
  title: "Ready to Architect Your Next Project?",
  subtitle: "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  tagline: "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  status: true
}
```

## Backend Setup Instructions

1. Navigate to: `http://localhost:3058/collections/6afa791e7c6f2ff3937c04d4?collectionName=service_cta`

2. Remove any existing data in the collection

3. Add the following document:

```json
{
  "badge": "Turnkey Commission Dialogue",
  "title": "Ready to Architect Your Next Project?",
  "subtitle": "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  "tagline": "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  "status": true
}
```

## Files Modified

- `src/lib/getServiceCTAData.ts` - Created utility to fetch service CTA data
- `src/components/ServiceConversionCTA.tsx` - Updated to use dynamic data from backend
- `src/components/UnifiedDetailsView.tsx` - Removed hardcoded props for badge, title, subtitle
