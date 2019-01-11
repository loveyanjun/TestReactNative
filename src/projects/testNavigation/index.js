import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './home'
import DetailScreen from './detail/index'

const Navigators = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailScreen
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    }
})

const AppContainer = createAppContainer(Navigators)

export default class App extends React.PureComponent {
    render () {
        return <AppContainer />
    }
}