# CONSULTING 4REZULTS INC — Production & Technical Support Website

Official production website for **CONSULTING 4REZULTS INC** (`consulting4r.com`), a Florida-based media consulting, production, staffing, stage/set construction, and technical support company founded in 2020.

---

## 🎬 Company Profile

- **Company**: CONSULTING 4REZULTS INC
- **Domain**: `consulting4r.com`
- **Location**: Florida, USA
- **Founded**: 2020
- **Focus**: Media consulting, production, staffing, stage/set construction, advertising, movie production, event production, technical support, and PR management.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19 + Vite
- **Styling**: Vanilla CSS with comprehensive CSS custom properties design tokens (`src/index.css`)
- **Typography**: Google Fonts (`Outfit` for bold editorial headlines, `Inter` for crisp body copy)
- **Icons**: Lucide React
- **Routing**: React Router DOM (with automatic scroll restoration & deep link anchor support)
- **Assets**: High-fidelity WebP & Progressive JPEG cinema assets, multi-resolution favicons, and vector SVG brand mark

---

## 📑 Page Structure

Strict four-page production scope:

1. **HOME (`/`)**:
   - Cinematic soundstage hero with ARRI cinema setup and dark overlay
   - Split-layout Introduction (*"More Than Production Support. A Partner in Execution."*)
   - 8-Card Services Grid (`01 Stage Construction` through `08 Consulting`)
   - Phased Process Timeline (*"From Concept to Completion"*: 01 Discover, 02 Plan, 03 Prepare, 04 Produce, 05 Deliver)
   - Visual Production Sectors (Film & Movies, Advertising, Live Events, Corporate, Entertainment, Media)
   - 6 Operational Strengths
   - Final CTA Banner

2. **SERVICES (`/services`)**:
   - Comprehensive hero
   - Sticky in-page quick-jump pill navigation
   - 8 detailed service breakdown sections with high-resolution photography and key deliverables checklists
   - Service quote request triggers & final CTA

3. **ABOUT US (`/about`)**:
   - Soundstage hero (*"Turning Ideas Into Real-World Results."*)
   - *Our Story*: Founded in 2020 in Florida, 5-pillar capability foundation
   - *Our Approach*: Practical support, proactive technical planning, professional execution
   - *What We Bring*: 5 capability pillars (PEOPLE, EXPERTISE, RESOURCES, CONSTRUCTION, EXECUTION)
   - *Our Commitment*: Highlighted quote block honoring client commitment

4. **CONTACT (`/contact`)**:
   - Hero (*"Let's Build the Right Production Plan."*)
   - Production inquiry form with client-side validation, error handling, reference ID generation, and success confirmation
   - Strictly verified client corporate profile (Florida, USA • Founded 2020)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

```bash
# Clone the repository
git clone https://github.com/priteegupta/consulting.git
cd consulting

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

The site will start locally on `http://localhost:5173/` (or the next available port).

### Production Build

```bash
npm run build
npm run preview
```

The compiled static assets will be output to the `dist/` directory, ready for deployment to any modern web host (Vercel, Netlify, Cloudflare Pages, AWS S3 / CloudFront, etc.).

---

## 📄 License

© 2026 CONSULTING 4REZULTS INC. All Rights Reserved.
