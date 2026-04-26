async function fetchSession() {
  try {
    const res = await fetch('http://localhost:3005/api/auth/session');
    const text = await res.text();
    console.log("STATUS:", res.status);
    console.log("BODY START:");
    // Print the first 1500 chars which should have the error message if it's an HTML page
    console.log(text.substring(0, 1500));
  } catch(e) {
    console.error("Fetch failed:", e);
  }
}
fetchSession();
