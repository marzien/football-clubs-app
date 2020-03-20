import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppNavBar from './components/AppNavBar';
import Clubs from './components/Clubs';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <AppNavBar />
            <Clubs />


        </Container>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
