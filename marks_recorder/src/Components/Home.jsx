import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component {
    render() {
        return (
            <main>
                <Toolbar/>
                <Typography paragraph>
                    Welcome to
                </Typography>
                <Typography paragraph>
                    Marks Recorder..!!
                </Typography>
            </main>
        )
    }
}
