import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';

import styles from "./styles"
const Search= ()=>{
    return(
        <SafeAreaView style={styles.background}>
             <Text>Search</Text>
        </SafeAreaView>
    )
}

export default React.memo(Search);