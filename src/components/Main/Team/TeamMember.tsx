import styled from 'styled-components';
import { Member } from '../../../types/types';

const TeamMemberContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Image = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 4px;
    object-fit: cover;
`;

interface Props {
    data: Member;
}

const TeamMember: React.FC<Props> = ({ data }) => {
    return (
        <TeamMemberContainer>
            <Image src={data.image} />
            <h3>{data.name}</h3>
            <p>{data.role}</p>
        </TeamMemberContainer>
    );
};

export default TeamMember;
