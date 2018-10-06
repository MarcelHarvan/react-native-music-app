import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button} from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import {CardList} from '../components/CardList';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums Screen',
  };

constructor(){
    super();
    this.state = {
        albums : [
          {
          title: 'Meteora',
          image: 'https://orig00.deviantart.net/4f89/f/2017/203/0/1/meteora_minimalist_album_cover_by_glaze147-dbha2ru.png'
        },
        {
          title: 'Meteora',
          image: 'https://orig00.deviantart.net/4f89/f/2017/203/0/1/meteora_minimalist_album_cover_by_glaze147-dbha2ru.png'
        },
        {
          title: 'Meteora',
          image: 'https://orig00.deviantart.net/4f89/f/2017/203/0/1/meteora_minimalist_album_cover_by_glaze147-dbha2ru.png'
        }
       ]
    }
  


};


  render() {
    const {albums} = this.state;

    return (
      <ScrollView style={styles.container}>
      <CardList 
                data={albums}
                imageKey={'image'} 
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