import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, TextInput, Image, Button, ImageBackground } from 'react-native';

import axios from "axios";
import FormData from "form-data";
import { connect } from 'react-redux';
import * as actions from '../actions';
// const ForgotPassword = ({ navigation }) => {
class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileNo: "",
      recover_pwd: props.recover_pwd
    }
  }

  componentDidMount() {
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.recover_pwd!== prevState.recover_pwd) {
      return {
        recover_pwd: nextProps.recover_pwd
      }
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    var mobileNo = this.state.mobileNo;
    if(prevProps.recover_pwd !== this.props.recover_pwd) {
      this.setState({recover_pwd: this.props.recover_pwd})
      this.props.navigation.navigate('VerifyOtp', { mobileNo, otp: this.props.recover_pwd });
    }
      
  }
  handleSubmit = () => {
    var data = new FormData();
    if (this.state.mobileNo == "") {
      //this.state.name.error = "please ender the name";
      alert("Please Enter the Mobile No.")
    } else {
      var mobileNo = this.state.mobileNo
      // this.props.userForgotPwd(mobileNo);  //this is real server data
      data.append('phone', this.state.mobileNo);
      this.props.userForgotPwd(data);
      // var BASE_URl = 'http://testing.demo2server.com/careapp/carcare/api/v1/';
      // var config = {
      //   method: 'post',
      //   url: BASE_URl + 'user-forgot-password',
      //   data: data
      // };
      // var me = this;
      // axios(config)
      //   .then(function (response) {
      //     console.log(response.data);
      //     if (response.data) {
      //       if (response.data.status) {
      //         me.props.navigation.navigate('VerifyOtp', { mobileNo, otp: response.data.data })
      //       } else {
      //         alert(response.data.message);
      //       }
      //     } else {
      //       alert("Something went wrong!");
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }

  render() {
    const navigation = this.props.navigation;
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
              source={require('../assets/pic-icon.png')}
            />
            <Text
              style={{
                fontSize: 18,
                marginBottom: 16,
                marginTop: 40,
                fontWeight: 'bold'
              }}>Forgot Password?</Text>
            <Text
              style={{
                marginStart: 8,
                marginBottom: 8,
                marginBottom: 24,
                color: '#4D4D4D',
              }}
            >Enter your registered mobile numberto receive your password reset instriction</Text>
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
            >Mobile No.</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Mobile Number"
              defaultValue=""
              onChangeText={text => this.setState({ mobileNo: text })}
            />
            <View style={[{
              width: "94%",
              marginStart: 10,
              marginEnd: 10,
              marginTop: 24,
              marginBottom: 16,
              backgroundColor: "#00C8E4",
              borderRadius: 4,
            }]}>
              <Button
                title="Recover Password"
                color="#00C8E4"
                onPress={() =>
                  this.handleSubmit()
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
    recover_pwd: state.forgotPwdReducer.recover_pwd ? state.forgotPwdReducer.recover_pwd : ""
  }
}
export default connect(mapStateToProps, actions.allActions)(ForgotPassword);

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
    borderColor: '#ffffff',
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
