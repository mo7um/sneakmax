import styled, { css } from "styled-components";
import { Sneaker } from "../../../types/Sneaker";
import cartIcon from '../../../assets/icons/cart.svg'
import showIcon from '../../../assets/icons/show.svg'

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
`
const Image = styled.img`
    width: 100%;
    height: 293px;
    object-fit: cover;
    border-radius: 4px;
`
const Name = styled.p`
    color: var(--color-text);
`
const Price = styled.b`
    font-family: IntroRegular;
    color: var(--color-text);
`

const Overlay = styled.div`
    width: 100%;
    height: 293px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #FFFFFF99;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease;
`
const overlayButtons = css`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-text);
    border-radius: 100px;
    cursor: pointer;
`
const ShowProduct = styled.div`
    ${overlayButtons}
`
const AddToCart = styled.div`
    ${overlayButtons}
    img {
        height: 26px;
    }
`

interface Props {
    data: Sneaker;
}

const Product: React.FC<Props> = ({data}) => {
    return(
            <ProductContainer>
                <Image src="https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mj073YV51y0g1oh6-EpV~lgbdD1QM-LE0eDkhA-mcw-O23OrmSSGIuoVdYX-3-vay2DN8eYLJMPLMbD2uIfHko1AraVfbGN4NvIsTC-bALexgeFYrooqWMEdliLRrNEtr4fk0qA-FYrUQHajqZES1qGY4y7pwZKnaaorXl91OAVyhzEhgtEbWmhbtiKD1m2oB-yDLEehULcx2pthLx6ddRbDbovw1pi6PX3KMFgBapcMWVFu3H7mLoE-euMJKRSAz8CFzJnayN01CZ~0JJkelWwDGK4ZPxfLI4VGNozWod~6JG67ek1YrVgx58le2Xgg~CUgCknDZWBsiloHrWzw6A__" alt="Фото товара" />
                <Name>Название кроссовок {data.name}</Name>
                <Price>100h {data.price}</Price>
                <Overlay>
                    <ShowProduct>
                        <img src={showIcon} alt="" />
                    </ShowProduct>
                    <AddToCart>
                        <img src={cartIcon} alt="" />
                    </AddToCart>
                </Overlay>
            </ProductContainer>
    )
}

export default Product;