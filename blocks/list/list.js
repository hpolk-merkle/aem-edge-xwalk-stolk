export default function decorate(block) {
  const [listWrapper] = block.children;

  const blockquote = document.createElement('blocklist');
  // let urlParams = new URLSearchParams({
  //   offset: 0,
  // });
  const url = '/spreadsheet.json';

  fetch(url, { method: 'GET' })
    .then((Result) => Result.json())
    .then((results) => {
      console.log(results);
    });
  blockquote.textContent = listWrapper.textContent.trim();
  listWrapper.replaceChildren(blockquote);
}
