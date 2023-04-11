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
      --brand1: #4529E6;
      --brand2: #5126EA;
      --brand3: #B0A6F0;
      --brand4: #EDEAFD;

      --grey0: #0B0D0D;
      --grey1: #212529;
      --grey2: #495057;
      --grey3: #868E96;
      --grey4: #ADB5BD;
      --grey5: #CED4DA;
      --grey6: #DEE2E6;
      --grey7: #E9ECEF;
      --grey8: #F1F3F5;
      --grey9: #F8F9FA;
      --grey10: #FDFDFD;
      --white-fixed: #FFFFFF;
      
      --alert-1: #CD2B31;
      --alert-2: #FDD8D8;
      --alert-3: #FFE5E5;
      --success-1: #18794E;
      --success-2: #CCEBD7;
      --success-3: #DDF3EA;

      --random-1: #E34D8C;
      --random-2: #C04277;
      --random-3: #7D2A4D;
      --random-4: #7000FF;
      --random-5: #6200E3;
      --random-6: #36007D;
      --random-7: #349974;
      --random-8: #247D5F;
      --random-9: #153D2E;
      --random-10: #6100FF;
      --random-11: #5700E3;
      --random-12: #30007D;

      --font-weight-1: 700;
      --font-weight-2: 600;
      --font-weight-3: 500;
      --font-weight-4: 400;
      
      --text-size-1: 44px;
      --text-size-2: 36px;
      --text-size-3: 32px;
      --text-size-4: 28px;
      --text-size-5: 24px;
      --text-size-6: 20px;
      --text-size-7: 16px;
      --text-size-8: 14px;

      --font-family-1: 'Lexend', sans-serif;
      --font-family-2: 'Filter', sans-serif;
      --font-family-3: 'Inter', sans-serif;
    }
    *{
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body,html{
    width: 100vw;
    height: 100%;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
 
  }
  body, input, button, textarea {
    font-family: var(--font-family-1);
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
