import React from 'react';
import { View } from 'react-native';
import { Card, Text, Button} from 'react-native-elements';

export class CardList extends React.Component {
    renderData(){
        const {data, titleKey, imageKey, buttonText} = this.props;

        return data.map((item, index) => {
          return (
            <Card
            key={index}
            title={item[titleKey]}
            image={{uri: item[imageKey]}}
            >
           
            <Button
                icon={{name: 'android'}}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title={buttonText} />
            </Card>
          )
        });
      }


  render() {
    const { data } = this.props;

      if (data && data.length > 0) {
        return this.renderData();
      } else {
          return <View>
              <Text>
                 Loading Data...
              </Text>
          </View>
      }
      
    
  }
}