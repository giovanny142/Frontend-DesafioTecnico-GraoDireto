import { FlatList } from "native-base";
import { FooterClient } from "../../Footers/footerClient";
import { SeparatorItem } from "../../Separator";
import { IItem } from '../../../data/foodList'
import { ListRenderItemInfo, StyleSheet } from "react-native";
import { Text, View } from "../../Themed";
import { ListProductsMenu } from "../../Bodies/listProductsMenu";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { HeaderListRestaurant } from "../../Headers/Client/listRestaurants";

const URL_API = process.env.EXPO_PUBLIC_API_BACKEND;

export default function ListRestaurants() {
    const [textValue, setValue] = useState("");
    const [listBySearch, setListBySearch] = useState<IItem[]>([])
    const URL_API = 'https://2147-2804-14d-a483-8554-dc71-f40d-fd1b-a4e3.ngrok-free.app'
    let listRestaurant: IItem[] = []

    useEffect(() => {
        GetAllRestaurants()

    }, [])

    async function GetAllRestaurants() {
        const response = await axios.get(`${URL_API}/api/restaurant`)
        setListBySearch([])
        response.data.map((item: IItem) => {
            listRestaurant.push(item)
        })
        setListBySearch(listRestaurant)
    }

    async function GetSearchFilter(searchText: string) {
        const regex = /^\s*$/;
        const isEmpty = regex.test(searchText)

        if (!isEmpty) {

            const response = await axios.get(`${URL_API}/api/restaurant/dishes?search=${searchText.trim()}`)
            setListBySearch([])
            response.data.map((item: IItem) => {
                listRestaurant.push(item)
            })
            setListBySearch(listRestaurant)
        }
    }

    function renderItem({ item }: ListRenderItemInfo<IItem>) {
        const list = <ListProductsMenu {...item} />
        return list
    }

    const handleChange = (text: any) => {
        setValue(text);
        if (text != '') {
            GetSearchFilter(textValue)
        } else {
            GetAllRestaurants()
        }
    }



    return (
        <View style={{ position: 'relative', flex: 1 }}>
            <HeaderListRestaurant onChangeText={handleChange} value={textValue} />
            <FlatList
                backgroundColor={'#4E6C50'}
                ItemSeparatorComponent={SeparatorItem}
                data={listBySearch}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
            >
            </FlatList>
            <FooterClient />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: '#4E6C50',
        position: 'absolute',
        bottom: 60,
        right: 5,
    },
    button: {
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#263A29',
        padding: 10,
    }
})