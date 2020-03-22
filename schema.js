const axios = require('axios')

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql')

const ClubInfo = new GraphQLObjectType({
    name: 'club',
    fields: () => ({
        name: { type: GraphQLString },
        country: { type: GraphQLString },
        value: { type: GraphQLInt },
        image: { type: GraphQLString },
        european_titles: { type: GraphQLInt },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clubs: {
            type: new GraphQLList(ClubInfo),
            resolve(parent, args) {
                return axios
                    .get('https://public.allaboutapps.at/hiring/clubs.json')
                    .then(res => res.data)
            }
        },
        club: {
            type: ClubInfo,
            args: {
                club_name: { type: GraphQLString }
            },
            resolve(parent, args) {
                return axios
                    .get('https://public.allaboutapps.at/hiring/clubs.json')
                    .then(res => res.data.find(o => o.name === args.club_name))
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
