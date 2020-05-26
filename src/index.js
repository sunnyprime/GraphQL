import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from 'react-apollo';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import {ApolloClient,gql} from 'apollo-boost'

const httpLink = createHttpLink ({
  uri:'https://crwn-clothing.com/'
})

const cache = new InMemoryCache()
const client = new ApolloClient({
  link: httpLink,
  cache
})

client.query({
  query: gql`
  {
    getCollectionsByTitle(title:"hats"){
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
  `
}).then(res=>console.log(res))

ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
