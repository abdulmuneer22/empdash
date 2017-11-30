import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigators from './navigators/toplevernavigator'

export class componentName extends Component {
  render() {
    return (
      <View style={{flex : 1,backgroundColor : '#EDF0F6'}}>
        <Navigators />
      </View>
    )
  }
}

export default componentName