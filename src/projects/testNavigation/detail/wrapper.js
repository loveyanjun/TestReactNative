import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

export default class DetailWrapper extends React.PureComponent {
    static navigationOptions = {
        title: '详情'
    }

    handleGoDescription = () => {
        // console.log('ddddddd')
        // console.log(this.props.navigation)
        this.props.navigation.navigate('Description')
    }

    render () {
        return (
            <View style={styles.detail}>
                <Text>详情页面</Text>
                <Button title='按钮' onPress={this.handleGoDescription}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detail: {
        flex: 1,
        backgroundColor: '#a00'
    }
})