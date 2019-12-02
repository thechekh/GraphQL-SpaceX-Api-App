import React, {Suspense} from "react";
import {render} from "react-dom";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

import App from "./App";
import "./index.css";

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql"
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
