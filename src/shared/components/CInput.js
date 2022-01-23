import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Input, Item } from 'native-base';
import colors from '../colors';
import { sharedStyles } from '../styles';
// custom Input
const CInput = (props) => {
    const { onChangeText, onBlur, iconName, placeholder, value, errorMsg, errorIconName } = props;
    return (
        <>
            <Item style={styles.inputStyle}>
                <Icon name={iconName} style={styles.icon} />
                <Input placeholder={placeholder}
                    style={styles.textField}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                    placeholderTextColor={colors.darkPrimary}
                    {...props}
                />
                {errorMsg && errorIconName && <Icon name={errorIconName} style={styles.errorMsgIconStyle} />}
            </Item>
            {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}
        </>
    )
}

export default CInput;


const styles = StyleSheet.create({
    icon: {
        color: colors.darkPrimary,
    },
    inputStyle: {
        paddingHorizontal: 15,
        marginTop: 20,
        borderRadius: 50,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.darkPrimary,
        backgroundColor: 'white',
        ...sharedStyles.boxShadow
    },
    textField: {
        letterSpacing: 2,
        ...sharedStyles.fontRedressed
    },
    errorMsg: {
        alignSelf: 'center',
        color: colors.darkPrimary,
        ...sharedStyles.fontPoppinsReg
    },
    errorMsgIconStyle: {
        color: colors.darkPrimary
    }
})
