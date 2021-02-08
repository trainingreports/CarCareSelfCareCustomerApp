import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, Modal, TouchableHighlight, FlatList } from 'react-native';
import React, { Component } from "react";
import { Avatar } from 'react-native-elements';
import { ListView } from 'react-native';
//import { Card, Icon, CheckBox, } from 'react-native-elements';

const modalVisible = false

class RateReview extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        //const [selectedValue, setSelectedValue] = useState("java");
        const { modalVisible } = this.state;

        return (
            <ScrollView style={{ width: '100%' }}>
                {/* <View style={styles.container}>
<StatusBar style="auto" />
</View>     */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Rate & Review</Text>

                                <View style={styles.buttonContainer}>
                                    <Avatar
                                        containerStyle={{ borderColor: '#FFFFFF', borderWidth: 4, }}
                                        size="large"
                                        rounded
                                        source={require('../assets/16-Menu/profile_pic.png')}
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.textLabel}>Union Square Dental </Text>
                                        <Text>Sharjah - Dubai</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 30,marginRight:10 }}
                                        resizeMode={'contain'}
                                        source={require('../assets/30.8-Rate-Review/star_fill_2.png')}
                                    />
                                    <Image style={{ width: 30,marginRight:10 }}
                                        resizeMode={'contain'}
                                        source={require('../assets/30.8-Rate-Review/star_fill_2.png')}
                                    />
                                    <Image style={{ width: 30,marginRight:10 }}
                                        resizeMode={'contain'}
                                        source={require('../assets/30.8-Rate-Review/star_fill_2.png')}
                                    />
                                    <Image style={{ width: 30,marginRight:10 }}
                                        resizeMode={'contain'}
                                        source={require('../assets/30.8-Rate-Review/star_fill_2.png')}
                                    />
                                    <Image style={{ width: 30 }}
                                        resizeMode={'contain'}
                                        source={require('../assets/30.8-Rate-Review/star_gray.png')}
                                    />
                                </View>
                                <Text>Excellent</Text>
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="Write your comments here..."
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                />
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Submit</Text>
                                </TouchableHighlight>
                            </View>
                        </View> 

                      
                    </Modal>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    >
                        <Text style={styles.textStyle}>Show Modal</Text>
                    </TouchableHighlight>


                </View>

                {/* <TouchableOpacity style={{ width: 50, position: "absolute", right: 15, bottom: 0, zIndex: 1 }}

                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Image style={{ width: 50 }}
                        resizeMode={'contain'}
                        source={require('../assets/filter.png')}
                    />
                </TouchableOpacity> */}
            </ScrollView>

        );
    }

}
export default RateReview;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: "100%"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
    },
     
    openButton: {
        backgroundColor: "#00c8e4",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "left",
        width: "100%",
        paddingHorizontal: 30,
        width: "100%"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "left",
        fontSize: 22,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        width: "100%",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    textArea: {
        width: "100%",
        height: 100,
        justifyContent: "flex-start",
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        marginBottom: 15,
        marginTop: 15,
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: "#cccccc"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1

    },
    textLabel: {
        textAlign: 'left',
        color: '#000000',
        width: "100%",
        fontSize: 16,
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});