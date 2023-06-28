
import React, { useContext, useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export const Pagina2Screen = () => {

    const navigator = useNavigation<any>();

    const insets = useSafeAreaInsets();

    const { authState } = useContext( AuthContext );   /* en el tutorial se aplico la lectura del context desde SettingsScreeen */

    useEffect(() => {
      navigator.setOptions({
        title: 'title changed',
        headerBackTitle: 'Atras'
      })
    }, [])
    

    return (
        <View style={{
          ...styles.globalMargin,
          marginTop: insets.top 
        }}>

            <Text style={ styles.title }> Pagina2Screen </Text>
            
            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

            {
              authState.favoriteIcon && (
                <Icon
                  name={ authState.favoriteIcon }
                  size={ 150 }
                  color={ colores.primary }
                />
              )
            }

            <Button
                title="Ir página 3"
                onPress={ () => navigator.navigate({name:'Pagina3Screen'}) }
            />
        </View>
    )
}
