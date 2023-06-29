import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { Image } from "react-native";
// import { TextInput } from "react-native";
import { Divider, TextInput, Stack, Button } from "@react-native-material/core";
import { Alert } from "react-native";

const logo = "../../img/logo.png"; //including the logo image path in the root folder of the application

const Login = () => {
  return (
    <View style={styles.login_main_container}>
      {/**logo View component */}
      <View>
        {/* logo variable declared in line no 5 of the login page*/}
        <Image style={styles.login_page_logo} source={require(logo)} />
      </View>
      {/***end logo view compoent */}
      {/***login input filed comtainer start*/}
      <View style={styles.login_form_cntainer}>
        <Text style={styles.login_hesding}>Login</Text>
        <View>
          {/* <TextInput
            placeholder="Email"
            style={styles.input}
            
          /> */}
          <TextInput
            variant="outlined"
            label="Email Address"
            style={{ margin: 16 }}
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            variant="outlined"
            label="Password"
            style={{ margin: 16 }}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Login"
            onPress={() => {
              Alert.alert("Login");
            }}
          />
          <Button
            title="Register"
            variant="outlined"
            onPress={() => {
              Alert.alert("Register");
            }}
          />
        </View>
        <View>
          <Divider style={{ marginTop: 60 }} leadingInset={16} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login_main_container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: StatusBar.currentHeight || 0,
  },
  login_page_logo: {
    width: 100,
    height: 100,
    marginTop: 100,
  },
  login_form_cntainer: {
    width: 400,
    marginTop: 100,
  }, //
  login_hesding: {
    fontSize: 25,
  }, //
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  btn: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
