import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Time from '../../../Components/Time';
import Track from '../../../Components/Track';
import Trainer from '../../../Components/Trainer';
import Workout from '../../../Components/Workout';
import styles from './styles';

const Tutorial = () => {

    return (
        <>
            <Swiper
                showsButtons={false}
                dot={<View style={styles.inActive} />}
                activeDot={<View style={styles.active} />}
                loop={false}
            >
                <View style={styles.slide1}>
                    <Time />
                </View>
                <View style={styles.slide1}>
                    <Workout />
                </View>
                <View style={styles.slide1}>
                    <Track />
                </View>
                <View style={styles.slide1}>
                    <Trainer />
                </View>
            </Swiper>
        </>
    );
};

export default Tutorial;