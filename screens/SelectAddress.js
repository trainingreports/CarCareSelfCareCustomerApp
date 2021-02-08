import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import { Card, Icon, CheckBox, colors, } from 'react-native-elements';

class SelectAddress extends React.Component {

    render() {
        //const [selectedValue, setSelectedValue] = useState("java");
        const navigation = this.props.navigation;
        return (

            <View style={styles.container}>
                <ScrollView style={{ width: '100%', paddingHorizontal: 15, }}>
                    <StatusBar style="auto" />
                    <View style={{ alignItems: 'center', width: '100%' }}>

                        <View style={[styles.socialButtonContainer, { backgroundColor: '#FFFFFF' }]}>
                            <TouchableOpacity style={styles.centerAlign}
                                onPress={() => navigation.navigate('AddAddress')}>
                                <Image style={styles.socialIcon} source={require('../assets/icons/add_address.png')} />
                                <Text style={styles.textButtonSocial}>Add New Address</Text>
                            </TouchableOpacity>
                        </View>

                        <Card
                            containerStyle={styles.cardWhite}>
                            <View style={styles.boxStyle}>
                                <Text style={styles.titalStyle}>HOME</Text>
                                <CheckBox
                                    left
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                //checked={true}
                                />
                            </View>
                            <Card.Divider />
                            <View style={styles.textStyles}>
                                <Text>A-48, External Information Department, PO Box 17, Abu Dhabi, UAE</Text>
                            </View>
                        </Card>

                        <Card
                            containerStyle={styles.cardColor}>
                            <View style={styles.boxStyle}>
                                <Text style={[styles.titalStyle, { color: '#ffffff' }]}>OFFICE</Text>
                                <CheckBox
                                    left
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={true}
                                    checkedColor='#ffffff'
                                />
                            </View>
                            <Card.Divider style={{ backgroundColor: '#ffffff' }} />
                            <View style={styles.textStyles}>
                                <Text style={{ color: '#ffffff' }}>A-48, External Information Department, PO Box 17, Abu Dhabi, UAE</Text>
                            </View>
                        </Card>
                        <Card
                            containerStyle={styles.cardWhite}>
                            <View style={styles.boxStyle}>
                                <Text style={styles.titalStyle}>BILLA HOUSE</Text>
                                <CheckBox
                                    left
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                //checked={true}
                                />
                            </View>
                            <Card.Divider />
                            <View style={styles.textStyles}>
                                <Text>A-48, External Information Department, PO Box 17, Abu Dhabi, UAE</Text>
                            </View>
                        </Card>
                    </View>
                </ScrollView>

                <View style={styles.bottomView}>
                    <TouchableOpacity
                     onPress={() => { navigation.navigate("OrderSummary") }}>
                        <Text style={styles.textStyle}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

}
export default SelectAddress;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20,
        width: 200,
        width: '100%'
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

    cardWhite: {
        borderRadius: 4,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        padding: 0,
        width: '100%',

    },
    cardColor: {
        borderRadius: 4,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        padding: 0,
        width: '100%',
        backgroundColor: '#00C8E4',
        color: '#ffffff'
    },

    styleCard: {
        borderRadius: 4,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        padding: 0,
        width: '100%',
        backgroundColor: '#00C8E4',
        color: '#ffffff'
    },
    textStyle: {
        color: '#00C8E4',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textButtonSocial: {
        textAlign: 'center',
        marginStart: 8
    },
    socialButtonContainer: {
        width: "100%",
        margin: 8,
        backgroundColor: "#3B5998",
        padding: 10,
        borderRadius: 4,
    },
    centerAlign: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        width: 16,
        height: 16
    },

    boxStyle: {
        width: '100%',
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    titalStyle: {
        marginStart: 15,
        fontWeight: 'bold'
    },
    textStyles: {
        paddingHorizontal: 15,
        paddingBottom: 15,

    }



});

