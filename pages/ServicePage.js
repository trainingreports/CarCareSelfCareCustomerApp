// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import { Rating } from 'react-native-elements';
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
  <TouchableOpacity
    onPress={() => { navigation.navigate('DentalClinicServicesDetails') }}
  >
    <View style={styles.item}>

      <View style={styles.buttonContainer}>
        <Image
          style={{
            width: 108,
            height: 108,
          }}
          resizeMode={'cover'}
          source={require('../assets/self_service_pic_2.png')}
        />

        <View style={{ width: '76%', marginStart: 10, marginEnd: 10 }}>

          <Text style={{ width: "98%", textAlign: 'left' }}>Implant Bridges </Text>
          <Text style={{ width: "50%", fontWeight: 'bold' }}>25.00 AED </Text>
          <Text style={{ width: "98%", color: '#B3B3B3' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  </Text>
          <Text style={{ width: "98%", color: '#808080' }}>2 Hrs 30 Min </Text>

        </View>
      </View>

    </View >
  </TouchableOpacity>
);



// const ServicePage = ({ navigation }) => {
class ServicePage extends React.Component {

  // const navigation = this.props.navigation;
  renderItem = ({ item }) => {

    const navigation = this.props.navigation;
    return (
      // <ItemService title={item.title} />


      <View style={styles.item}>

        <View style={styles.buttonContainer}>
          <View>
            <Image
              style={{
                position: 'relative',
                width: 110,
                height: 90,
                borderRadius: 4
              }}
              resizeMode={'cover'}
              source={require('../assets/self_service_pic_2.png')}
            />

            <TouchableOpacity
              onPress={() => {
                //navigation.navigate('')
              }}
              style={{ position: 'absolute', alignSelf: 'flex-end' }}
            >
              <Image
                style={{ height: 20, width: 20, marginRight: 4 }}
                resizeMode={'cover'}
                source={require('../assets/heart_like.png')}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                //navigation.navigate('')
              }}
              style={{ position: 'absolute', alignSelf: 'flex-end' }}
            >
              <Image
                style={{ height: 20, width: 20, marginRight: 4 }}
                resizeMode={'cover'}
                source={require('../assets/heart.png')}
              />
            </TouchableOpacity> */}

          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DentalClinicServicesDetails')
            }}
          >
            <View style={{ width: '76%', marginStart: 10, marginEnd: 10 }}>

              <Text style={{ width: "96%", textAlign: 'left', fontSize: 16, fontWeight: 'bold' }}>Implant Bridges </Text>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Rating
                  //showRating
                  onFinishRating={this.ratingCompleted}
                  ratingCount={5}
                  imageSize={14}
                  style={{ paddingVertical: 6 }}
                />
                <Text style={styles.offStyle}>15%OFF</Text>
              </View>
              <Text style={{ width: "96%", color: '#B3B3B3' }}>Lorem ipsum, or lipsum as it...</Text>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: '#4D4D4D' }}>25.00 AED </Text>
                <Image
                  style={{ height: 12, width: 12, marginRight: 4 }}
                  resizeMode={'cover'}
                  source={require('../assets/clock_black.png')}
                />
                <Text style={{ width: "98%", color: '#4D4D4D', fontSize: 12 }}>2 Hrs 30 Min </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View >

    )
  };

  render() {

    return (
      <SafeAreaView style={styles.containerList}>
        <Text style={{
          backgroundColor: '#ffffff',
          color: '#FF3B30',
          padding: 16,
          borderBottomColor: '#E6E6E6',
          borderBottomWidth: 1,
        }}>
          <Image
            style={{ height: 12, width: 12, marginRight: 4 }}
            resizeMode={'cover'}
            source={require('../assets/offer_code.png')}
          /> Use offer Code 564841 Get 25% Discount</Text>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
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
    )
  };
}

export default ServicePage;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 8,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  offStyle: {
    backgroundColor: "#FF0000",
    fontWeight: "bold",
    borderRadius: 20,
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 8,
    marginLeft: 15
  },
});