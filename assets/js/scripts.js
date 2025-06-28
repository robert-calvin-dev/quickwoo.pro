function insertHeader() {
 const headerHTML = `

 
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('header').innerHTML = headerHTML;
})};

function insertFooter() {
 const footerHTML = `
   <section class="section social-proof" style="background: rgba(255, 255, 255, 0.898); backdrop-filter: blur(12px); border-top: 1px solid rgba(255, 255, 255, 0.15); padding: 40px 20px; text-align: center;">
    <h2 style="color:  black; font-size: 1.8em; margin-bottom: 20px;">Loved by Woo Users</h2>
    <p style="color: black; max-width: 700px; margin: 0 auto 30px;">Join all the stores who trust QuickWoo to save hours, boost
      performance, and simplify their workflow.</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-weight: bold;">
      <span style="color: white; background: #000000; padding: 10px 20px; border-radius: 20px;">@PluginHut</span>
      <span style="color: white; background: #000000; padding: 10px 20px; border-radius: 20px;">@MegaGoods</span>
      <span style="color: white; background: #000000; padding: 10px 20px; border-radius: 20px;">@DevStacks</span>
      <span style="color: white; background: #000000; padding: 10px 20px; border-radius: 20px;">@Elementora</span>
      <span style="color: white; background: #000000; padding: 10px 20px; border-radius: 20px;">@StoreFlow</span>
    </div>
  </section>


  <section class="section whats-new" style=" backdrop-filter: blur(12px); border-top: 1px solid rgba(255, 255, 255, 0.15);  background: linear-gradient(200deg, var(--blue), var(--blue1), var(--blue2), var(--blue3), var(--blue3), var(--blue2), var(--blue1), var(--blue));
 color: black; padding: 30px 20px; text-align: center;">
    <p style="font-size: 1.1em;">✨ Now with Woo 8.x support, new SEO insights module, and lightning-fast batch editing.
    </p>
  </section>


  <footer
    style="backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.898); border-top: 1px solid rgba(255, 255, 255, 0.2); text-align: center; padding: 30px 20px; font-size: 0.95em; color: #0f0c48;">
    <p style="color:  black; ">© 2025 QuickWoo Bundle. Built with 💜 by <strong>Robert Calvin</strong></p>
    <p style="color:  black; " ><a href="/terms/" style="color:  var(--white);  margin-right: 10px;">Terms</a> | <a href="/privacy/"
        style="color:  black; ">Privacy</a></p>
  </footer>
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('footer').innerHTML = footerHTML;
 })};
 insertHeader();


 insertFooter();
