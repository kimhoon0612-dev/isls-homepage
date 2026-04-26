import fs from 'fs';

async function fetchForm() {
  const url = 'https://www.isls-liversurgeon.org/99_donation/Form/DonationForm.html';
  console.log('Fetching', url);
  try {
    const res = await fetch(url);
    const html = await res.text();
    fs.writeFileSync('legacy_donation_form.html', html);
    console.log("Saved legacy_donation_form.html");
  } catch (err) {
    console.error(err);
  }
}

fetchForm();
