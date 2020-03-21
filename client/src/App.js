import React, { Fragment } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Paper, Typography } from "@material-ui/core";
import Clubs from './components/Clubs';
import Club from './components/Club';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={40} justify="center">
              <Route exact path="/" component={Clubs} />
              <Route exact path="/club/:club_number" component={Club} />
            </Grid>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
