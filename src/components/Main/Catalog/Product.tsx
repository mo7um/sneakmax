import styled, { css } from 'styled-components';
import { Sneaker } from '../../../interfaces';
import cartIcon from '../../../assets/icons/cart.svg';
import showIcon from '../../../assets/icons/show.svg';

const ProductContainer = styled.article`
    width: 280px;
    height: 349px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &:hover > div {
        visibility: visible;
        opacity: 1;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 293px;
    object-fit: cover;
    border-radius: 4px;
`;
const Name = styled.p`
    color: var(--color-text);
`;
const Price = styled.b`
    font-family: IntroRegular;
    color: var(--color-text);
`;

const Overlay = styled.div`
    width: 100%;
    height: 293px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff99;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease;
`;
const overlayButtons = css`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-text);
    border-radius: 100px;
    cursor: pointer;
`;
const ShowProduct = styled.div`
    ${overlayButtons}
`;
const AddToCart = styled.div`
    ${overlayButtons}
    img {
        height: 26px;
    }
`;

interface Props {
    data: Sneaker;
}

const Product: React.FC<Props> = ({ data }) => {
    return (
        <ProductContainer>
            <Image src={data.imgUrl} alt="Фото товара" />
            <Name>{data.title}</Name>
            <Price>{data.price} р</Price>
            <Overlay>
                <ShowProduct>
                    <img src={showIcon} alt="" />
                </ShowProduct>
                <AddToCart>
                    <img src={cartIcon} alt="" />
                </AddToCart>
            </Overlay>
        </ProductContainer>
    );
};

export default Product;
