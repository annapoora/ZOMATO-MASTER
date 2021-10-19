import express from "express";

import {OrderModel} from "../../database/allModels";

const Router = express.Router();

/*
Route          /
Description     Get all orders based on _id
Params          _id
Access          Public
Method          GET

*/

Router.get("/:_id",async(req,res) =>{
    try{
        const {_id } = req.params;
        const getOrders = await OrderModel.findOne({user:_id});

        if(!getOrders) {
            return res.status(404).json({error: "User not found"});
        }

    }catch(error) {
        return res.status(500).json({error: error.message});

    }
});

/*
Route           /new
Description     Add new orders
Params          _id
Access          Public
Method          POST

*/
Router.post("/new/:_id", async(req,res) => {
    try {
        const { _id } = req.params;
        const { orderDetails} = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {orderDetails: orderDetails}
            },
            {
                new: true
            }
        );

    }catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;