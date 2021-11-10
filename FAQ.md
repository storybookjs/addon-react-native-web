## Won't the components be different on the web?

Basic components like View and Text should remain the same between platforms and library maintainers will generally attempt to keep things as similar as possible.

However it's possible that some components don't look the same on the web and that might be an issue for you and that's understandable.

If you need the components to be accurate to how they would display on the device you can use @storybook/react-native for an on-device storybook.

You could even use both addon-react-native-web and @storybook/react-native in the same project. For example you might want to use the web addon to share your ui with stakeholders and the native version to develop on (or whatever suits your needs).

This addon will not take away from storybook/react-native and as the maintainer of both packages I am invested in both solutions. This new addon is intended to solve issues such as sharing being difficult and missing features like the docs addon.

In the future I see potential for both projects to interact with each other in a similar way that storybook react-native-server does with react native storybook and so I believe there is potential for the two to benefit each other.

## Is this realistic?

You might be surprised at the number of react native libraries that already fully support the web platform. Also if you've been following the react native scene you'll know that facebook is putting a strong emphasis on the
[many platform vision](https://reactnative.dev/blog/2021/08/26/many-platform-vision).

if we look at some of the top downloaded libraries for react native based on npm numbers:

- react-navigation
- react-native-screens
- react-native-gesture-handler
- react-native-svg
- react-native-reanimated
- react-native-vector-icons

All of these libraries have support for the web platform in some way. In fact I've tested many of the popular libraries with this new addon and they all work very well on the web.
