import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import ExpanableList from 'react-native-expandable-section-flatlist';
import { Card, Icon, CheckBox, } from 'react-native-elements';

const MockData = [
    {
        header: 'sectionHeader',
        member: [

            {
                title: 'memberTitle',
                content: 'content',
            },

            {
                title: 'memberTitle',
                content: 'content',
            },

            {
                title: 'memberTitle',
                content: 'content',
            },
        ]
    },
    {
        header: 'sectionHeader',
        member: [

            {
                title: 'memberTitle',
                content: 'content',
            },
            {
                title: 'memberTitle',
                content: 'content',
            },
            {
                title: 'memberTitle',
                content: 'content',
            },
        ]
    },
]
class AddMoney extends React.Component {
    _renderRow = (rowItem, rowId, sectionId) => <Text>{rowItem.title}</Text>;
    _renderSection = (section, sectionId) => <Text>DGGF{section}</Text>;

    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>

                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={styles.titleStyle}>Add Money</Text>

                    {/* <ExpanableList
                        dataSource={MockData}
                        headerKey="title"
                        memberKey="member"
                        renderRow={this._renderRow}
                        renderSectionHeaderX={this._renderSection}
                    //openOptions={[1, 2,]}
                    //isOpen={false}
                    /> */}
                    <Text style={{ width: '98%', marginTop: 8, marginBottom: 4 }}>Amount</Text>
                    <TextInput style={styles.textInput}
                        placeholder="Enter Amount"
                    //onChangeText={text => this.setState({ password: text })}
                    />
                    <Card
                        containerStyle={{ borderRadius: 4, shadowOpacity: 0.6, shadowRadius: 10, padding: 0, width: '100%' }}>
                        <View style={{ width: '100%' }}>
                            <CheckBox containerStyle={{ borderColor: '#ffffff', backgroundColor: '#ffffff' }}
                                left
                                title='Credit Card'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={true}
                            />
                        </View>

                        <View style={{ paddingHorizontal: 15, paddingBottom: 15, }}>
                            <Card.Divider />
                            <Text style={styles.textLabel}>Card number</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Card number"
                            //onChangeText={text => this.setState({ password: text })}
                            />

                            <View style={{ flexDirection: "row", width: '100%', marginBottom: 0, }}>
                                <View style={{ marginEnd: 8, width: '48%' }}>
                                    <Text style={styles.textLabel}>Expiry Date</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Expiry Date"
                                    //onChangeText={text => this.setState({ password: text })}
                                    />
                                </View>
                                <View style={{ marginEnd: 8, width: '48%' }}>
                                    <Text style={styles.textLabel}>CVV</Text>
                                    <Text style={{ position: 'absolute', color: 'red', alignSelf: 'flex-end', fontWeight: 'bold', marginRight: 15 }}>Help?</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="CVV"
                                    //onChangeText={text => this.setState({ password: text })}
                                    />
                                </View>
                            </View>

                            <CheckBox
                                containerStyle={{ borderColor: '#ffffff', paddingLeft: 0, marginLeft: 0, backgroundColor: '#ffffff', paddingTop: 0 }}
                                title='Save card for future payment'
                            //checked={this.state.checked}
                            />

                            <Button color="#00c8e4" title='Proceed'
                                onPress={() => navigation.goBack()} />
                        </View>
                    </Card>

                    <Card
                        containerStyle={{ borderRadius: 4, shadowOpacity: 0.6, shadowRadius: 10, padding: 0, width: '100%' }}>
                        <View style={{ width: '100%', marginTop: 0 }}>
                            <CheckBox containerStyle={{ borderColor: '#ffffff', backgroundColor: '#ffffff' }}
                                left
                                title='Credit Card'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                            //checked={true}
                            />
                        </View>
                        {/* <View style={{ paddingLeft: 15, paddingRight: 15, }}>
                            <Card.Divider />
                        </View>     */}
                    </Card>

                    <Card
                        containerStyle={{ borderRadius: 4, shadowOpacity: 0.6, shadowRadius: 10, padding: 0, width: '100%' }}>
                        <View style={{ width: '100%', marginTop: 0 }}>
                            <CheckBox containerStyle={{ borderColor: '#ffffff', backgroundColor: '#ffffff' }}
                                left
                                title='Net Banking'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                            //checked={true}
                            />
                        </View>
                        {/* <View style={{ paddingLeft: 15, paddingRight: 15, }}>
                            <Card.Divider />
                        </View>     */}
                    </Card>
                    <Card
                        containerStyle={{ borderRadius: 4, shadowOpacity: 0.6, shadowRadius: 10, padding: 0, width: '100%' }}>
                        <View style={{ width: '100%', marginTop: 0 }}>
                            <CheckBox containerStyle={{ borderColor: '#ffffff', backgroundColor: '#ffffff' }}
                                left
                                title='My Wallet'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                            //checked={true}
                            />
                        </View>
                        {/* <View style={{ paddingLeft: 15, paddingRight: 15, }}>
                            <Card.Divider />
                        </View>     */}
                    </Card>
                    <Card
                        containerStyle={{ borderRadius: 4, shadowOpacity: 0.6, shadowRadius: 10, padding: 0, width: '100%', marginBottom: 20 }}>
                        <View style={{ width: '100%', marginTop: 0 }}>
                            <CheckBox containerStyle={{ borderColor: '#ffffff', backgroundColor: '#ffffff' }}
                                left
                                title='Pay on Store'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                            //checked={true}
                            />
                        </View>
                        {/* <View style={{ paddingLeft: 15, paddingRight: 15, }}>
                            <Card.Divider />
                        </View>     */}
                    </Card>

                </View>
            </ScrollView>

        );
    }
}

export default AddMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        paddingRight: 15,

    },
    filterStyle: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    titleStyle: {
        width: '100%',
        fontSize: 20,
        fontWeight: '500',
        //marginBottom: 15,
        marginTop: 15,
        color: '#3c3c3c',
    },
    buttonStyle: {
        borderRadius: 50,
    },
    textLabel: {
        textAlign: 'left',
        marginStart: 8,
        marginBottom: 8,
        color: '#4D4D4D',
        //marginTop:10,
        fontWeight: 'bold',
        width: "100%",
    },
    textInput: {
        height: 40,
        width: "100%",
        padding: 10,
        borderRadius: 4,
        elevation: 6,
        shadowColor: '#444',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
    },

});