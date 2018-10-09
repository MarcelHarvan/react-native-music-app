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

    componentDidMount() {
        this.input.focus();
    }
    
    onChange(value) {
        this.setState({value})
        // console.log(value);
    }

    onSubmitSearch(){
        // debugger;
        const { submitSearch } = this.props;
        submitSearch(this.state.value);

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
                ref={input => this.input = input}
                onChangeText={(event) => this.onChange(event)}
                
                />
            <FormValidationMessage></FormValidationMessage>
            <Button title='Search' onPress={() => this.onSubmitSearch()}/>
        </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }

});