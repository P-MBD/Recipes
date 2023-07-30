import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 10,
        marginBottom: 32,
        marginTop: 46,
        marginRight: 16,

        // iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        // Android
        elevation: 9,
    },
    title: {
        fontSize: 14,
        color: colors.gray,
        fontWeight: 'bold',
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    footerText:{
      color:colors.lightGrey2,
      fontSize:11
    },
    authorName:{
        color:colors.lightGrey2,
        fontSize:11,
    },
    authorImage:{
        width:25,
        height:25,
        marginRight:8,
    }, 
    timerIcon:{
        width:17,
        height:17,
        marginRight:8,
    }
   
    
});

export default styles;