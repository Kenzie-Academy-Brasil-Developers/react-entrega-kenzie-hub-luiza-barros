import styled from 'styled-components'

const NavBar = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 118px;
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem;

    h2 {
        font: var(--title-1);
        color: var(--grey-0);
    }

    p {
        font: var(--headline);
        color: var(--grey-1);
    }
`

export default NavBar