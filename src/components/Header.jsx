import { Switch, Flex, Box, Heading, Spacer } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const { theme, setTheme, themeStyle, handleSwitch } =
        useContext(ThemeContext);

    return (
        <Flex p="7" style={themeStyle}>
            <Box>
                <Heading style={themeStyle} size="md">
                    {theme} Mode
                </Heading>
            </Box>
            <Spacer />
            <Box>
                <Switch
                    size="md"
                    isChecked={theme === 'Dark'}
                    onChange={handleSwitch}
                    colorScheme="blue"
                />
            </Box>
        </Flex>
    );
};

export default Header;
