import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

export default class Home extends React.PureComponent {
    static navigationOptions = {
        title: '主页'
    }

    handleGoDetail = () => {
        // this.props.navigation.navigate('Detail')
        this.props.navigation.push('Detail')
    }

    render () {
        return (
            <View style={styles.home}>
                <Text>Home页面</Text>
                {/* <Button title='进入详情页' onPress={() => this.props.navigation.navigate('Detail')}/> */}
                <Button title='进入详情页' onPress={this.handleGoDetail}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#0F0'
    }
})