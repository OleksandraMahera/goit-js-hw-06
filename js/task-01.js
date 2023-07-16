const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.children;

console.log('Number of categories:', categoriesItems.length);

Array.from(categoriesItems).forEach((item) => {
    const categoryTitle = item.firstElementChild.textContent;
    const categoryElements = item.lastElementChild.children.length;

    console.log('\nCategory:', categoryTitle);
    console.log('Elements:', categoryElements);
});



