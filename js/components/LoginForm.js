import React from "react"
import { Text, StyleSheet } from "react-native"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Card, CardSection, Button, Input, Spinner } from "./common"
import { setUserToken } from "../utils/store"

class LoginForm extends React.Component {
  state = {
    login: "",
    password: "",
    error: "",
    loading: false
  }

  onButtonPress() {
    const { login, password } = this.state
    this.props.mutate({variables: { login, password }})
      .then(({ data }) => {
        const { user, token } = data.signInUser
        setUserToken(token)
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    } else {
      return <Button text="Login" onPress={this.onButtonPress.bind(this)} />
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Login"
            placeholder="68167910"
            value={this.state.login}
            onChangeText={login => this.setState({login})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.error}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
})

const signInUser = gql`
  mutation signInUser($login: String!, $password: String!) {
    signInUser(login: $login, password: $password) {
      token
      user {
        mobile
        name
      }
    }
  }
`

export default graphql(signInUser)(LoginForm)
