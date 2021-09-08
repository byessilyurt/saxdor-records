import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListRequests from "./ListRequests";
import NewRequest from "./NewRequest";
import { Grid } from '@material-ui/core';
import MiniDrawer from './MiniDrawer';

const Routes = () => {
  return (
   
    <BrowserRouter>
      <Grid container >
        <MiniDrawer />
      </Grid>
    </BrowserRouter>
  );
};

export default Routes;