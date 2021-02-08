import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, Rating, AirbnbRating, Button, Avatar } from 'react-native-elements';

class SaveAddress extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    
                    <Text style={styles.title}>Save Address</Text>

                    <TouchableOpacity style={styles.addBtn}
                    onPress={() => navigation.navigate('AddAddress')}>
                        <Text style={styles.btnText}><Image style={{ width: 18, height: 18, }} source={require('../assets/15.2.1-Car-Product/add_to_cart_active.png')} /> Add New Address</Text>
                    </TouchableOpacity>

                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade1}>HOME</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require('../assets/14.8-My-Cart/delete.png')} />
                            </TouchableOpacity>
                        </View>
                        <Card.Divider />
                        <Text style={{ paddingBottom: 15 }}>
                            A-48, External Information Department, PO Box 17, Abu Dhabi, UAE
                        </Text>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}>
                                <Image style={{ width: 16, height: 16 }}
                                    source={require('../assets/14.8-My-Cart/pencil.png')} />
                                 Edit Address</Text>
                            <Text style={{ color: '#B3B3B3' }}>Default</Text>
                        </View>
                    </Card>

                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade1}>OFFICE</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require('../assets/14.8-My-Cart/delete.png')} />
                            </TouchableOpacity>
                        </View>
                        <Card.Divider />
                        <Text style={{ paddingBottom: 15 }}>
                            A-48, External Information Department, PO Box 17, Abu Dhabi, UAE
                        </Text>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}>
                                <Image style={{ width: 16, height: 16 }}
                                    source={require('../assets/14.8-My-Cart/pencil.png')} />
                                 Edit Address</Text>
                            <Text style={{ color: '#B3B3B3' }}>Default</Text>
                        </View>
                    </Card>
                    <Card containerStyle={styles.cardWhite}>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade1}>BILLA HOUSE</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require('../assets/14.8-My-Cart/delete.png')} />
                            </TouchableOpacity>
                        </View>
                        <Card.Divider />
                        <Text style={{ paddingBottom: 15 }}>
                            A-48, External Information Department, PO Box 17, Abu Dhabi, UAE
                        </Text>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}>
                                <Image style={{ width: 16, height: 16 }}
                                    source={require('../assets/14.8-My-Cart/pencil.png')} />
                                 Edit Address</Text>
                            <Text style={{color: '#B3B3B3'}}>Default</Text>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}
export default SaveAddress;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        textAlign: 'left'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        paddingVertical: 15,
    },

    addBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        padding: 10,
        width: '100%',
        marginBottom: 15,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
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

    btnText: {
        color: '#00C8E4',
        fontSize: 18
    },


    adeStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',

    },
    ade1: {
        fontSize: 18,
        //color:'#B3B3B3',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    ade: {
        color: '#00C8E4',
        fontSize: 16,

    },

});