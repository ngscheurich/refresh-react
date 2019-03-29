import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const form = (
    <View style={styles.card}>
      <Text style={styles.label}>Your name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Your email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={() => submit()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );

  const thanks = (
    <View style={[styles.card, styles.cardSubmitted]}>
      <Text style={styles.envelope}>📩</Text>
      <Text style={styles.thanks}>Thanks, {name}!</Text>
      <Text style={styles.email}>We’ll be in touch at {email}.</Text>
    </View>
  );
  const submit = () => {
    console.log({ name, email });
    setSubmitted(true);
  };
  return <View style={styles.app}>{submitted ? thanks : form}</View>;
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcf7f3",
    padding: 40
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: -8,
      height: 8
    },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    elevation: 5
  },
  label: {
    marginBottom: 10,
    opacity: 0.9,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  input: {
    marginBottom: 40,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  button: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#052433",
    borderRadius: 2
  },
  buttonText: {
    opacity: 0.9,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#e1b07e"
  },
  cardSubmitted: {
    alignItems: "center"
  },
  envelope: {
    fontSize: 32,
    marginBottom: 20
  },
  thanks: {
    fontSize: 18,
    marginBottom: 20
  },
  email: {}
});
export default App;
