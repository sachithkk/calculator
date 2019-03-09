import React from 'react';
import {Text , AppRegistry , View} from 'react-native';

import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';

const App = () => (
    <View>
        <Header headerText={'Albums!'}/>
        <AlbumList/>
    </View>
);

AppRegistry.registerComponent('albums' , () => App);