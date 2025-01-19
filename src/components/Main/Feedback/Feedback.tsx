import styled from 'styled-components';

import ContactForm from './ContactForm';
import Insta from './Insta'

const Section = styled.section`
    width: 1180px;
    display: flex;
    gap: 60px;
`;

const Feedback = () => {
    return (
        <Section>
            <ContactForm />
            <Insta />
        </Section>
    );
};

export default Feedback;
