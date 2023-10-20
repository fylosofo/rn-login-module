import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = {
  color: string;
};

const ImageLogo = styled.Image`
    width: 120px;
    height: 120px;
    align-self: center;
    margin-top: 16px;
  `;
const InputContainer = styled.View`
    flex: 1;
    padding: 16px;
    justify-content: center;
  `;
const Input = styled.TextInput`
    height: 40px;
    padding: 5px;
    background-color: #FFF;
    margin-bottom: 8px;
    margin-top: 8px;
    color: #000;
    border-radius: 5px;
    border-color: #000;
    border-width: 1px;
  `;
const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props: any) => props.color ?? '#000'};
    height: 45px;
    border-radius: 5px;
    justify-content: center;
    margin-top: 16px;
  `;
const Label = styled.Text`
    color: #fff;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  `;


export function Login({ login, signup }: any) {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <ScrollView style={[styles.container, styles.redBackground]} contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView />
      <ImageLogo source={require('../assets/images/logo.png')} />
      <Text style={styles.title}>Come-Come</Text>
      <InputContainer>
        <Text>E-mail:</Text>
        <Input
          placeholder="E-mail"
          placeholderTextColor={'#fefefe'}
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={(e: any) => setEmail(e)}
          value={email}
        />
        <Text>Senha:</Text>
        <Input
          placeholder="Senha"
          placeholderTextColor={'#fefefe'}
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry
          onChangeText={(p: any) => setPassword(p)}
          value={password}
          maxLength={50}
        />

        <Button activeOpacity={0.8} onPress={login} color="#000">
          <Label>ENTRAR</Label>
        </Button>

      </InputContainer>
      <Text style={styles.divider}>
        ------------------ ou ------------------
      </Text>
      <View style={styles.containerFooter}>
        <TouchableOpacity
          style={[styles.button, styles.redBackground]}
          onPress={signup}>
          <Text style={[styles.label, styles.blackLabel, styles.underline]}>
            Não possui uma conta?{' '}
            <Text style={styles.boldWeight}>Crie agora mesmo</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginTop: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  containerInputs: {
    flex: 2,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderWidth: 0.3,
    borderColor: '#000',
    marginTop: 8,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#FFF'
  },
  button: {
    height: 45,
    backgroundColor: '#000',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 5,
  },
  label: {
    color: '#FFF',
    textAlign: 'center',
  },
  whiteBackground: {
    backgroundColor: '#FFF',
  },
  redBackground: {
    backgroundColor: '#e94444',
  },
  blackLabel: {
    color: '#000',
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'center',
  },
  boldWeight: {
    fontWeight: 'bold',
  },
  divider: {
    textAlign: 'center',
    color: 'black',
  },
  underline: {
    textDecorationLine: 'none',
  },
  imageLogo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    //marginTop: 140,
  },
});
