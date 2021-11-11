import React, { ReactNode, useRef } from 'react';
import { Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type DraggableProps = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
};

type ContextType = {
  x: number;
  y: number;
};

export const Draggable = ({ children, style }: DraggableProps) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const tapActive = useSharedValue(false);
  const panActive = useSharedValue(false);
  const tapRef = useRef();
  const panRef = useRef();

  const endPan = () => {
    'worklet';
    panActive.value = false;
  };

  const endTap = () => {
    'worklet';
    tapActive.value = false;
  };

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = x.value;
      context.y = y.value;
      panActive.value = true;
    },
    onActive: (event, context) => {
      x.value = event.translationX + context.x;
      y.value = event.translationY + context.y;
    },
    onEnd: () => {
      x.value = withSpring(0);
      y.value = withSpring(0);
      endPan();
    },
    onFinish: endPan,
    onCancel: endPan,
    onFail: endPan,
  });

  const panStyle = Platform.select({
    android: { transform: [] }, // currently useanimated style is crashing for android
    default: useAnimatedStyle(() => {
      return {
        transform: [
          { scale: withTiming(tapActive.value || panActive.value ? 1.2 : 1) },
          {
            translateX: x.value,
          },
          {
            translateY: y.value,
          },
        ],
      };
    }, [x, y, tapActive, panActive]),
  });

  return (
    <PanGestureHandler
      ref={panRef}
      onGestureEvent={panGestureEvent}
      simultaneousHandlers={tapRef}
    >
      <Animated.View style={styles.z}>
        <TapGestureHandler
          simultaneousHandlers={panRef}
          ref={tapRef}
          onBegan={() => {
            tapActive.value = true;
          }}
          onEnded={endTap}
          onFailed={endTap}
          onCancelled={endTap}
        >
          <Animated.View style={[styles.box, panStyle, style]}>
            {children}
          </Animated.View>
        </TapGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
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

    elevation: 2,
    ...Platform.select({ web: { cursor: 'grab' }, default: {} }),
  },
  z: {
    zIndex: 999,
  },
});
