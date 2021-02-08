
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
    ScrollView, ImageBackground,
    Button,
    StyleSheet,
    Text,
    CheckBox,
    TextInput,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import { Rating } from 'react-native-ratings';

const ServiceDetailGetAppointment = () => {
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF', }}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={{
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    justifyContent: 'center',
                }}>
                    <Image style={{
                        width: '100%',
                        height: 200,
                    }} resizeMode={'cover'}
                        source={require('../assets/14.5-Dental-Clinic-Services-Details/pic_service.png')}
                    />
                    <View style={{
                        width: '98%',
                        marginTop: 16,
                        marginStart: 16,
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dantal Implantalogy </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                width: "50%",
                            }}>
                                <Rating
                                    type='custom'
                                    ratingColor='#FFB74D'
                                    ratingBackgroundColor='#FFB74D'
                                    ratingCount={5}
                                    imageSize={14}
                                    //onFinishRating={this.ratingCompleted}
                                    style={{ paddingVertical: 4 }}
                                />
                                <Text style={{ fontSize: 11, }}>Visit Store </Text>
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>25.00 AED </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

}

export default ServiceDetailGetAppointment;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginStart: 60,
    },
});
