import React from 'react';
import RequestForm from './RequestForm';
import { Grid } from '@material-ui/core';
import Navbar from './Navbar';





const NewRequest = () => {

    return (
          <>
          <Navbar />
          <Grid item xs={1}></Grid>
           <RequestForm />
          <Grid item xs={1}></Grid>
          </>
    )


}




export default NewRequest;