import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack, Text, ScrollView, View, Icon, Modal, useToast, Button, FormControl } from "native-base";
import { IItem } from '../../data/foodList'
import { StyleSheet, Image, Pressable, StatusBar, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

var itemSelected: IItem[] = []

export const ListItems = ({ name, image, description, price }: IItem) => {

    const [showModal, setShowModal] = useState(false);
    const toast = useToast();

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => setShowModal(true)}>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="350" maxH="300">
                        <Modal.CloseButton />
                        <Modal.Header style={styles.modalHeader}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Confirmar item</Text>
                        </Modal.Header>
                        <Modal.Footer style={styles.modalFooter}>
                            <Button.Group space={5}>
                                <Button variant="ghost" onPress={() => {
                                    setShowModal(false);
                                }}>
                                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }} >Cancelar</Text>
                                </Button>
                                <Button style={styles.modalButtonConfirmation}
                                    onPress={() => {
                                        setShowModal(false);
                                        toast.show({
                                            render: () => {
                                                return <Box bg="#e8e8dc" px="5" py="2" rounded="sm" mb={50}>
                                                    Item adicionado.
                                                </Box>;
                                            }
                                        });
                                    }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }} >Confirmar</Text>
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
                <Text style={styles.titleCard}>{name}</Text>
                <View style={styles.content}>
                    <Image style={{ width: 120, height: 100, borderRadius: 10 }} source={{ uri: image }} />
                    <Text numberOfLines={4} style={styles.description}>
                        {description}
                    </Text>
                </View>
                <View style={styles.footerCardList}>
                    <Text style={styles.amountPeople}>Serve x
                        <MaterialCommunityIcons style={styles.icon} name={"account-multiple"} size={20} color="white" />
                    </Text>
                    <Text style={styles.price}>R${price}</Text>
                </View>
            </TouchableOpacity >
        </View>
    )
}

export var itemsSelected = itemSelected

const styles = StyleSheet.create({
    modalHeader: {
        borderBottomWidth: 1,
        width: '100%',
    },
    modalFooter: {
        borderTopWidth: 0,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    modalButtonConfirmation: {
        borderRadius: 20,
        backgroundColor: '#263A29',
        fontStyle: 'bold'
    },
    container: {
        flexDirection: "column",
        backgroundColor: "#4E6C50",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    icon: {

    },
    footerCardList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 17,
        marginVertical: -10,
        marginTop: -23,
    },
    price: {
        fontSize: 20,
        color: '#e0ce2a',
    },
    amount: {
        marginLeft: 10,
        justifyContent: 'space-between',
        marginTop: 10,
        width: '28%',
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        padding: 4,
    },
    amountContent: {
        flexDirection: 'row',
        paddingRight: 5,
        paddingLeft: 5,
        alignSelf: 'center'
    },
    amountPeople: {
        fontSize: 18,
        color: 'white',
    },
    card: {
        flexDirection: 'column',
        borderRadius: 15,
        backgroundColor: '#263A29',
        flex: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15
    },
    title: {
        paddingTop: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginBottom: 16,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        padding: 10,
        alignSelf: 'center',
        marginBottom: -16
    },
    description: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        marginRight: '30%',
        //width: '65%',
        color: "white",
    },
});