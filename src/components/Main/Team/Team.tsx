import styled from 'styled-components';
import decor from '../../../assets/decorations/teamDecor.svg'
import TeamMember from './TeamMember';
import team from '../../../data/team.json'

const Section = styled.section`
    color: #FFFFFF;
    width: 100%;
    min-height: 595px;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    background-color: var(--color-bg);
    position: relative;
`
const Decoration = styled.img`
    position: absolute;
    right: 0;
    top: 0;
`
const Content = styled.div`
    width: 1180px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
`
const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 20px;
`


const Team = () => {
    return (
        <Section>
            <Decoration src={decor}/>
            <Content>
                <h2>Наша команда</h2>
                <TeamContainer>
                    {team.teamMembers.map((member) => (
                        <TeamMember key={member.id} data={member} />
                    ))}
                </TeamContainer>
            </Content>
        </Section>
    );
};

export default Team;
