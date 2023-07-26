import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';

import styles from "./styles"
const Home= ()=>{
    return(
        <SafeAreaView style={styles.background}>
             <Text>Home</Text>
        </SafeAreaView>
    )
}

export default React.memo(Home);