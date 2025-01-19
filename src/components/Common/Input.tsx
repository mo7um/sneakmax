import styled from 'styled-components';

const StyledInput = styled.input.attrs({type: "text"})`
    font-family: IntroBook;
    font-size: 1rem;
    line-height: 1.4rem;
    padding-block: 20px;
    padding-left: 19px;
    border: none;
    border-radius: 4px;

    &:focus {
        outline: 0;
        box-shadow: inset 0 0 0 2px #ccc;
    }
`;

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <StyledInput {...props} />;
};

export default Input;
