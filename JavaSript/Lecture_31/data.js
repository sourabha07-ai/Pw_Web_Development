const d = new Date();
// Get Date Parts
console.log(d.getFullYear()); // 2026
console.log(d.getMonth());    // 0-11
console.log(d.getDate());     // Day of month (1-31)
console.log(d.getDay());      // Day of week (0=Sun, 6=Sat)
console.log(d.getHours());    // 0-23
console.log(d.getMinutes());  // 0-59
console.log(d.getSeconds());  // 0-59

// Set Date Parts
const d1 = new Date();

d1.setFullYear(2027);
d1.setMonth(0);   // January
d1.setDate(1);

console.log(d1);


// Format Dates
const d2 = new Date();

console.log(d2.toDateString());      // Mon Aug 17 2026
console.log(d2.toISOString());       // 2026-08-17T...
console.log(d2.toLocaleDateString()); // Locale-specific
console.log(d2.toLocaleString());     // Date + time


// Timestamp
// Current timestamp (milliseconds)
const timestamp = Date.now();

console.log(timestamp);

// Today's date in YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];

console.log(today);

// Add 7 days
const d3 = new Date();
d.setDate(d3.getDate() + 7);

console.log(d3);


// Difference between two dates
const start = new Date("2026-08-01");
const end = new Date("2026-08-17");

const diffDays = (end - start) / (1000 * 60 * 60 * 24);

console.log(diffDays); // 16