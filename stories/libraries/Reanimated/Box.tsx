import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Button } from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    margin: 8,
  },
  container: {
    alignItems: 'flex-start',
  },
});

export const Box = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 255) }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => {
          offset.value = Math.random();
        }}
        title='Move'
      />
    </View>
  );
};
