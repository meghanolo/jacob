import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Button,
  FunctionComponent,
  useCallback,
  useState,
} from 'react-native';
import { Auth } from 'aws-amplify';
//import {SocialIcon} from 'react-native-elements';

const LoginScreen = () => {

  const [user, setUser] = useState<User | null>(null);

  const signin = useCallback(() => { 
    Auth.federatedSignIn({ provider: "google" });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.introText}>
          <Text style={styles.intro}> Opinion.Net</Text>
          <Text style={styles.intro}> Sign up for Opinion.net</Text>
          <Text style={styles.intro}>
            {' '}
            Opinion.net is totally free to use. Sign up using a third party
            account authenticator.
          </Text>
          <Text style={styles.intro}> Authenticators </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={signin}
            title="Continue with Google"
            color="#123456"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {}}
            title="Continue with Apple"
            color="#123456"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {}}
            title="Continue With Facebook"
            color="#123456"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },
  intro: {
    margin: 30,
    textAlign: 'center',
  },
});
