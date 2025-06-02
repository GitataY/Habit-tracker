import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text>{isSignUp ? "Create Account" : "Welcome Back"} </Text>
        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
        />
        <TextInput
          label="password"
          autoCapitalize="none"
          keyboardType="email-address"
          mode="outlined"
        />
        <Button mode="contained">{isSignUp ? "Sign Up" : "Sign In"}</Button>
        <Button mode="text" onPress={toggleAuthMode}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Dont have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
