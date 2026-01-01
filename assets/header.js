(function () {
  "use strict";

  if (document.querySelector("header[data-site-header='1']")) return;

  function insertHeaderStyles() {
    if (document.getElementById("header-styles")) return;

    const css = `
      header[data-site-header="1"]{
        background:#F5F0E5;
        border-bottom:none;
        position:fixed;
        top:0; left:0; right:0;
        z-index:50;
        transform:translateY(0);
        transition:transform .28s ease-in-out;
        font-family:'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      header[data-site-header="1"].header-hidden{
        transform:translateY(-100%);
      }

      body{
        padding-top:var(--header-h, 73px);
      }

      body.no-header-space{
        padding-top:0;
      }

      header[data-site-header="1"] .header-container{
        max-width:1280px;
        margin:0 auto;
        padding:0 1rem;
      }

      header[data-site-header="1"] .header-content{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:.75rem 1rem;
      }

      header[data-site-header="1"] .logo{
        text-align:center;
        padding:0 .5rem;
        text-decoration:none;
        color:inherit;
      }

      header[data-site-header="1"] .logo-main{
        font-size:21px;
        font-weight:700;
        color:#8B2332;
        letter-spacing:.5px;
        line-height:1.2;
      }

      header[data-site-header="1"] .logo-sub{
        font-size:14px;
        font-weight:700;
        color:#8B2332;
        letter-spacing:2px;
        line-height:1.2;
      }

      header[data-site-header="1"] .nav-menu{
        display:none;
        align-items:center;
        gap:1.5rem;
        position:relative;
      }

      @media (min-width:768px){
        header[data-site-h]()
