import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CameraContainer from './src/CameraContainer'

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

export default class BadInstagramCloneApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      codeType: null,
      code: null,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padder}>
          <CameraContainer
            mode="scanner"
            onBarCodeRead={
              (barcode) => {
                console.log(
                  'Barcode Found!',
                  `Type: ${barcode.type} \nData:  ${barcode.data}`,
                )
                this.setState({
                  code: barcode.data,
                  codeType: barcode.type,
                })
              }
            }
          />
        </View>
        {this.state.code !== null &&
          <View style={styles.padder}>
            <Text>Code type: {this.state.codeType}</Text>
            <Text>Code value: {this.state.code}</Text>
          </View>
        }
        <View style={styles.padder}>
          <CameraContainer
            mode="photo"
            onCapturePhoto={
              (data) => {
                console.log('Image captured!', data)
                this.setState({ image: data })
              }
            }
          />
        </View>
        {this.state.image !== null &&
          <View style={styles.padder}>
            <Text>Image mediaUri: {this.state.image.mediaUri}</Text>
            <Text>Image path: {this.state.image.path}</Text>
          </View>
        }
      </View>
    )
  }
}
