import React from 'react'
import Logo from './Logo'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    App: {
        backgroundColor: '#263238',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
}))

export default function App() {
    const classes = useStyles()

    return (
        <div className={classes.App}>
            <Logo />
        </div>
    )
}
