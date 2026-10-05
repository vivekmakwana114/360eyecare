// Thin wrapper around GA4's gtag (loaded globally in app/layout.js).
// Safe to call during SSR or when gtag is blocked (ad blockers) — it no-ops.
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
};

// Valid values for the `form_location` param on marketing booking events.
export const MARKETING_FORM_LOCATIONS = ["beaches", "yorkville"];
