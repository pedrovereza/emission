/* @flow */
'use strict'

import React from 'react'
import { TouchableWithoutFeedback, View, Text, Image } from 'react-native'

import Separator from '../separator'
import SwitchBoard from '../../native_modules/switch_board'

export default class NavigationButton extends React.Component {
  static propTypes = {
    href: React.PropTypes.string,
    title: React.PropTypes.string
  }

  render() {
    return (
      <View style={[{marginBottom: 20, marginLeft: 20, marginRight: 20 }, this.props.style]} >
      <TouchableWithoutFeedback onPress={this.openLink.bind(this)}>
        <View style={{ }}>
          <Separator style={{ marginRight:0, marginLeft:0 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ fontFamily: 'Avant Garde Gothic ITCW01Dm',  marginTop: 14, marginBottom:14 }} >{this.props.title.toUpperCase()}</Text>
            <Image style={{alignSelf: 'center'}} source={require('../../../images/horizontal_chevron.png')} />
          </View>
          <Separator style={{ marginRight:0, marginLeft:0 }}/>
        </View>
      </TouchableWithoutFeedback>
    </View>
    )
  }

  openLink() {
    SwitchBoard.presentNavigationViewController(this, this.props.href)
  }
}
