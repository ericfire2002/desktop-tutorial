console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}
let navLinks = $$("nav a");

// Step 2.2: find the current page link
let currentLink = navLinks.find(
  (a) => a.host === location.host && a.pathname === location.pathname
);

// Step 2.3: add the class safely
currentLink?.classList.add('current');
