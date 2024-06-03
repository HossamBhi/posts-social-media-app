import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenNavigationProp} from '../navigation/types';

const Splash = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View className="bg-primary relative, flex-1">
      <LottieView
        source={require('../assets/lottie/splash.json')}
        style={styles.logo}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
});
export default Splash;
