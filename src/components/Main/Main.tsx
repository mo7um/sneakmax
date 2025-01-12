import styled from "styled-components";
import Hero from "./Hero/Hero";
import Catalog from "./Catalog/Catalog";
import About from "./About/About";

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
            <Catalog />
            <About />
        </StyledMain>
    )
}

export default Main;