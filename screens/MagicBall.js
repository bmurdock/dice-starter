import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ballIcon from '../assets/8ball.png';

export default function MagicBall() {
    return (
        <View>

            <Text>Message: </Text>
            <TouchableOpacity onPress={function shake(){
                console.log('shake me');
            }}>
                <Image style={[styles.icon]} source={ballIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 100,
        height: 100,
        margin: 5,
    },
})