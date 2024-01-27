import { Text, View } from "native-base";
import { IItem } from '../../data/foodList'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "expo-router";

export const ListProductsMenu = ({ id, name, address, phone, image }: IItem) => {

    const navigation: any = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => navigation.navigate('detailsRestaurant', {
                name: name,
                image: image,
                id: id,
                phone: phone,
                address: address
            })}>
                <View style={styles.card}>
                    <View style={styles.content}>
                        <Image style={{ width: 120, height: 100, borderRadius: 10 }} source={{ uri: image }} />
                        <View>
                            <Text style={styles.titleCard}>{name}</Text>
                            <Text numberOfLines={4} style={styles.description}>Venha conhecer mais!</Text>
                        </View>
                    </View>
                    <View style={styles.footerCardList}>
                        <Text style={styles.address}>{address}</Text>
                        <Text style={styles.phone}>{phone}</Text>
                    </View>
                </View >
            </TouchableOpacity>
        </View >
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
    container: {
        flexDirection: "column",
        backgroundColor: "#4E6C50",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    amount: {
        backgroundColor: '#171717',
        borderRadius: 50,
        flexDirection: 'row',
        paddingRight: 5,
        paddingLeft: 5
    },
    footerCardList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 17,
        marginVertical: -10,
        marginTop: -23,
    },
    address: {
        fontSize: 20,
        color: '#e0ce2a',
    },
    phone: {
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
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        padding: 10,
        paddingTop: 1,
        alignSelf: 'flex-start',
        marginBottom: -16
    },
    description: {
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 12,
        fontSize: 14,
        marginRight: '30%',
        color: "white",
    },
});