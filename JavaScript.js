document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 90; // 100px offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    });
});

// comparison

var data = [{
    "id": 0,
    "item": "",
    "cat": "",
    "price": "",
    "image": "Error.png"
}, {
    "id": 1,
    "item": "4 Qul",
    "cat": "Acrylic - Metal Wall Arts",
    "price": "$ 101",
    "image": "PFA Images/Arcylic/A3.webp"
}, {
    "id": 1,
    "item": "Ayatul Kursi",
    "cat": "Acrylic - Metal Wall Arts",
    "price": "$ 103",
    "image": "PFA Images/Arcylic/A1.webp"
}, {
    "id": 1,
    "item": "Bakovity Black Metal",
    "cat": "Abstract - Metal Wall Arts",
    "price": "$ 129",
    "image": "MWA Images/Abstract/A2.jpg"
}, {
    "id": 1,
    "item": "Black And Gold Decor",
    "cat": "Abstract - Metal Wall Arts",
    "price": "$ 134",
    "image": "MWA Images/Abstract/A3.jpg"
}, {
    "id": 1,
    "item": "Fabric",
    "cat": "Textile - Wallpapers",
    "price": "$ 189",
    "image": "W Images/Textile/T1.jpg"
}, {
    "id": 1,
    "item": "Glamativity Large 4",
    "cat": "Abstract - Metal Wall Arts",
    "price": "$ 199",
    "image": "MWA Images/Abstract/A1.jpg"
}, {
    "id": 1,
    "item": "Kalma E Tayyab",
    "cat": "Acrylic - Metal Wall Arts",
    "price": "$ 199",
    "image": "PFA Images/Arcylic/A2.webp"
}, {
    "id": 1,
    "item": "Sun Shaped",
    "cat": "Carved - Mirror Art",
    "price": "$ 286",
    "image": "MA Images/Carved/C1.webp"
}, {
    "id": 1,
    "item": "Vintage Carved Arch",
    "cat": "Carved - Mirror Art",
    "price": "$ 399",
    "image": "MA Images/Carved/C3.webp"
}, {
    "id": 1,
    "item": "Vintage Style Mirror",
    "cat": "Carved - Mirror Art",
    "price": "$ 399",
    "image": "MA Images/Carved/C2.jpg"
}]

