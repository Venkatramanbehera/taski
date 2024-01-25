# Getting Started

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Configuration

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context

# next pod
npx pod-install ios

# install stack
npm install @react-navigation/native-stack

# for icons
npm i react-native-vector-icons

# for buttom tabs 
npm install @react-navigation/bottom-tabs

# for wireless connection 
adb tcpip 5555
adb connect ipAddress

# for installing checkbox
npm install @react-native-community/checkbox --save
```