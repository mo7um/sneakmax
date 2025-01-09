import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const StyledButton = styled.button<Props>`
    font-family: IntroRegular;
    font-size: 1rem;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 22px 47px;
    transition: background-color 0.2s;

    ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return `
                background-color: var(--color-accent);

                &:hover {
                    background-color: #CC4949;
                }

                &:active {
                    background-color: #8C2828;
                }
            `;
            case 'secondary':
                return `
                    background-color: var(--color-text);

                    &:hover {
                        background-color: #31343C;
                    }
                `;
            case 'tertiary':
                return `
                    padding: 20px 47px;
                    color: var(--color-text);
                    background-color: transparent;
                    border: 1px solid var(--color-text);

                    &:hover {
                        color: #FFFFFF;
                        background-color: var(--color-text);
                        border: 1px solid var(--color-text);
                    }
                `;
            default:
                return ``;
        }
    }}
`;

const Button: React.FC<Props> = ({ children, variant='primary', ...props }) => {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
