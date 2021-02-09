import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, TextInput, Image, Button, ImageBackground } from 'react-native';

import axios from "axios";
import FormData from "form-data";
import { connect } from 'react-redux';
import * as actions from '../actions';
// const VerifyOtp = ({ navigation }) => {
class VerifyOtp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      response_data: props.response_data
    }
  }

  componentDidMount() {
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.response_data !== prevState.response_data) {
      return { response_data: nextProps.response_data };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    var mobileNo = this.props.route.params.mobileNo;
    if(prevProps.response_data !== this.props.response_data) {
      this.setState({response_data: this.props.response_data})
      this.props.navigation.navigate('ResetPassword', { mobileNo});
    }
  }
  handleSubmit = (mobileNo) => {
    var data = new FormData();
    if (this.state.otp == "") {
      alert("Please Enter the OTP")
    } else {
      let data = new FormData();
      data.append('phone', mobileNo);
      data.append('otp', this.state.otp);
      this.props.verifyOtp(data);
      // data.append('phone', mobileNo);
      // data.append('otp', this.state.otp);
      // var BASE_URl = 'http://testing.demo2server.com/careapp/carcare/api/v1/';
      // var config = {
      //   method: 'post',
      //   url: BASE_URl + 'user-check-otp',
      //   data: data
      // };
      // var me = this;
      // axios(config)
      //   .then(function (response) {
      //     console.log(response.data);
      //     if (response.data) {
      //       if (response.data.status) {
      //         me.props.navigation.navigate('ResetPassword', { mobileNo })
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
    const { navigation } = this.props;

    const mobileNo = this.props.route.params.mobileNo
    const y = this.props.route.params.otp
    return (
      <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/bg.png')}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={{
                width: 140,
                height: 140,
                marginTop: '20%'
              }}
              resizeMode={'cover'}
              source={require('../assets/pic_icon_otp.png')}
            />
            <Text
              style={{
                fontSize: 18,
                marginBottom: 8,
                marginTop: 56,
                fontWeight: 'bold'
              }}>Verify Your Number</Text>
            <Text
              style={{
                marginStart: 8,
                marginBottom: 24,
                color: '#4D4D4D',
                marginTop: 13,
                marginEnd: 32,
                marginStart: 32,
              }}
            >OTP has been sent to your mobile number. Please Verify</Text>
            <TextInput style={styles.textInput}
              placeholder="Enter OTP"
              onChangeText={text => this.setState({ otp: text })}
            />
            <Text
              style={{
                color: "#00C8E4",
                marginTop: 10,
              }}>
              Resend in 60 Seconds
                      </Text>
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
                title="Verify"
                color="#00C8E4"
                onPress={() =>
                  // navigation.navigate('SelectService')
                  this.handleSubmit(mobileNo)
                }
              />
            </View>

            <StatusBar style="auto" />
          </View>

        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response_data: state.userCheckReducer.response_data
  }
}
export default connect(mapStateToProps, actions.allActions)(VerifyOtp);


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    //backgroundColor: '#FFFFFF',
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


