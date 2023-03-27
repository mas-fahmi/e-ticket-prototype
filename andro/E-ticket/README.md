# Default Structure Project RN
## Requirement
Read the documentation of react native for this requirement 
- [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

## Including Dependencies
- [react-native-async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [react-navigation/native-stack](https://reactnavigation.org/docs/hello-react-navigation)
- [react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator)
- [reduxjs/toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [geolib](https://github.com/manuelbieh/geolib)
- [moment](https://momentjs.com/)
- [react-native-asset](https://github.com/unimonkiez/react-native-asset#readme)
- [react-native-camera](https://github.com/react-native-camera/react-native-camera/tree/master)
- [react-native-camera-hooks](https://github.com/reime005/react-native-camera-hooks)
- [react-native-date-picker](https://github.com/henninghall/react-native-date-picker)
- [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service)
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)
- [react-native-pell-rich-editor](https://github.com/wxik/react-native-rich-editor)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- [react-native-screens](https://github.com/software-mansion/react-native-screens)
- [react-native-spinkit](https://github.com/maxs15/react-native-spinkit)
- [react-native-svg](https://github.com/software-mansion/react-native-svg)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-webview](https://github.com/react-native-webview/react-native-webview)
- [react-redux](https://redux-toolkit.js.org/introduction/getting-started)

## Clonning Project
```sh
git clone https://gitlab.com/Andhie7/default_project_rn.git 
```

## Run Program
### 1. Install all dependencies
```sh
npm install / yarn install
```
### 2. Linking
#### Android
For RN 0.60 or higher, no manual linking is needed. the link is automatic when finished installing dependencies.

#### IOS
After installing, just run
```sh
npx pod-install
```
from inside ios directory. It'll automatically pickup the package and install it.

### 2. Run to Devices
#### Android
```sh
npx react-native run-android
```
#### IOS
```sh
npx react-native run-ios
```

### 3. Add Custom Font
- download your font on [google font](https://fonts.google.com/)
- move your font at assets/fonts
- run on your command prompt
```sh
npx react-native-asset
```


## 🚀Authors

- [@Andhie7](https://gitlab.com/Andhie7)