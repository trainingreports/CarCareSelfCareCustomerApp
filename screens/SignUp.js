
import { StatusBar } from 'expo-status-bar';
import { CheckBox } from 'react-native-elements'
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, SafeAreaView, FlatList, Image, Rating, AirbnbRating } from 'react-native';
import axios from "axios";
import FormData from "form-data";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailExist: false,
      isNumberExist: false,
      checked: false,
      name: "",
      businessName: "",
      email: "",
      mobileNumber: "",
      vertical: "",
      cr_number: "",
      city: "",
      country: "",
      password: "",
      signup_data: props.signup_data
    }
  }

  checkEmailId = () => {
    var data = new FormData();
    data.append('email', this.state.email);

    var BASE_URl = 'http://testing.demo2server.com/careapp/carcare/api/v1/';

    var config = {
      method: 'post',
      url: BASE_URl + 'check-email',
      data: data
    };
    var me = this;
    axios(config)
      .then(function (response) {
        if (response.data) {
          console.log(response.data.status)
          if (response.data.status) {
            me.setState({ isEmailExist: false })
          } else {
            me.setState({ isEmailExist: true })
          }
        } else {
          alert("Something went wrong!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  checkMobileNumber = () => {
    var data = new FormData();
    data.append('phone', this.state.mobileNumber);

    var BASE_URl = 'http://testing.demo2server.com/careapp/carcare/api/v1/';

    var config = {
      method: 'post',
      url: BASE_URl + 'check-phone',
      data: data
    };
    var me = this;
    axios(config)
      .then(function (response) {
        if (response.data) {
          console.log(response.data.status)
          if (response.data.status) {
            me.setState({ isNumberExist: false })
          } else {
            me.setState({ isNumberExist: true })
          }
        } else {
          alert("Something went wrong!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.signup_data !== prevState.signup_data) {
      return {signup_data: nextProps.signup_data}
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    this.props.navigation.navigate('App');

    if (prevProps.signup_data !== this.props.signup_data)
    {
      alert("Sign Up successfully!");
      this.setState({signup_data: this.props.signup_data})
      this.props.navigation.navigate('App');
    }
  }
  submitHandle = () => {
    var data = new FormData();
    const {name, password, checked, mobileNumber, email, city, country} = this.state;
    if (name == "") {
      alert("please ender the name")
    }
    else if (email == "") {
      alert("please ender the email")
    }
    else if (mobileNumber == "") {
      alert("please ender the mobileNumber")
    }
    else if (city == "") {
      alert("please ender the city")
    }
    else if (country == "") {
      alert("please ender the country")
    }
    else if (password == "") {
      alert("please ender the password")
    }
    else if (!checked) {
      alert("Please Select Privacy Policy Checkbox")
    }
    else {
      this.props.signup_user(name, email, mobileNumber, city, country, password);
      // data.append('name', this.state.name);
      // data.append('email', this.state.email);
      // data.append('phone', this.state.mobileNumber);
      // data.append('city', this.state.city);
      // data.append('country', this.state.country);
      // data.append('password', this.state.password);

      // var BASE_URl = 'http://testing.demo2server.com/careapp/carcare/api/v1/';

      // var config = {
      //   method: 'post',
      //   url: BASE_URl + 'user-sign-up',
      //   data: data
      // };
      // var me = this;
      // axios(config)
      //   .then(function (response) {
      //     if (response.data) {
      //       if (response.data.status) {
      //         alert(Response.data)
      //         me.props.navigation.navigate("App");
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
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        resizeMode={'cover'}
        source={require('../assets/imgs/login/bg.png')}
      >
        <View>
          <View style={styles.container}>
            <Text style={styles.textHeading}> Sign Up </Text>
            <Text style={styles.textLabel}> Name </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Name"
              onChangeText={text => this.setState({ name: text })}
            />
            <Text style={styles.textLabel}> Email </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
              keyboardType='email-address'
              maxLength={180}
              onSubmitEditing={() => this.checkEmailId()}
              onBlur={() => this.checkEmailId()}
              onChangeText={text => this.setState({ email: text, isEmailExist: false })}
            />
            {this.state.isEmailExist ? <Text style={styles.textError}> Entered Email-Id already exist. </Text> : null}


            <Text style={styles.textLabel}> Mobile Number </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Mobile Number"
              textInput='number'
              maxLength={10}
              keyboardType='numeric'
              onSubmitEditing={() => this.checkMobileNumber()}
              onBlur={() => this.checkMobileNumber()}
              onChangeText={text => this.setState({ mobileNumber: text, isNumberExist: false })}
            />
            {this.state.isNumberExist ? <Text style={styles.textError}> Entered number already exist. </Text> : null}

            <Text style={styles.textLabel}> City </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter City"
              onChangeText={text => this.setState({ city: text })}
            />
            <GooglePlacesAutocomplete
              styles={{
                height: 40,
                width: "94%",
                padding: 10,
                borderRadius: 4,
                borderColor: '#FFFFFF',
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
              }}
              placeholder='Search'
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyCFQLTuUjypDxVC2xtm1yUu0GH10xGNbaA',
                language: 'en',
              }}
            />
            <Text style={styles.textLabel}> Country </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Country"
              onChangeText={text => this.setState({ country: text })}
            />

            <Text style={styles.textLabel}> Passowrd </Text>
            <TextInput
              style={styles.textInput}
              keyboardType='visible-password'
              placeholder="Enter Passowrd"
              onChangeText={text => this.setState({ password: text })}
            />

            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
              width: '90%'
            }}>
              <Text>
                <CheckBox
                  // checkedIcon={<image source={require('../assets/checked.png')} />}
                  // uncheckedIcon={<image source={require('../assets/unchecked.png')} />}
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: "#444",
                  fontWeight: 'bold',
                }}>
                I agree to<Text style={{ color: "#00C8E4" }}> Terms & Conditions</Text> of Self Care & Car Care
                </Text>
            </View>

            <View style={[{
              width: "94%",
              marginStart: 10,
              marginEnd: 10,
              marginTop: 24,
              marginBottom: 16,
              backgroundColor: "#00C8E4",
              borderRadius: 6,
            }]}>
              <Button
                title="Sign Up"
                color="#00C8E4"
                onPress={() => this.submitHandle()}
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                marginBottom: 16,
                color: "#808080"
              }}>Sign in with Social Account</Text>


            <View style={styles.buttonContainer}>
              <View style={styles.socialButtonContainer}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../assets/2-Login/fb.png')} />
                  <Text style={[styles.textButtonSocial, { color: '#FFFFFF' }]}>Facebook</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.socialButtonContainer, { backgroundColor: '#FFFFFF' }]}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../assets/2-Login/goolge.png')} />
                  <Text style={styles.textButtonSocial}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 16,
                marginBottom: 48,
                marginTop: 32,
                color: "#1A1A1A"
              }}>Already have an account?
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                <Text style={{ color: "#00C8E4" }}> Sign In </Text>
              </TouchableOpacity>
            </Text>
            <StatusBar style="auto" />
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    signup_data: state.signupReducer.signup_data
  }
}
export default connect(mapStateToProps, actions.allActions)(SignUp);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  logo: {
    width: 66,
    height: 58,
  },
  socialIcon: {
    width: 16,
    height: 16
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textError: {
    fontSize: 11,
    alignSelf: 'flex-end',
    marginEnd: 6,
    marginTop: 2,
    color: 'red',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 18,
    marginStart: 16,
    marginBottom: 16,
    marginTop: 42,
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
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },
  textButtonSocial: {
    textAlign: 'center',
    marginStart: 8
  },
  socialButtonContainer: {
    width: "44%",
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
