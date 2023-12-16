import { actionsCart, IS_LOGIN, IS_LOGOUT } from './Action';
import Users from '../store/user';
function AddItemCart(payload) {
    return {
        type: actionsCart.ADD_CART_ITEM,
        payload
    }
}
function RemoveItemCart(payload) {
    return {
        type: actionsCart.REMOVE_CART_ITEM,
        payload
    }
}
function IsLogged(payload) {
    return {
        type: IS_LOGIN,
        payload
    }
}
function IsLogOut() {
    return {
        type: IS_LOGOUT,
    }
}
export { RemoveItemCart, AddItemCart, IsLogged, IsLogOut };