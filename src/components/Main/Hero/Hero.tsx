import styled from 'styled-components';
import Button from '../../Common/Button';

const Section = styled.section`
    width: 100%;
    height: 528px;
    background-color: var(--color-bg);
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    position: relative;
    width: 1180px;
    margin-top: 164px;
    z-index: 2;
`;

const Title = styled.h1`
    width: 560px;
    color: #ffffff;
    font-weight: 400;
    line-height: 50.4px;
`

const Paragraph = styled.p`
    width: 480px;
    color: #ffffff;
    line-height: 22.4px;
    margin-top: 10px;
    margin-bottom: 52px;
`

const BackText = styled.h2`
    position: absolute;
    color: #ffffff1f;
    font-size: 200px;
    line-height: 200px;
    margin-top: 226px;
    transform: translateX(4%);
    z-index: 1;
`;

const Hero = () => {
    return (
        <Section>
            <Container>
                <Title>Кроссовки известных брендов с доставкой по России и СНГ</Title>
                <Paragraph>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</Paragraph>
                <Button>Перейти к покупкам</Button>
            </Container>
            <BackText>SneakMax</BackText>
        </Section>
    );
};

export default Hero;
