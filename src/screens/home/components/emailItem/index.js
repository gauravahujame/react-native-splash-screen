import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Avatar } from 'react-native-elements';

export default class EmailItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sender, subject, snippet, date, unread } = this.props.email;
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                    small
                    rounded
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                    containerStyle={{ marginRight: 10 }}
                    activeOpacity={0.7} />
                <View style={{ paddingVertical: 10, flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'gray', fontSize: 12 }}>{sender}</Text>
                        <Text style={{ color: 'gray', fontSize: 10 }}>{date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>{subject}</Text>
                        {unread && (
                            <Icon
                                name="primitive-dot"
                                type="octicon"
                                color="blue"
                                size={16}
                                containerStyle={{ marginHorizontal: 10 }} />
                        )}
                    </View>
                    <Text style={{ color: 'gray', fontWeight: '400', fontSize: 12 }}>{snippet}</Text>
                </View>
            </View>
        )
    }
}