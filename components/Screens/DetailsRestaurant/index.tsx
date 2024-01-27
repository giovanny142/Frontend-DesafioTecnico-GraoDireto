import { ListRenderItemInfo } from 'react-native';
import { FlatList } from 'native-base';
import { ListItems } from '../../Bodies/listItems';
import { IItem } from '../../../data/foodList'
import { ButtonsDetailsRestaurant } from '../../Bodies/bodyButtonsMenu';
import { SeparatorItem } from '../../Separator';
import { FooterClient } from '../../Footers/footerClient';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { OpenDetailsRestaurant } from '../../Headers/Client/restaurantDetails';

const URL_API = process.env.URL_API_BACKEND;

export default function DetailsRestaurant({ route }: any) {
    const [loading, setLoading] = useState(true)
    const [listDishes, setListDishes] = useState<IItem[]>([])
    
    useEffect(() => {
        setListDishes([])
        GetDishesByRestaurantId()
    }, [route.params?.id]);

    async function GetDishesByRestaurantId() {
        const response = await axios.get(`https://2147-2804-14d-a483-8554-dc71-f40d-fd1b-a4e3.ngrok-free.app/api/dishes/${route.params?.id}`)
        let auxDishes: IItem[] = []
        response.data.map((item: IItem) => {
            auxDishes.push(item)
        })
        setListDishes(auxDishes)
        setLoading(false)
    }


    function renderItem({ item }: ListRenderItemInfo<IItem>) {
        const list = <ListItems {...item} />
        return list
    }

    return (
        <>
            <OpenDetailsRestaurant {...route.params} />
            <ButtonsDetailsRestaurant />
            {!loading && (
                <FlatList
                    backgroundColor={'#4E6C50'}
                    ItemSeparatorComponent={SeparatorItem}
                    data={listDishes}
                    keyExtractor={(item) => item.name}
                    renderItem={renderItem}
                    
                />
            )}
            <FooterClient />
        </>
    )
}