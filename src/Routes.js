import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListRequests from "./ListRequests";
import NewRequest from "./NewRequest";
import { Grid } from '@material-ui/core';
import Drawer from './Drawer';

const Routes = () => {
  return (
   
    <BrowserRouter>
      <Grid container >
        <Drawer />
        <Grid item container xs={10} direction="row">
          <Switch>
            <Route exact path="saxdor-records/" component={ListRequests} />
            <Route exact path="saxdor-records/new" component={NewRequest} />
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default Routes;
