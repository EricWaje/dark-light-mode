import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Info = () => {
    const { theme, setTheme, themeStyle } = useContext(ThemeContext);

    return (
        <>
            <Flex
                justify="center"
                align="center"
                p="5"
                style={{
                    minHeight: '90vh',
                    transition: 'all 0.6s ease-in-out',
                }}
                bg={theme === 'Light' ? 'white' : '#4e4e4e'}
            >
                <Flex direction="column" p="2">
                    <Box
                        mb="2"
                        color={theme === 'Light' ? '#202020' : '#ffb7b7'}
                    >
                        <h2
                            style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                transition: 'all 0.6s ease-in-out',
                            }}
                        >
                            Vacations mode {theme}
                        </h2>
                    </Box>
                    <Box
                        w="75%"
                        mb="3"
                        color={theme === 'Light' ? '#202020' : 'white'}
                    >
                        <p
                            style={{
                                transition: 'all 0.6s ease-in-out',
                            }}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Tempore consequuntur, necessitatibus sed ea
                            ipsum nesciunt aut suscipit! Officia quasi ipsa qui,
                            ipsam ducimus sapiente, eius provident, aspernatur
                            voluptatibus sunt tempore.
                        </p>
                    </Box>
                    <Box>
                        <Button
                            color={theme === 'Light' ? '#ffb7b7' : 'white'}
                            border="2px"
                            borderColor="#ffb7b7"
                            variant="solid"
                            bgColor={
                                theme === 'Light' ? 'white' : 'transparent'
                            }
                            size="md"
                            _hover={{ bg: '#202020' }}
                            _focus={{
                                boxShadow: 'none',
                            }}
                        >
                            Go Beach!
                        </Button>
                    </Box>
                </Flex>
                <Box p="2">
                    <img src="assets/beachh.svg" alt="img" width={800} />
                </Box>
            </Flex>
        </>
    );
};

export default Info;
