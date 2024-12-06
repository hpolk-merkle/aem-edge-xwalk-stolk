// function req(url) {
//   fetch(url, { method: 'GET' })
//     .then((Result) => Result.json())
//     .then((results) => {
//       console.log(results);
//
//       return results;
//     });
// }

export default async function decorate(block) {
  console.log(block);
  // const [listWrapper] = block.children;
  //
  // const blockList = document.createElement('ul');
  // blockList.classList.add('list-block');
  // // let urlParams = new URLSearchParams({
  // //   offset: 0,
  // // });
  // const url = '/spreadsheet.json';
  //
  // // const json = await req(url);
  // const response = await fetch(url);
  // const testResponse = await fetch('/content/aemcloudondentsu/us/en/jcr%3Acontent.txt');
  //
  // if (testResponse.ok) {
  //   const test = await testResponse.text();
  //
  //   console.log(test);
  // }
  //
  // if (response.ok) {
  //   const json = await response.json();
  //
  //   console.log(json);
  //
  //   json.data.forEach((item) => {
  //     const listItem = document.createElement('li');
  //     listItem.classList.add('list-block-item');
  //     listItem.textContent = item.Path;
  //
  //     blockList.appendChild(listItem);
  //   });
  // }
  //
  // // blockList.textContent = listWrapper.textContent.trim();
  // listWrapper.replaceChildren(blockList);
}
