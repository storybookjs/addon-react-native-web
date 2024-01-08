import { ReactNode } from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TransformsStyle,
  ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type DraggableProps = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
};

export const Draggable = ({ children, style }: DraggableProps) => {
  const Xposition = useSharedValue(0);
  const Yposition = useSharedValue(0);
  const scale = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      Xposition.value = e.translationX;
      Yposition.value = e.translationY;
      scale.value = withSpring(1.2);
    })
    .onEnd((_e) => {
      Xposition.value = withSpring(0);
      Yposition.value = withSpring(0);
      scale.value = withSpring(1);
    });

  const tapGesture = Gesture.Tap()
    .onTouchesDown(() => {
      scale.value = withSpring(1.2);
    })
    .onTouchesUp(() => {
      scale.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(
    () =>
      ({
        transform: [
          { translateX: Xposition.value },
          { translateY: Yposition.value },
          { scale: scale.value },
        ],
      } as TransformsStyle),
  );

  return (
    <GestureDetector gesture={Gesture.Simultaneous(panGesture, tapGesture)}>
      <Animated.View style={[styles.box, animatedStyle, style]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    padding: 12,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    zIndex: 999,
    elevation: 2,
    ...Platform.select({ web: { cursor: 'grab' }, default: {} }),
  },
});
