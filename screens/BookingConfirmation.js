//import React from 'react';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class BookingConfirmation extends React.Component {

    render() {
        //const [selectedValue, setSelectedValue] = useState("java");
        //const [ fill ] = useState ("10");
        const navigation = this.props.navigation;
        return (
            <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/bg.png')}>
                <View style={styles.container}>
                    <ScrollView style={{ width: '100%', paddingHorizontal: 15, }}>
                        <StatusBar style="auto" />
                        <View style={{ alignItems: 'center', marginTop:50 }}>

                            <AnimatedCircularProgress
                                size={120}
                                width={15}
                                fill={75}
                                arcSweepAngle={360}
                                rotation={360}
                                backgroundWidth={1}
                                tintColor="#00e0ff"
                                duration={1000}
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor="#3d5875" />

                            <Text style={{position:'absolute', marginTop:48, fontSize:18, color:'#00e0ff', fontWeight:'bold'}}>75%</Text>
                            <Text style={styles.headline}>Booking Confirmation</Text>
                            <Text style={styles.textStyle}>Your booking request sent to service provider. So please some wait for confirmation.</Text>
                            <Text style={styles.textStyle}>If the service provided is taking long to accept, you can check the status of your booking from My Bookings.</Text>
                            <View style={styles.buttonSignIn} >
                            <Button
                                color="#00c8e4"
                                title='Go to My Bookings'
                                onPress={() => navigation.navigate("MyBookingsClinicProcess")} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }

}
export default BookingConfirmation;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20,
        width: 200,
        width: '100%'
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 30,
    },
    buttonSignIn: {
        width: "80%",
        marginStart: 10,
        marginEnd: 10,
        marginTop: 8,
        marginBottom: 16,
        backgroundColor: "#00C8E4",
        borderRadius: 4,
      },

});