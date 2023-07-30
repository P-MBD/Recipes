import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const RecipeCard = ({ title, style, image, author, rating, time }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.row}>
                <View style={{flex: 1}}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>

                </View>

                <Image style={styles.image} source={{ uri: 'https://th.bing.com/th/id/OIP.IZCChzLpwY9eNP-3TbpWygHaFj?pid=ImgDet&rs=1'}} />
            </View>


            <View style={styles.footer}>
                <View style={styles.row}>
                    <Image style={styles.authorImage} source={{ uri: author?.image }} />
                    <Text style={styles.footerText}>By {author?.name}</Text>
                </View>

                <View style={styles.row}>
                    <Image style={styles.timerIcon} source={require('../../../assets/timer.png')} />
                    <Text style={styles.footerText}>{time}</Text>
                </View>
            </View>
        </View>
    );
};

export default React.memo(RecipeCard);