import { Box, Button, useToast, VStack, Image, Modal, Center } from 'native-base'
import React, { useState } from 'react'
import { View, Text } from '../../Themed'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { StyleSheet, Pressable, StatusBar } from 'react-native';
import Constants from 'expo-constants'
import ModalScreen from '../../../app/modal';
import { useNavigation } from '@react-navigation/native';


export function OpenDetailsRestaurant({ name, image, phone, address }: any) {
    const navigation: any = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const toast = useToast();
    return (
        <VStack>
            <View style={styles.header}>
                <View style={styles.image}>
                    <Image source={{ uri: image }}
                        alt="Logo"
                        size="md"
                    />

                    <View style={styles.menu}>
                        <Text style={styles.textMenu}> {name} </Text>
                        <Text style={styles.textMenu}> ---------------- </Text>
                        <Text style={styles.textMenu}> {address} </Text>
                        <Text style={styles.textMenu}> {phone} </Text>
                    </View>
                </View>

                <View style={styles.buttons}>
                    <Button style={styles.button} onPress={() => navigation.navigate('listRestaurants')}> <Text style={styles.textButtons}> Início </Text> </Button>
                    <Button style={styles.button}> <Text style={styles.textButtons}> Cardápio </Text> </Button>
                    <Button style={styles.button} onPress={() => setShowModal(true)}> <Text style={styles.textButtons}> Chamar Garçom </Text> </Button>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth="350" maxH="212">
                            <Modal.CloseButton />
                            <Modal.Header style={styles.modalHeader}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Chamar garçom</Text>
                            </Modal.Header>
                            <Modal.Body>
                                <Text style={{ fontSize: 16 }} >Deseja mesmo chamar o garçom?</Text>
                            </Modal.Body>
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
                                                        Garçom chamado! Agora é só aguardar.
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
                </View>
            </View>
        </VStack>
    )
}

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
    image: {
        marginLeft: 20,
        backgroundColor: '#e8e8dc',
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 4,
        padding: 2,
        backgroundColor: '#4a615b',
        borderRadius: 12,
        width: '110%',
    },
    header: {
        paddingTop: Constants.statusBarHeight + 5,
        padding: 10,
        backgroundColor: '#e8e8dc',
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        alignSelf: 'flex-end',
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#263A29',
        marginTop: 2,
    },
    buttons: {
        marginRight: 20,
        paddingTop: 15,
        paddingBottom: 2,
        backgroundColor: '#e8e8dc',
        justifyContent: 'center'
    },
    textButtons: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: -20,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontStyle: 'italic'
    },
    textMenu: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontStyle: 'italic',
        justifyContent: 'center',
    }
})