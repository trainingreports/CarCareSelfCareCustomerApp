//import React from 'react';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, Picker, Switch, Modal, TouchableHighlight, } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
//import React, { Component } from "react";

class AddAddress extends React.Component {

    render() {
        //const [selectedValue, setSelectedValue] = useState("java");
        const navigation = this.props.navigation;
        return (

            <View style={styles.container}>
                <ScrollView style={{ width: '100%', paddingHorizontal: 15 }}>
                    <StatusBar style="auto" />
                    <Text style={styles.titleStyle}>Add Address</Text>

                    <Text style={styles.textLabel}>Title</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Titel"
                    //onChangeText={text => this.setState({ password: text })}
                    />
                    <Text style={styles.textLabel}>City</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter City"
                    //onChangeText={text => this.setState({ password: text })}
                    />
                    <Text style={styles.textLabel}>State</Text>
                    <Picker style={[styles.textInput, { paddingEnd: 8, borderColor: '#ffffff' }]}
                        //selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}                        >
                        <Picker.Item label="Select State" value="Select State" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Text style={styles.textLabel}>Street <Text style={{ color: '#cccccc' }}>(Include House Number)</Text></Text>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Street"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                    <View style={{ marginBottom: 60, flexDirection: 'row', justifyContent:'space-between' }}>
                        <Text style={{
                            textAlign: 'left',
                            marginStart: 8,
                            marginBottom: 8,
                            color: '#4D4D4D',
                            fontWeight: 'bold',
                        }}>Set as default</Text>
                        <Switch
                            style={{ alignSelf: 'flex-end' }}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                        //onValueChange={toggleSwitch}
                        //value={isEnabled}
                        />
                    </View>

                </ScrollView>



                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.textStyle}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

}
export default AddAddress;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleStyle: {
        width: '100%',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 15,
        marginTop: 15,
        color: '#3c3c3c',
    },
    textInput: {
        height: 40,
        width: "100%",
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        marginBottom: 15,
    },
    textLabel: {
        textAlign: 'left',
        marginStart: 8,
        marginBottom: 8,
        color: '#4D4D4D',
        //marginTop:10,
        fontWeight: 'bold',
        width: "100%",
    },
    textArea: {
        width: "100%",
        height: 150,
        justifyContent: "flex-start",
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        marginBottom: 15,
        textAlignVertical: 'top'
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
    textStyle: {
        color: '#00C8E4',
        fontSize: 18,
        fontWeight: 'bold'
    },


});