import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const StyledLabel = styled.label`
    font-family: IntroBook;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const StyledInput = styled.input.attrs({type: "checkbox"})`
    appearance: none;
    position: relative;
    width: 24px;
    height: 24px;
    border: 1px solid var(--color-sec-border);
    border-radius: 4px;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        background-image: url('data:image/svg+xml,<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.62462 11.1859C5.48438 11.3269 5.29313 11.4056 5.09438 11.4056C4.89563 11.4056 4.70438 11.3269 4.56413 11.1859L0.329625 6.95063C-0.109875 6.51113 -0.109875 5.79863 0.329625 5.35988L0.859875 4.82963C1.29938 4.39013 2.01112 4.39013 2.45062 4.82963L5.09438 7.47338L12.2381 0.329625C12.6776 -0.109875 13.3901 -0.109875 13.8289 0.329625L14.3591 0.859875C14.7986 1.29938 14.7986 2.01188 14.3591 2.45063L5.62462 11.1859Z" fill="%23DBBBA9"/></svg>');
        background-repeat: no-repeat;
        background-position: 40% 40%;
    }

    &:checked::after {
        width: 24px;
        height: 24px;
    }

    &:disabled {
        border-color: #bbb;
        background-color: #eee;
    }
`

const Checkbox: React.FC<Props> = ({ label, ...props }) => {
    return (
        <StyledLabel>
            <StyledInput {...props}/>
            {label && <span>{label}</span>}
        </StyledLabel>
    );
};

export default Checkbox;
