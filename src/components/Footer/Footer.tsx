import styled from 'styled-components';
import Navigation from '../Common/Navigation';

const StyledFooter = styled.footer`
    height: 80px;
    margin-top: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-text);
`;

const Content = styled.div`
    color: #ffffff;
    font-size: 14px;
    width: 1180px;
    display: flex;
    justify-content: space-between;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Content>
                <h2>SneakMax</h2>
                <Navigation />
            </Content>
        </StyledFooter>
    );
};

export default Footer;
