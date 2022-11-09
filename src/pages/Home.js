import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import Gap from '../components/Gap'
import MyColors from '../utils/MyColors'
import MyFonts from '../utils/MyFonts'

// images 
import IC_Map from '../assets/map.png'
import IC_Notif from '../assets/notif.png'
import SunBright from '../assets/sunBright.png'
import IC_Rain from '../assets/rain.png'
import IC_Humidity from '../assets/humidity.png'
import IC_Wind from '../assets/rain.png'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.locationContainer}>
          <View>
            <Image source={IC_Map} style={styles.iconMap} />
          </View>
          <Gap widht={ms(10)} />
          <Text style={styles.location}>Tegal</Text>
        </View>
        <TouchableOpacity>
          <Image source={IC_Notif} style={styles.iconMap} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Image source={SunBright} style={styles.mainIlustration} />
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>
            30°
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detail}>
            <Image source={IC_Rain} />
            <Text>18%</Text>
          </View>
          <View style={styles.detail}>
            <Image source={IC_Humidity} />
            <Text>90%</Text>
          </View>
          <View style={styles.detail}>
            <Image source={IC_Wind} />
            <Text>25 km/h</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyColors.Primary,
    flex: 1,
    paddingVertical: ms(24),
    paddingHorizontal: ms(21),
  },

  iconMap: {
    height: ms(27),
    resizeMode: 'contain'
  },

  location: {
    fontFamily: MyFonts.Primary.SemiBold,
    color: MyColors.Text.Primary,
    fontSize: ms(20)
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  temperatureText: {
    fontFamily: MyFonts.Primary.SemiBold,
    fontSize: ms(60),
    color: MyColors.Text.Primary
  },

  main: {
    alignItems: 'center'
  },

  temperatureContainer: {
    marginTop: ms(-50)
  },

  detailContainer: {
    backgroundColor: MyColors.Secondary,
    flexDirection: 'row',
    
  },

  detail: {
    flexDirection: "row",
    alignItems: 'center',

  },


})