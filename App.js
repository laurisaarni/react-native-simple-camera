import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import CameraContainer from './src/CameraContainer'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export default class BadInstagramCloneApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padder}>
          <CameraContainer
            mode="scanner"
            onBarCodeRead={
              (barcode) => console.log('Barcode Found!', 'Type: ' + barcode.type + '\nData: ' + barcode.data)
            }
          />
        </View>
        <View style={styles.padder}>
          <CameraContainer
            mode="photo"
            onCapturePhoto={
              (data) => console.log('Image captured!', data)
            }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  padder: {
    padding: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 50,
    margin: 40,
  },
})
