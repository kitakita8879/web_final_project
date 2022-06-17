import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Home';
import { M1061009Screen } from './M1061009';
import { M1061105Screen } from './M1061105';
import ICON from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ChakraProvider } from '@chakra-ui/react';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <ChakraProvider>
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            title:"Our Profolio",
            showIcon: true,
            tabBarLabel:"首頁",
            tabBarIcon:({color,size})=>(<ICON name="home" color={color} size={size}/>)}}/>
          <Tab.Screen name="M1061009" component={M1061009Screen} options={{
            title:"M1061009陳加齊",
            showIcon: true,
            tabBarLabel:"陳加齊",
            tabBarIcon:({color,size})=>(<MaterialIcon name="face-man-shimmer" color={color} size={size}/>)}}/>
          <Tab.Screen name="M1061105" component={M1061105Screen} options={{
            title:"M1061105劉懿霈",
            showIcon: true,
            tabBarLabel:"劉懿霈",
            tabBarIcon:({color,size})=>(<MaterialIcon name="face-woman-shimmer" color={color} size={size}/>)}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ChakraProvider>
  );
}

