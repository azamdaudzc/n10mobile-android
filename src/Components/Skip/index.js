import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Skip = () => {

    const navigation = useNavigation();

    const skip = () => {
        navigation.navigate("WelcomeScreen");
    };

    return (
        <TouchableOpacity style={styles.skipBtn} onPress={skip}>
            <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
    );
};

export default Skip;

const styles = StyleSheet.create({
    skipText: {
        color: "#171433",
        fontSize: 18
    },
    skipBtn: {
        position: "absolute",
        top: "10%",
        right: "8%"
    },
});