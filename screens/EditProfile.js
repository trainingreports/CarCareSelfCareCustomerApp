import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import { Avatar } from 'react-native-elements';

class EditProfile extends React.Component {

    render() {
        //const [selectedValue, setSelectedValue] = useState("java");

        const navigation = this.props.navigation;
        return (
            <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/bg.png')}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.container}>
                    <StatusBar style="auto" />

                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image style={{
                            width: '100%',
                            height: 150
                        }} resizeMode={'cover'} source={require('../assets/17-Edit-Profile/bg_1.png')} />

                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Image style={{
                                width: 35,
                                height: 35,
                                marginEnd: 20,
                                marginBottom: 16,
                                borderColor: '#FFFFFF',
                                marginTop: 65,
                            }} resizeMode={'contain'} source={require('../assets/17-Edit-Profile/camera.png')} />

                            <Avatar
                                containerStyle={{ marginTop: 115, borderColor: '#FFFFFF', borderWidth: 4, }}
                                size="xlarge"
                                rounded
                                source={require('../assets/17-Edit-Profile/profile_photo.png')}
                            />


                            <Image style={{
                                width: 35,
                                height: 35,
                                marginStart: 20,
                                marginBottom: 16,
                                borderColor: '#FFFFFF',
                                marginTop: 65,
                            }} resizeMode={'contain'} source={require('../assets/17-Edit-Profile/save.png')} />

                        </View>
                    </View>

                    <View style={{ marginTop: 80, width: '100%', alignItems: 'center' }}>

                        <Text style={styles.textHeading}>Mohammad Ishak</Text>
                        <Text style={styles.textSubHeading}> ishak@gmail.com</Text>

                        <Text style={styles.textLabel}>Name</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Name"
                            onChangeText={text => this.setState({ name: text })}
                        />

                        <Text style={styles.textLabel}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            onChangeText={text => this.setState({ email: text })}
                        />

                        <Text style={styles.textLabel}>Mobile Number</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Mobile Number"
                            onChangeText={text => this.setState({ mobilenumber: text })}
                        />
                        <Text style={styles.textLabel}>City</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="City"
                            onChangeText={text => this.setState({ city: text })}
                        />
                        <Text style={styles.textLabel}>Country</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Country"
                            onChangeText={text => this.setState({ country: text })}
                        />
                        <Text style={{marginBottom:50}}></Text>
                    </View>

                </View>
            </ScrollView>
            </ImageBackground>
        );
    }

}
export default EditProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 30,
        marginTop: 20,
        width: 200,
        width: '100%',
        color: '#ffffff'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
        color: '#ffffff'
    },
    textHeading: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        width: "94%",
        color: '#000000'
    },
    textSubHeading: {
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center',
        width: "94%",
        color: '#999999'
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
    textInput: {
        height: 40,
        width: "80%",
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
});