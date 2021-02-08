// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];



const ItemService = ({ title }) => (
  <View style={styles.item}>

    <View style={styles.buttonContainer}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 100
        }}
        resizeMode={'cover'}
        source={require('../assets/self_service_pic_2.png')}
      />

      <View style={{ width: '100%', marginStart: 10, marginEnd: 10 }}>

        <Text style={{ fontSize: 16 }}>Deven </Text>
        <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-between', }}>
          <Rating
            type='custom'
            ratingColor='#FFB74D'
            ratingBackgroundColor='#FFB74D'
            ratingCount={5}
            imageSize={16}
            //onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 4 }}
          />
          <Text style={{ color: '#CCCCCC',marginRight:10 }}>15 Sep 2020 </Text>
        </View>
      </View>
    </View>

    <View style={{
      width: "100%",
      marginBottom: 8,
      marginTop: 8,
      borderBottomColor: '#E6E6E6',
      borderBottomWidth: 1,
    }} />
    <Text style={{ color: '#666666', marginEnd: 8, textAlign: 'left' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,is dummy text used in laying out print,is dummy text used in laying out print,  </Text>
  </View >
);

const ReviewPage = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ItemService title={item.title} />
  );

  return (
    <SafeAreaView style={styles.containerList}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={{ flex: 1, padding: 16 }}>
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: 25,
    //           textAlign: 'center',
    //           marginBottom: 16
    //         }}>
    //         Home{'\n'}(You are on FirstPage)
    //       </Text>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => navigation.navigate('SecondPage')}>
    //         <Text>Go to settng Tab</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
    //       React Native Tab Navigation
    //     </Text>
    //     <Text
    //       style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
    //       www.aboutreact.com
    //     </Text>
    //   </View>
    // </SafeAreaView>
  );
}


export default ReviewPage;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: "92%",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});