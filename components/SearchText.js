import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';



export class SearchText extends React.Component {
    
    constructor() {
        super();
        this.state = {
            value: ''
    
        }
    }
    
    onChange(value) {
        this.setState({value})
        // console.log(value);
    }

    submitSearch(){
        console.log(this.state.value);
    }

  render() {
    return (
        <React.Fragment>
            <FormLabel
                containerStyle={styles.center}
            >
            Search an artist
            </FormLabel>
            <FormInput
                onChangeText={(event) => this.onChange(event)}
                
                />
            <Button title='Search' onPress={() => this.submitSearch()}/>
        </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }

});