import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`  
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    :root{
        --main-color:#27AE60;
        --main-color2:#93D7AF;
        --main-color3:#F5F5F5;
        --main-color4:#E0E0E0;
        --main-color5:#EB5757;
        --main-color6:#828282;
        --text-size:26px;
        --main-wiigth:bold;
        --text-size2:22px;
        --text-size3:18px;
        --text-size4:14px;
        --text-size5:16px;
        --main-wiigth2:regular;
    }
    *{
        list-style: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight:var(--main-wiigth);
  }
  button {
    cursor: pointer;
  }
  .btn {
    width: 90px;
    font-size: 0.8rem;
    border-radius: 8px;
    border: none;
    background-color: var(--main-color);
    color: var(--main-color3);
    height: 30px;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--main-color4);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--main-color2);
    border-radius: 1.6rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--main-color);
  }

`;
