import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        transition: all 300ms ease-in-out;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Bebas Neue', sans-serif;
        list-style: none;
    }

    :root {

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
        --heading1-size: ;
        --heading2-size: ;
        --heading3-size: ;

        --body1-size: ;

        --button-big-text-size: ;
        --button-medium-text-size: ;

        --input-placeholder-size: ;
        --input-label-size: ;
    }

    body {
        background: var();
        color: var();
    }

    a {
        cursor: pointer;
    }

    /* Text Classes */
    .white {
        color: ;
    }
    /* -- HEADING */
    h1, h2, h3, h4, h5, h6 {
        color: var();
    }

    .text-center {
        text-align: center;
    }
        }
    }

   

    /* Buttons Classes */
    .btn {
        outline: none;
        padding: 24px 28px;
        border-radius: ;
        font-weight: ;
        font-size: var();
        display: block;
        text-align: center;
        line-height: 0px;
        cursor: pointer;
        text-decoration: none;
        transition: all 300ms ease-in-out;


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
`;

export default GlobalStyle;