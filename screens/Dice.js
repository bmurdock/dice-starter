import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'


function createDie(sides){
    const s = Number(sides);
    if (Number.isNaN(s)){
        return new Error('Not a number.');
    }

    return {
        sides: s,
        roll()
        {
            return Math.floor(Math.random() * this.sides) + 1;
        }
    }
}

const dieTypes = [4, 6, 8, 10, 12, 20, 100];

export default class Dice extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            total: 0,
            selectors: [],
            selectedDice: {},
        }
    }

    setDieCount = (sides, count) => {
        // grab our current dice count object from state
        const {selectedDice} = this.state;
        // set a property on that object for the number of dice
        selectedDice[sides] = count;
        // update the state with the new values
        this.setState({selectedDice}, function(){console.log(this.state)});
    }

    roll = () => {
        const {selectedDice} = this.state;
        // generate our dice array
            // loop through the props of this.state.selectedDice
        const dice = [];
        for (let key in selectedDice) {
            // key is the type of die
            // let's grab the number of those dice
            const count = selectedDice[key];

            // using our factory function, add some new dice to the dice array
            for (let i = 0; i < count; i++) {
                dice.push(createDie(key));
            }
        }
        // calcuate the total value of each roll of our dice
        // in this case, t is the accumulator for our reduce function
        const total = dice.reduce((t, die) =>
        {
            t = t + die.roll();
            return t;
        }, 0)
        // ^ notice how we set the initial value of t to 0
        this.setState({total});
    }

    componentDidMount() {
        // create a selector component for each type of die we want
        this.setState({
            selectors: dieTypes.map((sides) => {
                return <DieInput key={`selector_${sides}`} sides={sides} setDice={this.setDieCount} />
            })

        })
    }

    render() 
    {
        return (<View>
            <Text>The sum of all your dice is {this.state.total}</Text>
            {this.state.selectors}
            <Button title="Roll" onPress={this.roll} />
        </View>)
    }
}

// create a new component to hold a specific die option/selector
function DieInput(props) {
    const [errMsg, setError] = React.useState('');
    const update = (v) => {
        // cast v to a Number type
        const cast = Number(v);
        // make sure it is really a number
        if (Number.isNaN(cast)) {
            console.error('Not a number.');
            // return because it isn't a number
            setError(`${v} is not a number.`);
            return;
        }
        // now we can call the real function
        props.setDice(props.sides, cast);
    }
    return (
        <View style={[styles.dieInput]}>
            <Text># of {props.sides}-sided dice: </Text>
            <TextInput style={styles.showMe} onChangeText={update}/>
            <Text>{errMsg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dieInput: {
        display: 'flex',
        flexDirection: 'row',
    },
    showMe: {
        borderWidth: 1,
        minHeight: 20,
        minWidth: 40,
        maxWidth: 200,
    }
})