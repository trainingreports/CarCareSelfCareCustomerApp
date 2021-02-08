import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, Rating, AirbnbRating, Button, Avatar } from 'react-native-elements';

class DetailsofAccepted extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <View style={{ width: '100%', paddingVertical: 15 }}>
                        <Text style={styles.title}>Booking ID - 665464</Text>
                        <Text style={styles.timeStyle}>15 Aug 2020, 05:30 pm</Text>
                    </View>
                    <View style={styles.cardStyle}>
                        <Image style={styles.imgStyle} source={require('../assets/logo_pic5.png')} />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Unicon Square Dental</Text>
                            <Rating
                                //showRating
                                onFinishRating={this.ratingCompleted}
                                ratingCount={5}
                                imageSize={14}
                                style={{ paddingVertical: 6 }}
                            />
                            <Text style={{ fontSize: 11 }}>A-48, External Information Department PO box 17, Sharjah, UAE</Text>
                        </View>
                    </View>
                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.desplayHeder}>
                            <ImageBackground source={require('../assets/30.1-My-Bookings/gener.png')} style={styles.image}>
                                <View style={styles.hederView}>
                                    <Text style={styles.gdStyle}>Gender</Text>
                                    <Text style={[styles.gdStyle, styles.textWhite]}>Male</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/30.1-My-Bookings/status_completed.png')} style={styles.image}>
                                <View style={styles.hederView}>
                                    <Text style={styles.gdStyle}>Gender</Text>
                                    <Text style={[styles.gdStyle, styles.textWhite]}>Accepted</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <Card.Divider />
                        <Text style={[styles.titles,]}>SERVICES - 1</Text>
                        <Card.Divider />
                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/service_pic_2.png')} />
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dental Implantology</Text>
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
                                <View style={styles.adeStyle}>
                                    <Text style={styles.ade}>300 AED</Text>
                                    <Text style={{ color: "#808080", fontSize: 10 }}>
                                        <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
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
                    </Card>
                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.desplayHeder}>
                            <ImageBackground source={require('../assets/30.1-My-Bookings/gener.png')} style={styles.image}>
                                <View style={styles.hederView}>
                                    <Text style={styles.gdStyle}>Gender</Text>
                                    <Text style={[styles.gdStyle, styles.textWhite]}>Female</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/30.1-My-Bookings/status_canceled.png')} style={styles.image}>
                                <View style={styles.hederView}>
                                    <Text style={styles.gdStyle}>Gender</Text>
                                    <Text style={[styles.gdStyle, styles.textWhite]}>Declined</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <Card.Divider />
                        <Text style={[styles.titles,]}>SERVICES - 1</Text>
                        <Card.Divider />
                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/service_pic_1.png')} />
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dental Implantology</Text>
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
                                <View style={styles.adeStyle}>
                                    <Text style={styles.ade}>300 AED</Text>
                                    <Text style={{ color: "#808080", fontSize: 10 }}>
                                        <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
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
                    </Card>


                    <Card containerStyle={[styles.cardWhite, styles.borderWhite]}>
                        <View style={[styles.adeStyle, { marginTop: 15 }]}>
                            <View>
                                <Text>Subtotal</Text>
                                <Text style={{ paddingVertical: 15 }}>Tax</Text>
                                <Text style={styles.ade}>TOTAL</Text>
                            </View>
                            <View>
                                <Text>300.00</Text>
                                <Text style={{ paddingVertical: 15 }}>30.00</Text>
                                <Text style={styles.ade}>330.00</Text>
                            </View>
                            <View>
                                <Text>ADE</Text>
                                <Text style={{ paddingVertical: 15 }}>ADE</Text>
                                <Text style={styles.ade}>ADE</Text>
                            </View>

                        </View>

                    </Card>

                    <View style={{textAlign:'left',width:'100%'}}>
                    <Text style={[styles.titles,]}>PAYMENT</Text>
                    <Text>Payment by Wallet</Text>
                    </View>
                    <Text style={{ height: 100 }}></Text>

                </View>
                <View style={styles.bottomView}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>PAY 330 AED</Text>
                </View>
            </ScrollView>
        );
    }
}
export default DetailsofAccepted;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
    },
    timeStyle: {
        color: '#B3B3B3',
        fontSize: 12
    },
    cardStyle: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 10,
        alignItems: 'center'
    },
    imgStyle: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 8,
    },
    cardWhite: {
        borderRadius: 4,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        padding: 10,
        width: '100%',
        marginBottom: 15
    },
    desplayHeder: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 15
    },
    hederView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 6
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '95%',
        height:15,
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
    ade: {
        color: '#00C8E4',
        fontSize: 14,
        fontWeight: 'bold'
    },
    adeStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    myBorder: {
        borderWidth: 1,
        borderColor: '#00C8E4',
        borderRadius: 4,
        padding: 10,
        marginBottom: 15
    },
    borderBotm: {
        borderBottomColor: '#00C8E4',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10
    },
    appoStyle: {
        backgroundColor: '#00C8E4',
        color: '#ffffff',
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 2,
        width: '48%',
        fontWeight: 'bold',
        fontSize: 11.6,
        textAlign: 'center',
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#00C8E4',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    borderWhite: {borderColor:'#ffffff'}




});