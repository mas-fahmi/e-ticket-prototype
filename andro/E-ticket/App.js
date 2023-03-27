import React, { useState, useEffect } from 'react';
import { FlashScreen } from './src/components'
//Redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { useDispatch } from 'react-redux';
import { initLogin } from './src/redux/actions/userAction';

import { StackNavigator } from './src//navigations';
import { NavigationContainer } from '@react-navigation/native';

const StartedApp = () => {
    const [isOpeningPage, setIsOpeningPage] = useState(true);

    setTimeout(function () {
        setIsOpeningPage(false)
    }.bind(this), 5000);

    const dispatch = useDispatch()
    const init = () => dispatch(initLogin());

    useEffect(() => {
        init()
    }, [])

    return isOpeningPage ?
        <FlashScreen />
        :
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
}

export default function App() {
    return (
        <Provider store={store}>
            <StartedApp />
        </Provider>
    )
}