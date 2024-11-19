export default function decorate(block) {
  const [listWrapper] = block.children;

  const blockquote = document.createElement('blocklist');
  blockquote.textContent = listWrapper.textContent.trim();
  listWrapper.replaceChildren(blockquote);
}
