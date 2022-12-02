import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { N10logo, splashBg } from "../../../Constants/Images";
import styles from "./styles";

const Splash = () => {
    return (
        <>
            <ImageBackground
                source={splashBg}
                style={styles.container}
            >
                <Image
                    source={N10logo}
                    style={styles.logo}
                />
                <Text style={styles.site}>www.website.com</Text>
            </ImageBackground>
        </>
    );
};

export default Splash;