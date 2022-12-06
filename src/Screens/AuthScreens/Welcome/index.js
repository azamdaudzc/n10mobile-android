import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { N10logo, welcomeImg } from "../../../Constants/Images";
import styles from "./styles";

const Welcome = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={N10logo}
                    style={styles.logo}
                />
                <Text style={styles.N10}>Welcome to N10 Fit</Text>
                <Text style={styles.detail}>
                    Lets your new health & Fitness Journey with us!
                </Text>
                <Image
                    source={welcomeImg}
                    style={styles.welcomeImg}
                />
                <TouchableOpacity style={styles.getBtn}>
                    <Text style={styles.getText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Welcome;