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

const httpLink = new HttpLink({
    uri: 'https://api.spacex.land/graphql/',
    credentials: 'same-origin'
});
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
        httpLink,
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
