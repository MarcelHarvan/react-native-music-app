import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button} from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import {CardList} from '../components/CardList';
import {SearchText} from '../components/SearchText';

import * as actions from '../actions';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums Screen',
  };

constructor(){
    super();
    this.state = {
        albums : null
    }
  

    actions.searchTracks('eminem').then(albums => this.setState({albums}));

    // actions.searchTracks('eminem').then(
    //   albums =>{
    //     console.log(albums)
    //   }
    // );
};


  render() {
    const { albums } = this.state;

    return (
      <ScrollView style={styles.container}>
      <SearchText></SearchText>
      <CardList 
                data={albums}
                imageKey={'cover_big'} 
                titleKey={'title'}
                buttonText="See the details"
      ></CardList>

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