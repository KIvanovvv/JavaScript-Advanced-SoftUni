function extract(content) {
  const elementText = document.getElementById(content).textContent;
  const pattern = /\(([^)]+)\)/g;
  const result = elementText.matchAll(pattern);
  let matches = [];
  for (let text of result) {
    matches.push(text[1]);
  }
  return matches.join(`; `);
}
