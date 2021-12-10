const courses = [
    {id: 1, title: "Product 1", isVisible: true},
    {id: 2, title: "Product 2", isVisible: true},
    {id: 3, title: "Product 3", isVisible: false},
    {id: 4, title: "Product 4", isVisible: true},
];

const visibleProducts = courses.filter(q => q.isVisible);

const msg = document.createElement("h3");
msg.textContent = `${visibleProducts.length} Products are visible`;
const body = document.querySelector("body");
body.appendChild(msg)

visibleProducts.forEach(q => {
    const p = document.createElement("p");
    p.textContent = `id: ${q.id} title: ${q.title}`;
    console.log(p)
    body.appendChild(p);
});