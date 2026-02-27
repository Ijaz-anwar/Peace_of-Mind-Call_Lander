/**
 * Centralized Meta Pixel tracking utility to ensure consistency
 * and prevent double-firing of events.
 */

// Global guard linked to window to ensure it persists across potential re-mounts
const getGlobalLastTrackTime = () => window._lastContactTrackTime || 0;
const setGlobalLastTrackTime = (time) => { window._lastContactTrackTime = time; };

const TRACK_DEBOUNCE_MS = 1000; // Reduced to 1 second for better responsiveness

/**
 * Tracks the "Contact" standard event with value and currency.
 * @param {number} value - The conversion value (default: 1.00)
 * @param {string} currency - The currency code (default: 'USD')
 */
export const trackContactEvent = (value = 1.00, currency = 'USD') => {
    const currentTime = Date.now();
    const lastTrackTime = getGlobalLastTrackTime();

    // Prevent double firing within the debounce window
    if (currentTime - lastTrackTime < TRACK_DEBOUNCE_MS) {
        console.warn(`FB Pixel: "Contact" event PREVENTED (double-fire guard). Elapsed: ${currentTime - lastTrackTime}ms`);
        return;
    }

    if (typeof window.fbq === 'function') {
        console.log(`FB Pixel: Manual TRACK "Contact" | Value: ${value.toFixed(2)} | Currency: ${currency}`);
        window.fbq('track', 'Contact', {
            value: value.toFixed(2),
            currency: currency
        });
        setGlobalLastTrackTime(currentTime);
    } else {
        console.error('FB Pixel: fbq function not found on window! Ensure Pixel script is in index.html and not blocked.');
    }
};

/**
 * Handles phone calls by tracking the event and then redirecting.
 * This bypasses Meta's automatic event detection by avoiding tel: hrefs.
 * @param {string} phoneNumber - The phone number to call (e.g. '+18335494113')
 * @param {Event} e - The click event (optional)
 */
export const handlePhoneCall = (phoneNumber, e = null) => {
    console.log(`FB Pixel: handlePhoneCall triggered for ${phoneNumber}`);
    if (e) {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }

    // Track the event using our debounced utility
    trackContactEvent();

    // Clean phone number (remove spaces, etc if needed)
    const cleanNumber = phoneNumber.replace(/[\s-()]/g, '');

    // Delay slightly to ensure tracking fires (optional but safer)
    console.log(`FB Pixel: Redirecting to tel:${cleanNumber} shortly...`);
    setTimeout(() => {
        window.location.href = `tel:${cleanNumber}`;
    }, 100);
};

// Debugging helper
if (typeof window !== 'undefined') {
    window.checkPixelStatus = () => {
        console.log('--- Pixel Status Check ---');
        console.log('fbq available:', typeof window.fbq === 'function');
        console.log('Last track time:', new Date(getGlobalLastTrackTime()).toLocaleTimeString());
        console.log('Global guard:', window._lastContactTrackTime);
        console.log('--------------------------');
        return 'Check complete';
    };
}
