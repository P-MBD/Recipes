import React from 'react';
import { Image, Text, View } from 'react-native';
import Rating from '../Rating';
import styles from './styles';

const Card = ({ title, style, image, time }) => {
    return (
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={{ uri: 'https://th.bing.com/th/id/OIP.IZCChzLpwY9eNP-3TbpWygHaFj?pid=ImgDet&rs=1'}} />
            <Text numberOfLines={3} style={styles.title}>{title}</Text>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>{time}</Text>
        </View>
    );
};

export default React.memo(Card);