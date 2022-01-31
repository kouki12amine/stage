import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react'
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import Topnavigation from '../pages/Topnavigation'
import React from 'react';


const theme = createTheme({
    palette: {
        primary: {
            light: '#242B42',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});




function Reviewpage() {

    return (
        <React.Fragment>
            <Topnavigation />
            <div className="content-group">
                <div className="quiz">
                    <div className="review-title">
                        <h1 className="title">formateur</h1>
                    </div>
                    <form action="">
                        <ReviewSection text='Maitrise du sujet' />
                        <ReviewSection text='gestion du temps' />
                        <ReviewSection text='conforme au programme' />
                        <ReviewSection text='Qualite pidagogique (rythme , communication ...)' />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}


function ReviewSection({ text }) {
    const [alignment, setAlignment] = useState('web');
    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };



    return (
        <div className="quiz-group">
            <div className="question">
                {text}{parseInt(alignment) + 1}
            </div>
            <div className="radio-list">
                <Box
                    sx={{
                        backgroundColor: 'theme.palette.primary.light'
                    }}
                >
                    <ToggleButtonGroup
                        color="primary"
                        className='col'
                        fullWidth="true"
                        value={alignment}
                        size="small"
                        exclusive
                        sx={{ color: 'text.primary' }}
                        onChange={handleChange}>
                        <ToggleButton value="0">non satisfait</ToggleButton>
                        <ToggleButton value="2">moyen</ToggleButton>
                        <ToggleButton value="3">bien</ToggleButton>
                        <ToggleButton value="5">tres bien</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </div>
        </div>)

}

export default Reviewpage;
