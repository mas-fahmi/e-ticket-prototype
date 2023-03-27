import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import textStyles from '../constants/TextStyles';
import { GlobalColors, kDefaultPadding } from '../constants/Styles';

const SearchComponent = ({
    onPressCancel,
    onSubmitEditing,
    placeHolder
}) => {
    const [search, setSearch] = useState('')

    const _onSearch = () => {
        onSubmitEditing(search)
    }

    return (
        <View style={styles.searchContainer}>
            <View style={styles.search}>
                <TextInput
                    style={[textStyles.textMd13, styles.textInput]}
                    placeholder={placeHolder}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    returnKeyType="search"
                    onSubmitEditing={_onSearch}
                />
                <Icon
                    name={search === '' ? 'search' : 'close'}
                    size={20}
                    color={GlobalColors.TEXT_SECONDARY}
                    style={{ marginLeft: 10 }}
                    onPress={() => setSearch('')}
                />
            </View>
            <TouchableOpacity onPress={onPressCancel}>
                <Text style={[textStyles.textMd13, { color: GlobalColors.BUTTON1 }]}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    searchContainer: {
        marginVertical: 10,
        marginHorizontal: kDefaultPadding,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        marginRight: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 40 / 2,
        backgroundColor: 'white',
        elevation: 3,
    },
    textInput: {
        flex: 1,
        padding: 0
    },
})