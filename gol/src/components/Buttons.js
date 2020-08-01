import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';



function Buttons(props) {
    return (
        <div className="options-container">

            <div>

                <IconButton onClick = {props.faster}>
                <h3> Speed:</h3>
                    <AddIcon   className = "speed" fontSize="large" />
                </IconButton>
                <IconButton  onClick = {props.slower} >
                   <RemoveIcon  className = "speed" fontSize = "large"/>
                </IconButton>
                
              
            </div>

            <div>

                <Button onClick={props.playButton} variant="contained" style={{ backgroundColor:"rgb(54, 3, 54)" , }} color="secondary">
                    Play
                </Button>
                <Button onClick={props.pauseButton} variant="contained" color="secondary" style={{ backgroundColor: "rgb(54, 3, 54)", }}>
                    Pause
                </Button>
                <Button onClick = {props.clear} variant="contained" color="secondary" style={{ backgroundColor: "rgb(54, 3, 54)", }}>Clear</Button>
               

            </div>
        </div>
    )
}

export default Buttons
