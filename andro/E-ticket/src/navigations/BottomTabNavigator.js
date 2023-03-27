import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dashboard } from '../screens';
import { ROUTES } from './index';
import { GlobalColors, GlobalWidths } from '../constants/Styles';
import { CustomTabBottom } from '.'
import { Svg, Path } from 'react-native-svg';

const Tab = createBottomTabNavigator();
const svgCenter = (GlobalWidths[100] / 2) - 50

const Menu = () => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>this is menu page</Text>
        </View>
    )
}
const Map = () => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>this is Map Page</Text>
        </View>
    )
}

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={ROUTES.DASHBOARD}
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Tab.Screen
                name={ROUTES.MAP}
                component={Map}
            />
            <Tab.Screen
                name={ROUTES.DASHBOARD}
                component={Dashboard}
            />
            <Tab.Screen
                name={ROUTES.MENU}
                component={Menu}
            />
        </Tab.Navigator>
    )
}

const CustomTabBar = props => {
    const { state, navigation } = props;
    const activeIndex = state.index
    return (
        <View style={styles.tabBarStyle}>
            <Svg
                width={100}
                height={60}
                viewBox="0 0 100 60"
                style={{ position: 'absolute', transform: [{ translateX: svgCenter }] }}
            >
                <Path
                    fill='#fddace'
                    d="M100 60V0c-5.523 0-10 4.477-10 10 0 22.091-17.909 40-40 40S10 32.091 10 10C10 4.477 5.523 0 0 0v60h100z"
                />
            </Svg>
            <View style={{ flexDirection: 'row' }}>
                {state.routes.map((route, index) => {
                    const active = index === activeIndex
                    return (
                        <TabBarComponent
                            key={route.key}
                            onPress={() => navigation.navigate(route.name)}
                            route={route}
                            active={active}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const TabBarComponent = ({ onPress, route, active }) => {
    const bgColor = route.name === ROUTES.DASHBOARD ? 'rgba(253, 218, 206, 0.3)' : '#fddace'
    let tabSty = null
    if (route.name === ROUTES.DASHBOARD) tabSty = { width: 100 }
    else tabSty = { flex: 1 }

    return (
        <View style={[tabSty, styles.componentSty, { backgroundColor: bgColor }]}>
            <IconTabBar routeName={route.name} active={active} onPress={onPress} />
        </View>
    )
}

const IconTabBar = ({ routeName, active, onPress }) => {
    let iconColors = active ? GlobalColors.BGCOLOR2 : GlobalColors.navIcon

    if (routeName === ROUTES.MAP) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Icon name={active ? "map" : 'map-outline'} size={22} color={iconColors} />
            </TouchableOpacity>
        )
    }
    else if (routeName === ROUTES.DASHBOARD) {
        return (
            <CustomTabBottom onPress={onPress} selected={active} />
        )
    }
    else if (routeName === ROUTES.MENU) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Icon name={active ? "ticket" : 'ticket-outline'} size={22} color={iconColors} />
            </TouchableOpacity>
        )
    }
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: 'transparent'
    },
    componentSty: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})