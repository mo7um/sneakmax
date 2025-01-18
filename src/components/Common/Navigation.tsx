import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    ul {
        font-family: IntroBook;
        font-size: 14px;
        list-style-type: none;
        display: flex;
        gap: 40px;
    }
`

const Navigation = () => {
    return (
        <StyledNav>
            <ul>
                <li>Каталог</li>
                <li>О нас</li>
                <li>Подбор товара</li>
                <li>Наша команда</li>
                <li>Доставка и оплата</li>
                <li>Контакты</li>
            </ul>
        </StyledNav>
    );
}

export default Navigation;