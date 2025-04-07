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
  { id: 'item2', name: 'Numero de patas quebradas', options: ['apenas uma', 'duas', 'Exatamente 3'] },
  { id: 'item3', name: 'Primeiro Marcador', options: ['Jogador X', 'Jogador Y', 'Nenhum'] },
  { id: 'item4', name: 'Placar Exato', options: ['1x0', '0x0', '0x1', '2x1', '1x2', '3x0', '0x3'] },
  { id: 'item5', name: 'Total de Cartões Amarelos', options: ['Menos de 3', '3-5', 'Mais de 5'] },
  { id: 'item6', name: 'Escanteios na Partida', options: ['Menos de 9', '9-11', 'Mais de 11'] },
  { id: 'item7', name: 'Qual time marca primeiro?', options: ['Time A', 'Time B', 'Nenhum Gol'] },
  // Adicione mais itens apostáveis aqui
];

export default function BettingScreen() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [betAmount, setBetAmount] = useState('');

  const handleOptionSelect = (itemId: string, option: string) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [itemId]: option,
    }));
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
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Apostas</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>Selecione suas apostas abaixo:</ThemedText>

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
              <ThemedText style={selectedOptions[item.id] === option && styles.selectedBetOptionText}>
                {option}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </Collapsible>
      ))}

      <View style={styles.betAmountContainer}>
        <ThemedText>Valor da Aposta:</ThemedText>
        <TextInput
          style={styles.betAmountInput}
          keyboardType="numeric"
          placeholder="R$ 0,00"
          value={betAmount}
          onChangeText={handleBetAmountChange}
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
  betOptionButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  selectedBetOption: {
    backgroundColor: '#007bff',
  },
  selectedBetOptionText: {
    color: '#fff',
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