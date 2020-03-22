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
    constructor(props) {
        super(props);
        this.state = { sort: true };
        this.outputEvent = this.outputEvent.bind(this);
    }

    outputEvent(event) {
        // the event context comes from the Child
        this.setState({ sort: !this.state.sort });
    }

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
                                <AppNavBar caption={"all about clubs"} filter clickHandler={this.outputEvent}/>
                                {data.clubs
                                    .sort((a, b) => {
                                        if (this.state.sort) {
                                            let nameA = a.name.toUpperCase();
                                            let nameB = b.name.toUpperCase();
                                            if (nameA < nameB) { return -1 }
                                            if (nameA > nameB) { return 1 }
                                            return 0;
                                        } else {
                                            if (a.value > b.value) { return -1 }
                                            if (a.value < b.value) { return 1 }
                                            return 0;
                                        }
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