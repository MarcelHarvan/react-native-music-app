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
// changeCardName(){
//   this.setState({
//     cardName: `I am new card name`
//   });
  
// }

renderAlbums(){
  const {albums} = this.state;
  return albums.map((album, index) => {
    return (
      <Card
      title={album.title}
      image={{uri: album.image}}
      >
     
      <Button
          icon={{name: 'android'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
    )
  });
}


  render() {
    const {albums} = this.state;

    return (
      <ScrollView style={styles.container}>
       { this.renderAlbums() }

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