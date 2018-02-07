import React, { Component } from 'react'
import { Dimensions, Modal, StyleSheet, View } from 'react-native'
import Camera from 'react-native-camera'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  butttonBar: {
    alignItems: 'center',
    backgroundColor: '#dddddd',
    opacity: 0.8,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  buttonBarItemWrapper: {
    alignItems: 'center',
    flex: 1,
    width: 32,
  },
  preview: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    paddingBottom: 25,
    width: Dimensions.get('window').width,
  },
})

const CameraWrapper = ({ isOpen, onPress, refToPass, closeModal, onBarCodeRead }) => (
  <Modal
    visible={isOpen}
    animationType={'slide'}
    onRequestClose={() => {}}
  >
    {isOpen === true && (
      <View style={styles.container}>
        <Camera
          ref={refToPass}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={onBarCodeRead}
        >
          {onPress && (
            <View style={styles.butttonBar}>
              <View style={styles.buttonBarItemWrapper}>
                <Button onPressButton={onPress} icon="shutter" />
              </View>
              <View style={styles.buttonBarItemWrapper}>
                <Button onPressButton={closeModal} icon="close" />
              </View>
            </View>
          )}
          {onBarCodeRead && (
            <View style={styles.butttonBar}>
                <View style={styles.buttonBarItemWrapper}>
                  <Button onPressButton={closeModal} icon="close" />
              </View>
            </View>
          )}
        </Camera>
      </View>
    )}
  </Modal>
)

export default CameraWrapper
