import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    cache,
    uri: "http://localhost:3000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>list of users</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
