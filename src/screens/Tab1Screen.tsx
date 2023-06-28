
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { colores, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';




export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('tab1Screen efect');
      
    }, [])
    

  return (
    <View style={{
         ...styles.globalMargin,
          marginTop: top + 20
    }}>
        <Text style={ styles.title }>Iconos</Text>

        <Text>
            <TouchableIcon iconName="airplane-outline" />
            <TouchableIcon iconName="battery-charging-outline" />
            <TouchableIcon iconName="finger-print-outline" />
            <TouchableIcon iconName="key-outline" />
            <TouchableIcon iconName="reorder-four-outline" />
            <TouchableIcon iconName="trash-outline" />
            <TouchableIcon iconName="walk-outline" />
            <TouchableIcon iconName="woman-outline" />
            <TouchableIcon iconName="restaurant-outline" />
            <TouchableIcon iconName="wine-outline" />

        </Text>

    </View>
  )
}
