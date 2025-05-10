function insertHeader() {
 const headerHTML = `
   <header>
    <div class="logo">QuickWoo</div>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" hidden>
    <label for="nav-toggle" class="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <nav>
      <a href="/">Home</a>
      <a href="/blog/">Woo Blog</a>
      <a href="/bundle/">Bundle</a>
      <a href="/quick-add/">Quick Add</a>
      <a href="/quick-edit/">Quick Edit</a>
      <a href="/quick-seo/">Quick SEO</a>
      <a href="/quick-blog/">Quick Blog</a>
      <a href="/lite/">Lite</a>
    </nav>
  </header>
 
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('header').innerHTML = headerHTML;
})};
function insertAppCards() {
 const appCardHTML = `
<section class="section scroll-fade" id="includes">
  <h2>Includes</h2>
  <div class="app-grid">

    <!-- Quick Add -->
    <a href="/quick-add/">
      <div class="app-card">
        <img src="assets/images/quickadd.png" style="width: 80%; margin: 0 auto 20px; display: block;">
        <h3>Quick Add</h3>
        <p>Quick Add lets you create WooCommerce products in bulk with unmatched speed and precision. Add simple, variable, grouped, or downloadable products in seconds. Customize every field—including title, pricing, inventory, attributes, and product images—all from one streamlined interface. No imports, no spreadsheets. Just instant creation inside WordPress.</p>
        <div style="margin-top: 20px; font-size: 0.95em; font-weight: bold; color: #FFB900;">$59/year or $99 lifetime</div>
      </div>
    </a>

    <!-- Quick Edit -->
    <a href="/quick-edit/">
      <div class="app-card">
        <img src="assets/images/quickedit.png" style="width: 80%; margin: 0 auto 20px; display: block;">
        <h3>Quick Edit</h3>
        <p>Quick Edit turns your WooCommerce catalog into a live spreadsheet. Update prices, stock, categories, tags, sale dates, and more—inline, without reloading the page. Perfect for stores with frequent inventory changes or seasonal pricing. Make hundreds of edits in minutes and schedule mass sales events with one click.</p>
        <div style="margin-top: 20px; font-size: 0.95em; font-weight: bold; color: #FFB900;">$59/year or $99 lifetime</div>
      </div>
    </a>

    <!-- Quick SEO -->
    <a href="/quick-seo/">
      <div class="app-card">
        <img src="assets/images/quickseo.png" style="width: 80%; margin: 0 auto 20px; display: block;">
        <h3>Quick SEO</h3>
        <p>Quick SEO gives you total control over your product metadata. Bulk edit SEO titles, meta descriptions, focus keywords, and schema in one clean dashboard. Push all fields directly to the page <code>&lt;head&gt;</code>, integrate OG data for social sharing, and rank faster with multiple keyword support. SEO doesn’t get easier than this.</p>
        <div style="margin-top: 20px; font-size: 0.95em; font-weight: bold; color: #FFB900;">$59/year or $99 lifetime</div>
      </div>
    </a>

    <!-- Quick Blog -->
    <a href="/quick-blog/">
      <div class="app-card">
        <img src="assets/images/quickblog.png" style="width: 80%; margin: 0 auto 20px; display: block;">
        <h3>Quick Blog</h3>
        <p>Quick Blog is the easiest way to bulk-publish content to your WooCommerce blog. Add multiple posts at once, each with their own SEO data, featured images, and categories. It’s perfect for product roundups, seasonal campaigns, or SEO-optimized content at scale. <strong>Available exclusively in the QuickWoo Bundle.</strong></p>
        <div style="margin-top: 20px; font-size: 0.95em; font-weight: bold; color: #888;">Included with Bundle only</div>
      </div>
    </a>

  </div>
</section>

 
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('appCards').innerHTML = appCardHTML
 })};
function insertBlogCards() {
 const blogCardHTML = `
   <section class="section">
    <h2 style="text-align:center; margin-bottom: 40px;">Latest Blog Posts</h2>
    <div class="blog-grid">

      <div class="blog-card">
        <img src="assets/images/seasonalseo.png" alt="SEO Checklist" />
        <div class="content">
          <h3>The WooCommerce SEO Checklist for 2025</h3>
          <div class="meta">Published: April 15, 2025</div>
          <p>Everything you should be optimizing right now—plus how Quick SEO automates most of it.</p>
          <a href="/blog/seo-checklist-2025/">Read More →</a>
        </div>
      </div>

      <div class="blog-card">
        <img src="assets/images/sitespeed.png" alt="Store Speed" />
        <div class="content">
          <h3>Improve Store Speed with QuickWoo</h3>
          <div class="meta">Published: April 10, 2025</div>
          <p>Slow WooCommerce site? This guide breaks down how our plugins reduce backend bloat.</p>
          <a href="/blog/store-speed/">Read More →</a>
        </div>
      </div>

      <div class="blog-card">
        <img src="assets/images/blogtools.png" alt="Blog Tools" />
        <div class="content">
          <h3>Writing Product Blogs with Quick Blog</h3>
          <div class="meta">Published: April 2, 2025</div>
          <p>If content drives traffic, Quick Blog is your engine. Create, optimize, and publish in bulk.</p>
          <a href="/blog/quick-blog/">Read More →</a>
        </div>
      </div>

      <div class="blog-card">
        <img src="assets/images/seasonalseo.png" alt="Seasonal Strategy" />
        <div class="content">
          <h3>Seasonal SEO & Pricing Strategies</h3>
          <div class="meta">Published: March 19, 2025</div>
          <p>How to use Quick Edit and Quick SEO to optimize prices and visibility for seasonal traffic.</p>
          <a href="/blog/seasonal-strategy/">Read More →</a>
        </div>
      </div>

      <!-- Repeat above for 8 more cards -->
    </div>
  </section>
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('blogCards').innerHTML = blogCardHTML;
 })};
function insertDemo() {
 const demoHTML = `
  <section class="section scroll-fade" class="section video-demo" style="text-align: center; background: #6139F5;">
    <h2 style="color: white; font-size: 2em; margin-bottom: 20px;">See QuickWoo in Action</h2>
    <p style="color: white; margin-bottom: 30px;">Watch how QuickWoo apps streamline your workflow in real time.</p>
    <video controls style="max-width: 400px; border-radius: 12px;">
      <source src="assets/videos/0430.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </section>
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('demo').innerHTML = demoHTML;
 })};
function insertForm() {
 const formHTML = `
  <section class="section scroll-fade newsletter" style="background: #fff4d0; text-align: center; padding: 60px 20px;">
    <h2 style="font-size: 2em; margin-bottom: 20px;">Get Our Free Guide</h2>
    <p style="font-size: 1.1em; margin-bottom: 30px;">Not ready to buy? Grab our 10-Point Guide to WooCommerce Growth.
    </p>

    <form action="https://formspree.io/f/xldbljjp" method="POST" onsubmit="return sendGuideAlert(event)">
      <input type="email" name="email" required placeholder="Enter your email"
        style="border: 2px solid #6139F5; padding: 12px 18px; font-size: 1em; border-radius: 8px; width: 280px;">

      <button type="submit"
        style="margin-top: 20px; padding: 12px 24px; background-color: #6139F5; color: white; font-weight: bold; border: none; border-radius: 8px; margin-left: 10px;">
        Send Guide
      </button>
    </form>
  </section>
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form').innerHTML = formHTML;
 })};
function insertFooter() {
 const footerHTML = `
   <section class="section social-proof" style="background: #fff4d0; padding: 40px 20px; text-align: center;">
    <h2 style="font-size: 1.8em; margin-bottom: 20px;">Loved by Woo Users</h2>
    <p style="max-width: 700px; margin: 0 auto 30px;">Join all the stores who trust QuickWoo to save hours, boost
      performance, and simplify their workflow.</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-weight: bold;">
      <span style="color: white; background: #7104e6; padding: 10px 20px; border-radius: 20px;">@PluginHut</span>
      <span style="color: white; background: #7104e6; padding: 10px 20px; border-radius: 20px;">@MegaGoods</span>
      <span style="color: white; background: #7104e6; padding: 10px 20px; border-radius: 20px;">@DevStacks</span>
      <span style="color: white; background: #7104e6; padding: 10px 20px; border-radius: 20px;">@Elementora</span>
      <span style="color: white; background: #7104e6; padding: 10px 20px; border-radius: 20px;">@StoreFlow</span>
    </div>
  </section>


  <section class="section whats-new" style="background: #090027; color: white; padding: 30px 20px; text-align: center;">
    <p style="font-size: 1.1em;">✨ Now with Woo 8.x support, new SEO insights module, and lightning-fast batch editing.
    </p>
  </section>


  <footer
    style="backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.15); border-top: 1px solid rgba(255, 255, 255, 0.2); text-align: center; padding: 30px 20px; font-size: 0.95em; color: #0f0c48;">
    <p>© 2025 QuickWoo Bundle. Built with 💜 by <strong>Robert Calvin</strong></p>
    <p><a href="/terms/" style="color:#0f0c48; margin-right: 10px;">Terms</a> | <a href="/privacy/"
        style="color:#0f0c48;">Privacy</a></p>
  </footer>
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('footer').innerHTML = footerHTML;
 })};
 insertHeader();
 insertAppCards();
 insertBlogCards();
 insertDemo();
 insertForm();
 insertFooter();
 function sendGuideAlert(event) {
  alert("Thank You! Your guide will arrive in your e-mail within the next 2 business days.");
  return true; 
}