import { Button, Grid, TextField, Typography } from '@mui/material';

const Home = () => {
    return (
        <Grid 
            container 
            direction="column"
            alignItems="center"
            spacing={2}
        >
            <Grid item><Typography variant="h2" component="h1">Apply-Ally</Typography></Grid>
            <Grid item><Typography variant="h5">Add old cv</Typography></Grid>
            <Grid item><TextField label="Title" sx={{ width: '500px' }}/></Grid>
            <Grid item><TextField label="Profile" multiline sx={{ width: '700px' }}/></Grid>
            <Grid item><TextField label="Education" multiline sx={{ width: '700px' }}/></Grid>
            <Grid item><TextField label="Projects" multiline sx={{ width: '700px' }}/></Grid>
            <Grid item><TextField label="Professional Experience" multiline sx={{ width: '700px' }}/></Grid>
            <Grid item><TextField label="Interests" multiline sx={{ width: '700px' }}/></Grid>
            <Grid item><Button variant="contained">Submit</Button></Grid>
        </Grid>
    );
}

export default Home;