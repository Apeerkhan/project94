import firebase from 'firebase';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import db from '../config';

export default class Loginscreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            color: 'blackblue',
            backgroundColor: 'green',
            margin: 20,
          }}>
          <b>Quize Questions</b>
        </Text>
        <TouchableOpacity />
        <View style={{ margin: 50 }}>
          <TextInput
            style={styles.mybox}
            placeholder=" Enter email"
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
            value={this.state.email}
          />
          <TextInput
            style={styles.mybox}
            secureTextEntry={true}
            placeholder=" Enter password"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            value={this.state.password}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Questionscreen');
            }}>
            <Text>
              <Image
                source={{
                  uri: 'https://previews.123rf.com/images/sarahdesign/sarahdesign1505/sarahdesign150504019/40150101-login-button.jpg',
                }}
                style={{ width: 50, height: 50 }}
              />
            </Text>
            <image source={{ uri: 'https://pin.it/5OzVSf2' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'skyblue' },

  mybox: {
    width: 200,
    height: 20,
    borderBottomWidth: 2,
  },
});
