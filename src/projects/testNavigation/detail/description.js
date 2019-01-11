import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Description extends React.PureComponent {
    static navigationOptions = {
        title: '描述'
    }

    render () {
        return (
            <View style={styles.description}>
                <Text>描述页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        flex: 1,
        backgroundColor: '#ea0'
    }
})