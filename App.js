import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Dice from './screens/Dice';
import MagicBall from './screens/MagicBall';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="Main"
            component={Main}
          />
          <Stack.Screen
            name="Dice"
            component={Dice}
          />
                  <Stack.Screen
            name="8 Ball"
            component={MagicBall}
          />


      </Stack.Navigator>
    </NavigationContainer>
  );
}



function Options({navigation})
{
  return (
    <View>
      <Text>This is the options screen</Text>
      <Button 
        title="Go Edit"
        onPress={() =>
          {
            navigation.navigate('Edit');
          }}
      />
    </View>
  )
}

function Edit({navigation})
{
  return (
    <View>
      <Text>This is the Edit screen</Text>
      <Button 
        title="Go Main"
        onPress={() =>
          {
            navigation.navigate('Main');
          }}
      />
    </View>
  )
}

// we need to add some styles probably maybe at some point
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
