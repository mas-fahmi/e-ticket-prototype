import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { BottomTabNavigator } from './index';
import ROUTES from './Routes';
import { Login, Register, DetailPost, BOOKING } from '../screens';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { dataProfile } = useSelector(state => state.user)
    return (
        <Stack.Navigator
            initialRouteName={dataProfile === null ? ROUTES.LOGIN : ROUTES.TABSCREEN}
        >
            <Stack.Screen name={ROUTES.LOGIN} component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={ROUTES.TABSCREEN} component={BottomTabNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={Routes.REGISTER} component={Register}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={Routes.DETAILPOST} component={DetailPost}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={Routes.BOOKING} component={BOOKING}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;