import React from 'react'
import "./grid.scss"



function Cell(props) {


    const selectCell = (e) => {
        
        props.selectCell(props.row, props.col)

    }
    return (
        <div
            className={props.cellClass}
            onClick={selectCell}
            id={props.id}
        >

        </div>
    )
}




function Grid({ rows, cols, grid, selectCell }) {

    const width = (cols * 20);
    let rowArray = [];
    let cellClass = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell_id = i + "_" + j;
            cellClass = grid[i][j] === 1 ? "alive" : "dead"
            rowArray.push(

                <Cell
                    grid={grid}
                    cellClass={cellClass}
                    key={cell_id}
                    cell_id={cell_id}
                    row={i}
                    col={j}
                    selectCell={selectCell}
                   
                />

            )
        }
    }





    return (
        <div className="game-background">
            <div className="grid" style={{ width: width }}>

                {rowArray}

            </div>
        </div>
    )
}

export default Grid
