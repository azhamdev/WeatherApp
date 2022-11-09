import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Rain from '../assets/rain.png'

const CardItem = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardItem}>
          <Image source={Rain} />
          <Text style={{ color: '#FFF' }}>Rp5000.000</Text>
          <Text style={{ color: '#FFF' }}>ROBOT AVG KAIBO</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default CardItem

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: 'black',
    height: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
})