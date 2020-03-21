import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ClubItem from './ClubItem';
import AppNavBar from './AppNavBar';
import Spinner from './Spinner';

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
                <AppNavBar caption={"all about clubs"} />
                <Query query={CLUBS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return (<Spinner />)
                        ;
                        if (error) console.log(error);

                        return (
                            <Fragment>
                                {data.clubs.map((club, i) => (
                                    <ClubItem key={i} club_number={i} club={club} />
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