import styled from 'styled-components';
import Navigation from '../Common/Navigation';
import Cart from './Cart';

const StyledHeader = styled.header`
    color: #FFFFFF;
    font-size: 14px;
    width: 1180px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid #FFFFFF80;
`;

const Menu = styled.div`
    margin-top: 7px;
    display: flex;
    gap: 40px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <h2>SneakMax</h2>
            <Menu>
                <Navigation />
                <Cart />
            </Menu>
        </StyledHeader>
    );
};

export default Header;
