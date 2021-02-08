import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';


class MyWishlist extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <View style={styles.viewStyle}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My Wishlist</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>15</Text>
                    </View>

                    <View style={styles.cardStyle}>
                        <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist2.png')} />

                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mini Facial</Text>
                                <Image style={{ width: 55, height: 14 }} source={require('../assets/22-My-Wishlist/availity_home.png')} />
                            </View>

                            <Text style={{ fontSize: 10, color: "#B3B3B3" }}>Ai Hamriya - Dubai  2.5 km</Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Rating
                                    //showRating
                                    onFinishRating={this.ratingCompleted}
                                    ratingCount={5}
                                    imageSize={14}
                                    style={{ paddingVertical: 6 }}
                                />
                                <Text style={styles.offStyle}>15%OFF</Text>
                            </View>

                            <View style={styles.cardLeft}>
                                <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 12 }}>150 AED</Text>
                                <Text style={{ color: "#808080", fontSize: 10 }}>
                                    <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
                                 1 Hrs 30 Min
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardStyle}>
                        <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist1.png')} />

                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mini Facial</Text>
                                <Image style={{ width: 55, height: 14 }} source={require('../assets/22-My-Wishlist/availity_home.png')} />
                            </View>

                            <Text style={{ fontSize: 10, color: "#B3B3B3" }}>Ai Hamriya - Dubai  2.5 km</Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Rating
                                    //showRating
                                    onFinishRating={this.ratingCompleted}
                                    ratingCount={5}
                                    imageSize={14}
                                    style={{ paddingVertical: 6 }}
                                />
                                <Text style={styles.offStyle}>15%OFF</Text>
                            </View>

                            <View style={styles.cardLeft}>
                                <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 12 }}>150 AED</Text>
                                <Text style={{ color: "#808080", fontSize: 10 }}>
                                    <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
                                 1 Hrs 30 Min
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardStyle}>
                        <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist_placeholder.png')} />

                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mini Facial</Text>
                                <Image style={{ width: 55, height: 14 }} source={require('../assets/22-My-Wishlist/availity_home.png')} />
                            </View>

                            <Text style={{ fontSize: 10, color: "#B3B3B3" }}>Ai Hamriya - Dubai  2.5 km</Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Rating
                                    //showRating
                                    onFinishRating={this.ratingCompleted}
                                    ratingCount={5}
                                    imageSize={14}
                                    style={{ paddingVertical: 6 }}
                                />
                                <Text style={styles.offStyle}>15%OFF</Text>
                            </View>

                            <View style={styles.cardLeft}>
                                <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 12 }}>150 AED</Text>
                                <Text style={{ color: "#808080", fontSize: 10 }}>
                                    <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
                                 1 Hrs 30 Min
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardStyle}>
                        <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist1.png')} />

                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mini Facial</Text>
                                <Image style={{ width: 55, height: 14 }} source={require('../assets/22-My-Wishlist/availity_home.png')} />
                            </View>

                            <Text style={{ fontSize: 10, color: "#B3B3B3" }}>Ai Hamriya - Dubai  2.5 km</Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Rating
                                    //showRating
                                    onFinishRating={this.ratingCompleted}
                                    ratingCount={5}
                                    imageSize={14}
                                    style={{ paddingVertical: 6 }}
                                />
                                <Text style={styles.offStyle}>15%OFF</Text>
                            </View>

                            <View style={styles.cardLeft}>
                                <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 12 }}>150 AED</Text>
                                <Text style={{ color: "#808080", fontSize: 10 }}>
                                    <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
                                 1 Hrs 30 Min
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardStyle}>
                        <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist3.png')} />

                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mini Facial</Text>
                                <Image style={{ width: 55, height: 14 }} source={require('../assets/22-My-Wishlist/availity_home.png')} />
                            </View>

                            <Text style={{ fontSize: 10, color: "#B3B3B3" }}>Ai Hamriya - Dubai  2.5 km</Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Rating
                                    //showRating
                                    onFinishRating={this.ratingCompleted}
                                    ratingCount={5}
                                    imageSize={14}
                                    style={{ paddingVertical: 6 }}
                                />
                                <Text style={styles.offStyle}>15%OFF</Text>
                            </View>

                            <View style={styles.cardLeft}>
                                <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 12 }}>150 AED</Text>
                                <Text style={{ color: "#808080", fontSize: 10 }}>
                                    <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
                                 1 Hrs 30 Min
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardStyle}>
                        <Image style={styles.imgStyle} source={require('../assets/22-My-Wishlist/pic_wishlist1.png')} />

                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mini Facial</Text>
                                <Image style={{ width: 55, height: 14 }} source={require('../assets/22-My-Wishlist/pic_wishlist2.png')} />
                            </View>

                            <Text style={{ fontSize: 10, color: "#B3B3B3" }}>Ai Hamriya - Dubai  2.5 km</Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                <Rating
                                    //showRating
                                    onFinishRating={this.ratingCompleted}
                                    ratingCount={5}
                                    imageSize={14}
                                    style={{ paddingVertical: 6 }}
                                />
                                <Text style={styles.offStyle}>15%OFF</Text>
                            </View>

                            <View style={styles.cardLeft}>
                                <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 12 }}>150 AED</Text>
                                <Text style={{ color: "#808080", fontSize: 10 }}>
                                    <Image style={{ width: 10, height: 10, paddingRight: 4 }} source={require('../assets/clock_black.png')} />
                                 1 Hrs 30 Min
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default MyWishlist;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal:15
    },
    viewStyle: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    cardStyle: {
        flexDirection: "row", 
        width: "100%",
        alignItems: "stretch", 
        paddingVertical: 15, 
        marginBottom:10, 
        borderBottomColor: "#E6E6E6", 
        borderBottomWidth: 1
    },
    offStyle: {
        backgroundColor: "#FF0000", 
        fontWeight: "bold", 
        marginTop: 10, 
        borderRadius: 20, 
        color: "#ffffff", 
        paddingHorizontal: 10, 
        paddingVertical: 2, 
        fontSize: 8
    },
    imgStyle:{
            width: 100,
            height: 80,
            borderRadius: 10,
            marginRight: 8,
        },
    cardLeft:{
        justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' 
    }    


});