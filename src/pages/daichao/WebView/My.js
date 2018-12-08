import React, { Component,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements'
import Contacts from 'react-native-contacts';
// import WebViewPage from '../webView/webView'

import Css from './MyCss';
const styles = StyleSheet.create(Css);

export default class My extends Component {
constructor(props) {
  super(props);
  this.state = {
    selectedTab: 'My'
  };
}
//跳转下一个页面
goToNextPage() {

  // this.props.navigator.push({
  //   component: WebViewPage
  // })

}

render() {
  // const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>123</Text>
      </View>
      // <View style={styles.page}>
      // <View  style={styles.swiper}>
      //   <Swiper
      //       height={100}
      //       horizontal={true}
      //       // paginationStyle={{bottom: 10}}
      //       // showsButtons={false}
      //       >
      //       <Image source={require('./image/1.jpg')} style={styles.img}/>
      //       <Image source={require('./image/2.jpg')} style={styles.img}/>
      //   </Swiper>
      // </View>
        

      //   <View style={styles.column}>
      //     <Text style={styles.columnTitle} 
      //       onPress={() => this.goToNextPage()}>
      //       Jumlah pinjaman</Text>
      //     <Text style={styles.line}></Text>
      //     <Text style={styles.columnTitle}>Tenor</Text>
      //   </View>
        
      //   <View style={styles.recommended}>
      //     <Text style={styles.recommendedTitle}>
      //       Rekomendasi Populer
      //     </Text>
      //   </View>

      //   <FlatList style={styles.container}
      //     data={[
      //       {key: 'Akulaku'},
      //       {key: 'Akulaku1'},
      //       {key: 'James'},
      //       {key: 'Joel'},
      //       {key: 'John'},
      //       {key: 'Jillian'},
      //       {key: 'Jimmy'},
      //       {key: 'Julie'},
      //     ]}
      //     renderItem={({item}) => 
      //     <View style={styles.list}>

      //       <View style={styles.listA}>
      //         <View style={styles.listName}>
      //           <Image style={styles.listimg} source={require('./image/2.jpg')}></Image>
      //           <Text style={styles.listTitle} >{item.key}</Text>
      //         </View>

      //         <TouchableOpacity
      //             style={styles.listBtn} 
      //             onPress={()=>{
      //               navigate('webView', {
      //                     name: 'list'
      //               })
      //         }}>
      //              <Text style={styles.listBtnTitle}>Unduh Segera</Text>
      //          </TouchableOpacity>
      //       </View>

      //       <View style={styles.listA}>
      //         <Text style={styles.listRate} >{item.key}</Text>
      //         <Text style={styles.listTime} >{item.key}</Text>
      //       </View>

      //       <View style={styles.listA}>
      //         <Text style={styles.listTime} >{item.key}</Text>
      //         <Text style={styles.listTime} >{item.key}</Text>
      //       </View>

      //     </View>}
      //   />
      // </View>

    );
  }
}

// const styles = StyleSheet.create(
// {    
// container: {        
// flex: 1,        
// justifyContent: 'center',        
// alignItems: 'center',        
// backgroundColor: '#F5FCFF',    
// }});

module.exports = My;


// import React, { Component,PropTypes } from 'react';
// import Swiper from 'react-native-swiper';
// import { Button } from 'react-native-elements'
// import Contacts from 'react-native-contacts';
// import Css from './homeCss';
// const styles = StyleSheet.create(Css);

// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableHighlight,
//   ScrollView,
//   FlatList,
//   TouchableOpacity
// } from 'react-native';


// export default class Home extends Component<{}> {

//   a() {
//     Contacts.getAll((err, contacts) => {
//       if (err) throw err;
//       // contacts returned
//       console.log(contacts)
//     })
//   }
    
  
// }

