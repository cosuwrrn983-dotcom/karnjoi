document.getElementById('home-btn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>หน้าหลัก</h2>
        <p>นี่คือเว็บไซต์ UI ยากๆ ที่สร้างขึ้นด้วย น้องพระ!</p>
        <p id="message"></p>
    `;
});

document.getElementById('about-btn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>About</h2>
        <p>This website demonstrates basic UI elements and interactivity.</p>
    `;
});

document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Contact</h2>
        <p>Get in touch with us!</p>
        <form>
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    `;
});

function attachClickMe() {
    const clickMeBtn = document.getElementById('click-me');
    if (clickMeBtn) {
        clickMeBtn.addEventListener('click', function() {
            document.getElementById('message').textContent = 'กดหาพ่อมึงอะ!';
            
            // Remove existing gallery if it exists
            const existingGallery = document.getElementById('gallery');
            if (existingGallery) {
                existingGallery.remove();
            }
            
            // Create and append gallery
            const gallery = document.createElement('div');
            gallery.id = 'gallery';
            gallery.className = 'gallery';
            gallery.innerHTML = `
                <img src="https://img.gamewith.jp/article/thumbnail/rectangle/62265.jpg" alt="Uma Musume 1" class="gallery-img">
                <img src="https://img2.gamewith.jp/img/20210617/1fe38919caf14e9f4d2b75ea0a11e5b4.jpeg" alt="Uma Musume 2" class="gallery-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW8mFmvXeOVgOdGeFbGfB5uNKmV0b75LDNY5eyjDzf8ujI9xA" alt="Uma Musume 3" class="gallery-img">
});