import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './home'

const navigators = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
}, {
    initialRouteName: 'Home'
})

const AppContainer = createAppContainer(navigators)

export default class App extends React.PureComponent {
    render () {
        return <AppContainer />
    }
}