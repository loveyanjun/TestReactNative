import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class Lottery extends React.PureComponent {
    handleLottery = () => {
        console.log('更换颜色0000')
        console.log(this.refs.changeColor)
        // this.refs.changeColor.backgroundColor = 'red'
        this.refs.changeColor.setNativeProps({ // 修改属性成功
            backgroundColor: 'red'
        })
    }

    render () {
        return (
            <View style={styles.wrapper}>
                <View style={styles.firstTyes}>
                    <View ref='changeColor' style={styles.type}>
                        <Text style={styles.typeValue}>1</Text>
                    </View>
                    <View ref='changeColor' style={styles.type}>
                        <Text style={styles.typeValue}>2</Text>
                    </View>
                    <View style={styles.type}>
                        <Text style={styles.typeValue}>3</Text>
                    </View>
                    <View ref='changeColor' style={styles.type}>
                        <Text style={styles.typeValue}>4</Text>
                    </View>
                </View>
                <View style={styles.secondTypes}>
                    <View>
                        <View style={styles.type}>
                            <Text style={styles.typeValue}>5</Text>
                        </View>
                        <View style={styles.type}>
                            <Text style={styles.typeValue}>6</Text>
                        </View>
                    </View>
                    <View style={[styles.type, styles.type6]}>
                        <TouchableOpacity onPressIn={this.handleLottery}>
                            <Text style={styles.typeValue}>抽奖</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.type}>
                            <Text style={styles.typeValue}>7</Text>
                        </View>
                        <View style={styles.type}>
                            <Text style={styles.typeValue}>8</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.threeTypes}>
                    <View style={styles.type}>
                        <Text style={styles.typeValue}>9</Text>
                    </View>
                    <View style={styles.type}>
                        <Text style={styles.typeValue}>10</Text>
                    </View>
                    <View style={styles.type}>
                        <Text style={styles.typeValue}>11</Text>
                    </View>
                    <View style={styles.type}>
                        <Text style={styles.typeValue}>12</Text>
                    </View>
                </View>
                <Text>抽奖</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // marginHorizontal: 10,
        marginVertical: 20,
        alignItems: 'center'
    },
    firstTyes: {
        flexDirection: 'row',
        flexWrap: 'wrap'
        // width: 285
    },
    type: {
        width: 70,
        height: 60,
        backgroundColor: '#a0f',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#0f0'
    },
    typeValue: {
        fontSize: 20,
        color: '#fff'
    },
    secondTypes: {
        flexDirection: 'row'
    },
    type6: {
        width: 140,
        height: 120,
        backgroundColor: 'orange'
    },
    threeTypes: {
        flexDirection: 'row'
    }
})