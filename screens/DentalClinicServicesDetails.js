import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, Rating, AirbnbRating, Button, Avatar } from 'react-native-elements';

class DentalClinicServicesDetails extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <View style={{ width: '100%' }}>
                        <Card.Image style={{height:240}} source={require('../assets/14.5-Dental-Clinic-Services-Details/pic_service.png')}>
                            <Image style={styles.heart} source={require('../assets/15.2.1-Car-Product/heart_on.png')} />
                            {/* <Image style={ styles.heart} source={require('../assets/15.2.1-Car-Product/heart_off.png')} /> */}
                            <View style={styles.off}>
                                <ImageBackground style={styles.offBg} resizeMode={'cover'} source={require('../assets/15.2.1-Car-Product/off.png')}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>15%</Text>
                                    <Text style={{ color: '#ffffff', fontSize: 10 }}>OFF</Text>
                                </ImageBackground>
                            </View>

                        </Card.Image>
                    </View>

                    <View style={styles.waper}>
                        <Text style={styles.title}>Dental Implantogy</Text>
                        <View style={styles.adeStyle}>
                            <Rating
                                //showRating
                                onFinishRating={this.ratingCompleted}
                                ratingCount={5}
                                imageSize={18}
                                style={{ paddingVertical: 6 }}
                            />
                            <TouchableOpacity>
                                <Text style={styles.visitStore}>Visit Store</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.adeStyle}>
                            <Text style={styles.aed}>25.00 AED</Text>
                            <Text style={styles.dateTime}>2 Hrs 30 Min</Text>
                        </View>
                        <Text style={styles.borderBottam}></Text>
                        <Text style={[styles.aed, { paddingVertical: 10, width: '100%' }]}>DESCRIPTION</Text>
                        <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                        <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                        <View style={styles.adeStyle}>
                            <Text style={[styles.aed, { color: '#B3B3B3' }]}>RATINGS & REVIEWS</Text>
                            <Text style={[styles.aed, { color: '#B3B3B3' }]}>205</Text>
                        </View>

                        <Card containerStyle={styles.cardWhite}>
                            <View style={styles.cardStyle}>
                                <Avatar
                                    rounded
                                    size="medium"
                                    source={require('../assets/employee_pic_3.png')}
                                />
                                <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Fazal Ali</Text>
                                    <View style={styles.adeStyle}>
                                        <Rating
                                            //showRating
                                            onFinishRating={this.ratingCompleted}
                                            ratingCount={5}
                                            imageSize={18}
                                            style={{ paddingVertical: 6 }}
                                        />
                                        <Text style={{ color: "#B3B3B3", fontSize: 16 }}>5 Sep 2020</Text>
                                    </View>

                                </View>
                            </View>
                            <Card.Divider />
                            <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever book.</Text>

                        </Card>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => { navigation.navigate("SelectAppointmentDateTime") }}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>GET APPOINTMENT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

export default DentalClinicServicesDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    heart: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 0,
        margin: 15
    },
    off: {
        position: 'absolute',
        bottom: 15,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    offBg: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    waper: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        textAlign: 'left',
        width: '100%',
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        paddingVertical: 15,
    },
    adeStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',

    },
    visitStore: {
        backgroundColor: '#00C8E4',
        color: '#ffffff',
        fontSize: 12,
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderRadius: 30
    },
    aed: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666666',
        //width:'100%',
        textAlign: 'left'
    },
    dateTime: {
        color: '#B3B3B3'
    },
    borderBottam: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        width: '100%'
    },
    textStyle: {
        fontSize: 16,
        color: '#808080',
        paddingBottom: 15
    },

    cardStyle: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 10,
        alignItems: 'center'
    },
    imgStyle: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 8,
    },
    cardWhite: {
        borderRadius: 8,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        padding: 10,
        width: '100%',
        marginBottom: 15,
        elevation: 0
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#00C8E4',
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
        bottom: 0,
    },

});