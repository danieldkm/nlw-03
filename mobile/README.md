# nlw-03

# mobile

```bash
# install expo
yarn global add expo-cli
npm install -g expo-cli

expo init mobile
# ? Choose a template: expo-template-blank-typescript

expo install react-native-maps
expo install @expo-google-fonts/nunito expo-font

# react-navigation
yarn add @react-navigation/native
# and
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
# or
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
# or
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
# and
yarn add @react-navigation/stack

yarn add axios

# android - com emulador - if u want use localhost on api request
adb reverse tcp:3333 tcp:3333

expo install expo-image-picker

# armazenar token, user, etc
yarn add @react-native-community/async-storage
```
