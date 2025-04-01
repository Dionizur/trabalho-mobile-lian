import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
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
          source={require('@/assets/images/indiano.gif')}
          style={styles.Logo}
        />
      
        <br></br>
      
    </ParallaxScrollView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
Logo: {
  height: 400,
  width: 600,
  bottom: 0,
  left: 0,
},
});
