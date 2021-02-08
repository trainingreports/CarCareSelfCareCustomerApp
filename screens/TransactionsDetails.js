import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';


class TransactionsDetails extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={styles.subTitle}>TO</Text>
                    <Text style={styles.title}>Paid to GT Car Service</Text>
                    <Text style={styles.subTitle}>FROM</Text>
                    
                    <View style={styles.cardView}>
                    <Text style={{ fontSize:17}}>ICIC Bank Debit Card</Text>
                    <Text style={styles.cardNo}>Card No . : 6254 **** **** 8524</Text>
                    </View>

                    <View style={styles.cardView}>
                    <Text style={[styles.subTitle, {fontWeight:'600',paddingBottom:0}]}>Order ID</Text>
                    <Text style={{ fontSize:17}}>1234567890</Text>
                    <Text style={[styles.subTitle, {fontWeight:'600',paddingBottom:0}]}>Bank Reference No.</Text>
                    <Text style={{ fontSize:17}}>25567777877744677878</Text>
                    </View>

                    
                </View>
            </ScrollView>
        );
    }
}
export default TransactionsDetails;
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
    },
    subTitle: {
        fontSize:18,
        color: '#808080',
        fontWeight: 'bold',
        //borderBottomColor: '#E6E6E6',
        // borderBottomWidth: 1,
        // paddingBottom: 10,
        // marginBottom: 10,
        paddingVertical: 15,
        width: '100%',
        textAlign: 'left',
        
    },

    cardNo:{
        color: '#808080',
        fontWeight: '700',
        fontSize:18
    },

    cardView: {
        textAlign: 'left',
        width: '100%',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingBottom: 10
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