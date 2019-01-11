import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import WrapperScreen from './wrapper'
import DescriptionScreen from './description'

const DetailNavigators = createStackNavigator({
    Wrapper: WrapperScreen,
    Description: DescriptionScreen
}, {
    initialRouteName: 'Wrapper'
})

const DetailAppContainer = createAppContainer(DetailNavigators)

export default class Detail  extends React.PureComponent {
    render () {
        return <DetailAppContainer />
    }
}