import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import camera from './camera.png'
import shutter from './shutter.png'
import scanner from './scanner.png'
import close from './close.png'

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  button: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight:5,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 26,
  },
})

const icons = {
  camera,
  shutter,
  scanner,
  close,
}

const Button = ({ onPressButton, icon }) => (
  <TouchableOpacity
    onPress={onPressButton}
    style={styles.button}>
    <Image style={styles.icon} source={icons[icon]} />
  </TouchableOpacity>
)

export default Button
