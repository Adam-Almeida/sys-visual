import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-default-theme: #F4CE02;
        --color-default-theme-hover: #e4c204;
        --color-primary-theme: #51B853;
        --color-secondary-theme: #E1FAEC;
        --gradient-default-theme: linear-gradient(90deg, rgba(255, 201, 0, 1) 0%, rgba(255, 158, 0, 1) 73%);
        --backgroung-default-theme: #F0F2F5;
        --backgorund-default-dark: #41414C;

        --backgorund-shape-white: #FCFDFF;

        --text-default-1: #BFBFCC;
        --text-default-2: #a7a7ac;
        --text-default-3: #4e4e54;

        /* FORM */
        --background-input: #F0F0F5;

        --text-input-placeholder: #AEAEAE;
        --text-input: #8f8f8f;

        --button-success: #36B236;
        --button-success-hover: #3ecd3e;

        --button-warning: #F4CE02;
        --button-warning-hover: #fddf34;

        --button-danger: #EB3B35;
        --button-danger-hover: #d8352f;

        --button-info: #4F7EF9;
        --button-info-hover: #6590ff;

        --button-disable: #E1E3E5;
        --button-disable-hover: #f1f1f1;

        --border-radios-shape: 0.875rem;
        --transition-button: 0.4s;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    //1REM = 16px
    //font size desktop 16px
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;//15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%;//14px
        }
    }
    body{
        background: var(--backgroung-default-theme);
        -webkit-font-smoothing: antialiased;
    }
    input, textarea, select {
        &:focus {
            outline: none;
        }
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    } 
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    /** HELPER BORDER RADIUS **/
    .radius-card{
        border-radius: 14px;
    }

    .radius-shape{
        border-radius: 6px;
    }
      
`;
