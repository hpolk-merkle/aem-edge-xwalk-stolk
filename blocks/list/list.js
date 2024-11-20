function req(url) {
  fetch(url, { method: 'GET' })
    .then((Result) => Result.json())
    .then((results) => {
      console.log(results);
    });
}

export default function decorate(block) {
  const [listWrapper] = block.children;

  const blockquote = document.createElement('blocklist');
  // let urlParams = new URLSearchParams({
  //   offset: 0,
  // });
  const url = '/spreadsheet.json';

  req(url);

  blockquote.textContent = listWrapper.textContent.trim();
  listWrapper.replaceChildren(blockquote);
}
