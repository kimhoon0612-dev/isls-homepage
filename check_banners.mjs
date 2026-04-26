const urls = [
  'https://www.isls-liversurgeon.org/images/sub_visual01.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual02.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual03.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual04.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual05.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual06.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual07.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual08.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual09.jpg',
  'https://www.isls-liversurgeon.org/images/sub_visual10.jpg',
];

async function check() {
  for (const url of urls) {
    const res = await fetch(url, { method: 'HEAD' });
    console.log(url, res.ok);
  }
}

check();
