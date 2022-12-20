import React, { useEffect } from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import COLORS from '../../Constants/COLORS';
import { legExercise, rightArrow } from '../../Constants/Images';
import { warmUpInfo } from '../../Store/Actions/UserData';
import DetailModal from '../DetailModal';

const WarmUpCard = ({ item }) => {

    const [open, setOpen] = useState(false);
    const [warmInfo, setWarmInfo] = useState([])

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    useEffect(() => {
        warmUpInfo(item?.id, setWarmInfo, token);
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={legExercise} style={styles.image} />
                    <View style={styles.text}>
                        <Text style={styles.title}>{item?.name}</Text>
                        <Text style={styles.description}>{item?.description}</Text>
                        <TouchableOpacity style={styles.learn} onPress={() => setOpen(!open)}>
                            <Text style={styles.learnText}>Learn More</Text>
                            <Image source={rightArrow} style={styles.rightArrow} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <DetailModal
                open={open}
                setOpen={setOpen}
                title={warmInfo?.warmup?.name}
                description={warmInfo?.warmup?.description}
                arr={warmInfo?.videos}
            />
        </>
    );
};

export default WarmUpCard;

const styles = StyleSheet.create({
    learnText: {
        color: COLORS.mehron,
        fontSize: 12,
    },
    learn: {
        flexDirection: "row"
    },
    rightArrow: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 15,
        height: 10,
        marginTop: 3,
        marginLeft: 5
    },
    description: {
        fontSize: 10,
        color: COLORS.grey2,
        width: "90%"
    },
    text: {
        marginLeft: 8
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: COLORS.mehron,
        width: "80%"
    },
    row: {
        flexDirection: "row",
    },
    image: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        barderRadius: 10
    },
    container: {
        borderWidth: 1,
        color: COLORS.grey1,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        borderRadius: 10,
        borderColor: COLORS.grey1,
        width: "48%"
    },
});