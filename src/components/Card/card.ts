import styled from 'styled-components'

const CardStyle = styled.ul `
    max-width: 765px;
    margin: 1.5rem;
    border-radius: 4px;
    padding: 1.5rem 1rem;
    background: var(--grey-3);
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--grey-0);

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        height: 50px;
        border-radius: 4px;
        background: var(--grey-4);
        padding: 1rem;
    }

    li div {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    h4 {
        font: var(--title-3);
    }

    p, span {
        font: var(--headline);
    }

    p {
        color: var(--grey-1);
    }

    span {
        cursor: pointer;
    }

    li:hover {
        background: var(--grey-2);
    }

    @media (min-width: 750px) {
        margin: 1.5rem auto;
    }
`

export default CardStyle