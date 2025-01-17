import styled from 'styled-components';
import plusIcon from '../../../assets/icons/plus.svg';
import { Question } from '../../../types/types';

const Details = styled.details`
    cursor: pointer;
`;
const Summary = styled.summary`
    font-family: IntroRegular;
    font-weight: 400;
    font-size: 1.25rem;
    padding: 30px 0;
    color: #242424;

    list-style: none;

    &::-webkit-details-marker {
        /* for Safari */
        display: none;
    }

    ${Details}[open] & {
        padding-bottom: 25px;
    }

    ${Details}[open] & > img {
        transform: rotate(45deg);
    }
`;
const Icon = styled.img`
    width: 25px;
    height: 25px;
    float: right;
    transition: transform 0.2s ease-in-out;
    transform: rotate(0deg);
`;
const Paragraph = styled.p`
    font-family: IntroBook;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22.4px;
    padding-bottom: 18px;
    color: #24242480;
`;

interface Props extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    data: Question;
}

const FrequentQuestion: React.FC<Props> = ({ data, ...props }) => {
    return (
        <Details {...props}>
            <Summary>
                {data.summary}
                <Icon src={plusIcon} />
            </Summary>
            <Paragraph>
                {data.description}
            </Paragraph>
        </Details>
    );
};

export default FrequentQuestion;
