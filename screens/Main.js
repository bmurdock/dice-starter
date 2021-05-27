import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Main({navigation, route})
{
  return (
    <View style={[styles.container]}>
        <View>
            <Text>Page Title and Pretty Stuff</Text>
        </View>
        <View style={[styles.optionList]}>
            <Text>Choose and Option</Text>
            <Button title="Dice Roller" 
                onPress={() => {
                    navigation.navigate('Dice');
                }}
            />
            <Button title="Magic 8-Ball" 
                onPress={() => {
                    // don't forget to change this to the correct
                    // screen whenever you build it
                    navigation.navigate('Dice');
                }}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    optionList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
})