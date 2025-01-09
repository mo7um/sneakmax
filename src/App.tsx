import './styles/global.css';
import Button from './components/Common/Button';
import Checkbox from './components/Common/Checkbox';

function App() {
    return (
        <>
            <Button variant="primary">1</Button>
            <Button variant="secondary">2</Button>
            <Button variant="tertiary">3</Button>
            <Checkbox label="Текст чекбокса" />
            <Checkbox label="Текст чекбокса" disabled />
        </>
    );
}

export default App;
