import styled from 'styled-components';
import aboutImage from '../../../assets/images/aboutImage.jpg'
import decor from '../../../assets/decorations/aboutDecor.svg'

const Section = styled.section`
    width: 100%;
    height: 580px;
    display: flex;
    justify-content: center;
    background-color: var(--color-bg);
    position: relative;
`;
const Decoration = styled.img`
    position: absolute;
    left: 0;
`
const Content = styled.div`
    color: #ffffff;
    width: 1180px;
    display: flex;
    justify-content: space-between;
`;
const Text = styled.div`
    margin-top: 222px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Paragraph = styled.p`
    width: 380px;
    line-height: 22.4px;
`;

const Cite = styled.cite`
    font-family: IntroBold;
    font-style: normal;
    float: right;
    right: -50px;
    margin-top: 20px;
    position: relative;

    &::before {
    content: "";
    position: absolute;
    width: 30px;
    border: 3px solid;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    }
`;

const Image = styled.img`
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
`

const About = () => {
    return (
        <Section>
            <Decoration src={decor}/>
            <Content>
                <Text>
                    <h2>Пара слов о нас</h2>
                    <blockquote>
                        <Paragraph>
                            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять
                            жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться
                            и двигаться вперед.
                        </Paragraph>
                        <Cite>
                            SneakMax
                        </Cite>
                    </blockquote>
                </Text>
                <Image src={aboutImage}></Image>
            </Content>
        </Section>
    );
};

export default About;
