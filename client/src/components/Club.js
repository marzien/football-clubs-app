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
                                <div style={{ background: '#262627', textAlign: "center", padding: "15px 0", position: 'relative' }}>
                                    <img src={image} alt={name}/>
                                    <h2 style={{ position: 'absolute', left: '15px', bottom: '15px', color: 'white' }}>{country}</h2>
                                </div>
                                <p>Der Club <b>{name}</b> aus {country} hat eine Wert von {value} Milion Euro.</p>
                            </Fragment>
                        )
                    }}
                </Query>
            </Fragment>
        );
    }
}
 
export default Club;