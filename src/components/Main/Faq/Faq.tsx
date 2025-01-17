import styled from 'styled-components';
import FrequentQuestion from './FrequentQuestion';
import faq from '../../../data/faq.json';

const Section = styled.section`
    width: 1180px;
`;
const Title = styled.h2`
    color: var(--color-text);
    padding-bottom: 40px;
`;
const Container = styled.div`
    margin-left: 150px;
    width: 800px;
`;

const Line = styled.hr`
    border: none;
    border-bottom: 1px solid #242424;
`;

const Faq = () => {
    return (
        <Section>
            <Title>Часто задаваемые вопросы</Title>
            <Container>
                <Line />
                {faq.questions.map((question, index) => (
                        <>
                            <FrequentQuestion
                                key={question.id}
                                data={question}
                                open={index === 0}
                            />
                            <Line />
                        </>
                    ))}
            </Container>
        </Section>
    );
};

export default Faq;
