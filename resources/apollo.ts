import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://6afe-2804-14d-a483-90a3-6c15-3494-9b68-d0b5.ngrok.io/graphql',
    cache: new InMemoryCache()
})