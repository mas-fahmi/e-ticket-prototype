import { StyleSheet, StatusBar, ScrollView, Text, View, Image,  } from 'react-native';
import React, { useEffect } from 'react';
import { ButtonText, Carousel, ContainerView, ModalLoader } from '../../components';
import textStyles from '../../constants/TextStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dataCarousel } from '../../constants/Api';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { GlobalColors, GlobalFontSizes } from '../../constants/Styles';
import { GlobalImages } from '../../constants/Images';

export default function Dashboard() {
    
    const dispatch = useDispatch()

    return (
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <StatusBar hidden={true} />
                <Carousel data={dataCarousel} autoPlay={true} />
                <Text style={[textStyles.textBold18, { marginTop: 20, marginLeft: 20}]}>Today</Text> 
                <View style={styles.container}>
                    <ScrollView>
                            <Image style={styles.container} source={GlobalImages.IMG1} />
                            <Image style={styles.container} source={GlobalImages.IMG1} />
                            <Image style={styles.container} source={GlobalImages.IMG1} />
                            <Image style={styles.container} source={GlobalImages.IMG1} />
                    </ScrollView>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        width: '85%',
        height: 150,
        borderRadius: 15,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
})