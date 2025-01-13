import styled from 'styled-components';
import Hero from './Hero/Hero';
import Catalog from './Catalog/Catalog';
import About from './About/About';
import Team from './Team/Team';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`;

const Main = () => {
    return (
        <StyledMain>
            <Hero />
            <Catalog />
            <About />
            <Team />
        </StyledMain>
    );
};

export default Main;
