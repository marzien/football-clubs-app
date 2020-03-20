import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppNavBar from './components/AppNavBar';
import Clubs from './components/Clubs';
import Club from './components/Club';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <AppNavBar />
            <Route exact path="/" component={Clubs} />
            <Route exact path="/club/:club_number" component={Club} />
          </Container>
        </React.Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
