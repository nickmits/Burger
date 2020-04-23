import * as actionTypes from '../actions/actionTypes';
import {updateObject } from './utility';

const initialState = {
    orders: [],
    loading: false, //add loading to know if we are in process of ordering or if we are done
    purchasing: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId//use spread operator to merge the id in to the new object orderData as we refer in orders/actions
            }
            return {
                ...state,
                loading:false,
                orders: state.orders.concat(newOrder),//concat return new array and therefore we add this immutably
                purchased: true
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            } 
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }  
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, {loading: false});
        case actionTypes.FETCH_ORDERS_SUCCESS:
                    return updateObject(state, {
                        orders: action.orders,
                        loading: false
                })                       
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            }
                           
        default:
            return state;        
    }
};

export default reducer;