import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
//import { Alert } from 'react-native';
//import LottieFilesPicker from '@cawfree/react-native-lottie-files-picker'




class PaymentPending extends React.Component {

    render() {
        //const [selectedValue, setSelectedValue] = useState("java");

        const navigation = this.props.navigation;
        return (
            <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/pending_bg.jpg')}>
                <View style={styles.container}>
                    <ScrollView style={{ width: '100%', paddingHorizontal: 15, }}>
                        <StatusBar style="auto" />
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            {/* <LottieFilesPicker
                            source={require('../assets/success.json')}
                            
                                // onSelect={({ path }) => {
                                //     Alert.alert(`Looks like you picked ${path}. Nice choice.`);
                                // }}
                            /> */}
 
                            <Image style={{
                                width:100,
                                height:100, 
                                marginBottom: 16, 
                                marginTop: '15%',
                            }} resizeMode={'contain'} source={require('../assets/Payment/pending_icon.png')} />


                            <Text style={styles.headline}>Pending!</Text>
                            <Text style={styles.textStyle}>Payment takes some time to process.</Text>

                            <TouchableOpacity style={styles.submit}
                                onPress={() => Alert.alert('Apply')}>
                                <Text style={{ color: '#fff', fontWeight: '300', fontSize:18 }}> Cancel </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </ImageBackground >
        );
    }

}
export default PaymentPending;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 30,
        marginTop: 20,
        width: 200,
        width: '100%',
        color: '#ffffff'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
        color: '#ffffff'
    },
    submit: {
        //marginRight: 40,
        //marginLeft: 40,
        marginTop:20,
        //paddingTop: 20,
        //paddingBottom: 20,
        paddingHorizontal:26,
        paddingVertical:8,
        //backgroundColor: '#68a0cf',
        borderRadius:8,
        borderWidth: 1,
        borderColor: '#fff'
    },

});