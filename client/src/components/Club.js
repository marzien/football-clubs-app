import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { NavLink } from 'react-router-dom';

const CLUB_QUERY = gql`
    query ClubsQuery($club_number: Int!) {
        club(club_number: $club_number) {
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
        let { club_number } = this.props.match.params;
        club_number = parseInt(club_number)
        return (
            <Fragment>
                <Query query={CLUB_QUERY} variables={{club_number}}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        const {image, country, name, value} = data.club;

                        return (
                            <Fragment>
                                <img src={image} />
                                <h2>{country}</h2>
                                <div>Der Club <b>{name}</b> aus {country} hat eine Wert von {value} Milion Euro.</div>
                            </Fragment>
                        )
                    }}
                </Query>
                <NavLink to="/">Back</NavLink>
            </Fragment>
        );
    }
}
 
export default Club;