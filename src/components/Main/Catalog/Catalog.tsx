import styled from "styled-components";
import Filters from "./Filters";
import Products from "./Products";

const Section = styled.section`
    width: 1180px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const Content = styled.div`
    display: flex;
    gap: 20px;
`

const Title = styled.h2`
    color: var(--color-text);
`

const Catalog = () => {
    return(
        <Section>
            <Title>Каталог</Title>
            <Content>
                <Filters />
                <Products />
            </Content>
        </Section>
    )
}

export default Catalog;