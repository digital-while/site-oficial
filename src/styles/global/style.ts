import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        transition: all 300ms ease-in-out;
        font-family: 'Montserrat', sans-serif;
        /*font-family: 'Bebas Neue', sans-serif;*/
        list-style: none;
    }

    :root {

        /*container centralized*/
        --container: 1300px;

        /* Blue Scale */
        --blue0: #191970;
        --blue1: #000080;
        --blue2: #00008B;
        --blue3: #0000CD;
        --blue4: #0000FF;
        --whiteFixed: #FFFFFF;

        /* Feedback */
        --alert: #800000;
        --sucess: #006400;

        /* Random Colors */
        --red: #FF0000;

        /*Typography */
        --heading1-size: 3.5rem ;
        --heading2-size: 3rem ;
        --heading3-size: 2.5rem ;
        --heading4-size: 2.25rem ;
        --heading5-size: 1.75rem ;
        --heading6-size: 1.25rem ;

        --body1-size: 1rem ;

        --button-big-text-size: ;
        --button-medium-text-size: ;

        --input-placeholder-size: ;
        --input-label-size: ;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul{
        list-style: none;
        padding-left: 0;
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

    body {
        background: var();
        color: var();
        font-family: 'Montserrat', sans-serif;
        font-size: var(--body1-size);
    }

    a {
        cursor: pointer;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    em, .em {
        font-size: 12px;
    }

    /* Content Centralized*/
    .container {
        max-width: var(--container);
        margin: 0 auto;
        padding-left: 16px;
        padding-right: 16px;
    }

    /* Text Classes */
    .white {
    }

    /* -- HEADING */
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
    }

    h1, .h1 {
        font-size: var(--heading1-size);
        font-weight: bold;
        text-transform: uppercase;
    }

    h2, .h2 {
        font-size: var(--heading2-size);
        font-weight: bold;
        text-transform: uppercase;
    }

    h3, .h3 {
        font-size: var(--heading3-size);
        font-weight: bold;
    }

    h4, .h4 {
        font-size: var(--heading4-size);
    }

    h5, .h5 {
        font-size: var(--heading5-size);
    }

    h6, .h6 {
        font-size: var(--heading6-size);
        font-weight: 400;
    }

    .text-center {
        text-align: center;
    }

    .bold {
        font-weight: bold;
    }

    /* Buttons Classes */
    .btn {
        outline: none;
        padding: 12px 40px;
        border-radius: 56px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        transition: all 300ms ease-in-out;
    }

    .btn-blue {
        background-color: var(--blue0);

        &:hover {
            background-color: var(--blue2);
        }
    }

    input, textarea {
        border: 1px solid var();
        border-radius: 4px;
        padding: 0px 16px;
        min-height: 48px;
        width: -moz-available;
        width: -webkit-fill-available;
        color: var(--grey1);
        font-size: var(--input-placeholder-size);
        background: transparent;

        &::placeholder {
            font-family: 'Montserrat', sans-serif;
            font-weight: ;
            font-size: var();
            color: var();
        }

        &:hover {
            border: 1px solid var();
        }

        &:focus {
            outline: none;
            border: 1px solid var();
        }
    }


    .error-message {
        color: var(--alert);
        font-size: 13px;
        display: block;
    }

    .w-100 {
        width: 100%;
    }

    .mb-8 {
        margin-bottom: 8px;
    }

    .mb-16 {
        margin-bottom: 16px;
    }

    .mb-24 {
        margin-bottom: 24px;
    }

    .mb-36 {
        margin-bottom: 36px;
    }
`;

export default GlobalStyle;
