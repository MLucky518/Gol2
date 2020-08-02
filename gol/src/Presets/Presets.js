import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import gol from "../1596313167805.png"
import smile from "../smile.png"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),

    },
    
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: "2px solid purple",
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root, "presets"}>
      <Avatar onClick={() => props.preset(0)} alt="Travis Howard" src="https://upload.wikimedia.org/wikipedia/en/d/d0/Game_of_life_animated_glider_2.gif" className={classes.large} />
      <Avatar onClick={() => props.preset(1)}  alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Animated_Hwss.gif" className={classes.large} />
      <Avatar onClick={() => props.preset(2)} alt="Cindy Baker" src="https://www.conwaylife.com/w/images/4/44/X66.gif" className={classes.large} />
      <Avatar onClick={() => props.preset(3)} alt="Cindy Baker" src="https://upload.wikimedia.org/wikipedia/en/5/5d/Gosper_glider_gun_with_grid.gif" className={classes.large} />
      <Avatar onClick={() => props.seed()} alt="Cindy Baker" src={gol} className={classes.large} />
      <Avatar onClick={() => props.preset(4)} alt="Cindy Baker" src={smile} className={classes.large} />

    </div>
  );
}