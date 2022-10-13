import styled from 'styled-components'

const Container = styled.div `
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        max-width: 1200px;
        margin: 0 auto;
        height: 60px;
        padding: 1.5rem;
    }

    header a {
        height: 31px;
        width: max-content;
        background: var(--grey-3);
        font: var(--headline);
    }

    header a:hover {
        background: var(--grey-1);
    }
`

export default Container