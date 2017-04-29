import React from "react";
import moment from "moment";
import styles from "./styles";
import {
    View,
    Text,
    ListView,
} from "react-native";

const rows = [
  {id: 0, order_id: "Pedido #453", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 1, order_id: "Pedido #900", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 2, order_id: "Pedido #041", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 3, order_id: "Pedido #94", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 4, order_id: "Pedido #882", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 10, order_id: "Pedido #453", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 20, order_id: "Pedido #453", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 30, order_id: "Pedido #453", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 11, order_id: "Pedido #900", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 21, order_id: "Pedido #900", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 31, order_id: "Pedido #900", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 12, order_id: "Pedido #041", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 22, order_id: "Pedido #041", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 32, order_id: "Pedido #041", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 13, order_id: "Pedido #94", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 23, order_id: "Pedido #94", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 33, order_id: "Pedido #94", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 14, order_id: "Pedido #882", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 24, order_id: "Pedido #882", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
  {id: 34, order_id: "Pedido #882", ordered_at: "2017-02-21 10:03:42", price: 133.02, items: [{},{},{},{},{},{}], status: "delivered"},
];

// Row comparision Function
const rowHasChanged = (r1, r2) => r1.id !== r2.id;

// DataSource template
const ds = new ListView.DataSource({rowHasChanged});

export default class Component extends React.Component {

    // Navigation
    static navigationOptions = {
        // Hide Header
        header: null,
        // headerTitle: "Perfil",
        // tabBarLabel: <FontAwesome color="white" style={{padding: 10}}>{Icons.userCircle}</FontAwesome>,
        // headerTintColor: "white",
        // headerStyle: {
        //     backgroundColor: "#1ba39c",
        // },
        // headerTitleStyle: {
        //     alignSelf: "center"
        // },
        // headerLeft: null
    }

    state = {
        dataSource: ds.cloneWithRows(rows),
    }

    renderRow(data) {
        return(
            <View style={styles.wrap}>
                    <View style={[styles.body,styles.grid]}>
                        <View>
                            <Text style={styles.order}>{`Pedido #${data.id}`}</Text>
                            <Text style={styles.items}>{`${data.items.length} items`}</Text>
                        </View>
                        <View style={{alignSelf: "stretch"}}>
                            <Text style={styles.date}>{moment(data.ordered_at).format("D/M/YY [às] hh:mm")}</Text>
                            <Text style={styles.price}>{`R$ ${data.price}`}</Text>
                        </View>
                    </View>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    pageSize={5}
                />

            </View>
        );
    }

}
