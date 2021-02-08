import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';


class AllTransactions extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={styles.title}>All Transactions</Text>
                    <Text style={styles.subTitle}>OCTOBER -2020</Text>
                    <View style={styles.cardView}>
                        <View style={styles.adeStyle}>
                            <Text style={{ fontSize: 16 }}>Paid to GT Car Service</Text>
                            <Image style={{ width: 16, height: 16, }} source={require('../assets/18-All-Transactions/wellet_icon_small.png')} />
                        </View>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}>-200 AED</Text>
                            <Text style={styles.dateTime}>6 Oct, 05:20 PM</Text>
                        </View>
                        <Text style={styles.failed}>Failed</Text>
                    </View>
                    <View style={styles.cardView}>
                        <View style={styles.adeStyle}>
                            <Text style={{ fontSize: 16 }}>Paid to GT Car Service</Text>
                            <Image style={{ width: 16, height: 16, }} source={require('../assets/18-All-Transactions/bank_2.png')} />
                        </View>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}>-200 AED</Text>
                            <Text style={styles.dateTime}>6 Oct, 05:20 PM</Text>
                        </View>
                        <Text style={styles.failed}>Failed</Text>
                    </View>
                    <View style={styles.cardView}>
                        <View style={styles.adeStyle}>
                            <Text style={{ fontSize: 16 }}>Paid to GT Car Service</Text>
                            <Image style={{ width: 16, height: 16, }} source={require('../assets/18-All-Transactions/bank_1.png')} />
                        </View>
                        <View style={styles.adeStyle}>
                            <Text style={styles.adeColor}>+500 AED</Text>
                            <Text style={styles.dateTime}>6 Oct, 05:20 PM</Text>
                        </View>

                    </View>
                    <View style={styles.cardView}>
                        <View style={styles.adeStyle}>
                            <Text style={{ fontSize: 16 }}>Paid to GT Car Service</Text>
                            <Image style={{ width: 16, height: 16, }} source={require('../assets/18-All-Transactions/bank_2.png')} />
                        </View>
                        <View style={styles.adeStyle}>
                            <Text style={styles.ade}>-200 AED</Text>
                            <Text style={styles.dateTime}>6 Oct, 05:20 PM</Text>
                        </View>
                        <Text style={styles.failed}>Failed</Text>
                    </View>
                    <View style={styles.cardView}>
                        <View style={styles.adeStyle}>
                            <Text style={{ fontSize: 16 }}>Paid to GT Car Service</Text>
                            <Image style={{ width: 16, height: 16, }} source={require('../assets/18-All-Transactions/bank_1.png')} />
                        </View>
                        <View style={styles.adeStyle}>
                            <Text style={styles.adeColor}>+500 AED</Text>
                            <Text style={styles.dateTime}>6 Oct, 05:20 PM</Text>
                        </View>

                    </View>

                </View>
            </ScrollView>
        );
    }
}
export default AllTransactions;
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
        paddingVertical: 15
    },

    cardView: {
        textAlign: 'left',
        width: '100%',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingBottom: 10
    },

    subTitle: {
        fontSize: 16,
        color: '#808080',
        fontWeight: 'bold',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10,
        width: '100%',
        textAlign: 'left'
    },

    adeStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    ade: {
        fontSize: 18,
        //color:'#B3B3B3',
        fontWeight: 'bold',
        paddingVertical: 8
    },

    adeColor: {
        fontSize: 18,
        color: '#00C8E4',
        fontWeight: 'bold',
        paddingVertical: 8
    },
    dateTime: {
        color: '#B3B3B3'
    },
    failed: {
        color: '#FF3B30'
    }
});