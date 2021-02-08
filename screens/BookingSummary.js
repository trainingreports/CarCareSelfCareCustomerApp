import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, Rating, AirbnbRating, Button, Avatar } from 'react-native-elements';

class BookingSummary extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <View style={[styles.cardStyle, styles.borderBotm]}>
                        <Image style={styles.imgStyle} source={require('../assets/logo_pic5.png')} />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Unicon Square Dental</Text>
                            <View style={styles.adeStyle}>
                                <Text style={{ fontSize: 14, color: '#B3B3B3' }}>Al Hamriya - Dubai</Text>
                                <Text style={{ color: "#00C8E4", fontSize: 16, fontWeight: 'bold' }}>
                                    <Image style={{ width: 16, height: 16, paddingRight: 10 }} source={require('../assets/30.8-Rate-Review/star_fill_2.png')} /> 4.5
                                </Text>
                            </View>

                        </View>
                    </View>

                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.desplayHeder}>
                            <Text style={[styles.titles, { width: '50%', paddingBottom: 0 }]}>SERVICES</Text>
                            <ImageBackground source={require('../assets/30.1-My-Bookings/gener.png')} style={styles.image}>
                                <View style={styles.hederView}>
                                    <Text style={styles.gdStyle}>Gender</Text>
                                    <Text style={[styles.gdStyle, styles.textWhite]}>Male</Text>
                                </View>
                            </ImageBackground>

                        </View>
                        <Card.Divider />

                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/service_pic_2.png')} />
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dental Implantology</Text>
                                <Rating
                                    //showRating
                                    onFinishRating={this.ratingCompleted}
                                    ratingCount={5}
                                    imageSize={14}
                                    style={{ paddingVertical: 4 }}
                                />
                                <Text style={{ fontSize: 14, color: '#B3B3B3', marginBottom: 6 }}>Service explain some text here...</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.ade}>300 AED</Text>
                                    <Text style={{ color: "#808080", fontSize: 12, marginLeft: 15 }}>
                                        <Image style={{ width: 12, height: 12, paddingRight: 10 }} source={require('../assets/clock_black.png')} />
                                 1 Hrs 30 Min
                                </Text>
                                </View>
                            </View>
                        </View>
                        <Card.Divider />
                        <Text style={[styles.titles,]}>DATE & TIME OF APPOINTMENT</Text>

                        <View style={styles.myBorder}>
                            <View style={[styles.adeStyle, styles.borderBotm]}>
                                <Text style={styles.ade}>15 Oct 2020</Text>
                                <Text style={styles.ade}>Thursday</Text>
                            </View>
                            <View style={styles.adeStyle}>
                                <Text style={styles.appoStyle}>11:30 pm - 12:00 pm</Text>
                                <Text style={styles.appoStyle}>12:00 pm - 12:30 pm</Text>
                            </View>
                        </View>
                        <Text style={[styles.titles,]}>SELECTED FOR JOB</Text>
                        <View style={styles.cardStyle}>
                            <Avatar
                                rounded
                                size="medium"
                                source={require('../assets/employee_pic_3.png')}
                            />
                            <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 15 }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dr. Arman Ali</Text>
                                <Text style={{ fontSize: 12, color: '#B3B3B3' }}>+996 0123456789</Text>
                            </View>
                        </View>

                        <View style={styles.SectionStyle}>

                            <Image source={require('../assets/offer_code_1.png')} style={styles.ImageStyle} />

                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Enter Offer Code"
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity>
                                <Text style={{ color: '#00C8E4', paddingHorizontal: 10, fontWeight: 'bold' }}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.adeStyle, { marginTop: 15, borderBottomWidth: 1, borderBottomColor: '#E6E6E6', paddingBottom: 15 }]}>
                            <Text style={styles.ade}>TOTAL</Text>
                            <Text style={styles.ade}>300.00 AED</Text>
                        </View>
                    </Card>

                </View>

                <View style={styles.fixToText}>
                    <TouchableOpacity style={styles.filterBtn}
                    //onPress={() => Alert.alert('ADD TO CART')}
                    >
                        <Text style={{ color: '#62747e', fontWeight: 'bold', fontSize: 16 }}> ADD TO CART </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterBtn}
                        //onPress={() => Alert.alert('PROCEED TO PAY')}
                        onPress={() => navigation.navigate("BookingConfirmation")}>
                        <Text style={{ color: '#01c9e3', fontWeight: 'bold', fontSize: 16 }}> PROCEED TO PAY </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

export default BookingSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15
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


    borderBotm: {
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10
    },

    cardWhite: {
        elevation: 0,
        shadowOpacity: 0,
        width: '100%',
        marginBottom: 15,
        borderColor: '#ffffff',
        paddingHorizontal: 0
    },
    desplayHeder: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 15
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        width: '95%',
        height: 15,
    },
    hederView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 6
    },
    gdStyle: {
        fontSize: 10,
        alignItems: 'center',
        width: '50%',
        paddingHorizontal: 10,
        textAlign: 'center'
    },
    textWhite: { color: '#ffffff' },
    titles: {
        color: '#999999',
        paddingBottom: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },
    ade: {
        color: '#00C8E4',
        fontSize: 16,
        fontWeight: 'bold'
    },
    adeStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    appoStyle: {
        backgroundColor: '#00C8E4',
        color: '#ffffff',
        paddingHorizontal: 6,
        paddingVertical: 10,
        borderRadius: 2,
        width: '48%',
        fontWeight: 'bold',
        fontSize: 11.6,
        textAlign: 'center',
    },
    myBorder: {
        borderWidth: 1,
        borderColor: '#00C8E4',
        borderRadius: 4,
        padding: 10,
        marginBottom: 15
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#ccc',
        height: 40,
        borderRadius: 4,
        // margin: 8,
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center'
    },

    fixToText: {
        flexDirection: 'row',
        width: '100%',
        borderTopColor: '#cccccc',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    filterBtn: {
        width: '50%',
        backgroundColor: '#ffffff',
        padding: 10,
        alignItems: 'center',
        borderRightColor: '#cccccc',
        borderRightWidth: StyleSheet.hairlineWidth,
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
    },
    timeStyle: {
        color: '#B3B3B3',
        fontSize: 12
    },

});