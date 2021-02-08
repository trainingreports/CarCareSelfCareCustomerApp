import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';


class MyWallet extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <View style={{ width: '100%' }}>

                        <Image style={{ width: '100%', height: 160 }}
                            resizeMode={'cover'} source={require('../assets/20-My-Wallet/my_wallet_bg.png')} />


                        <View style={{ width: '100%', position: 'absolute', padding: 15 }}>
                            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>My Wallet</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.wallet}>
                                    <Image style={{
                                        width: 40,
                                        height: 40,
                                    }} resizeMode={'contain'} source={require('../assets/20-My-Wallet/wallet.png')} />
                                </View>

                                <View style={{ marginLeft: 15 }}>
                                    <Text style={{ color: '#ffffff', fontSize: 10 }}>Available Balance</Text>
                                    <Text style={styles.aed}>36,600.00 AED</Text>
                                    <TouchableOpacity style={styles.btnStyle}
                                        onPress={() => navigation.navigate('AddMoney')} >
                                        <Text style={{ color: '#00C8E4', fontSize: 12, paddingVertical: 4, }}>Add Money</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                        <View style={{ padding: 15 }}>
                            <Text style={styles.titleStyle}>Payment Histoy</Text>
                            <Text style={styles.monthStyle}>OCTOBER - 2020</Text>

                            <Text style={styles.subtitle}>Paid to CT Car Service</Text>

                            <View style={styles.listStyle}>
                                <Text style={styles.aedStyleColor}>+500 AED</Text>
                                <Text style={styles.timeStyle}>6 Oct, 05:20 PM</Text>
                            </View>
                            <Text style={styles.subtitle}>Paid to CT Car Service</Text>

                            <View style={styles.listStyle}>
                                <Text style={styles.aedStyle}>-200 AED</Text>
                                <Text style={styles.timeStyle}>6 Oct, 05:20 PM</Text>
                            </View>
                            <Text style={styles.subtitle}>Paid to CT Car Service</Text>

                            <View style={styles.listStyle}>
                                <Text style={styles.aedStyle}>-200 AED</Text>
                                <Text style={styles.timeStyle}>6 Oct, 05:20 PM</Text>
                            </View>
                            <Text style={styles.monthStyle}>OCTOBER - 2020</Text>

                            <Text style={styles.subtitle}>Paid to CT Car Service</Text>

                            <View style={styles.listStyle}>
                                <Text style={styles.aedStyle}>-200 AED</Text>
                                <Text style={styles.timeStyle}>6 Oct, 05:20 PM</Text>
                            </View>
                            <Text style={styles.subtitle}>Paid to CT Car Service</Text>

                            <View style={styles.listStyle}>
                                <Text style={styles.aedStyle}>-200 AED</Text>
                                <Text style={styles.timeStyle}>6 Oct, 05:20 PM</Text>
                            </View>
                            <Text style={styles.subtitle}>Paid to CT Car Service</Text>

                            <View style={styles.listStyle}>
                                <Text style={styles.aedStyle}>-200 AED</Text>
                                <Text style={styles.timeStyle}>6 Oct, 05:20 PM</Text>
                            </View>

                        </View>

                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default MyWallet;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    wallet: {
        borderColor: '#ffffff',
        borderWidth: 1,
        padding: 15,
        borderRadius: 100,
        width: 70,
        height: 70,
        marginTop: 15
    },
    btnStyle: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginRight: 18,
        marginTop: 5
    },

    aed: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        paddingBottom: 10

    },
    monthStyle: {
        color: '#999999',
        paddingVertical: 15,
        fontWeight: 'bold',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10

    },
    aedStyle: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    aedStyleColor: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#00C8E4'
    },
    timeStyle: {
        color: '#CCCCCC',
        fontSize: 14,
    }


});