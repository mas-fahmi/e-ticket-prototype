import { StyleSheet, StatusBar, ScrollView, Text, View, Image, TouchableOpacity  } from 'react-native';
import React, { useEffect } from 'react';
import { ButtonText, Carousel, ContainerView, ModalLoader } from '../../components';
import textStyles from '../../constants/TextStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dataCarousel } from '../../constants/Api';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { GlobalColors, GlobalFontSizes, GlobalWidths, GlobalHeights } from '../../constants/Styles';
import { GlobalImages } from '../../constants/Images';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigations';

export default function Dashboard() {
    const navigation = useNavigation()
    
    const dispatch = useDispatch()

    return (
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <StatusBar hidden={true} />
                <Carousel data={dataCarousel} autoPlay={true} />
                <Text style={[textStyles.textBold18, { marginTop: 20, marginLeft: 20}]}>Today</Text> 
                        <View style={styles.container}>
                            <ScrollView horizontal>
                                    <Image style={styles.container} source={GlobalImages.wakuFest} onProgress={() => {ROUTES.DETAILPOST}} />
                                    <View style={styles.descContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.DETAILPOST)} >
                                        <Text style={[textStyles.textBold12, { color: '#ffffff',}]}>Waku Waktu</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>

                        {/* post */}
                        <Text style={[textStyles.textBold18, { marginTop: 35, marginLeft: 20, marginBottom: 10}]}>Upcoming</Text> 
                                <View style={styles.box}>
                                        <Image source={GlobalImages.taylorFest} style={{borderRadius: 20}}></Image>
                                        <View style={{flex: 1, marginLeft: 15}}>
                                            <Text style={[textStyles.textBold13, { marginTop: 10, color: '#FA6E43'}]}>13 may 2024</Text> 
                                            <Text style={[textStyles.textBold15]}>TAYLOR SWIFT</Text> 
                                            <Text style={[textStyles.text13, { marginTop: 5}]}>SMK NEGERI 1 CIMAHI</Text> 
                                        </View>
                                </View>

                                <View style={styles.box}>
                                        <Image source={GlobalImages.taylorFest} style={{borderRadius: 20}}></Image>
                                        <View style={{flex: 1, marginLeft: 15}}>
                                            <Text style={[textStyles.textBold13, { marginTop: 10,  color: '#FA6E43'}]}>13 may 2024</Text> 
                                            <Text style={[textStyles.textBold15]}>TAYLOR SWIFT</Text> 
                                            <Text style={[textStyles.text13, { marginTop: 5}]}>SMK NEGERI 1 CIMAHI</Text> 
                                        </View>
                                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: GlobalWidths[90],
        height: GlobalHeights[25],
        alignSelf: 'center',
        borderRadius: 25,
    },
    descContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        width: GlobalWidths[90],
        height: 40,
        backgroundColor: '#FA6E43',
    },
    parentBox: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        color: GlobalColors.TEXT_SECONDARY

    },

    box: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 15,
        height: 100,
        width: '95%',
        borderRadius: 15,
    },
})