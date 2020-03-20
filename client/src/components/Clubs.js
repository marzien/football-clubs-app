import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ClubItem from './ClubItem'

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
                <Query query={CLUBS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        return (
                            <Fragment>
                                {data.clubs.map((club, i) => (
                                    <ClubItem key={i} club={club} />
                                ))}
                            </Fragment>
                        )
                    }}
                </Query>
            </Fragment>
        );
    }
}
 
export default Clubs;