//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Metallica', 'Nirvana'];

function removeArticles(name) {
  name = name.replace(/^(a|an|the)\s+/i, '');

  name = name.replace(/\s+(a|an|the)$/i, '');

  return name;
}

bandNames.sort(function(a, b) {
  a = removeArticles(a.toLowerCase());
  b = removeArticles(b.toLowerCase());

  return a.localeCompare(b);
});

let bandList = document.getElementById('band');

for (let i = 0; i < bandNames.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = bandNames[i];
  bandList.appendChild(listItem);
}

