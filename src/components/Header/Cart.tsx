import styled from "styled-components";
import cartIcon from '../../assets/icons/cart.svg'

const CartContainer = styled.div`
    font-family: IntroBook;
    height: fit-content;
    display: flex;
    gap: 10px;
    background-color: red;
`

const CartIndicator = styled.div`
    min-width: 16px;
    height: 16.8px;
    position: absolute;
    margin-left: 78px;
    margin-top: 8px;
    padding-inline: 3px;
    text-align: center;
    border-radius: 10px;
    background-color: var(--color-accent);
`

const Cart = () => {
    return (
        <CartContainer>
            <span>Корзина</span>
            <img src={cartIcon} alt="" />
            <CartIndicator></CartIndicator>
        </CartContainer>
    );
};

export default Cart;
