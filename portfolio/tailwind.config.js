/**
 * tailwind.config.js
 * Generated from DESIGN-revolut.md — every value below is a 1:1 mapping
 * of a token in that file. Do not hand-edit a color/type/spacing value
 * here without updating design.md first; they must stay in sync.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // We extend rather than replace Tailwind's defaults, but effectively
    // every scale below (color, font, spacing, radius) fully overrides
    // the class names the design system cares about.
    extend: {
      colors: {
        // Brand
        primary: {
          DEFAULT: "#494fdf",
          bright: "#4f55f1",
          deep: "#3a40c4",
        },
        "on-primary": "#ffffff",

        // Text / ink ladder (light surfaces)
        ink: "#191c1f",
        body: "#1f2226",
        charcoal: "#3a3d40",
        mute: "#505a63",
        ash: "#5c5e60",
        stone: "#8d969e",
        faint: "#c9c9cd",

        // Text on dark
        "on-dark": "#ffffff",
        "on-dark-mute": "rgba(255,255,255,0.72)",

        // Canvas
        "canvas-light": "#ffffff",
        "canvas-dark": "#000000",

        // Surfaces
        "surface-soft": "#f4f4f4",
        "surface-card": "#ffffff",
        "surface-deep": "#0a0a0a",
        "surface-elevated": "#16181a",

        // Hairlines / dividers
        "hairline-light": "#e2e2e7",
        "hairline-dark": "rgba(255,255,255,0.12)",
        "hairline-strong": "#191c1f",
        "divider-soft": "rgba(255,255,255,0.06)",

        // Wide accent palette — illustration/icon use ONLY, never buttons
        // (enforced by design.md Do/Don't — not a Tailwind-level rule,
        // so treat these as off-limits for bg-*/interactive classes in review)
        accent: {
          teal: "#00a87e",
          "blue-link": "#376cd5",
          "light-blue": "#007bc2",
          "light-green": "#428619",
          "green-text": "#006400",
          yellow: "#b09000",
          warning: "#ec7e00",
          pink: "#e61e49",
          danger: "#e23b4a",
          "deep-red": "#8b0000",
          brown: "#936d62",
        },

        link: "#376cd5",
      },

      fontFamily: {
        // Display/heading face — used only for typography.display-* and
        // heading-* tokens. Never apply to body copy.
        display: ["Aeonik Pro", "ui-sans-serif", "system-ui", "sans-serif"],
        // Body/UI face — body, buttons, captions, links.
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // Each key mirrors a typography.* token verbatim: [fontSize, { lineHeight, letterSpacing, fontWeight }]
      fontSize: {
        "display-xxl": ["136px", { lineHeight: "1.0", letterSpacing: "-2.72px", fontWeight: "500" }],
        "display-xl": ["80px", { lineHeight: "1.0", letterSpacing: "-0.8px", fontWeight: "500" }],
        "display-lg": ["48px", { lineHeight: "1.21", letterSpacing: "-0.48px", fontWeight: "500" }],
        "display-md": ["40px", { lineHeight: "1.2", letterSpacing: "-0.4px", fontWeight: "500" }],
        "heading-lg": ["32px", { lineHeight: "1.19", letterSpacing: "-0.32px", fontWeight: "500" }],
        "heading-md": ["24px", { lineHeight: "1.33", letterSpacing: "0", fontWeight: "500" }],
        "heading-sm": ["20px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.56", letterSpacing: "-0.09px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", letterSpacing: "0.24px", fontWeight: "400" }],
        "body-md-bold": ["16px", { lineHeight: "1.5", letterSpacing: "0.16px", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "1.43", letterSpacing: "0", fontWeight: "400" }],
        "button-lg": ["20px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "button-md": ["16px", { lineHeight: "1.5", letterSpacing: "0.24px", fontWeight: "600" }],
        "button-sm": ["14px", { lineHeight: "1.43", letterSpacing: "0", fontWeight: "600" }],
        caption: ["13px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "400" }],
        "link-emph": ["16px", { lineHeight: "1.5", letterSpacing: "0.24px", fontWeight: "700" }],
      },

      // rounded.* scale — use rounded-{key} in markup
      borderRadius: {
        none: "0px",
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "28px",
        full: "9999px",
      },

      // spacing.* scale, added alongside (not replacing) Tailwind's numeric
      // scale, so p-4/gap-2/etc. still work for one-off layout needs.
      spacing: {
        xxs: "4px",
        xs: "6px",
        sm: "8px",
        md: "14px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
        xxxl: "48px",
        block: "80px",
        section: "88px",
        band: "120px",
      },

      // Breakpoints from design.md's Responsive Behavior table.
      // Tailwind's default 'sm/md/lg/xl/2xl' are overridden to match
      // the documented ladder exactly (min-width, mobile-first).
      screens: {
        sm: "426px",   // Mobile Large
        md: "768px",   // Tablet
        lg: "1024px",  // Tablet Large
        xl: "1280px",  // Desktop
        "2xl": "1440px", // Desktop XL
      },

      // design.md explicitly forbids drop shadows on cards; elevation
      // is canvas/surface-luminance only. No boxShadow tokens are defined
      // on purpose — don't add a shadow scale here.
      boxShadow: {},
    },
  },
  plugins: [],
};
