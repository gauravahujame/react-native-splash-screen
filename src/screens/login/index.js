import React from 'react';
import { View, StatusBar, TextInput } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';


export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }

    onLogin() {
        if (this.state.username && this.state.password) {
            this.props.navigation.push('Home');
        }
    }

    render() {
        // const { accentColor, activeIndex, activeTitle, artist, playing, shuffle, repeat, menuVisible } = this.state;
        const { navigation } = this.props;
        return (
            <View
                style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'white' }}>
                <StatusBar
                    hidden
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.30)" />
                {/* <Image
                    source={(require('../../images/album_art.jpg'))}
                    style={{ flex: 4 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            if(menuVisible) {
                                this.setState({ menuVisible: false })
                            }
                        }}
                        backgroundColor='#00000099'
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }}>
                    </TouchableOpacity>
                </Image> */}
                <View style={{ flex: 6, padding: 30, justifyContent: 'space-evenly' }}>
                    <View style={{ alignSelf: 'center', alignItems: 'flex-start' }}>
                        <Icon
                            name="bell"
                            type="feather"
                            color="blue"
                            size={28}
                            containerStyle={{ marginBottom: 5 }} />
                        <Text h1 style={{ fontWeight: '400', fontSize: 24, color: 'black' }}>Welcome</Text>
                        <Text h1 style={{ fontWeight: '400', fontSize: 24 }}>sign in to continue</Text>
                    </View>
                    <View style={{}}>
                    <TextInput
                            style={{ alignItems: 'flex-end', height: 50, borderBottomWidth: 1.5, borderColor: 'black', marginHorizontal: 30 }}
                            placeholder="Username"
                            onChangeText={(input) => this.setState({ username: input })} />
                        <TextInput
                            style={{ alignItems: 'flex-end', height: 50, borderBottomWidth: 1.5, borderColor: 'black', marginHorizontal: 30 }}
                            placeholder="Password"
                            onChangeText={(input) => this.setState({ password: input })} />
                    </View>
                    <Button
                        color="black"    
                        backgroundColor="#e0e0e0"
                        title="Get Started"
                        iconRight={{ name: 'ios-arrow-round-forward', color: 'black', type: 'ionicon', size: 21 }}
                        wrapperStyle={{ margin: 20 }}
                        onPress={() => this.onLogin()} />
                </View>
            </View>
        );
    }
}