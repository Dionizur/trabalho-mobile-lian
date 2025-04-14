import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/utils/hooks';

export default function HomeScreen() {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme.dark);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setTheme({ ...theme, dark: !isDarkTheme });
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={theme.colors.header}
      headerImage={
        <Image
          source={require('@/assets/images/galo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cock Fight Master</ThemedText>
        <HelloWave />
      </ThemedView>
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <ThemedText>{isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}</ThemedText>
      </TouchableOpacity>
      <br></br>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saiba mais sobre nossas rinhas</ThemedText>
        <ThemedText>
          Temos o orgulho de ser a primeira e maior rinha de galo autorizada pelo governo federal.
          Nossas rinhas são organizadas e prepradas para a sua melhor experiência.<br></br>
          Temos um ambiente pronto para receber você e seu pet amado, respeitando pessoas com deficiencia e
          outras coisas que possam atrapalhar sua experiencia.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Parcerias</ThemedText>
        <ThemedText>
          Temos o orgulhodedizer que temos nossa parceria com a empresa Urubu do pix, aonde atraves de <br></br>
          nossas apostas legalizadas você pode investir seu dinheiro da forma mais confiavel:
        </ThemedText>
      </ThemedView>
      <Image
        source={require('@/assets/images/urubu.jpeg')}
        style={styles.Logo}
      />


    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  reactLogo: {
    height: 250,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  Logo: {
    height: 310,
    width: 320,
    marginBottom: 16,
    alignSelf: 'center',
  },
  themeButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 16,
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
});
