import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type DraggableProps = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
};

type ContextType = {
  x: number;
  y: number;
};

export const Draggable = ({children, style}: DraggableProps) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = x.value;
      context.y = y.value;
    },
    onActive: (event, context) => {
      x.value = event.translationX + context.x;
      y.value = event.translationY + context.y;
    },
    onEnd: () => {
      x.value = withSpring(0);
      y.value = withSpring(0);
    },
  });
  const panStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    };
  }, [x, y]);

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View
        style={[
          {display: 'flex', justifyContent: 'center', alignItems: 'center'},
          panStyle,
          style,
        ]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};
