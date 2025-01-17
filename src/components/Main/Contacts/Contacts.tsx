import styled from 'styled-components';
import instagramIcon from '../../../assets/icons/instagram.svg';
import vkIcon from '../../../assets/icons/vk.svg';

const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #f3f6f6;
    /* margin-bottom: 500px; */
`;

const Content = styled.div`
    width: 1180px;
    padding-top: 60.79px;
    padding-bottom: 59.79px;
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    color: #444b58;
`;

const Address = styled.address`
    font-style: normal;
`;
const Title = styled.h4`
    font-family: IntroBook;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    color: var(--color-text-gray);

    &.main-ofice {
        margin-top: 3.75rem;
        margin-bottom: 2.5rem;
    }

    &.sales-department {
        margin-bottom: 1.25rem;
    }
`;

const Tel = styled.a`
    font-family: IntroRegular;
    margin-bottom: 0.625rem;
    font-size: 1.875rem;
    line-height: 2.625rem;
    text-decoration: none;
    color: #444b58;
`;
const Paragraph = styled.p`
    line-height: 2.625rem;
    margin-bottom: 2.5rem;
`;

const Socials = styled.div`
    display: flex;
    gap: 20px;
`;
const SocialLink = styled.a`
    width: 44px;
    height: 44px;
    cursor: pointer;
`;

const MapIframe = styled.iframe`
    height: 100%;
    border-radius: 4px;
`;

const Contacts = () => {
    return (
        <Section>
            <Content>
                <Info>
                    <h2>Контакты</h2>
                    <Address>
                        <Title className="main-ofice">Главный офис</Title>
                        <Tel href="tel:+78007898989">+7 800 789 89 89</Tel>
                        <Paragraph>г. Санкт-Петербург, Комсомольская, 43 к1</Paragraph>
                    </Address>

                    <Address>
                        <Title className="sales-department">Отдел продаж</Title>
                        <Tel href="tel:+78007898989">+7 800 789 89 89</Tel>
                        <Paragraph>г. Санкт-Петербург, Комсомольская, 43 к1</Paragraph>
                    </Address>

                    <Socials>
                        <SocialLink href="https://t.me/mo7um">
                            <img src={instagramIcon} alt="" />
                        </SocialLink>
                        <SocialLink href="https://t.me/mo7um">
                            <img src={vkIcon} alt="" />
                        </SocialLink>
                    </Socials>
                </Info>
                <MapIframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A4bd6f127aca01b2d129a913bc32116c55b739a8a7a2eee984f4a61c9342f47ae&amp;source=constructor"
                    width="680"
                    height="497"
                    frameBorder="0"
                ></MapIframe>
            </Content>
        </Section>
    );
};

export default Contacts;
