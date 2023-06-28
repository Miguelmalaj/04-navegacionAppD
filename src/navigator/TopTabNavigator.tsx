import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={ ({ route }) => ({  //tabBarOptions
                tabBarStyle:{
                    shadowColor: 'transparent',
                    elevation: 0
                },
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },

                tabBarIcon: ({ color, focused }) => { //props

                    let iconName: string = '';
    
                    switch ( route.name ) {
                        case 'ChatScreen':
                            iconName = 'chatbox-ellipses-outline'
                        break;
    
                        case 'ContactsScreen':
                            iconName = 'people-outline'
                        break;
    
                        case 'AlbumsScreen':
                            iconName = 'albums-outline'
                        break;
                    
                        
                    }
    
                    return <Icon name={ iconName } size={20} color={ colores.primary } />
                }
                
            })}
        >
            <Tab.Screen name="ChatScreen" component={ ChatScreen } />
            <Tab.Screen name="ContactsScreen" component={ ContactsScreen } />
            <Tab.Screen name="AlbumsScreen" component={ AlbumsScreen } />
        </Tab.Navigator>
    );
}