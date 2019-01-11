import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default class Description extends React.PureComponent {
    static navigationOptions = {
        title: '描述'
    }

    render () {
        return (
            <View>
                <Text>描述页面</Text>
            </View>
        )
    }
}