import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';

import styles from "./styles"
const Home= ({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
             <Text>Welcome</Text>
             <Text onPress={()=>navigation.navigate('Search')}>Go to Search</Text>
        </SafeAreaView>
    )
}

export default React.memo(Home);