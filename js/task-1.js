const categories = document.querySelector(`#categories`).children;

console.log(`Number of categories: ${categories.length}`);

Array.from(categories).forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems}`);
});