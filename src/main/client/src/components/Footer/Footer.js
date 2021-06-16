import React from 'react';
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

import useStyles from './styles';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
  const classes = useStyles();

    return (
      <AppBar className={classes.appBar}>
        <Grid item>
          <Toolbar className={classes.toolbar}>
            <Typography variant="body1">
              © 2021 Cursach
            </Typography>
          </Toolbar>
        </Grid>
      </AppBar>
    )
}

export default Footer;
