import React from "react";
import { StyleSheet, Text, TextInput, Animated, FlatList, StatusBar, Image, TouchableOpacity, Dimensions, View, CheckBox } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Calendar } from 'react-native-calendars';
import { ScrollView } from "react-native-gesture-handler";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const { width, height } = Dimensions.get("screen");

const images = [
    {
        uri: "https://images.unsplash.com/photo-1573914801487-b7f3ac3ded18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
        name: "Dr. Arman"
    },
    {
        uri: "https://images.unsplash.com/photo-1573914801487-b7f3ac3ded18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
        name: "Dr. Arman"
    },
    {
        uri: "https://images.unsplash.com/photo-1573914801487-b7f3ac3ded18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
        name: "Dr. Arman"
    }
];

var radio_props = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
];


class SelectAppointmentDateTime extends React.Component {

    state = {
        serviceData: [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba23423sdf',
                title: 'First Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63234234dsf',
                title: 'Second Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
            {
                id: '586sdfsd94a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
        ],
        isDateTimePickerVisible: false,

    }

    renderItem1 = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text>10:00 AM - 10:30 AM</Text>
                <CheckBox></CheckBox>
            </View >
        )
    }

    renderItem = ({ item, idx }) => {
        return (
            <TouchableOpacity activeOpacity={1} style={{ margin: 0 }} onPress={() => { }}>
                <Image style={{ width: width / 4, height: width / 4, borderRadius: 10 }} source={{ uri: item.uri }} />
                <Text style={{ textAlign: "center", marginTop: 5 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <>
                <View style={styles.container}>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 12,}}>
                        <Image style={{ height: 40, width: 40, }} source={require('../assets/logo_pic5.png')} />
                        <View style={{ flex: 1, marginStart: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Union Square Dental</Text>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#B3B3B3' }}>AI Hamariya - Dubai</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginEnd: 4 }}>
                                    <Image style={{ height: 16, width: 16, marginEnd: 4 }} source={require('../assets/13.2-3-5-Car-Service-Profile/star_sky.png')} />
                                    <Text style={{ color: '#00C8E4', fontWeight: 'bold' }}>4.5</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        borderBottomColor: '#E6E6E6',
                        borderBottomWidth: 1,
                        width: '95%',
                        marginTop: 6,
                        marginBottom: 16,
                        alignSelf: 'center'
                    }}
                    />
                    <Animated.View>
                        <Carousel
                            data={images}
                            sliderWidth={width}
                            itemWidth={100}
                            inactiveSlideOpacity={0.75}
                            inactiveSlideScale={0.9}
                            renderItem={this.renderItem}
                        />
                    </Animated.View>

                    <Text style={{ fontSize:16, marginLeft: 10, marginVertical: 20, fontWeight: "bold", opacity: 0.5 }}>SELECT YOUR GENDER</Text>
                    <View style={{ marginStart: 8 }}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            buttonSize={12}
                            buttonColor='#00C8E4'
                            formHorizontal={true}
                            labelStyle={{ fontSize: 14, marginEnd: 32 }}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>
                    <Text style={{ fontSize: 16, marginLeft: 10, marginVertical: 20, fontWeight: "bold", opacity: 0.5 }}>CHOOSE DATE & TIME</Text>

                    <Calendar
                        // Initially visible month. Default = Date()
                        theme={{
                            monthTextColor: 'blue',
                        }}
                        monthTextColor='#00C8E4'
                        current={'2020-12-15'}
                        renderHeader={(date) => {/*Return JSX*/ }}
                        enableSwipeMonths={true}
                        markedDates={{
                            '2020-12-15': { textColor: 'green' },
                            '2020-12-12': { startingDay: true, color: 'green' },
                            '2020-12-05': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                            '2020-12-17': { disabled: true, startingDay: true, color: 'green', endingDay: true }
                        }}
                    />

                    <Text style={{ fontSize: 16, marginLeft: 10, marginVertical: 20, fontWeight: "bold", }}>15 OCT 2020 TIME SLOTS</Text>
                    <FlatList
                        data={this.state.serviceData}
                        renderItem={this.renderItem1}
                        keyExtractor={item => item.id.toString()}
                    />
                    <View style={{
                        borderBottomColor: '#E6E6E6',
                        borderBottomWidth: 1,
                        width: '95%',
                        marginTop: 6,
                        alignSelf: 'center'
                    }}
                    />
                    <View style={{justifyContent:'space-between', alignItems:'center', backgroundColor:'#FFFFFF'}}>
                        <TouchableOpacity  onPress={() => { navigation.navigate("BookingSummary") }}>
                            <Text style={{fontWeight:'bold', color:'#00C8E4', fontSize:18, padding:12}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>
            </>
        );
    }
}
export default SelectAppointmentDateTime;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
    buttonContainer: {
        width: "100%",
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
        alignSelf: 'flex-start',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 8,
        width: "92%",
        alignItems: 'center',
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
    //more Tabs
    rawContainer: {
        width: '90%',
        flexDirection: 'row',
    },
    icon: {
        width: 22,
        height: 22,
        marginEnd: 16
    },
    label: {
        width: "90%",
        fontSize: 18,
        color: '#4D4D4D',
        justifyContent: 'center'
    },
    view: {
        width: "90%",
        marginBottom: 16,
        marginTop: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    button: {
        width: "50%",
        color: '#00C8E4',
        textAlign: 'right',
        borderWidth: 1,
        textAlign: 'center',
        margin: 8,
        borderColor: '#00C8E4',
        padding: 4,
        borderRadius: 4
    },

    //Mange Users
    buttonStyle: {
        width: "40%",
        color: '#00C8E4',
        borderColor: '#00C8E4',
        borderWidth: 1,
        marginStart: 16,
        marginEnd: 16,
        flexDirection: 'row',
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
        padding: 4,
        borderRadius: 100,
        textAlign: 'center'
    },
    buttonIcon: {
        width: 12,
        height: 12,
        marginEnd: 4
    }
});