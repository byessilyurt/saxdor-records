import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from './Navbar';
import TableItem from './TableItem';

function ListRequests() {
  return (
        <>
        <Grid item xs={1}></Grid>
         <TableItem />
        <Grid item xs={1}></Grid>
        </>
  );
}

export default ListRequests;
