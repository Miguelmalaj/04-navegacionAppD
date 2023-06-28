
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

    return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Pagina1Screen </Text>

        <Button
            title="Ir página 2"
            onPress={ () => navigation.navigate('Pagina2Screen') }
        />
        
        <Text>Navegar con argumentos</Text>

        <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity
                style={{ 
                    ...styles.botonGrande,
                    backgroundColor: '#5856D6' 
                }}
                onPress={ () => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'anotherName'
                }) }
            >
                <Icon
                    name="body-outline"
                    color='white'
                    size={ 35 }
                />
                <Text style={ styles.botonGrandeTexto }>anyName</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={{ 
                    ...styles.botonGrande,
                    backgroundColor: '#FF9427' 
                }}
                onPress={ () => navigation.navigate('PersonaScreen', {
                    id: 2,
                    nombre: 'weirdName'
                }) }
            >
                <Icon
                    name="woman-outline"
                    color='white'
                    size={ 35 }
                />
                <Text style={ styles.botonGrandeTexto }>wirdName</Text>
            </TouchableOpacity>

        </View>


    </View>
    )
}
