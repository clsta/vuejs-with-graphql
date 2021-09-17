import gql from 'graphql-tag'
import apolloClient from './graphql'

export function filterState(params) {
    return apolloClient.query({
        query: gql`query ($name: String!){
            getfilteredStates(name: $name){
                name
                lat
                lng

            }
        }`,
        variables: params
    })
}
export function ALLState() {
    return apolloClient.query({
        query: gql`query{
            getAllStates{
                name
                lat
                lng

            }
        }`
        
    })
}