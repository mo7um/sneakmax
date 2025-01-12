import styled from 'styled-components';
import Product from './Product';
import Button from '../../Common/Button';

const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
`;

const ProductsContainer = styled.div`
    max-width: 1187px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

const Products = () => {
    return (
        <ProductsWrapper>
            <ProductsContainer>
                <Product data={''}></Product>
                <Product data={''}></Product>
                <Product data={''}></Product>
                <Product data={''}></Product>
                <Product data={''}></Product>
                <Product data={''}></Product>
                <Product data={''}></Product>
                <Product data={''}></Product>
                <Product data={''}></Product>
            </ProductsContainer>
            <Button>Показать еще</Button>
        </ProductsWrapper>
    );
};

export default Products;
