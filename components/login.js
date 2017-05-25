import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native'
import { login } from '../actions'

const mapStateToProps = state => ({
  user: state.userReducer.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

const Login = (props) => {
  return (
    <View>
      <Text>
        To get started, edit index.ios.js
      </Text>
      { !props.user.loggedIn &&
        <TouchableHighlight onPress={() => props.login({ username: 'testuser', password: '1234' })}>
        <Text>
          Login
        </Text>
      </TouchableHighlight> }
      <Text>
        To get started, edit index.ios.js
      </Text>
    </View>
  )
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
