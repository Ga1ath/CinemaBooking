import React from 'react';

import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Session from './Session/Session';

const SessionContainer = ({ date, sessionsOnDate }) => {
  const classes = useStyles();
  // const { id, date, time, price, hall } = session;

  return (
    <Grid container className={classes.sessionContainer}>
      <Grid item xs={3} className={classes.date}>
        <h1 style={{ fontWeight: "150" }}>{date}</h1>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={7}>
        {sessionsOnDate.map((session, index) => {
          return <Session key={index} session={session} />
        })}
      </Grid>
    </Grid>
  )
}

export default SessionContainer;