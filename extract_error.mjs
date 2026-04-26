import fs from 'fs';

async function fetchSession() {
  try {
    const res = await fetch('http://localhost:3005/api/auth/session');
    const text = await res.text();
    
    // Search for error message in Next.js error overlay
    const match = text.match(/"message":"([^"]+)"/g);
    if (match) {
      console.log("Found error messages in HTML:");
      match.forEach(m => console.log(m));
    } else {
      console.log("No message found. Saving to error.html");
      fs.writeFileSync('error.html', text);
    }
  } catch(e) {
    console.error("Fetch failed:", e);
  }
}
fetchSession();
