import React from 'react'
import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import COLORS from '../../Constants/COLORS';
import { cancel } from '../../Constants/Images';
import Swiper from 'react-native-swiper';

const DetailModal = ({ open, setOpen, title, description, video, category, equipment, pattern }) => {
    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={open}
                    onRequestClose={() => {
                        setOpen(!open);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.cancelBtn} onPress={() => setOpen(!open)}>
                                <Image source={cancel} style={styles.cancel} />
                            </TouchableOpacity>
                            <ScrollView style={{ width: "100%" }}>
                                <Text style={styles.title}>{title}</Text>
                                <View style={styles.line} />
                                <View style={styles.descriptionView}>
                                    <Text style={styles.descriptionText}>{description}</Text>
                                    <Text style={styles.category}>Exercise Category</Text>
                                    <Text style={styles.descriptionText}>{category}</Text>
                                    <Text style={styles.category}>Exercise Equipment</Text>
                                    <Text style={styles.descriptionText}>{equipment}</Text>
                                    <Text style={styles.category}>Exercise Pattern</Text>
                                    <Text style={styles.descriptionText}>{pattern}</Text>
                                </View>
                                {/* <Swiper
                                    style={styles.wrapper}
                                    showsButtons={false}
                                    dot={
                                        <View
                                            style={{
                                                backgroundColor: 'rgba(0,0,0,.2)',
                                                width: 5,
                                                height: 5,
                                                borderRadius: 4,
                                                marginLeft: 3,
                                                marginRight: 3,
                                                marginTop: 3,
                                                marginBottom: "10%"
                                            }}
                                        />
                                    }
                                    activeDot={
                                        <View
                                            style={{
                                                backgroundColor: COLORS.mehron,
                                                width: 20,
                                                height: 8,
                                                borderRadius: 4,
                                                marginLeft: 3,
                                                marginRight: 3,
                                                marginTop: 3,
                                                marginBottom: "10%"
                                            }}
                                        />
                                    }
                                >

                                </Swiper> */}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default DetailModal;

const styles = StyleSheet.create({
    category: {
        color: COLORS.black,
        marginTop: 10,
        fontSize: 15
    },
    cancelBtn: {
        position: "absolute",
        right: 20,
        top: 20
    },
    cancel: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        tintColor: COLORS.mehron
    },
    descriptionView: {
        width: "90%",
        alignItems: "center",
        marginTop: 10
    },
    descriptionText: {
        color: COLORS.black,
        fontSize: 13
    },
    line: {
        borderBottomWidth: 2,
        borderColor: COLORS.mehron,
        width: "30%",
        marginTop: 8,
        alignSelf: "center"
    },
    title: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 2,
        borderColor: COLORS.mehron,
        width: "90%",
        height: "60%"
    },
});