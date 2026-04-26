async function checkLink() {
  const res = await fetch('https://www.sciencedirect.com/journal/international-journal-of-surgery', { redirect: 'manual' });
  console.log("Status:", res.status);
  console.log("Location:", res.headers.get('location'));
}
checkLink();
