import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('Light');

    const handleSwitch = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
    };

    const headerStyle = {
        dark: {
            backgroundColor: '#202020',
            color: '#ffb7b7',
        },
        light: {
            backgroundColor: '#ffb7b7',
            color: '#202020',
        },
        common: {
            transition: 'all 0.6s ease-in-out',
        },
    };

    const themeStyle = {
        ...headerStyle.common,
        ...(theme === 'Light' ? headerStyle.light : headerStyle.dark),
    };

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, themeStyle, handleSwitch }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
