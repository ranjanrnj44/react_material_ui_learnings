import React, { useState } from 'react'
import { Box, Paper, Typography, Button } from '@mui/material';
//themes and other libs
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const BoxComponent = () => {
    //state - theme switch
    let [darkState, setDarkState] = useState(false);

    //useTheme from mui
    let themes = useTheme();
    console.log(themes);

    //custom theme - for this to work, we have to match useTheme
    let theme = createTheme({
        palette: {
            secondary: {
                main: '#14aa1c'
            },
            mode: darkState ? "dark" : 'light'
        }
    });

    console.log(theme);
    return (
        // ThemeProvider is required for the custom theme creation, all the custom rules will be applicable only with the wrapped component <ThemeProvider></ThemeProvider>
        <ThemeProvider theme={theme}>
            <Paper>
                <Box sx={{ m: 0 }}>
                    <Typography variant='h1' color="secondary">BoxComponent 1</Typography>
                    <Typography variant='h2'>BoxComponent 2</Typography>
                    <Typography variant='h3' component="h1">BoxComponent 3</Typography>
                </Box>
                <Button variant="contained" color='primary'>GREAT</Button>
                <Button variant="contained" color='error'>WOW</Button>
                <Switch checked={darkState} onChange={() => setDarkState(prev => !prev)} />
            </Paper>
        </ThemeProvider>
    )
}

export default BoxComponent;