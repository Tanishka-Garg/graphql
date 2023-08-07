import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DataDisplay from "./DataDisplay";

function App() {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    cache,
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DataDisplay></DataDisplay>
      </div>
    </ApolloProvider>
  );
}

export default App;
