import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../assists/theme/colors';
import styles from './style';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  loading,
  disabled,
  onPress,
}) => {

  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }

    if(disabled){
      return colors.grey;
    }

    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
        <View style={styles.loaderSection}>
          {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}
      {title && <Text style={{color: disabled ? "black" : colors.white, paddingLeft: loading ? 5 : 0}}>{title}</Text>}

        </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
