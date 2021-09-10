import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    backgroundClip: {
        position: "fixed",
        top:0,
        width: "100%",
        height: (height)=>height,
        backgroundColor: "#e0e4f0",
        clipPath: "polygon(0 0, 0% 100%, 100% 0)",
      }
})

function BackgroundClip() {
    const { innerHeight: height } = window;
    const classes = useStyle(height);
    return (
        <div className={classes.backgroundClip}>
            Hello
        </div>
    )
}

export default BackgroundClip
