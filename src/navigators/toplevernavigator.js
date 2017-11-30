import { StackNavigator } from 'react-navigation';

import DashBoard from '../containers/dashboard'

const TopLevelRouter = {
    dashboard: { screen: DashBoard }
};


const TopLevelNavigator = StackNavigator(TopLevelRouter, {
    initialRouteName: 'dashboard',
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: { header: null },
});

export default TopLevelNavigator;