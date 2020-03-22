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
                <Query query={CLUBS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return (<Spinner />)
                        ;
                        if (error) console.log(error);
                        
                        return (
                            <Fragment>
                                <AppNavBar caption={"all about clubs"} filter/>
                                {data.clubs
                                    .sort((a, b) => {
                                        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                                        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                                        if (nameA < nameB) {
                                          return -1; //nameA comes first
                                        }
                                        if (nameA > nameB) {
                                          return 1; // nameB comes first
                                        }
                                        return 0;  // names must be equal
                                      })
                                    .map((club, i) => (
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