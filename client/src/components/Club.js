import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import AppNavBar from './AppNavBar';
import Spinner from './Spinner';

const CLUB_QUERY = gql`
    query ClubsQuery($club_name: String!) {
        club(club_name: $club_name) {
            name
            country
            value
            image
            european_titles
        }
    }
`;

class Club extends Component {
    render() { 
        let { club_name } = this.props.match.params;
        return (
            <Fragment>
                <Query query={CLUB_QUERY} variables={{club_name}}>
                    {({ loading, error, data }) => {
                        if (loading) return <Spinner />;
                        if (error) console.log(error);
                        
                        const {image, country, name, value} = data.club;

                        return (
                            <Fragment>
                                <AppNavBar caption={name} backButton/>
                                <img src={image} alt={name}/>
                                <h2>{country}</h2>
                                <div>Der Club <b>{name}</b> aus {country} hat eine Wert von {value} Milion Euro.</div>
                            </Fragment>
                        )
                    }}
                </Query>
            </Fragment>
        );
    }
}
 
export default Club;