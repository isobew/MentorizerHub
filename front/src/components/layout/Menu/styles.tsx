import styled from "styled-components";

export const Menu = styled.aside`
    display: flex;
    flex-direction: column;
    flex-basis: 250px;

    background-color: #5E69C2;
`
export const Nav = styled.nav`
    flex: 1;

    .icon {
        width: 30px;
        height: 30px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
    }

    li a {
        flex-grow: 1;
        padding: 10px;
        margin-left: 10px;
        text-decoration: none;
        color: #f7f7f7;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;
        border-radius: 30px 0 0 30px;

        &:hover {
            color: #5E69C2;
            background: #f7f7f7;
        }
    }
`

export const MiniProfile = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 239px;
    background: #4C59B9;
`