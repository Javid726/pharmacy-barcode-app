import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from 'react-native';
import MainButton from '../components/MainButton';

const LoginScreen = props => {
  const [inputNumber, setInputNumber] = useState('');
  const [inputName, setInputName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.screen}>
      {/* <TextInput
        style={{ ...styles.userInput, ...props.style }}
        autoCorrect={false}
        
      /> */}
      <KeyboardAwareScrollView
        contentContainerStyle={styles.inputView}
        showsVerticalScrollIndicator={false}
      >
        {/* <Text style={styles.infoHeader}>
          Zəhmət olmasa ad soyadınızı və əlaqə nömrənizi qeyd edin:
        </Text> */}
        <View style={styles.inputName}>
          <FloatingLabelInput
            label="Ad Soyad"
            value={inputName}
            onChangeText={value => setInputName(value)}
            containerStyles={styles.containerStyle}
            customLabelStyles={{
              topFocused: -25,
              fontSizeFocused: 12,
            }}
          />
        </View>
        <View style={styles.phone}>
          <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="050" value="value1" />
            <Picker.Item label="055" value="value2" />
            <Picker.Item label="070" value="value3" />
          </Picker>

          <View style={styles.inputViewShort}>
            <FloatingLabelInput
              label="Telefon"
              value={inputNumber}
              onChangeText={value => setInputNumber(value)}
              containerStyles={styles.containerStyle}
              customLabelStyles={{
                topFocused: -25,
                fontSizeFocused: 12,
              }}
            />
          </View>
        </View>
        <MainButton onPress={props.onSignIn}>
          <Text>Daxil olun</Text>
        </MainButton>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  infoHeader: {
    fontFamily: 'dm-mono-medium',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    // marginBottom: 30,
  },
  userInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#8d918e',
  },
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    height: 500,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  inputViewShort: {
    width: '85%',
  },
  inputName: {
    marginBottom: 40,
  },
  phone: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  picker: {
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default LoginScreen;
