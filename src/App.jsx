import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeContextProvider>
            <Header />
            <Info />
        </ThemeContextProvider>
    );
}

export default App;
