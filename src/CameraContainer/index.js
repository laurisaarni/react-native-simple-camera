import React, { Component } from 'react'
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import Camera from 'react-native-camera'
import CameraWrapper from './CameraWrapper'
import Button from './Button'

export default class CameraContainer extends Component {
  constructor(props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
    this.openCamera = this.openCamera.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onBarCodeRead = this.onBarCodeRead.bind(this)

    this.state = {
      viewCamera: false,
      preview: null,
      code: null,
      mode: this.props.mode,
    }
  }
  onBarCodeRead(barcodeData) {
    this.setState({
      viewCamera: false,
      code: barcodeData,
    })
    this.props.onBarCodeRead(barcodeData)
  }
  openCamera() {
    this.setState({
      viewCamera: true,
      preview: null,
    })
  }
  closeModal() {
    this.camera.stopPreview()
    this.setState({
      viewCamera: false,
    })
  }
  takePicture() {
    const options = {}
    //options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => {
        this.setState({
          viewCamera: false,
          preview: data,
        })
        this.props.onCapturePhoto(data)
      })
      .catch(err => Alert(err))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.viewCamera === true && this.state.mode === 'photo' && (
          <CameraWrapper
            isOpen
            refToPass={cam => {
              this.camera = cam
            }}
            closeModal={this.closeModal}
            onPress={this.takePicture}
          />
        )}
        {this.state.viewCamera === true && this.state.mode === 'scanner' && (
          <CameraWrapper
            isOpen
            refToPass={cam => {
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

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
