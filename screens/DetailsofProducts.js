import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, Rating, AirbnbRating, Button, Avatar } from 'react-native-elements';



class DetailsofProducts extends React.Component {
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
                        <Image style={styles.imgStyle} source={require('../assets/logo_pic3_1.png')} />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Car Wash Center</Text>
                            <Rating
                                //showRating
                                onFinishRating={this.ratingCompleted}
                                ratingCount={5}
                                imageSize={14}
                                style={{ paddingVertical: 6 }}
                            />
                            <Text style={{ fontSize:14 }}>A-48, External Information Department PO box 17, Sharjah, UAE</Text>
                        </View>
                    </View>
                    <View style={[styles.adeStyle, { marginBottom: 10 }]}>
                        <Text style={styles.titles}>YOUR ORDER</Text>
                        <Text style={[styles.titles, { fontWeight: '600' }]}>ITEM - 2</Text>
                    </View>
                    <Card containerStyle={[styles.cardWhite, styles.borderWhite]}>
                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist6.png')} />
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>SONAX XTREME Polish...</Text>
                                <Text style={{ fontSize: 12, color: '#B3B3B3' }}>Weight - 1 Liter</Text>
                                <Text style={[styles.ade, { color: '#4D4D4D' }]}>300 AED</Text>
                            </View>
                        </View>
                        <View style={[styles.adeStyle, { marginBottom: 1 }]}>
                            <Text style={{ color: "#808080", fontSize: 14 }}>  Quantity </Text>
                            <Text style={{ color: "#808080", fontSize: 14 }}>  2  </Text>
                        </View>
                    </Card>

                    <Card containerStyle={[styles.cardWhite, styles.borderWhite]}>
                        <View style={styles.cardStyle}>
                            <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist5.png')} />
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Bridgestone B290 Tubeless..</Text>
                                <Text style={{ fontSize: 12, color: '#B3B3B3' }}>Size - 195 / 55R16</Text>
                                <Text style={[styles.ade, { color: '#4D4D4D' }]}>500 AED</Text>
                            </View>
                        </View>
                        <View style={[styles.adeStyle, { marginBottom: 1 }]}>
                            <Text style={{ color: "#808080", fontSize: 14 }}>  Quantity </Text>
                            <Text style={{ color: "#808080", fontSize: 14 }}>  2  </Text>
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
                    <View style={{ textAlign: 'left', width: '100%' }}>
                        <Text style={[styles.titles, { paddingBottom: 6 }]}>SHIPPING ADDRESS</Text>
                        <Text style={{ fontSize:16 }}>B-109, External Information Department, PO Box 17, Sharjah, UAE </Text>

                        <Text style={[styles.titles, {paddingBottom:5, marginTop:10}]}>PAYMENT</Text>
                        <Text>Payment by Wallet</Text>

                        <Text style={[styles.titles, { paddingVertical: 10 }]}>ORDER STATUS</Text>

                        <View >
                            <View style={[styles.verticalLine, { height: '95%', backgroundColor: '#E6E6E6' }]}></View>
                            <View style={[styles.verticalLine, { height: '30%', backgroundColor: '#00C8E4' }]}></View>
                            <View style={styles.cardStyle}>
                                <Image style={styles.imgOrder} source={require('../assets/30.1-My-Bookings/order_placed_active.png')} />
                                <View>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Order Placed</Text>
                                    <Text style={{ fontSize: 12, color: '#B3B3B3' }}>15 Oct 2020, 10:30 am</Text>
                                </View>
                            </View>
                            <View style={styles.cardStyle}>
                                <Image style={styles.imgOrder} source={require('../assets/30.1-My-Bookings/order_placed_active.png')} />
                                <View>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>On the Way</Text>
                                    <Text style={{ fontSize: 12, color: '#B3B3B3' }}>15 Oct 2020, 10:30 am</Text>
                                </View>
                            </View>

                            <View style={styles.cardStyle}>
                                <Image style={styles.imgOrder} source={require('../assets/30.1-My-Bookings/order_placed_inactive.png')} />
                                <View>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Delivered</Text>
                                    {/* <Text style={{ fontSize: 12, color: '#B3B3B3' }}>15 Oct 2020, 10:30 am</Text> */}
                                </View>
                            </View>
                        </View>


                    </View>
                    <Text style={{ height: 100 }}></Text>

                </View>
                {/* <View style={styles.bottomView}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>PAY 330 AED</Text>
                </View> */}
            </ScrollView>
        );
    }
}



export default DetailsofProducts;

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
    titleColor: {
        color: '#00C8E4',
        paddingBottom: 15,
        fontSize: 18,
        fontWeight: 'bold'
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
    imgOrder: {
        width: 30,
        height: 30,
        //borderRadius: 10,
        marginRight: 8,
        marginVertical: 8
    },
    cardWhite: {
        borderRadius: 4,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        padding: 10,
        width: '100%',
        marginBottom: 15,
        marginTop: 0
    },
    desplayHeder: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 15,
        alignItems: 'center'
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
        height: 15,
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
    borderWhite: { borderColor: '#ffffff' },

    verticalLine: {
        width: 2,
        position: 'absolute',
        marginLeft: 15,
        marginTop: 15,
    },






});