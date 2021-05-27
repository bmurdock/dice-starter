import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'


function createDie(sides){
    if (typeof sides !== 'number')
    {
        return new Error('Very cute');
    }
    return {
        sides,
        roll()
        {
            return Math.floor(Math.random() * this.sides) + 1;
        }
    }
}


export default class Dice extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dice: [],
            total: 0,
            fourSide: 0,
            sixSide: 0,
            eightSide: 0,
            tenS: 0,
            twelveS: 0,
            twentyS: 0,
            hundS: 0,
        }
    }

    roll = () => {
       // add dice to this.state.dice for each type of dice...or whatever
        


        const total = this.state.dice.reduce((t, die) =>
        {
            t = t + die.roll();
            return t;
        }, 0)
        console.log('total: ', total);
        this.setState({total});
    }

    componentDidMount() {
        const dice = [];
        for (let i = 1; i < 21; i++) {
            dice.push(createDie(i));
        }
        console.log('dice: ', dice);
        this.setState({dice})
    }

    render() 
    {
        return (<View>
            <Text>The sum of all your dice is {this.state.total}</Text>
            <View>
                <Text># of 4-sided: </Text>
                <TextInput style={styles.showMe} onTextChange={(v) => {
                    this.setState({fourSide: v})
                }}/>
            </View>
            <Button title="Roll" onPress={this.roll} />
        </View>)
    }
}

const styles = StyleSheet.create({
    showMe: {
        borderWidth: 1,
        minHeight: 20,
        minWidth: 40,
    }
})