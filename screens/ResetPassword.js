import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, TextInput, Image, Button, ImageBackground } from 'react-native';

import axios from "axios";
import FormData from "form-data";
import { connect } from 'react-redux';
import * as actions from '../actions';

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            passowrd: "",
            confirmPassowrd: "",
            reset_password: props.reset_password
        }
    }

    componentDidMount() {
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.reset_password !== prevState.reset_password) {
            return { reset_password: nextProps.reset_password }
        }
        return null;
      }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.reset_password !== this.props.reset_password) {
            this.props.navigation.navigate('Login');
            this.setState({reset_password : this.props.reset_password});
        }
    }
    handleSubmit = (mobileNo) => {
        var data = new FormData();
        if (this.state.passowrd == "") {
            alert("Please Enter the password")
        } else if (this.state.confirmPassowrd == "") {
            alert("Please Enter the confirm password")
        }  else if (this.state.passowrd !== this.state.confirmPassowrd) {
            alert("Entered Password not match")
        } else {
            this.props.resetPwd(mobileNo, this.state.passowrd);
            // data.append('phone', mobileNo);
            // data.append('password', this.state.passowrd);
            // var BASE_URl = 'http://testing.demo2server.com/careapp/carcare/api/v1/';
            // var config = {
            //     method: 'post',
            //     url: BASE_URl + 'user-reset-password',
            //     data: data
            // };
            // var me = this;
            // axios(config)
            //     .then(function (response) {
            //         // console.log(response.data);
            //         if (response.data) {
            //             if (response.data.status) {
            //                 me.props.navigation.navigate('Login')
            //             } else {
            //                 alert(response.data.message);
            //             }
            //         } else {
            //             alert("Something went wrong!");
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        }
    }

    render() {
        const { navigation } = this.props;
        const mobileNo = this.props.route.params.mobileNo
        return (
            <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/bg.png')} >
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                                marginTop: '20%'
                            }}
                            resizeMode={'cover'}
                            source={require('../assets/logo.png')}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                marginBottom: 16,
                                marginTop: 40,
                                fontWeight: 'bold'
                            }}>Reset Password?</Text>
                        <Text
                            style={{
                                textAlign: 'left',
                                marginStart: 8,
                                marginBottom: 8,
                                color: '#4D4D4D',
                                marginTop: 16,
                                fontWeight: 'bold',
                                width: "94%",
                            }}
                        >New Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter New Password"
                            onChangeText={text => this.setState({ passowrd: text })}
                        />
                        <Text
                            style={{
                                textAlign: 'left',
                                marginStart: 8,
                                marginBottom: 8,
                                color: '#4D4D4D',
                                marginTop: 16,
                                fontWeight: 'bold',
                                width: "94%",
                            }}
                        >Confirm New Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Confirm New Password"
                            onChangeText={text => this.setState({ confirmPassowrd: text })}
                        />
                        <View style={{
                            width: "94%",
                            marginStart: 10,
                            marginEnd: 10,
                            marginTop: 24,
                            marginBottom: 16,
                            backgroundColor: "#00C8E4",
                            borderRadius: 4,
                        }}>
                            <Button
                                title="Update Password"
                                color="#00C8E4"
                                onPress={() =>
                                    // navigation.navigate('VerifyOtp')
                                    this.handleSubmit(mobileNo)
                                }
                            />
                        </View>

                        <StatusBar style="auto" />
                    </View>
                </ScrollView>
            </ImageBackground >
        )
    }
}

const mapStateToProps = (state) => {
    return {
      reset_password: state.resetPwdReducer.reset_password 
    }
  }
export default connect(mapStateToProps, actions.allActions)(ResetPassword);  

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        //backgroundColor: '#E6E6E6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    logo: {
        width: 66,
        height: 58,
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
    textHeading: {
        width: '47%',
        fontSize: 18,
        marginStart: 16,
        marginBottom: 16,
        marginTop: 32,
        fontWeight: 'bold'
    },
    textLabel: {
        textAlign: 'left',
        marginStart: 8,
        marginBottom: 8,
        color: '#4D4D4D',
        marginTop: 16,
        fontWeight: 'bold',
        width: "94%",
    },
    textInput: {
        height: 40,
        width: "94%",
        padding: 10,
        borderRadius: 4,
        borderColor: 'gray',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
    },

    buttonStyle: {
        width: "46%",
        marginEnd: 8,
        backgroundColor: "#00C8E4",
        borderRadius: 40,
    },
    buttonStyleWhite: {
        width: "46%",
        marginEnd: 8,
        backgroundColor: "#E6E6E6",
        borderRadius: 40,
    },
    containerList: {
        width: "100%",
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        width: "92%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    textBorder: {
        width: "50%",
        fontSize: 11,
        color: '#333333',
        fontWeight: 'bold',
        marginTop: 4,
        marginEnd: 4,
        marginStart: 4,
        borderRadius: 4,
        borderColor: '#E6E6E6',
        borderWidth: 1, padding: 4
    },
});