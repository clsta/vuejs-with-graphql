const {ApolloServer,gql} = require('apollo-server-express');
const{states} = require("./stateData");
const express = require ("express");
const app = express();
const PORT = 3001

//schema
const typeDefs = gql`
    type State{
        name:String!
        lat:Float!
        lng:Float!
}
# Queries
    type Query{
        getAllStates:[State!]!
        getfilteredStates(name:String!):[State!]!
    }

#Mutations
`
//resolver
const resolvers = {
    Query:{
        getAllStates(){
            return states;
        },
        getfilteredStates(parent,args){

            if(args ==""){
                return states;
              }
              else{
                return states.filter((a) => a.name.toLowerCase().includes(args.name.toLowerCase()))
              }
        },
       
    },
};



const server = new ApolloServer({typeDefs,resolvers});

server.applyMiddleware({app});

app.listen(PORT,()=>{
    console.log("graphql running");
});