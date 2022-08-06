// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);


// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ______________________

const numberEl = document.querySelector('ul').children.length;
console.log(`Number of categories: ${numberEl}`)


const listEl = document.querySelectorAll('li.item');
// console.log(listEl);

listEl.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.innerText}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});
