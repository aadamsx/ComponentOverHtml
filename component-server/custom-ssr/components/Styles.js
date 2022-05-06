import { html } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";

const Styles = () => {
  return html`<style>
    @font-face {
      font-family: dtv-font;
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Regular.woff2")
        format("woff2");
    }

    @font-face {
      font-family: dtv-font;
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Light.woff2")
        format("woff2");
    }

    @font-face {
      font-family: dtv-font;
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Bold.woff2")
        format("woff2");
    }

    @font-face {
      font-family: dtv-font;
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Medium.woff2")
        format("woff2");
    }

    @font-face {
      font-family: dtv-font-jubilat-italic;
      font-style: italic;
      font-weight: 700;
      font-display: swap;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/Jubilat-BoldItalic.woff2")
        format("woff2");
    }

    @font-face {
      font-family: PFDINTextProLight;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Light.woff2")
        format("woff2");
      font-weight: lighter;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: PFDinMed;
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Medium.woff2")
        format("woff2");
    }

    @font-face {
      font-family: PFDinReg;
      font-style: normal;
      font-display: swap;
      font-weight: 300;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Regular.woff2")
        format("woff2");
    }

    @font-face {
      font-family: PFDinBlack;
      font-style: normal;
      font-display: swap;
      font-weight: 700;
      src: url("https://www.directv.com/idpassets/sales/uf/dtv-ui/fonts/PFDINTextPro-Black.woff2")
        format("woff2");
    }

    nav {
      display: flex;
      padding: 0 16px;
      align-items: center;
      min-height: 88px;
      background-color: #1d2329;
      font-family: "Poppins", sans-serif;
    }

    .logo {
      margin-right: 16px;
    }

    .m-logo {
      display: none;
    }

    .nav-links {
      display: flex;
      width: 30%;
    }

    .nav-links > li {
      list-style: none;
      position: relative;
      margin: 0 32px;
    }

    .nav-links a {
      text-decoration: none;
      color: white;
      font-weight: 500;
      font-size: 14px;
      text-transform: uppercase;
    }

    .burger {
      display: none;
      width: 30px;
    }

    nav .sub-menu {
      top: 55px;
      left: 0px;
      color: #fff;
      width: max-content;
      z-index: 2001;
      position: absolute;
      max-width: 250px;
      min-width: 155px;
      box-shadow: 0 4px 4px -2px #080808;
      border-radius: 0 0 4px 4px;
      background-color: #313941;
      display: none;
      margin-left: -50%;
    }

    nav .show {
      display: block;
    }

    nav .sub-menu > .sub-menu-item {
      display: block;
    }

    nav .sub-menu > .sub-menu-item > a {
      display: block;
      padding: 10px 20px;
      text-transform: capitalize;
    }

    .burger div {
      width: 76%;
      height: 2px;
      background-color: white;
      margin: 4px;
      transition: all 0.3s ease;
    }

    .up-arrow {
      top: 4px;
      right: -20px;
      position: absolute;
      text-align: right;
      display: none;
    }

    .down-arrow {
      top: 4px;
      right: -20px;
      position: absolute;
      text-align: right;
      display: none;
    }

    .show {
      display: block;
    }

    .nav-links li .sub-menu a:hover {
      background-color: #556472;
    }

    .MuiSvgIcon-root-3894 {
      fill: white;
      width: 1em;
      height: 1em;
      display: block;
      font-size: 1.25rem !important;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      margin-left: 0.3rem;
      user-select: none;
    }

    @media screen and (max-width: 1024px) {
      .nav-links {
        width: 60%;
      }
    }

    @media screen and (max-width: 768px) {
      body {
        overflow-x: hidden;
      }

      .logo {
        display: none;
      }

      .m-logo {
        width: 100%;
        text-align: center;
        margin-left: -50px;
        display: block;
      }

      .nav-links {
        position: fixed;
        left: 0px;
        height: 100%;
        top: 87px;
        box-shadow: 1px 1px 4px #080808 !important;
        background-color: #313941;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 45%;
        transform: translateX(-100%);
        transition: transform 0.5s ease-in;
        padding: 0px;
      }

      .nav-links > li {
        opacity: 1;
        padding: 0px;
        margin: 0;
      }

      .nav-item {
        display: block;
        padding: 8px 0px 8px 10px;
      }

      .nav-links li a:hover {
        background-color: #556472;
      }

      .burger {
        display: block;
        margin-left: 15px;
        z-index: 1;
      }

      nav .sub-menu {
        position: initial;
        background-color: unset;
        width: 100%;
        margin-left: 0;
        box-shadow: unset;
      }

      nav .sub-menu > .sub-menu-item > a {
        padding: 10px 8px 10px 20px;
        text-transform: capitalize;
      }

      .up-arrow {
        right: 10px;
      }

      .down-arrow {
        right: 10px;
      }
    }

    .nav-active {
      transform: translateX(0%);
      opacity: 1;
    }

    .toggle .line1 {
      transform: rotate(-45deg) translate(-3px, 3px);
    }

    .toggle .line2 {
      opacity: 0;
    }

    .toggle .line3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  </style>`;
};

export default Styles;
