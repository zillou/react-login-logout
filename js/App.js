import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, graphql } from 'react-apollo';

import { Header, Spinner, Button } from "./components/common"
import LoginForm from "./components/LoginForm"
import Profile from "./components/Profile"
import { getUserToken, removeUserToken } from "./utils/store"

export default class App extends Component {
  state = {
    loggedIn: null,
    token: null
  }

  componentWillMount() {
    getUserToken()
      .then((token) => {
        if (token) {
          console.log(token)
          this.setState({ loggedIn: true, token })
        } else {
          this.setState({ loggedIn: false })
        }
      })
      .catch((error) => {
        console.log(err)
        this.setState({ loggedIn: false })
      })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Profile />
            <Button onPress={() => removeUserToken() } text="Log Out" />
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Spinner size="large" />
          </View>
        )
    }
  }

  render() {
    const httpLink = createHttpLink({ uri: 'https://alpha-api-staging.herokuapp.com/graphql' })
    const authHeader = this.state.token
                        ? `Bearer ${this.state.token}`
                        : null

    const middlewareLink = setContext(() => ({
      headers: {
        authorization: authHeader
      }
    }));
    const link = middlewareLink.concat(httpLink)
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link
    });

    console.log("loggedIn: ", this.state.loggedIn)
    return (
      <ApolloProvider client={client}>
        <View>
          <Header title="Apollo Demo" />
          { this.renderContent() }
        </View>
      </ApolloProvider>
    );
  }
}
