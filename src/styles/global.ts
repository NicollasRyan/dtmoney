import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363FSF;
        --text-body: #969CB3;

        --background: #FBF2F5;
        --shape: #FFFFFF;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @nedia (max-width: 1080px) {
            font-size: 93.75%;
        }

        @nedia (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`