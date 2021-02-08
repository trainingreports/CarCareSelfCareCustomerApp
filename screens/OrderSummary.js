import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, Rating, AirbnbRating, Button, Avatar } from 'react-native-elements';

class OrderSummary extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={styles.title}>Order Summary</Text>
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
                    <View style={styles.adeStyle}>
                        <Text style={styles.titles}>SERVICES</Text>
                        <Text style={styles.titles}>2</Text>
                    </View>

                    <Card containerStyle={styles.cardWhite}>
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
                                <Text style={{ fontSize: 14, color: '#B3B3B3', marginBottom: 6 }}>Service explain some text here...</Text>

                                <Text style={styles.ade}>300 AED</Text>
                            </View>
                        </View>
                        <Card.Divider />
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}><Image style={{ width: 16, height: 16, paddingRight: 10 }} source={require('../assets/14.8-My-Cart/pencil.png')} /> Edit Service</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require('../assets/14.8-My-Cart/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </Card>

                    <Card containerStyle={styles.cardWhite}>
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
                                <Text style={{ fontSize: 14, color: '#B3B3B3', marginBottom: 6 }}>Service explain some text here...</Text>

                                <Text style={styles.ade}>300 AED</Text>
                            </View>
                        </View>
                        <Card.Divider />
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}><Image style={{ width: 16, height: 16, paddingRight: 10 }} source={require('../assets/14.8-My-Cart/pencil.png')} /> Edit Service</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require('../assets/14.8-My-Cart/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </Card>

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
                    <Card containerStyle={[styles.cardWhite, { marginTop: 20 }]}>
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
                    <Text style={{ width: '100%', marginStart: 12, fontWeight: 'bold', fontSize: 16 }}>SHIPPING ADDRESS </Text>
                    <Text style={{ width: '100%', height: 90, marginStart: 12, }}>A-48 Exteranal Information Department, PO Box 17 </Text>

                </View>

                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Payment") }}>
                        <Text style={styles.textStyle2}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
export default OrderSummary;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        textAlign: 'left'
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
    adeStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    borderBotm: {
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10
    },
    cardWhite: {
        borderRadius: 4,
        borderColor: '#ffffff',
        padding: 10,
        width: '100%',
        marginBottom: 15,
        marginTop: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.1,
        elevation: 4,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '95%',
        height: 15,
    },
    titles: {
        color: '#00C8E4',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
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
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#ccc',
        height: 40,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.1,
        elevation: 2,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        paddingVertical: 15
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

    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 4,
        bottom: 0,
    },
    textStyle2: {
        color: '#00C8E4',
        fontSize: 18,
        fontWeight: 'bold'
    },

});