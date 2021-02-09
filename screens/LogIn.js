
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, ActivityIndicator, Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import axios from "axios";
import FormData from "form-data";
import { connect } from 'react-redux';
import * as actions from '../actions';
class Login extends React.Component {

  constructor(props) {
    super();
    
    this.state = {
      isLogin: false,
      email: "",
      password: "",
      user_data: props.user_data
    }
  }

  componentDidMount() {
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.user_data !== prevState.user_data) {
      return {
        user_data: nextProps.user_data
      }
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {

    if(prevProps.user_data !== this.props.user_data){
      this.setState({ user_data: this.props.user_data});
      this.props.navigation.navigate("App");
    }
  }     
  handleSubmit = () => {
    // var data = new FormData();
    if (this.state.email == "") {
      alert("Please Ender the Email-Id")
    } else if (this.state.password == "") {
      alert("Please Ender the Password")
    } else {
      let data = new FormData();
      data.append('email', this.state.email);
      data.append('password', this.state.password);
      this.props.userLogin(data);
      // data.append('email', this.state.email);
      // data.append('password', this.state.password);
      // var BASE_URl = 'http://testing.demo2server.com/careapp/carcare/api/v1/';
      // var config = {
      //   method: 'post',
      //   url: BASE_URl + 'user-login',
      //   data: data
      // };
      // var me = this;
      // axios(config)
      //   .then(function (response) {
      //     if (response.data) {
      //       if (response.data.status) {
      //         console.log(response.data);
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
      <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/bg.png')}>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar style="auto" />

            <Image
              style={styles.logo}
              resizeMode={'cover'}
              source={require('../assets/logo.png')}
            />

            <Text style={styles.textHeading}>Sign In</Text>

            <Text style={styles.textLabel}>Email</Text>
            <TextInput style={styles.textInput}
              placeholder="Email Address"
              onChangeText={text => this.setState({ email: text })}
            />

            <Text style={styles.textLabel}>Password</Text>
            <TextInput style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => this.setState({ password: text })}
            />

            <TouchableOpacity onPress={() => { navigation.navigate("ForgetPassword") }}>
              <Text style={styles.textForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.buttonSignIn}>
              <Button title="Sign In" color="#00C8E4"
                onPress={() => {
                  this.handleSubmit();
                  // navigation.navigate('Main')
                  //navigation.navigate('SelectAppointmentDateTime')
                }}
              />
            </View>

            <Text style={styles.textSocialLogIn}>Sign in with Social Account</Text>

            <View style={[styles.buttonContainer,]}>
              <View style={[styles.socialButtonContainer, {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                elevation: 2
              }]}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../assets/2-Login/fb.png')} />
                  <Text style={[styles.textButtonSocial, { color: '#FFFFFF' }]}>Facebook</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.socialButtonContainer, {
                backgroundColor: '#FFFFFF',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                elevation: 2
              }]}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../assets/2-Login/goolge.png')} />
                  <Text style={styles.textButtonSocial}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    // onPress={this._signIn}
    // disabled={this.state.isSigninInProgress} 
    /> */}
            <Text style={styles.textLogInwithSocail}>Don't have an account?</Text>

            <View style={styles.buttonSignUp}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user_data: state.userLoginReducer.user_data
  }
}
export default connect(mapStateToProps, actions.allActions)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 42
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 18,
    marginStart: 16,
    marginTop: 8,
    fontWeight: 'bold'
  },
  textButtonSocial: {
    textAlign: 'center',
    marginStart: 8
  },
  socialButtonContainer: {
    width: "38%",
    margin: 8,
    backgroundColor: "#3B5998",
    padding: 10,
    borderRadius: 4,
  },
  textLabel: {
    textAlign: 'left',
    marginStart: 8,
    marginBottom: 8,
    color: '#4D4D4D',
    marginTop: 16,
    fontWeight: 'bold',
    width: "80%",
  },
  textSocialLogIn: {
    fontSize: 16,
    marginBottom: 16,
    color: "#808080"
  },
  textLogInwithSocail: {
    fontSize: 16,
    marginBottom: 16,
    marginTop: 42,
    color: "#1A1A1A"
  },
  buttonSignUp: {
    width: "80%",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 8,
    marginBottom: 50,
    backgroundColor: "#fff",
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2

  },
  centerAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: "80%",
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  textSignUp: {
    padding: 10,
    textAlign: 'center',
    fontWeight: '500',
    color: '#00C8E4'
  },
  buttonSignIn: {
    width: "80%",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: "#00C8E4",
    borderRadius: 4,
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
  textForgotPassword: {
    marginBottom: 16,
    marginTop: 16,
    color: '#4D4D4D',
    fontWeight: 'bold',
  },
});

