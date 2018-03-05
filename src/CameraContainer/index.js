import React, { Component } from 'react'
import {
  Alert,
  View,
  StyleSheet,
} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import CameraWrapper from './CameraWrapper'
import Button from './Button'

const styles = StyleSheet.create({
  icon: {
    fontSize: 33,
  },
  button: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 21,
    width: 42,
    height: 42,
    alignItems: 'center',
  },
})

export default class CameraContainer extends Component {
  constructor(props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
    this.openCamera = this.openCamera.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onBarCodeRead = this.onBarCodeRead.bind(this)

    this.state = {
      viewCamera: false,
      mode: this.props.mode,
      spinnerVisible: false,
    }
  }
  onBarCodeRead(barcodeData) {
    this.setState({
      viewCamera: false,
    })
    this.props.onBarCodeRead(barcodeData)
  }
  openCamera() {
    this.setState({
      viewCamera: true,
    })
  }
  closeModal() {
    this.camera.stopPreview()
    this.setState({
      viewCamera: false,
    })
  }
  takePicture() {
    this.setState({ spinnerVisible: true })
    const options = {}
    this.camera
      .capture({ metadata: options })
      .then((data) => {
        this.setState({
          viewCamera: false,
          spinnerVisible: false,
        })
        this.props.onCapturePhoto(data)
      })
      .catch(err => Alert(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinnerVisible}
          textContent="Capturing..."
          textStyle={{ color: '#FFF' }}
        />
        {this.state.viewCamera === true && this.state.mode === 'photo' && (
          <CameraWrapper
            isOpen
            refToPass={(cam) => {
              this.camera = cam
            }}
            closeModal={this.closeModal}
            onPress={this.takePicture}
          />
        )}
        {this.state.viewCamera === true && this.state.mode === 'scanner' && (
          <CameraWrapper
            isOpen
            refToPass={(cam) => {
              this.camera = cam
            }}
            closeModal={this.closeModal}
            onBarCodeRead={this.onBarCodeRead}
          />
        )}
        {this.state.mode === 'photo' && (
          <Button onPressButton={this.openCamera} icon="camera" />
        )}
        {this.state.mode === 'scanner' && (
          <Button onPressButton={this.openCamera} icon="scanner" />
        )}
      </View>
    )
  }
}
