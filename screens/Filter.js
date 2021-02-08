//import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, CheckBox, AppRegistry, Platform } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import React, { Component } from 'react';
import Slider from '@react-native-community/slider';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Initial Value of slider
      sliderValue: 15
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.filterStyle}>
            <Text style={styles.titleStyle}> SELECT</Text>
            <View style={{ flexDirection: "row", width: '100%', }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>Services</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>Products</Text>
              </View>
            </View>

            <Text style={styles.titleStyle}> DISTANCE</Text>
            {/*Text to show slider value*/}
            <Text style={styles.headerText}>{this.state.sliderValue} km</Text>
            {/*Slider with max, min, step and initial value*/}
            <Slider
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#00c7e4"
              maximumTrackTintColor="#cccccc"
              thumbTintColor="#00c7e4"
              step={1}
              value={this.state.sliderValue}
              onValueChange={(sliderValue) => this.setState({ sliderValue })}
              style={{ width: 300, height: 30 }}
            />

            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Rating
                type='custom'
                ratingColor='#00C8E4'
                ratingBackgroundColor='#708c9a'
                ratingCount={5}
                startingValue={5}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5, marginStart: 12 }}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Rating
                type='custom'
                ratingColor='#00C8E4'
                ratingBackgroundColor='#708c9a'
                ratingCount={5}
                startingValue={4}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 4, marginStart: 12 }}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Rating
                type='custom'
                ratingColor='#00C8E4'
                ratingBackgroundColor='#708c9a'
                ratingCount={5}
                startingValue={3}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5, marginStart: 12 }}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Rating
                type='custom'
                ratingColor='#00C8E4'
                ratingBackgroundColor='#708c9a'
                ratingCount={5}
                startingValue={2}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5, marginStart: 12 }}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Rating
                type='custom'
                ratingColor='#00C8E4'
                ratingBackgroundColor='#708c9a'
                ratingCount={5}
                startingValue={1}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5, marginStart: 12 }}
              />
            </View>

            <Text style={styles.titleStyle}>SELECT PLACE</Text>
            <View style={{ flexDirection: "row", width: '100%', }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>At Shop</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>At Home</Text>
              </View>
            </View>
            <Text style={styles.titleStyle}>SERVICE</Text>

            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Text style={styles.myBold}>Cosmetic Clinics</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Text style={styles.myBold}>Dental Clinics</Text>
            </View>

            <View style={{ marginStart: 30 }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>Dental Implants</Text>
              </View>
            </View>
            <View style={{ marginStart: 30 }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>Cosmetic Dentistry</Text>
              </View>
            </View>
            <View style={{ marginStart: 30 }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>Bone Grafting</Text>
              </View>
            </View>
            <View style={{ marginStart: 30 }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                //style={styles.checkbox}
                />
                <Text style={styles.myMargin}>Gum Disease Treatment</Text>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Text style={styles.myBold}>Dermatology Clinics</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
              //value={isSelected}
              //onValueChange={setSelection}
              //style={styles.checkbox}
              />
              <Text style={styles.myBold}>Beauty Saloons</Text>
            </View>
          </View>
          <View style={styles.fixToText}>
            <TouchableOpacity style={styles.filterBtn}
              //onPress={() => Alert.alert('Clear')}
              >
              <Text style={{ color: '#62747e', fontWeight: 'bold', fontSize: 16 }}> CLEAR </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterBtn}
              onPress={() => navigation.goBack()}>
              <Text style={{ color: '#01c9e3', fontWeight: 'bold' }}> APPLY </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>


    );

  }
}
export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',

  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 42
  },
  myMargin: {
    paddingLeft: 15,
    color: '#3c3c3c'
  },
  myBold: {
    paddingLeft: 15,
    fontWeight: 'bold',
    color: '#3c3c3c'
  },
  filterStyle: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    //marginRight:6,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 12
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },

  titleStyle: {
    width: '100%',
    fontSize: 20,
    fontWeight: '500',
    paddingStart: 10,
    marginBottom: 15,
    marginTop: 15,
    color: '#3c3c3c'
  },
  fixToText: {
    flexDirection: 'row',
    width: '100%',
    borderTopColor: '#cccccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  filterBtn: {
    width: '50%',
    backgroundColor: '#ffffff',
    padding: 10,
    alignItems: 'center',
    borderRightColor: '#cccccc',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    margin: 5,
    color: '#3c3c3c',
    fontWeight: "500",
    width:'80%'
  },


});