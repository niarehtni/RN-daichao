import React, { Component,PropTypes } from 'react';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements'
import Contacts from 'react-native-contacts';
import Css from './css';
const styles = StyleSheet.create(Css);

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';


export default class home extends Component<{}> {

  a() {
    Contacts.getAll((err, contacts) => {
      if (err) throw err;
      // contacts returned
      console.log(contacts)
    })
  }
    
  render() {
  const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>123</Text>
        <Swiper
            style={styles.swiper}
            height={200}
            horizontal={true}
            paginationStyle={{bottom: 10}}
            showsButtons={false}>
            <Image source={require('./image/1.jpg')} style={styles.img}/>
            <Image source={require('./image/2.jpg')} style={styles.img}/>
        </Swiper>

        <ScrollView style={styles.container}>
          {/* <Button
             icon={{name: 'cached'}}
              title="Go to Jane's profile"
              onPress={() =>
                navigate('index', {
                  name: 'list'
                })
              }
            /> */}
             <Button
             icon={{name: 'cached'}}
             title = 'BUTTON'
             onPress={this.a}
             />
      </ScrollView>
      </View>

    );
  }
}

