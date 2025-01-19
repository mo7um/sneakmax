import { useState } from 'react';
import styled from 'styled-components';

import Button from '../../Common/Button';
import Input from '../../Common/Input';

const Container = styled.div`
    color: #ffffff;
    width: 380px;
    padding-block: 40px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    background-color: var(--color-bg);
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;
const Paragraph = styled.p`
    text-align: center;
    width: 260px;
`;

const Form = styled.form`
    width: 340px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setName('');
        setPhone('');
    };

    return (
        <Container>
            <div>
                <Title>Есть вопросы?</Title>
                <Paragraph>Заполните форму и наш менеджер свяжется с вами</Paragraph>
            </div>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input
                    placeholder="Номер телефона"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                ></Input>
                <Button type="submit">Отправить</Button>
            </Form>
        </Container>
    );
};

export default ContactForm;
