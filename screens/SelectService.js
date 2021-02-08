import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, Image, ImageBackground, CheckBox } from 'react-native';

class SelectService extends React.Component {

    render() {
        const navigation = this.props.navigation;
        return (
            <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/bg.png')}>
                <ScrollView>
                    <View style={styles.container}>
                        <StatusBar style="auto" />
                        <Image style={styles.logo} resizeMode={'cover'} source={require('../assets/app-icon.jpg')} />

                        <Text style={styles.textLabel}>Select Service</Text>

                        <ImageBackground style={styles.imageBacgroundStyle} resizeMode={'cover'} source={require('../assets/pic_self_care.png')}>
                            <View style={styles.viewRowStyle}>
                                <CheckBox style={{ margin: 10 }}
                                // onClick={() => {
                                //   this.setState({
                                //     isChecked: !this.state.isChecked
                                //   })
                                // }}
                                // isChecked={this.state.isChecked}
                                // leftText={"CheckBox"}
                                />
                                <Text style={{ color: "#FFFFFF" }}>Self Care</Text>
                            </View>
                        </ImageBackground>

                        <ImageBackground style={styles.imageBacgroundStyle}
                            resizeMode={'cover'}
                            source={require('../assets/pic_car_care.png')}
                        >
                            <View style={styles.viewRowStyle}>
                                <CheckBox style={{ margin: 10 }}
                                // onClick={() => {
                                //   this.setState({
                                //     isChecked: !this.state.isChecked
                                //   })
                                // }}
                                // isChecked={this.state.isChecked}
                                // leftText={"CheckBox"}
                                />
                                <Text style={{ color: "#FFFFFF" }}>Car Care</Text>
                            </View>
                        </ImageBackground>

                        <View style={{
                            width: "94%",
                            marginTop: 24,
                            marginBottom: 56,
                            backgroundColor: "#FFFFFF",
                            borderRadius: 4,
                        }}>
                            <Button title="Continue"
                                color="#00C8E4"
                                onPress={() => navigation.navigate('App')} />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground >
        );
    }
}

export default SelectService;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        //backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:32
    },
    logo: {
        width: 140,
        height: 140,
        marginTop: 26
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    textLabel: {
        fontSize: 18,
        marginBottom: 8,
        marginTop: 16,
        fontWeight: 'bold'
    },
    imageBacgroundStyle: {
        width: "94%",
        height:120,
        marginTop: 26,
        borderRadius: 8
    },
    viewRowStyle: {
        alignItems: 'center',
        height: "100%",
        marginStart: 16,
        flexDirection: "row",
        
    },

});