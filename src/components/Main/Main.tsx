import styled from "styled-components";
import Hero from "./Hero/Hero";


const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`

const Main = () => {
    return(
        <StyledMain>
            <Hero />
        </StyledMain>
    )
}

export default Main;