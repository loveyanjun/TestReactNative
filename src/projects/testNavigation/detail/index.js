import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import WrapperScreen from './wrapper'
import DescriptionScreen from './description'
import Header from '../components/header'

const DetailNavigators = createStackNavigator({
    Wrapper: WrapperScreen,
    Description: DescriptionScreen
}, {
    initialRouteName: 'Wrapper',
    // headerMode: 'none',
    defaultNavigationOptions: {
        header: <Header />
    }
})

const DetailAppContainer = createAppContainer(DetailNavigators)

export default class Detail  extends React.PureComponent {
    render () {
        console.log('这一级navigation结构：')
        console.log(this.props.navigation)
        return <DetailAppContainer />
    }
}