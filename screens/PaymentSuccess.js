import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
//import { Alert } from 'react-native';
//import LottieFilesPicker from '@cawfree/react-native-lottie-files-picker'




class PaymentSuccess extends React.Component {

    render() {
        //const [selectedValue, setSelectedValue] = useState("java");

        const navigation = this.props.navigation;
        return (
            <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/success_bg.jpg')}>
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

                            <Image
                                style={{ width: 100, height: 100 }}
                                resizeMode={'cover'}
                                source={require('../assets/success.gif')}
                            />

                            <Text style={styles.headline}>Success!</Text>
                            <Text style={styles.textStyle}>Your payment of 1,355 AED has been processed successfully.</Text>

                            {/* <Button  style={styles.submit}
                                title="Done"
                                onPress={() => Alert.alert('Simple Button pressed')}
                            /> */}
                            <TouchableOpacity style={styles.submit}
                                onPress={() => navigation.navigate("Main")} >
                                <Text style={{ color: '#fff', fontWeight: '300', fontSize: 18 }}> Done </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </ImageBackground >
        );
    }

}
export default PaymentSuccess;
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
        marginTop: 20,
        //paddingTop: 20,
        //paddingBottom: 20,
        paddingHorizontal: 26,
        paddingVertical: 8,
        //backgroundColor: '#68a0cf',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#fff'
    },

});