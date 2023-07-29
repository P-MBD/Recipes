import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import Input from '../../components/Input';

import styles from "./styles"
const Home= ({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
             <Input />
             
             
        </SafeAreaView>
    )
}

export default React.memo(Home);