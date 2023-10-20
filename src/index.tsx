import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = {
  color: string;
};

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


export function LoginInput({ login, email, setEmail, password, setPassword }: any) {

  return (
    <View>
      <InputContainer>
        <Text>E-mail:</Text>
        <Input
          placeholder="E-mail"
          placeholderTextColor={'#fefefe'}
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={setEmail}
          value={email}
        />
        <Text>Senha:</Text>
        <Input
          placeholder="Senha"
          placeholderTextColor={'#fefefe'}
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          maxLength={50}
        />

        <Button activeOpacity={0.8} onPress={login} color="#000">
          <Label>ENTRAR</Label>
        </Button>

      </InputContainer>
    </View>
  );
};
