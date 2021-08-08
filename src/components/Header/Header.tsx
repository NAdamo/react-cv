import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header: FunctionComponent = () => (
    <AppBar position="fixed" color="primary">
        <Toolbar>
            <Typography variant="h6">
                Adam Nemeth
            </Typography>
        </Toolbar>
    </AppBar>
);
