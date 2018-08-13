import React from 'react';
import { View, StatusBar, TextInput, FlatList } from 'react-native';
import { Text, Icon, Button, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import EmailItem from './components/emailItem';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            unreadCount: 2,
            emails: [
                {
                    sender: 'Suraj Sundariya',
                    subject: 'Updates for yesterday',
                    date: '4 hours ago',
                    snippet: 'The following are my updates for yesterday',
                    unread: true
                },
                {
                    sender: 'Sparsh Jain',
                    subject: 'Hello from the flipside',
                    date: '8 hours ago',
                    snippet: 'Hello mate. What up?',
                    unread: true
                },
                {
                    sender: 'Medium Daily Digest',
                    subject: 'The simple art of not being miserable',
                    date: 'yesterday',
                    snippet: `Today's Highlights The simple art of not being miserable`,
                    unread: false
                },
                {
                    sender: 'GitKraken',
                    subject: 'Team Pricing Change',
                    date: '2 days ago',
                    snippet: 'Lock in our lowest Gitkraken Pro team prices',
                    unread: false
                },
                {
                    sender: 'React Status',
                    subject: 'Why I Love React Patterns So Much',
                    date: '2 days ago',
                    snippet: `This week's react news #102`,
                    unread: true
                },
                {
                    sender: 'ZEIT TEAM',
                    subject: 'ZEIT on Spectrum',
                    date: '3 days ago',
                    snippet: 'In order to provide a better experience to our communi...',
                    unread: false
                },
                {
                    sender: 'React Status',
                    subject: 'Why I Love React Patterns So Much',
                    date: '2 days ago',
                    snippet: `This week's react news #102`,
                    unread: true
                },
                {
                    sender: 'GitKraken',
                    subject: 'Team Pricing Change',
                    date: '2 days ago',
                    snippet: 'Lock in our lowest Gitkraken Pro team prices',
                    unread: false
                },
                {
                    sender: 'ZEIT TEAM',
                    subject: 'ZEIT on Spectrum',
                    date: '3 days ago',
                    snippet: 'In order to provide a better experience to our communi...',
                    unread: false
                },
                {
                    sender: 'Medium Daily Digest',
                    subject: 'The simple art of not being miserable',
                    date: 'yesterday',
                    snippet: `Today's Highlights The simple art of not being miserable`,
                    unread: false
                },
                {
                    sender: 'GitKraken',
                    subject: 'Team Pricing Change',
                    date: '2 days ago',
                    snippet: 'Lock in our lowest Gitkraken Pro team prices',
                    unread: false
                },
            ]
        }
    }

    onLogin() {
        if (this.state.username && this.state.password) {
            this.props.navigation.push('Home');
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View
                style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar
                    hidden
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.30)" />
                <View style={{ padding: 30 }}>
                    <View style={{ alignSelf: 'flex-start', alignItems: 'flex-start' }}>
                        <Avatar
                            small
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                            activeOpacity={0.7} />
                        <Text h1 style={{ fontWeight: '500', fontSize: 20, color: 'black' }}>Hello Gaurav</Text>
                        <Text h1 style={{ fontWeight: '400', fontSize: 20 }}>{`you have `}
                            <Text h1 style={{ fontWeight: '400', fontSize: 20, color: 'blue' }}>{this.state.unreadCount}</Text>
                            <Text h1 style={{ fontWeight: '400', fontSize: 20 }}>{` new\nimportant emails today`}</Text>
                        </Text>
                    </View>
                    <FlatList
                        style={{ marginTop: 20 }}
                        data={this.state.emails}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <EmailItem email={item} />} />
                </View>
            </View>
        );
    }
}