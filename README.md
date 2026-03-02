# Optimizer Scorecard MVP

Battery storage optimizer performance scorecard for fund managers.

## Features

- **Hero Grade Display:** Large letter grade (A-F) with visual impact
- **Revenue Gap Analysis:** Shows actual vs optimal revenue with £ gap
- **Peer Benchmarking:** Anonymous comparison vs market distribution
- **Sample Data Flow:** Users can explore without CSV upload
- **Email Capture:** CTA modal for lead generation

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Inline styles (Tailwind v4 compatibility issues)
- **Hosting:** Vercel
- **Testing:** Playwright E2E

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Testing

```bash
npm run test          # Run E2E tests headless
npm run test:ui       # Run with Playwright UI
npm run test:headed   # Run in headed browser
```

## Known Limitations (MVP)

### No Real Data Upload
- CSV upload is simulated - redirects to mock scorecard
- "Sample Scorecard" banner indicates this
- **Action:** Wire file upload to backend processing

### Email Capture Not Connected
- Modal collects email/company but doesn't submit anywhere
- Logs to console only
- **Action:** Wire to backend API or Calendly/Typeform

### Inline Styles Everywhere
- Tailwind v4 utility classes didn't compile reliably
- 432 lines of inline style objects
- Works but harder to maintain
- **Action:** Refactor post-MVP if product validates

### No Error Handling for Data Processing
- Assumes mock data is always valid
- Error boundary catches crashes but no graceful degradation
- **Action:** Add validation + user-friendly error states

### No Analytics
- Can't track: button clicks, time on page, conversion rate
- **Action:** Add PostHog/Mixpanel/GA4

### Hardcoded Mock Data
- Only one sample scorecard (Bramley Battery, B+ grade)
- **Action:** Support multiple sample profiles or dynamic data

## Performance

- **TTFB:** 45ms
- **HTML Size:** 9.9KB
- **Static Generation:** Yes (all pages pre-rendered)

## Security

- ✅ No secrets in client code
- ✅ No authentication required
- ✅ No user data stored
- ✅ Form inputs sanitized (native HTML5)

## Deployment

Automatic via Vercel:
- Push to `main` → auto-deploy to production
- Preview deploys for all branches

**Live:** https://e-optimizer-scorecard.vercel.app

## Code Review Status

**Rex Review:** ⚠️ CONDITIONAL APPROVE

**Fixed:**
- ✅ ESLint apostrophes (3)
- ✅ Typed mock data interface
- ✅ Playwright E2E tests (5 scenarios)
- ✅ Error boundary

**Pending:**
- Visual regression tests
- Refactor inline styles
- Wire real upload

**Maintainability:** 6/10

## Project Structure

```
app/
  layout.tsx          # Root layout + error boundary
  page.tsx            # Landing page (upload)
  scorecard/
    page.tsx          # Scorecard view (results)
  globals.css         # Global styles
components/
  ErrorBoundary.tsx   # Crash handler
types/
  scorecard.ts        # TypeScript interfaces
tests/
  e2e/
    scorecard-flow.spec.ts  # Playwright tests
```

## Next Steps

### Before Demo
- [x] Fix ESLint errors
- [x] Add E2E tests
- [x] Type mock data
- [x] Add error boundary

### This Week
- [ ] Wire email capture to backend/Calendly
- [ ] Add analytics tracking
- [ ] Visual regression tests
- [ ] Support multiple sample scorecards

### Post-MVP (if validated)
- [ ] Wire real CSV upload + processing
- [ ] Add £/MW/month to benchmark
- [ ] "Download sample CSV" link
- [ ] Refactor inline styles to proper CSS
- [ ] User authentication
- [ ] Historical scorecard comparison

## License

Proprietary - Internal use only
