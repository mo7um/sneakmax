import styled from 'styled-components';

const FiltersContainer = styled.aside`
    width: 280px;
    height: 597px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 4px;
    background-color: var(--color-sec-bg);
`;

const Title = styled.h3`
    color: var(--color-text);
`;

const Filters = () => {
    return (
        <FiltersContainer>
            <Title>Подбор по параметрам</Title>
        </FiltersContainer>
    );
};

export default Filters;
