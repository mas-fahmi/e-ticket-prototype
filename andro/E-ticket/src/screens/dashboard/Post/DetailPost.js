import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { InputText, ButtonText, ModalLoader, ModalInformation } from '../../../components';
import { GlobalImages } from '../../../constants/Images'
import { GlobalWidths, GlobalHeights, GlobalFontSizes, GlobalColors, GlobalFont } from '../../../constants/Styles'
import { useNavigation } from '@react-navigation/native';
import textStyles from '../../../constants/TextStyles'
import { ROUTES } from '../../../navigations';


export default function DetailPost() {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <View style={styles.box}>
        <Image source={GlobalImages.wakuFest} style={styles.img}/>
        <View style={{flexDirection: 'row',}}>
          <View style={styles.container}>
            <Text style={textStyles.textMd12}>Date</Text>
            <Text style={textStyles.textBold12}>12 March 2024</Text>
          </View>

          <View style={styles.container}>
            <Text style={textStyles.textMd12}>Time</Text>
            <Text style={textStyles.textBold12}>12.00 PM</Text>
          </View>

          <View style={styles.container}>
            <Text style={textStyles.textMd12}>Vanue</Text>
            <Text style={textStyles.textBold12}>SMKN 1 Cimahi</Text>
          </View>  
        </View>

        <Text style={[textStyles.textBold15,{marginLeft: 20, marginTop: 25}]}>About</Text>
        <Text style={[textStyles.text15, {margin: 20}]}>Meghan Elizabeth Trainor is an American singer, songwriter and record producer, who wrote, recorded, performed and produced three independently released albums before she turned eighteen. A child prodigy, Trainor’s interest in singing and songwriting can be traced to her musically-inclined family; her father being her pillar of support.</Text>
        <ButtonText onPress={() => navigation.navigate(ROUTES.BOOKING) }>
            Buy Ticket Now
        </ButtonText>
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: GlobalWidths[100],
    height: GlobalColors[100],
    backgroundColor: GlobalColors.BGCOLOR3,
  },
  img: {
    width: GlobalWidths[100],
    height: GlobalHeights[50],
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  container: {
    width: GlobalWidths[30],
    height: GlobalHeights[0],
    borderColor: GlobalColors.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    marginLeft: 10
  },

})
