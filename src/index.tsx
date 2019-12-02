import React, {Suspense} from "react";
import {render} from "react-dom";

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';

import App from "./App";
import "./index.css";

import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
    uri: 'https://api.spacex.land/graphql/'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
    uri: `ws:api.spacex.land/graphql/`,
    options: {
        reconnect: true
    }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);
const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({graphQLErrors, networkError}) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({message, locations, path}) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new HttpLink({
            uri: 'https://api.spacex.land/graphql/',
            credentials: 'same-origin'
        })
    ]),
    cache: new InMemoryCache()
});

const Root = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ApolloProvider client={client}>
                <div className="App">
                    <App/>
                </div>
            </ApolloProvider>

        </Suspense>

    );
};

const rootElement = document.getElementById("root");
render(<Root/>, rootElement);
