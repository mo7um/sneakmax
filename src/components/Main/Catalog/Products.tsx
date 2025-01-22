import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Product from './Product';
import { Sneaker } from '../../../interfaces';
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
    const productsPerPage: number = 6;
    const [allSneakers, setAllSneakers] = useState<Sneaker[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(productsPerPage); // Количество отображаемых товаров

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://3b9cd24286514e4a.mokky.dev/sneakers');
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }

                setAllSneakers(data);
            } catch (error) {
                console.error('Error fetching:', error);
            }
        };

        fetchData();
    }, []);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + productsPerPage);
    };

    return (
        <ProductsWrapper>
            <ProductsContainer>
                {allSneakers.slice(0, visibleCount).map((item) => (
                    <Product data={item} key={item.id} />
                ))}
            </ProductsContainer>
            {visibleCount < allSneakers.length && (
                <Button onClick={handleShowMore}>Показать еще</Button>
            )}
        </ProductsWrapper>
    );
};

export default Products;
