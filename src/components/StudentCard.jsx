import { Paper, useMediaQuery, useTheme } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import faker from 'faker'
import React from 'react'

const useStyle = makeStyles((theme)=>({
    rooot:{
        borderRadius: 10,
        padding:20,
        paddingTop:20,
        width:'fit-content'
        
    },
    card:{
        
    },
    avatar:{
        width:120,
        height:120,
        border: 'solid white',
        borderWidth:5,
        boxShadow: '0px 0px 2px 0.05px black',

    },
    button:{
        backgroundColor:'whitesmoke',
        borderRadius:10, 
        textTransform:'none', 
        width:'100%',
        paddingRight:'30px',
        paddingLeft:'30px',

        '&:hover':{
            backgroundColor: useTheme().palette.primary.main,
            color:'white'
        }
        
    }
}))
export default function StudentCard() {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:600px)')  //these hook is used to switch the layout to grids and columns


    return (
        <Paper elevation={1} className={classes.rooot}>
            <Grid container spacing={2} direction={matches?'column':'row'} alignItems = 'center'>
                <Grid item  >
                    <Avatar src={faker.image.imageUrl(150,150)} className={classes.avatar}> h</Avatar>
                </Grid>
                <Grid item xs container direction='column'>
                    <Grid item style={{marginBottom:5}}>
                        <Typography color='primary' style={{fontWeight:700}} variant ='h6'>Uwem Chukwuneku Israel  </Typography>
                                               
                    </Grid>
                        <Grid item>
                            <Typography variant ='caption' style={{fontWeight:'500', color:'GrayText'}}>Mechanical Engineering</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:'GrayText'}}  variant ='caption'>500 Level</Typography>
                        </Grid>
                    <Grid item style={{marginTop:15}}>
                        <Button  className={classes.button}>Update profile</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
