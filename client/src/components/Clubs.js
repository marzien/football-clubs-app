import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const CLUBS_QUERY = gql`
    query ClubsQuery {
        clubs {
            name
            country
            value
            image
        }
    }
`;

class Clubs extends Component {
    render() { 
        return (
            <Fragment>
                <h1>Clubs</h1>
                <Query query={CLUBS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);
                        console.log(data)

                        return <h1>TEST</h1>
                    }}
                </Query>
            </Fragment>
        );
    }
}
 
export default Clubs;