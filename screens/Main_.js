import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Modal, ActivityIndicator } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Rating } from 'react-native-ratings';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class Main extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isSelfCare: true,
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image
                //require('./assets/images/girl.jpg'),          // Local image
            ],
            imageData: props.imageData,
            serviceData: props.serviceData 
        }
    }

    componentDidMount = () => {
        // this.props.getSliderImage();
        // this.props.getServices();
        return this.getSliderImage(),
        this.getServiceas();
    };
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (!_.isEqual(nextProps.imageData, prevState.imageData)) {
    //         return {
    //             imageData: nextProps.imageData
    //         }
    //     }
    //     if (!_.isEqual(nextProps.imageData, prevState.imageData)) {
    //         return {
    //             serviceData: nextProps.serviceData
    //         }
    //     }
    //     return null;
    // }
    // componentDidUpdate(prevProps, prevState) {

    //     if (!_.isEqual(prevProps.imageData, this.props.imageData)) {
    //         this.setState({ imageData: this.props.imageData });
    //     }
    //     if (!_.isEqual(prevProps.imageData, this.props.imageData)) {
    //         this.setState({ serviceData: this.props.serviceData });
    //     }
    // }
    getSliderImage() {
        return fetch('http://testing.demo2server.com/careapp/carcare/api/v1/self-care', { method: 'GET' })
            .then((response) => response.json())
            .then((json) => {
                this.setState({ serviceData: json.data.data })
            }
            )
            .catch((error) => console.error(error))
            .finally(() => console.log("Finally")
                // setLoading(false)
            );
    }

    getServiceas() {
        return fetch('http://testing.demo2server.com/careapp/carcare/api/v1/self-care', { method: 'GET' })
            .then((response) => response.json())
            .then((json) => this.setState({ serviceData: json.data.data }))
            .catch((error) => console.error(error))
            .finally(() => console.log("Finally"));
    }

    renderItem = ({ item }) => {
        const navigation = this.props.navigation;
        return (
            this.serviceItem(navigation, item)
        )
    }

    serviceItem(navigation, item) {
        return <TouchableOpacity onPress={() => { navigation.navigate('ServiceDetail'); }}>
            <View style={styles.item}>
                <View style={styles.rawContainer}>
                    <Image style={styles.itemImage} resizeMode={'cover'} source={require('../assets/8.1-Home-Selft-Care/logo_pic2.png')} />

                    <View style={{ width: '70%', marginStart: 10, marginEnd: 10, }}>
                        <Text style={{ fontSize: 15, textAlign: 'left' }}>{item.name} </Text>
                        <Text style={{ color: '#B3B3B3', fontSize: 10 }}>AI - Dubai, 2.5 km </Text>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Rating
                                type='custom'
                                ratingColor='#FFB74D'
                                ratingBackgroundColor='#FFB74D'
                                ratingCount={5}
                                imageSize={14}
                                //onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 2 }} />
                        </View>
                        <Text style={styles.textItemDescription}>Lorem ipsum, or lipsum as it is sometimes known...</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>;
    }

    render() {
        const navigation = this.props.navigation;
        const toggleDrawer = () => {
            //Props to open/close the drawer
            props.navigationProps.toggleDrawer();
        };
        // let imgAry = [];
        // this.state.imageData.forEach(item => {
        //     imgAry.push(item.image);
        // })
        return (    
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                {this.getHeader(navigation)}
                <SafeAreaView>
                    <View style={[styles.buttonContainer, { marginBottom: 8, marginTop: 8 }]} >
                        <SliderBox ImageComponentStyle={{ borderRadius: 6, width: '92%', marginTop: 2, }} sliderBoxHeight={160} images={this.state.images} />
                    </View>
                    {this.state.isSelfCare ? (
                        <FlatList
                            data={this.state.serviceData.data}
                            data={this.state.s}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id.toString()} />
                    ) : null}

                </SafeAreaView>
                {this.getSelfCareCarCareButtons()}
            </View >
        )
    }

    getHeader(navigation) {
        return <View style={styles.containerHeader}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigation")}>
                    {/* //navigation.dispatch(DrawerActions.toggleDrawer()) */}
                    <Image source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png', }}
                        style={{ width: 30, height: 30, marginLeft: 14, marginTop: 28, tintColor: '#444444' }} />
                </TouchableOpacity>
                <Image
                    style={{ alignItems: 'center', width: 30, height: 30, marginTop: 28, marginBottom: 2 }}
                    resizeMode={'cover'}
                    source={require('../assets/app-icon.jpg')} />
                <View style={{ flexDirection: 'row', marginRight: 16, marginBottom: 2, marginTop: 30, }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
                        <Image resizeMode={'cover'}
                            source={require('../assets/8.1-Home-Selft-Care/cart.png')}
                            style={{ width: 22, height: 22, marginEnd: 4, tintColor: '#444444' }} />
                    </TouchableOpacity>
                    <Text style={styles.textCountStyle}>15</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationStack')}>
                        <Image resizeMode={'center'}
                            source={require('../assets/8.1-Home-Selft-Care/notifications.png')}
                            style={{ width: 22, height: 22, tintColor: '#444444' }} />
                    </TouchableOpacity>
                    <Text style={styles.textCountStyle}>15</Text>
                </View>
            </View>

            <View style={{
                width: '94%',
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginTop: 4,
            }}>
                <View style={{
                    flexDirection: 'row',
                    borderRadus: 4,
                    width: '76%',
                    backgroundColor: '#F2F2F2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    marginTop: 4,
                }}>
                    <Image resizeMode={'cover'}
                        source={require('../assets/8.1-Home-Selft-Care/search.png')}
                        style={{ width: 16, height: 16, marginStart: 8, tintColor: '#444444' }} />
                    <TextInput
                        style={{
                            height: 40,
                            width: '90%',
                            alignSelf: 'stretch',
                            padding: 10,
                            backgroundColor: '#F2F2F2',
                        }}
                        placeholder="Search" />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: 80, height: 40, backgroundColor: '#00C8E4', margin: 8, borderRadius: 4 }}>
                        <Image source={require('../assets/8.1-Home-Selft-Care/filter.png')}
                            style={{ width: 16, height: 16, alignSelf: 'center', tintColor: '#444444', tintColor: '#FFFFFF' }} />
                        <Text style={{ marginStart: 8, color: '#FFFFFF', fontSize: 14 }}>Filter</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>;
    }

    getSelfCareCarCareButtons() {
        return <View
            style={{
                bottom: 8,
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 8,
                shadowRadius: 8,
                shadowOpacity: 0.6,
                borderRadius: 8,
                elevation: 8
            }}>
            <View style={{
                backgroundColor: this.state.isSelfCare ? '#00C8E4' : '#FFFFFF',
                borderTopStartRadius: 4,
                borderBottomStartRadius: 4,
            }}>
                <TouchableOpacity
                    style={[styles.centerAlign, { backgroundColor: this.state.bgColor }]}
                    onPress={() => { this.setState({ isSelfCare: true }); }}
                >
                    <Text style={[styles.textButtonSocial, { padding: 10, color: this.state.isSelfCare ? 'white' : 'black' }]}>Self Care</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: this.state.isSelfCare ? '#FFFFFF' : '#00C8E4',
                borderBottomEndRadius: 4,
                borderTopEndRadius: 4,
            }}>
                <TouchableOpacity onPress={() => { this.setState({ isSelfCare: false }); }}>
                    <Text style={[styles.textButtonSocial, { padding: 10, color: this.state.isSelfCare ? 'black' : 'white' }]}>Car Care</Text>
                </TouchableOpacity>
            </View>
        </View>;
    }

}

const mapStateToProps = (state) => {
    return {
        imageData: state.mainReducer.imageData ? state.mainReducer.imageData : [],
        serviceData: state.mainReducer.serviceData ? state.mainReducer.serviceData : []
    }
}
export default connect(mapStateToProps, actions.allActions)(Main);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rawContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    containerHeader: {
        width: '100%', backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 6
    },
    textItemDescription: {
        color: '#808080',
        marginEnd: 8,
        textAlign: 'left',
        fontSize: 12
    },
    logo: {
        width: 66,
        height: 58,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 4,
    },
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerList: {
        width: "100%",
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        marginHorizontal: 14,
        width: "92%",
        paddingBottom: 14,
        marginVertical: 8
    },
    title: {
        fontSize: 32,
    },
    view: {
        width: "90%",
        marginBottom: 16,
        marginTop: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    centerAlign: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textInput: {
        height: 40,
        padding: 10,
        backgroundColor: '#F2F2F2',
    },
    textCountStyle: {
        backgroundColor: '#FFB74D',
        borderRadius: 100,
        color: '#FFFFFF',
        width: 18,
        height: 18,
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: -10,
        textAlign: 'center',
        marginTop: -4
    }
});