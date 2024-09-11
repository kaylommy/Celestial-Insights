const typeDefs = `

    input UserInput {
    username: String!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    birthDate: String!
    }

    type User {
    _id: ID!
    firstName: String!
    lastName: String!
    birthDate: String!
    username: String!
    email: String!
    password: String!
    }

    type Auth {
    token: ID!
    user: User
    }

    type Query {
    users: [User]
    user (userId: ID!): User
    }

    type Mutation {
    createUser(userData: UserInput!): Auth 
    login(username: String!, password: String!): Auth
    }
    
    
`;

module.exports = typeDefs;