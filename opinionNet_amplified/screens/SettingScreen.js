import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

const SettingScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.intro}> Opinion.Net</Text>
        <Text style={styles.title}> Settings</Text>
        <View style={[styles.box, {backgroundColor: '#ffffff'}]}>
          <View style={[styles.profilePicture, {backgroundColor: 'gray'}]}>
            <Text>Picture</Text>
          </View>
          <Text style={styles.intro}> Anonymous Username Identifier: </Text>
          <Text style={styles.intro}>
            {' '}
            1c84fb90-12c4-11e1-840d-7b25c5ee775h{' '}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} title="Institution" color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} title="About" color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} title="Logout" color="#841584" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10,
  },
  intro: {
    margin: 5,
    textAlign: 'center',
  },
  title: {
    margin: 20,
  },
  box: {
    margin: 20,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
  },
  profilePicture: {
    margin: 20,
    height: 50,
    width: 50,
  },
});
