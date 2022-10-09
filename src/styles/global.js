import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-disabled: #59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --success: #3FE864;
        --negative: #E83F5B;
        --white: #fff;
        --box-shadow: #64646f33;
        --font-family: 'Inter', sans-serif;
        --title-1: 700 1.8rem var(--font-family);
        --title-2: 600 1.6rem var(--font-family);
        --title-3: 700 1.4rem var(--font-family);
        --headline: 400 1.2rem var(--font-family);
        --headline-bold: 600 1.2rem var(--font-family);
        --headline-shorter: 400 1rem var(--font-family);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        line-height: 20px;
    }

    div#root {
        height: 200vh;
    }

    body {
        background: var(--grey-4);
        overflow-x: hidden;
    }

    button, input, select {
        border-radius: 4px;
    }

    input, select {
        background: var(--grey-2);
        color: var(--grey-1);
        height: 38px;   
        padding: 0 1.3rem;
        width: 100%;
    }

    input:hover, select:hover {
        color: var(--grey-0);
        border: 1.22px solid var(--grey-0);
    }

    label, input {
        font: var(--headline);
    }

    label, h1 {
        color: var(--grey-0);
    }

    button {
        cursor: pointer;
        padding: 0 2.2rem;
        color: var(--white);
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }

    h1.kenziehub {
        font: var(--title-1);
        color: var(--color-primary);
    }

    p.error {
        color: var(--negative);
        font: var(--headline-shorter);
    }

    div.Toastify  {
        font: var(--headline);
    }

    div.Toastify button {
        width: 20px;
    }

    div.Toastify__toast-theme--light {
        background: var(--grey-2);
        color: var(--white);
    }
`

export default Global