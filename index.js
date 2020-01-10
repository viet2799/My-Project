/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'
import CallApi from './src/Components/CallApi';
import CallApiLogin from './src/Components/CallApiLogin';
import TestBlock from './src/Components/TestBlock';
AppRegistry.registerComponent(appName, () => App);
