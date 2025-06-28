function insertFooter() {
 const footerHTML = `
   <section class="section social-proof" style="background: rgba(255, 255, 255, 0.898); backdrop-filter: blur(12px); border-top: 1px solid rgba(255, 255, 255, 0.15); padding: 40px 20px; text-align: center;">
    <h2 style="color:  black; font-size: 1.8em; margin-bottom: 20px;">Quick SEO - Loved by Woo Users</h2>
    <p style="color: black; max-width: 700px; margin: 0 auto 30px;">Join all the stores who trust QuickSEO to save hours, boost
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
    <p style="color:  black; ">© 2025 QuickSEO by QuickWoo. Built with 💜 by <strong>Robert Calvin</strong></p>
    <p style="color:  black; " ><a href="/terms/" style="color:  var(--white);  margin-right: 10px;">Terms</a> | <a href="/privacy/"
        style="color:  black; ">Privacy</a></p>



  </footer>
          <section class="legal-disclaimer" style="padding: 2rem; border-top: 1px solid #ccc; font-size: 0.9rem;">
  <h2>Legal Disclaimer & Limitation of Liability</h2>
  <p><strong>Last updated: June 28, 2025</strong></p>

  <p>The Quick SEO plugin is provided "as is" without warranty of any kind, either express or implied. By downloading, installing, or using this plugin, you (“the user”) agree to the following terms and understand that you assume full responsibility for its use.</p>

  <h3>1. No Warranty</h3>
  <p>The plugin is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY, without even the implied warranty of MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, or NON-INFRINGEMENT. The author and all associated contributors disclaim any and all liability for damages arising out of or in connection with the use or performance of this software.</p>

  <h3>2. No Guarantee of Results</h3>
  <p>Search engine optimization (SEO) involves a variety of factors beyond the control of this plugin or its creator. No claim is made or implied that using Quick SEO will result in higher rankings, increased traffic, improved performance, or any specific SEO outcomes. Users are solely responsible for how they implement, configure, and apply the plugin.</p>

  <h3>3. You Are Responsible for Compliance</h3>
  <p>You are solely responsible for ensuring that your use of this plugin complies with all applicable laws, including data privacy laws, disclosure regulations, and the guidelines of third-party services (such as Google Search Console, Bing Webmaster Tools, etc.). Quick SEO does not collect user data, process personal information, or provide legal compliance features of any kind.</p>

  <h3>4. No Liability for Damages</h3>
  <p>In no event shall the author, developer, or any affiliated party be liable to you or to any third party for any direct, indirect, incidental, special, exemplary, or consequential damages of any kind arising from the use or misuse of this plugin, including but not limited to loss of data, SEO performance, rankings, revenue, goodwill, or business interruption—even if the author has been advised of the possibility of such damages.</p>

  <h3>5. Plugin Updates and Support</h3>
  <p>This plugin is provided as-is with no guaranteed support, maintenance, updates, or compatibility with future versions of WordPress or WooCommerce. Use at your own risk. The author reserves the right to discontinue development or support at any time without notice.</p>

  <h3>6. Third-Party Integration Disclaimer</h3>
  <p>Any references to third-party platforms, services, or standards (e.g., Google, Twitter, schema.org, etc.) are for compatibility and informational purposes only. The author is not affiliated with or endorsed by these third parties, and no guarantee is made regarding continued compatibility or compliance with their changing policies.</p>

  <h3>7. By Using This Plugin, You Agree That:</h3>
  <ul>
    <li>You will not hold the author liable for any outcomes resulting from its use.</li>
    <li>You are using it voluntarily and at your own discretion.</li>
    <li>You are responsible for testing, validating, and maintaining your site’s SEO configurations.</li>
    <li>You accept all risks associated with implementation and interpretation of the plugin's output.</li>
  </ul>

  <p>This disclaimer shall be governed by the laws of the author’s local jurisdiction, and any disputes arising out of the use of this plugin shall be subject to that jurisdiction’s courts.</p>

  <p>If you do not agree with any part of this disclaimer, you must not download, install, or use this plugin.</p>
</section>
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('footer').innerHTML = footerHTML;
 })};


 insertFooter();
