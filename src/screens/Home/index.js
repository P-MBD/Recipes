import React from 'react';
import {View, Text,SafeAreaView,FlatList} from 'react-native';
import Categories from '../../components/Categories';
import Input from '../../components/Input';
import RecipeCard from '../../components/RecipeCard';
import Title from '../../components/Title';

import styles from "./styles"
const Home= ({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
             <Input pressable onPress= {()=> navigation.navigate('Search')} />
             <Title text= "Featured Recipes"/>
          
             <FlatList 
                horizontal
                data={[1,2,3]} 
                style={{marginHorizontal: -24}}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                renderItem={({index}) => (
                    <RecipeCard
                        style={index === 0 ? { marginLeft: 24 } : {}}
                        title="Steak with tomato sauce and bulgur rice."
                        time="20 mins"
                        author={{
                            name: 'James Milner',
                            image: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg'
                        }}
                    />
                )}
            />
             <Categories categories={["All","Trending"]} selectedCategory="All" onCategoryPress={()=>{}}/>
             
             
        </SafeAreaView>
    )
}

export default React.memo(Home);