import { StyleSheet, Image, Platform, TouchableOpacity, View, TextInput } from 'react-native';
import React, { useState } from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const BETTABLE_ITEMS = [
  { id: 'item1', name: 'Quem ganhará a rinha?', options: ['Degolador de farmaceutico', 'Empate', 'Destruidor de maçanetas'] },
  { id: 'item2', name: 'Numero de patas quebradas', options: ['apenas uma', 'duas', 'Exatamente 3','4 patas'] },
  { id: 'item3', name: 'Primeiro time Marcador', options: ['Galudos', 'Galados', 'KFC'] },

];

export default function BettingScreen() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [betAmount, setBetAmount] = useState('');

  const handleOptionSelect = (itemId: string, option: string) => {
    setSelectedOptions(prevState => {
      const newState = { ...prevState };
      newState[itemId] = option;
      return newState;
    });
  };

  const handleBetAmountChange = (text: string) => {
    setBetAmount(text.replace(/[^0-9.]/g, '')); // Allow only numbers and dots
  };

  const handlePlaceBet = () => {
    if (Object.keys(selectedOptions).length === 0) {
      alert('Por favor, selecione ao menos uma rinha.');
      return;
    }
    if (!betAmount || parseFloat(betAmount) <= 0) {
      alert('Por favor, insira um valor para a aposta válido.');
      return;
    }
    console.log('Apostas:', selectedOptions, 'Valor da Aposta:', betAmount);
    // Aqui você implementaria a lógica para registrar a aposta

    // Resetar os campos de aposta
    setSelectedOptions({});
    setBetAmount('');
    alert('Aposta finalizada com sucesso!'); // Feedback para o usuário
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logogalo.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Apostas</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>Selecione suas apostas para nossa proxima rinha dia 11/09/2001 </ThemedText>

      {BETTABLE_ITEMS.map(item => (
        <Collapsible key={item.id} title={item.name}>
          {item.options.map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.betOptionButton,
                selectedOptions[item.id] === option && styles.selectedBetOption,
              ]}
              onPress={() => handleOptionSelect(item.id, option)}>
              <ThemedText style={[
                styles.betOptionText,
                selectedOptions[item.id] === option && styles.selectedBetOptionText,
              ]}>
                {option}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </Collapsible>
      ))}

      <View style={styles.betAmountContainer}>
        <ThemedText>Valor da Aposta:</ThemedText>
        <TextInput
          style={[styles.betAmountInput, { color: '#fff' }]}
          keyboardType="numeric"
          placeholder="R$ 0,00"
          value={betAmount}
          onChangeText={handleBetAmountChange}
          placeholderTextColor="#ccc"
        />
      </View>

      <TouchableOpacity style={styles.placeBetButton} onPress={handlePlaceBet}>
        <ThemedText type="button">Finalizar Apostas</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  description: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  reactLogo: {
    height: 250,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  betOptionButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  betOptionText: {
    color: '#000',
  },
  selectedBetOption: {
    backgroundColor: '#007bff', // Cor azul para a opção selecionada
  },
  selectedBetOptionText: {
    color: '#fff', // Cor branca para o texto da opção selecionada
  },
  betAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  betAmountInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 16,
    paddingHorizontal: 10,
    textAlign: 'right',
  },
  placeBetButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
  },
});