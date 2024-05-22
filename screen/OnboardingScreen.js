import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";


const OnboardingScreen = ()=>{
    const navigation = useNavigation();
    
    const handleFinish = ()=>{
        navigation.navigate("Home")
    };
    const finshButton = ({...props})=>{
        return(
            <TouchableOpacity style={styles.finishButton} {...props}>
                <Text> Done </Text>
            </TouchableOpacity>
        )

    }
    return(
        <View style={styles.container}>
            <Onboarding
            onDone={handleFinish}
            onSkip={handleFinish}
            DoneButtonComponent={finshButton}
            containerStyles={{padding:15}}
            pages={[
                {
                backgroundColor: '#fefe',
                image: <View style={styles.lottie}>
                        <LottieView style={{flex:1}} source={require('../assets/animations/animation1.json')} autoPlay loop />
                    </View>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fef3c7',
                    image: <View style={styles.lottie}>
                            <LottieView style={{flex:1}} source={require('../assets/animations/animation2.json')} autoPlay loop />                
                    </View>,
                    title: 'Discipline is Everything',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#c4a3d2',
                    image: <View style={styles.lottie}>
                        <LottieView style={{flex:1}} source={require('../assets/animations/animation3.json')} autoPlay loop />
                    </View>,
                    title: 'Reach your aims',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }                                
            ]}
            />
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"white"
    },
    lottie : {
        height:400,
        width:300
    },
    finishButton :{
        padding:20
    }
})