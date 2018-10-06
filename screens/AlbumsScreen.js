import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button} from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums Screen',
  };

constructor(){
    super();
    this.state = {
        cardName: 'Some Album'
    }
    this.cardNumber =0;


};
changeCardName(){
  this.setState({
    cardName: `I am new card name ${this.cardNumber}`
  });
  this.cardNumber++
}

  render() {
    const {cardName} = this.state;

    return (
      <ScrollView style={styles.container}>
        
        <Card
            title={cardName}
            >
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
                icon={{name: 'code'}}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
        </Card>
        <Button
                icon={{name: 'code'}}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Change card name'
                onPress={() => {this.changeCardName() }}
                />




      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});