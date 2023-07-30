import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import Categories from '../../components/Categories';
import Input from '../../components/Input';
import Title from '../../components/Title';

import styles from "./styles"
const Home= ({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
             <Input pressable onPress= {()=> navigation.navigate('Search')} />
             <Title text= "Featured Recipes"/>
             <Categories categories={["All","Trending"]} selectedCategory="All" onCategoryPress={()=>{}}/>
            
             
             
        </SafeAreaView>
    )
}

export default React.memo(Home);