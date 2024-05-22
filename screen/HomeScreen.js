import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
const {width, height} = Dimensions.get('window');

const HomeScreen = ()=>{
    const navigation = useNavigation();
    const pressHandler = ()=>{
        navigation.navigate("App")
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.lottie}>
                <LottieView style={{flex:1}} source={require('../assets/animations/welcomeAnimation.json')} autoPlay loop />
            </View>
            <Pressable 
            style={styles.pressable}
            onPress={()=>{
                pressHandler()
            }} >
                <Text style={styles.text}> Start</Text>
            </Pressable>
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    lottie : {
        width : width*0.9,
        height : width
    },
    pressable : {
        borderRadius:"15px",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,179,58, 0.8)",
        width : width*0.35,
        height: height*0.08,
        shadowColor:"rgba(179,179,179,0.4)",
        shadowOpacity:2,
        shadowRadius:4
    },
    text:{
        fontFamily:"lucida grande", 
        fontSize:"25px",
        margin:8,
        color:"rgb(102, 82, 0)"
    }
})