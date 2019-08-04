import React from "react";
import "./App.css";
import ArchiveNav from "./components/ArchiveNav";
import PouringNow from "./components/PouringNow";
import { Router } from "@reach/router";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://archive-data.herokuapp.com/v1/graphql"
});

function App() {
  return (
    <div className="App">
      <ArchiveNav />
      <ApolloProvider client={client}>
        <Router>
          <PouringNow path="/pouring" />
          {/* <SingleTopic path="/topics/:slug" state={this.state} />
        <ChosenArticle path="/articles/:id" state={this.state} />
        <NewArticle path="/new-article" state={this.state} />
        <Error default /> */}
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
