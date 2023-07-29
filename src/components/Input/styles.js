import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth:1,
        padding: 10,
        borderColor:colors.lightGrey,
        paddingHorizontal:10,
        paddingVertical:12,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500'
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    }
})

export default styles;