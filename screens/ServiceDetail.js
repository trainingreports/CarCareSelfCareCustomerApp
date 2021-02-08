// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Alert,
    Modal,
    Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList, Image,
    TouchableHighlight,
} from 'react-native';

import ServicePage from '../pages/ServicePage';
import AboutUsPage from '../pages/AboutUsPage';
import ReviewPage from '../pages/ReviewPage';

import DentalClinicServicesDetails from '../screens/DentalClinicServicesDetails';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


function TabStack(props) {

    return (
        <NavigationContainer independent={true}>

            <TouchableOpacity style={{ width: 50, position: "absolute", right: 16, bottom: -8, zIndex: 1 }}
                onPress={() => {

                }}
            >
                <Image style={{ width: 50 }}
                    resizeMode={'contain'}
                    source={require('../assets/filter.png')}
                />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                //visible={modalVisible}
                visible={false}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView>
                            <TouchableOpacity style={styles.modalText}>
                                <Text style={{ width: '50%', textAlign: 'left' }}>All Category</Text>
                                <Text style={{ width: '50%', textAlign: 'right' }}>45</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalText}>
                                <Text style={{ width: '50%', textAlign: 'left' }}>All Category</Text>
                                <Text style={{ width: '50%', textAlign: 'right' }}>45</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalText}>
                                <Text style={{ width: '50%', textAlign: 'left' }}>All Category</Text>
                                <Text style={{ width: '50%', textAlign: 'right' }}>45</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalText}>
                                <Text style={{ width: '50%', textAlign: 'left' }}>All Category</Text>
                                <Text style={{ width: '50%', textAlign: 'right' }}>45</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalText}>
                                <Text style={{ width: '50%', textAlign: 'left' }}>All Category</Text>
                                <Text style={{ width: '50%', textAlign: 'right' }}>45</Text>
                            </TouchableOpacity>
                        </ScrollView>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#023859" }}
                            onPress={() => {
                                this.setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <View style={styles.containerImage}>
                    <Image
                        style={{
                            width: '100%',
                            height: 200,
                        }}
                        resizeMode={'cover'}
                        source={require('../assets/13.2-3-5-Car-Service-Profile/service_pic001.png')}
                    />

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: -30,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ height: 14, width: 14, marginLeft: 8 }}
                                resizeMode={'cover'}
                                source={require('../assets/clock_white.png')}
                            />
                            <Text style={{ color: '#FFFFFF', marginStart: 4, fontSize:12, fontWeight:'bold' }}>10:00 AM - 6:00 MP</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginEnd: 8 }}>
                            <View style={{marginRight:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 2, paddingStart: 4, paddingEnd: 4, backgroundColor: '#FF3B30' }}>
                                <Image
                                    style={{ height: 12, width: 12, }}
                                    resizeMode={'cover'}
                                    source={require('../assets/not_allowed.png')}
                                />
                                <Text style={{ color: '#ffffff', marginLeft: 4, fontSize: 12, }}>Male</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 2, paddingStart: 4, paddingEnd: 4, backgroundColor: '#8CC63F' }}>
                                <Image
                                    style={{ height: 12, width: 12, }}
                                    resizeMode={'cover'}
                                    source={require('../assets/allowed.png')}
                                />
                                <Text style={{ color: '#ffffff', marginLeft: 4, fontSize: 12, }}>Female</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: '95%',
                        flexDirection: 'row',
                        marginTop: 16
                    }}>
                        <Image
                            style={{
                                width: 40, height: 40,
                                borderRadius: 4,
                                marginTop: 4
                            }}
                            resizeMode={'cover'}
                            source={require('../assets/13.1-4-6-More/vendor_logo.png')}
                        />
                        <View style={{ width: '90%', marginStart: 10 }}>
                            <Text style={{ fontSize:16 }}>Car Wash Center</Text>
                            <View style={{ width: '94%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize:14, color: '#999999' }}>Dubai- UAE</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 18, height: 18, }} source={require('../assets/13.2-3-5-Car-Service-Profile/star_sky.png')} />
                                    <Text style={{ fontSize:14, fontWeight: 'bold', color: '#00C8E4' }}>4.5</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={{
                        width: "100%",
                        marginBottom: 16,
                        marginTop: 16,
                        borderBottomColor: '#E6E6E6',
                        borderBottomWidth: 1,
                    }} />
                </View>

                <Tab.Navigator
                    initialRouteName="ServicePage"
                    tabBarOptions={{
                        activeTintColor: '#00C8E4',
                        inactiveTintColor: '#999999',
                        style: {
                            backgroundColor: '#FFFFFF',
                        },
                        labelStyle: {
                            textAlign: 'center',
                        },
                        indicatorStyle: {
                            borderBottomColor: '#00C8E4',
                            borderBottomWidth: 2,
                        },
                    }}>
                    <Tab.Screen
                        name="ServicePage"
                        options={{
                            tabBarLabel: 'SERVICE',
                        }}>
                        {() => <ServicePage {...props} />}
                    </Tab.Screen>
                    <Tab.Screen
                        name="AboutUsPage"
                        component={AboutUsPage}
                        options={{
                            tabBarLabel: 'ABOUT US',
                            // tabBarIcon: ({ color, size }) => (
                            //   <MaterialCommunityIcons name="settings" color={color} size={size} />
                            // ),
                        }} />
                    <Tab.Screen
                        name="ReviewPage"
                        component={ReviewPage}
                        options={{
                            tabBarLabel: 'REVIEW',
                            // tabBarIcon: ({ color, size }) => (
                            //   <MaterialCommunityIcons name="settings" color={color} size={size} />
                            // ),
                        }} />
                </Tab.Navigator>
            </ScrollView>
        </NavigationContainer>
    );
}

class HomeService extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const navigation = this.props.navigation;
        const { modalVisible } = this.state;
        return (
            <Stack.Navigator
                initialRouteName="ServicePage"
                screenOptions={{
                    headerStyle: { backgroundColor: '#FFFFFF' },
                    headerTintColor: '#00C8E4',
                    headerTitleStyle: { fontWeight: 'bold' }
                }}>
                <Stack.Screen name="TabStack" options={{ title: 'Service' }} >
                    {(props) => <TabStack  {...this.props} />}
                </Stack.Screen>

            </Stack.Navigator>
            // <NavigationContainer>

            // </NavigationContainer>
        );
    }
}

export default HomeService;

const styles = StyleSheet.create({
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
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
        fontSize: 18,
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
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: "92%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 6,
        padding: 18,
        alignItems: "center",
        shadowColor: "#023859",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 400,

    },
    openButton: {
        backgroundColor: "#023859",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: 'space-between',

    }
});
