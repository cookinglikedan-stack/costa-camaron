---
name: Costa Camarón Design System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5a403d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#8f706c'
  outline-variant: '#e3beba'
  surface-tint: '#b72221'
  primary: '#a61317'
  on-primary: '#ffffff'
  primary-container: '#c9302c'
  on-primary-container: '#ffe8e5'
  inverse-primary: '#ffb4ab'
  secondary: '#355e9e'
  on-secondary: '#ffffff'
  secondary-container: '#93b9ff'
  on-secondary-container: '#1a4887'
  tertiary: '#54534e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c6b66'
  on-tertiary-container: '#efede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000c'
  secondary-fixed: '#d7e3ff'
  secondary-fixed-dim: '#aac7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#174685'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-lg:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is festive, authentic, and coastal, capturing the vibrant energy of a high-quality Mexican marisquería. It balances a rustic, "dock-side" charm with a clean, professional modernism that ensures trust in food quality and freshness.

The design style is a blend of **Corporate Modern** and **Tactile/Rustic**. It utilizes clean, structured layouts to communicate professionalism, while incorporating illustrative line-work and high-contrast typography to evoke the warmth of a traditional seafood kitchen. The UI should feel airy and "fresh," using ample whitespace to suggest a premium experience, while using bold color accents to trigger appetite and excitement.

## Colors
The palette is rooted in the high-contrast relationship between maritime depths and fresh catch.

*   **Primary (Seafood Red):** A vibrant, energetic red used for calls to action, highlights, and primary branding. It evokes the color of cooked shrimp and coastal spice.
*   **Secondary (Nautical Blue):** A deep, reliable navy that provides grounding and professional contrast. Used for headers, navigation, and primary text icons.
*   **Tertiary (Sand/Parchment):** A soft, warm off-white used for background surfaces to avoid the clinical feel of pure white, adding a subtle rustic texture.
*   **Neutral:** A dark charcoal for maximum legibility in body copy, and varying shades of cool gray for borders and disabled states.

## Typography
The typography system creates a clear hierarchy by pairing a characterful display face with a highly functional sans-serif.

*   **Headlines:** Utilize **Bricolage Grotesque** to mimic the slightly quirky, rustic western influence of the logo's "COSTA" lettering. It should be used for large titles and section headers to inject brand personality.
*   **Secondary Text & Labels:** **Work Sans** is used for all functional text, menu items, and descriptions. Its clean, geometric nature ensures readability and balances the more decorative headline font.
*   **Styling Note:** For navigation and category titles, use uppercase with increased letter spacing to mirror the "MARISQUERÍA" branding style.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous margins to create a high-end, editorial feel. 

*   **Desktop:** A 12-column grid with 24px gutters. Content should be centered with wide 64px margins to allow the brand illustrations (shrimp patterns) to breathe in the periphery.
*   **Mobile:** A 4-column grid with 16px margins.
*   **Rhythm:** Use an 8px base unit. Component internal padding should favor the "MD" (24px) unit for a spacious, comfortable touch interface suitable for restaurant browsing.

## Elevation & Depth
This design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to maintain a "fresh" and "flat" aesthetic.

*   **Surfaces:** Primary content lives on the Tertiary (Parchment) background. Secondary containers (like cards) use a pure white surface with a thin 1px border in a lightened Nautical Blue.
*   **Interactive Elevation:** Only use subtle, diffused shadows (15% opacity Primary Red or Secondary Blue) on hovered buttons or active cards to suggest tangibility without cluttering the clean aesthetic.
*   **Depth through Illustration:** Use the shrimp line-art as "background-depth" elements—placed at low opacity behind text containers to create visual layers.

## Shapes
The shape language is **Soft** but structured. 

*   **Containers:** Use 0.25rem (4px) corner radii for a professional, slightly traditional feel that complements the "Western" blocky nature of the typography.
*   **Buttons:** Apply 0.5rem (8px) for primary buttons to make them feel inviting and modern.
*   **Iconography:** Icons must follow the illustration style of the shrimp in the logo: medium-weight strokes, open paths, and an etched, hand-drawn quality.

## Components
*   **Buttons:** Primary buttons are solid Seafood Red with white Work Sans text (bold/uppercase). Secondary buttons are outlined Nautical Blue.
*   **Cards:** Menu items should be presented in cards with thin, cool-gray borders and a slight 4px radius. Large imagery should fill the top half of the card, with prices highlighted in Seafood Red.
*   **Chips/Tags:** Use for dietary labels (e.g., "Picante", "Gluten-Free"). Rounded-pill shapes with Secondary Blue backgrounds and white text.
*   **Input Fields:** Minimalist design with a bottom-border only or a very light 1px outline. Use Nautical Blue for the active/focus state.
*   **Illustrative Accents:** Every 3rd or 4th list item or section should be punctuated by a small red shrimp icon to reinforce the brand identity throughout the user journey.
*   **Navigation:** A clean top bar using Nautical Blue for text, with the logo centered. Mobile navigation should use a "curated" overlay menu with large, Bricolage Grotesque typography.