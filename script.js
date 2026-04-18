const renderHome = () => {
    document.getElementById('content').innerHTML = `
        <h2>Home</h2>
        <p>Welcome to Nong pra. Explore the site using the menu above.</p>
        <p id="message">Hi</p>
    `;
};

const renderAbout = () => {
    document.getElementById('content').innerHTML = `
        <h2>About</h2>
        <p>This website is a modern UI demo with boutique styling and gallery content.</p>
        <p id="message"></p>
    `;
};

const renderContact = () => {
    document.getElementById('content').innerHTML = `
        <h2>Contact</h2>
        <p>Send a message through the form below.</p>
        <form>
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
        <p id="message"></p>
    `;
};

const renderGallery = () => {
    document.getElementById('content').innerHTML = `
        <h2>Gallery</h2>
        <p>Explore the featured artwork below.</p>
        <div class="gallery">
            <div class="gallery-item">
                <img src="https://media.wired.com/photos/593261cab8eb31692072f129/3:2/w_2560,c_limit/85120553.jpg" alt="Animal poster" class="gallery-img">
                <p class="gallery-caption">Beautiful nature artwork</p>
            </div>
        </div>
        <p id="message"></p>
    `;
};

const renderProducts = () => {
    document.getElementById('content').innerHTML = `
        <h2>Products</h2>
        <p>Discover our latest fashion collection at Nong pra.</p>
        <div class="products-grid">
            <div class="product-item">
                <h3>Summer Dress</h3>
                <p>Elegant summer dress perfect for any occasion.</p>
            </div>
            <div class="product-item">
                <h3>Designer Jacket</h3>
                <p>Stylish jacket with modern cuts and premium materials.</p>
            </div>
            <div class="product-item">
                <h3>Accessories</h3>
                <p>Complete your look with our curated accessories.</p>
            </div>
        </div>
        <p id="message"></p>
    `;
};

const renderBlog = () => {
    document.getElementById('content').innerHTML = `
        <h2>Blog</h2>
        <p>Hello everyone, this is website name Nong pra. This site is currently in beta, and I am working every day to improve it. Over the next few weeks I plan to add even more features, better styling, and a smoother user experience. Your feedback is very valuable, and I appreciate everyone who visits and reads this update. Thank you for being part of the journey, and stay tuned for new updates and enhancements in future releases!</p>
        <p id="message"></p>
    `;
};

const addMenuHandler = (id, renderFn) => {
    const link = document.getElementById(id);
    if (link) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            renderFn();
        });
    }
};

addMenuHandler('home-link', renderHome);
addMenuHandler('about-link', renderAbout);
addMenuHandler('products-link', renderProducts);
addMenuHandler('gallery-link', renderGallery);
addMenuHandler('blog-link', renderBlog);
addMenuHandler('contact-link', renderContact);

renderHome();

// UI now supports the full menu and renders content sections correctly.
