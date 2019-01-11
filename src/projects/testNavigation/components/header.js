import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Header extends React.PureComponent {
    render () {
        return (
            <View style={styles.header}>
                <Text>标题</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F91EF'
    }
})