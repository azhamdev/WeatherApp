import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Rain from '../assets/rain.png'
import CardItem from '../components/CardItem'

const Robot = ({ Navigation }) => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prevCount => prevCount + 1)
  }

  const min = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <View style={{ backgroundColor: '#483', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50, color: 'black' }}>
        {count}
      </Text>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity>
            <Text>Plihan Lainnya</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <ScrollView horizontal={true}>
            <CardItem onPress={add} />
            <CardItem onPress={min} />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Robot

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    height: 250,
    width: 350,
    padding: 20
  },
  cardItem: {
    backgroundColor: 'black',
    height: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    backgroundColor: 'blue', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
  }
})