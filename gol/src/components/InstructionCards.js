import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className="cards">
            <Card className={classes.root, "card-div"}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Retro Game take on an old classic"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h1" style={{ textAlign: "center" }}>
                            Retro Game take<br /> on an old Classic!
          </Typography>
                        <br />
                        <Typography variant="body3" color="textPrimary" component="p">
                            Space populators is a space skinned version of John Conway's famous game of life! <br />
                        Here are the rules for the Game<br />

            Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

            The rules of the game are simple, and describe the evolution of the
            grid:
            <br />
            ◮ Birth: a cell that is dead at time t will be alive at time t + 1
            if exactly 3 of its eight neighbors were alive at time t.
            <br />
            ◮ Death: a cell can die by:
            <br />
            ◮ Overcrowding: if a cell is alive at time t + 1 and 4 or more of
            its neighbors are also alive at time t, the cell will be dead at
            time t + 1.
            <br />
            ◮ Exposure: If a live cell at time t has only 1 live neighbor or no
            live neighbors, it will be dead at time t + 1.
            <br />
            ◮ Survival: a cell survives from time t to time t + 1 if and only
            if 2 or 3 of its neighbors are alive at time t.
          </Typography>
                    </CardContent>
                </CardActionArea>







            </Card>



            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media,"card-div"}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Retro Game take on an old classic"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2" style={{ textAlign: "center" }}>
                            Vs Mode
          </Typography>
                        <br />
                        <Typography variant="body1" color="textPrimary" component="p" style={{ textAlign: "center" }}>
                    Play against the computer's randomly generated grid and see who has more alive Cells.
                    the computers maximum lifecycles is 100 so try to beat them at any point before then.For now results of calculation will be viewable from the console
                        </Typography>
                    </CardContent>
                </CardActionArea>







            </Card>
        </div>


    );
}