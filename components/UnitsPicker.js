import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Picker} from '@react-native-community/picker'

export default function UnitsPicker({unitSystem, setUnitSystem}) {
  return (
    <View style={styles.unitSystem}>
      <Picker selectedValue={unitSystem} onValueChange={(item)=>setUnitSystem(item)}>
        <Picker.Item label="C°" value="metric"/>
        <Picker.Item label="F°" value="imperial"/>
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  unitSystem: {
    position:'absolute',
    top:Platform.OS === 'ios' ? -30 : 0,
    left:10,
    height:50,
    width:100
  }
})
