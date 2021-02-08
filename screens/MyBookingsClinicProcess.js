import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'


class MyBookingsClinicProcess extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />

                    <View style={styles.viewStyle}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#999999' }}>Current Bookings</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#999999' }}>3</Text>
                    </View>
                    {/* card Pending */}
                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.headerText}>Booking ID - 665464</Text>
                            <Text style={styles.headerText}>15 Aug 2020, 05:30 pm</Text>
                        </View>
                        <Card.Divider />

                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/logo_pic5.png')} />
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Unicon Square Dental</Text>
                                    <Text style={[styles.textStyle, styles.colorDrk]}>STATUS</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={styles.textStyle}>Sharjah - UAE</Text>
                                    <Text style={[styles.statusStyle, styles.padding]}>Pending</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.textStyle}>No. of Service</Text>
                            <Text style={styles.textStyle}>Total Amount</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.serviceText}>2 Service</Text>
                            <Text style={styles.serviceText}>600.00 AED</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Cancel Booking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonStyle, styles.borderColor]}>
                                <Text style={[styles.buttonText, styles.colorText]}>View Details</Text>
                            </TouchableOpacity>
                        </View>

                    </Card>
                    {/* card Pending end */}
                    {/* Accepted  */}
                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.headerText}>Booking ID - 665464</Text>
                            <Text style={styles.headerText}>15 Aug 2020, 05:30 pm</Text>
                        </View>
                        <Card.Divider />

                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/logo_pic5.png')} />
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Unicon Square Dental</Text>
                                    <Text style={[styles.textStyle, styles.colorDrk]}>STATUS</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={styles.textStyle}>Sharjah - UAE</Text>
                                    <Text style={[styles.statusStyle, styles.accepted]}>Accepted</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.textStyle}>No. of Service</Text>
                            <Text style={styles.textStyle}>Total Amount</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.serviceText}>2 Service</Text>
                            <Text style={styles.serviceText}>600.00 AED</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Cancel Booking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonStyle, styles.borderColor]}>
                                <Text style={[styles.buttonText, styles.colorText]}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 10 }}>
                            <TouchableOpacity style={styles.payBtn}
                            onPress={() => navigation.navigate("Payment")} >
                                <Text style={[styles.buttonText, styles.colorWhite]}>PAY 330 AED</Text>
                            </TouchableOpacity>
                        </View>

                    </Card>
                    {/* Accepted  end*/}
                    {/* booked  */}
                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.headerText}>Booking ID - 665464</Text>
                            <Text style={styles.headerText}>15 Aug 2020, 05:30 pm</Text>
                        </View>
                        <Card.Divider />

                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/logo_pic5.png')} />
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Unicon Square Dental</Text>
                                    <Text style={[styles.textStyle, styles.colorDrk]}>STATUS</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={styles.textStyle}>Sharjah - UAE</Text>
                                    <Text style={[styles.statusStyle, styles.booked]}>Booked</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.textStyle}>No. of Service</Text>
                            <Text style={styles.textStyle}>Total Amount</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.serviceText}>2 Service</Text>
                            <Text style={styles.serviceText}>600.00 AED</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Cancel Booking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonStyle, styles.borderColor]}>
                                <Text style={[styles.buttonText, styles.colorText]}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{ padding: 10 }}>
                            <TouchableOpacity style={styles.payBtn}>
                                <Text style={[styles.buttonText, styles.colorWhite]}>PAY 330 AED</Text>
                            </TouchableOpacity>
                        </View> */}

                    </Card>
                    {/* booked  end*/}

                    <View style={styles.viewStyle}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#999999' }}>Past Bookings</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#999999' }}>150</Text>
                    </View>

                    {/* Completed  */}
                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.headerText}>Booking ID - 665464</Text>
                            <Text style={styles.headerText}>15 Aug 2020, 05:30 pm</Text>
                        </View>
                        <Card.Divider />

                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/logo_pic5.png')} />
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Unicon Square Dental</Text>
                                    <Text style={[styles.textStyle, styles.colorDrk]}>STATUS</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={styles.textStyle}>Sharjah - UAE</Text>
                                    <Text style={[styles.statusStyle, styles.completed]}>Completed</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.textStyle}>No. of Service</Text>
                            <Text style={styles.textStyle}>Total Amount</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.serviceText}>2 Service</Text>
                            <Text style={styles.serviceText}>600.00 AED</Text>
                        </View>
                        <View style={styles.serviceBox}>
                        <TouchableOpacity style={[styles.buttonStyle, styles.borderColor]}>
                                <Text style={[styles.buttonText, styles.colorText]}>Rate & Review</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonStyle, styles.borderColor]}>
                                <Text style={[styles.buttonText, styles.colorText]}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{ padding: 10 }}>
                            <TouchableOpacity style={styles.payBtn}>
                                <Text style={[styles.buttonText, styles.colorWhite]}>PAY 330 AED</Text>
                            </TouchableOpacity>
                        </View> */}

                    </Card>
                    {/* Completed  end*/}

                     {/* canceled  */}
                     <Card containerStyle={styles.cardWhite}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.headerText}>Booking ID - 665464</Text>
                            <Text style={styles.headerText}>15 Aug 2020, 05:30 pm</Text>
                        </View>
                        <Card.Divider />

                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/logo_pic5.png')} />
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Unicon Square Dental</Text>
                                    <Text style={[styles.textStyle, styles.colorDrk]}>STATUS</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={styles.textStyle}>Sharjah - UAE</Text>
                                    <Text style={[styles.statusStyle, styles.canceled]}>Canceled</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.textStyle}>No. of Service</Text>
                            <Text style={styles.textStyle}>Total Amount</Text>
                        </View>
                        <View style={styles.serviceBox}>
                            <Text style={styles.serviceText}>2 Service</Text>
                            <Text style={styles.serviceText}>600.00 AED</Text>
                        </View>
                        <View style={styles.serviceBox}>
                         
                            <TouchableOpacity style={[styles.buttonStyle, styles.borderColor, styles.widthStyle]}>
                                <Text style={[styles.buttonText, styles.colorText]}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                         

                    </Card>
                    {/* canceled  end*/}

                </View>
            </ScrollView>
        );
    }
}
export default MyBookingsClinicProcess;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15
    },
    viewStyle: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        paddingTop: 15
    },
    cardWhite: {
        borderRadius: 4,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        padding: 0,
        width: '100%',
        borderColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation:5,

    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },

    headerText: {
        fontSize: 11,
        color: '#B3B3B3'
    },
    cardStyle: {
        flexDirection: "row",
        width: "100%",
        //alignItems: "stretch",
        paddingHorizontal: 10,
        marginBottom: 10,
        // borderBottomColor: "#E6E6E6",
        // borderBottomWidth: 1
        alignItems: 'center'
    },

    imgStyle: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 8,
    },
    textStyle: {
        color: "#B3B3B3",
        fontSize: 12,

    },

    colorDrk: {
        color: '#808080'
    },

    statusStyle: {
        color: '#ffffff',
        fontSize: 10,
        marginTop: 10,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    padding: { backgroundColor: "#FFB74D" },
    accepted: { backgroundColor: '#00A99D' },
    booked: { backgroundColor: '#7A8DF9' },
    completed: { backgroundColor: '#00A99D' },
    canceled: { backgroundColor: '#FF3B30' },

    serviceBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    serviceText: {
        borderColor: '#E6E6E6',
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
        width: '48%',
        fontWeight: 'bold',
        fontSize: 12
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 8,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#B3B3B3'

    },
    borderColor: {
        borderColor: '#00C8E4'
    },
    colorText: {
        color: '#00C8E4'
    },
    colorWhite: {
        color: '#ffffff'
    },
    payBtn: {
        backgroundColor: '#00C8E4',
        padding: 10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    widthStyle: {width:'100%'}



});