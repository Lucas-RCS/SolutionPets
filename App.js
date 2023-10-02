import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookBookmark, CalendarPlus, PawPrint } from 'phosphor-react-native';
import { Home } from './src/pages/HomeScreen/HomeScreen';
import { Wiki } from './src/pages/WikiScreen/WikiScreen';
import { Agenda } from './src/pages/AgendaScreen/Agenda';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home />
    </View>
  );
}

function WikiScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Wiki />
    </View>
  );
}

function CalendaryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Agenda />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarBackground: () => (
            <View style={{ backgroundColor: 'transparent', height: 100 }} />
          ),
          tabBarIcon: ({ focused, color }) => {
            let iconComponent;

            if (route.name === 'Home') {
              iconComponent = focused ? (
                <PawPrint size={34} color={color} weight='duotone' style={{ marginTop: '10%' }} />
              ) : (
                <PawPrint size={34} color='gray' weight='duotone' style={{ marginTop: '10%' }} />
              );
            } else if (route.name === 'Agenda') {
              iconComponent = focused ? (
                <CalendarPlus size={34} color={color} weight='duotone' style={{ marginTop: '10%' }} />
              ) : (
                <CalendarPlus size={34} color='gray' weight='duotone' style={{ marginTop: '10%' }} />
              );
            } else if (route.name === 'WikiPets') {
              iconComponent = focused ? (
                <BookBookmark size={34} color={color} weight='duotone' style={{ marginTop: '10%' }} />
              ) : (
                <BookBookmark size={34} color='gray' weight='duotone' style={{ marginTop: '10%' }} />
              );
            }

            return iconComponent;
          },
          tabBarActiveTintColor: '#48ff9a',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="WikiPets" component={WikiScreen}
          options={{
            tabBarLabel: ' ',
            headerTitleStyle: { color: '#141415' },
            headerBackground: () => (
              <View style={{ backgroundColor: '#f8f9fc', height: 100 }} />
            ),
            tabBarStyle: {
              backgroundColor: '#141415', borderTopColor: '#141415',
              borderTopLeftRadius: 25, borderTopRightRadius: 25,
              height: 80,
            },
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: '',
            headerShown: false,
            headerTransparent: true,
            tabBarLabel: ' ',
            headerTitleStyle: { color: '#141415' },
            headerBackground: () => (
              <View style={{ backgroundColor: '#f8f9fc', height: 100 }} />
            ),
            tabBarStyle: {
              backgroundColor: '#141415', borderTopColor: '#141415',
              borderTopLeftRadius: 25, borderTopRightRadius: 25,
              height: 80,
            },
          }}
        />
        <Tab.Screen name="Agenda" component={CalendaryScreen}
          options={{
            tabBarLabel: ' ',
            headerTitleStyle: { color: '#141415' },
            headerBackground: () => (
              <View style={{ backgroundColor: '#f8f9fc', height: 100 }} />
            ),
            tabBarStyle: {
              backgroundColor: '#141415', borderTopColor: '#141415',
              borderTopLeftRadius: 25, borderTopRightRadius: 25,
              height: 80,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
