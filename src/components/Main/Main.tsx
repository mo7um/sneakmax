import styled from 'styled-components';
import Hero from './Hero/Hero';
import Catalog from './Catalog/Catalog';
import About from './About/About';
import Team from './Team/Team';
import Faq from './Faq/Faq';
import Contacts from './Contacts/Contacts';
import Feedback from './Feedback/Feedback';

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
            <Faq />
            <Contacts />
            <Feedback />
        </StyledMain>
    );
};

export default Main;
