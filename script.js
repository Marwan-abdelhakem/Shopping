const products = [
    {
        id: 1,
        title: "Rounded neck - T shirt",
        subtitle: "100% Cotton",
        price: "$85",
        image: "./image/image1.png",
        description: "Organic Cotton, Fair Trade quality"
    },
    {
        id: 2,
        title: "Summer Floral Dress",
        subtitle: "Viscose Fabric",
        price: "$120",
        image: "/image/image22.png",
        description: "Lightweight and perfect for summer"
    },
    {
        id: 3,
        title: "Running Sneakers",
        subtitle: "Breathable Mesh",
        price: "$95",
        image: "/image/image3.png",
        description: "High performance running shoes"
    },
    {
        id: 4,
        title: "Classic Denim Jacket",
        subtitle: "Heavy Duty",
        price: "$110",
        image: "./image/image4.png",
        description: "Vintage wash, classic fit"
    },
    {
        id: 5,
        title: "Urban Black Hoodie",
        subtitle: "Fleece Lined",
        price: "$65",
        image: "/image/image1.png",
        description: "Warm and cozy for winter nights"
    },
    {
        id: 6,
        title: "Silver Smart Watch",
        subtitle: "Water Resistant",
        price: "$200",
        image: "/image/image22.png",
        description: "Tracks health and notifications"
    },
    {
        id: 7,
        title: "Leather Backpack",
        subtitle: "Genuine Leather",
        price: "$140",
        image: "/image/image3.png",
        description: "Perfect for daily commute"
    },
    {
        id: 8,
        title: "Elegance Perfume",
        subtitle: "100ml Bottle",
        price: "$90",
        image: "/image/image4.png",
        description: "Floral scent with woody notes"
    }
];

const productGrid = document.getElementById('productGrid');

function renderProducts() {
    if (!productGrid) return;

    const productsHTML = products.map(product => {
        return `
            <article class="product-card">
                <div class="card-image-wrapper">
                    <img src="${product.image}" alt="${product.title}">
                    <button class="wishlist-btn" onclick="addToWishlist(${product.id})">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="card-info">
                    <div class="info-row">
                        <h3 class="product-title">${product.title}</h3>
                        <span class="product-price">${product.price}</span>
                    </div>
                    <p class="product-subtitle">${product.subtitle}</p>
                    <p class="product-desc">${product.description}</p>
                </div>
            </article>
        `;
    }).join('');
    productGrid.innerHTML = productsHTML;
}

function addToWishlist(id) {
    console.log(`Product ${id} added to wishlist!`);
    alert(`Added product ID: ${id} to your wishlist ❤️`);
}

renderProducts();