import React from "react";
import {  Text,FlatList,TouchableOpacity } from "react-native";
import styles from "./styles";

const Categories = ({ categories, selectedCategory,onCategoryPress  }) => {
    return (
      <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item)}
      showHorizontalsScrollIndicator = {false}
      style={{marginHorizontal:-24 , marginTop: 24}}
      renderItem={({item,index})=>{
        const selected = selectedCategory=== item;
        return(
            <TouchableOpacity 
            onPress={()=>onCategoryPress(item)} 
            style={[styles.itemContainer, selected? styles.selectedItemContainer : {}, index===0 ? {marginLeft:24}: {}]}>

                <Text style={[styles.item, selected? styles.selectedItem: {}]}>{item}</Text>

            </TouchableOpacity>
        )
      }}
       />
    );
};
Categories.defaultProps = {
    text: 'Default Text'
};

export default React.memo(Categories);