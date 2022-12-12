import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import COLORS from "../../Constants/COLORS";
import DetailModal from "../DetailModal";

const ExLibCard = ({ item }) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => setOpen(true)}>
                <Image source={item?.avatar} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item?.name}</Text>
                    <Text style={styles.description}>{item?.description}</Text>
                </View>
            </TouchableOpacity>
            {/* <View>
                <DetailModal
                    open={open}
                    setOpen={setOpen}
                    title={item?.name}
                    description={item?.description}
                    video={item?.video_link}
                    category={item?.exercise_category?.name}
                    equipment={item?.exercise_equipment?.name}
                    pattern={item?.exercise_movement_pattern?.name}
                />
            </View> */}
        </>
    );
};

export default ExLibCard;

const styles = StyleSheet.create({
    description: {
        marginLeft: 10,
        color: COLORS.black,
        fontSize: 12
    },
    title: {
        color: COLORS.mehron,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 15
    },
    image: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 10
    },
    container: {
        borderWidth: 1,
        marginBottom: 8,
        height: 70,
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10
    }
});