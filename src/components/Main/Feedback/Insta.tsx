import styled from 'styled-components';

import InstagramLogo from '../../../assets/icons/InstagramLogo.svg';
import inst1 from '../../../assets/images/inst1.jpg';
import inst2 from '../../../assets/images/inst2.jpg';
import inst3 from '../../../assets/images/inst3.jpg';
import inst4 from '../../../assets/images/inst4.jpg';
import inst5 from '../../../assets/images/inst5.jpg';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Logo = styled.img`
    width: 157px;
`;
const Collage = styled.div`
    display: grid;
    justify-items: center;
    grid-template-areas:
        "leftUpPosition   centerPosition rightUpPosition  "
        "leftDownPosition centerPosition rughtDownPosition";
    grid-template-columns: 1fr 2fr 1fr;
    gap: 14px 12px;
`;
const Image = styled.img`
    border-radius: 4px;

    &.collageItem1 {
        grid-area: leftUpPosition;
    }
    &.collageItem2 {
        grid-area: leftDownPosition;
    }
    &.collageItem3 {
        grid-area: centerPosition;
    }
    &.collageItem4 {
        grid-area: rightUpPosition;
    }
    &.collageItem5 {
        grid-area: rughtDownPosition;
    }
`;

const Insta = () => {
    return (
        <Content>
            <Logo src={InstagramLogo} />
            <Collage>
                <Image src={inst1} className='collageItem1' alt="Белые цветы в вазе" />
                <Image src={inst2} className='collageItem2' alt="Фейерверки" />
                <Image src={inst3} className='collageItem3' alt="Белая крупная собака с голубыми глазами" />
                <Image src={inst4} className='collageItem4' alt="Уличный повар азиат готовит" />
                <Image src={inst5} className='collageItem5' alt="Автобусная остановка на фоне ночного города" />
            </Collage>
        </Content>
    );
};

export default Insta;
