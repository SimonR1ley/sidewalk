const express = require('express');
const router = express();
const addBoardModel = require('./models/addBoard.js');
const addUserModel = require('./models/addUsers.js');
const addCartModel = require('./models/cart.js');
const orderModel = require('./models/orders.js');
const multer = require('multer');
const path = require('path');


// const productImageStore = multer.diskStorage({
//     destination:(req, file, callBack) => {
//         callBack(null, './productImages');
//     },
//     filename: (req, file, callBack) => {
//         console.log(file)
//         callBack(null, Date.now() + path.extname(file.originalname))
//     } 
// })

// const  uploadProductImage = multer({storage: productImageStore});

// Passing the data to the user 
router.post('/api/addBoard',(req, res) => {

    // let data = JSON.parse(req.body.information);

    // console.log(req.file.filename);

    const newBoard = new addBoardModel({
        productName: req.body.productName,
        desc: req.body.desc,
        price: req.body.price,
        mini: req.body.mini,
        mid: req.body.mid,
        full: req.body.full,
        // image: req.file.filename
    });

    // newBoard.save() displays the information
    newBoard.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error with the request", err })
        })

});


router.post('/api/addCart', (req, res) => {
    const newCartItem = new addCartModel({
        productName: req.body.productName,
        username: req.body.username,
        // productId: req.body.productId,
        price: req.body.price,
        desc: req.body.desc,
        mini: req.body.mini,
        mid: req.body.mid,
        full: req.body.full,
    });

    // newBoard.save() displays the information
    newCartItem.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error with the request"})
        })

});

// Get all the Cart Products 
router.get('/api/allCartProducts', async (req, res) => {
    const newCartItem = await addCartModel.find();
    res.json(newCartItem);
});

router.delete('/api/deleteCartItem/:id', async (req, res) => {
    const newCartItem = await addCartModel.remove({ _id: req.params.id });
    res.json(newCartItem);
});


// Get all the products 
router.get('/api/allProducts', async (req, res) => {
    const newBoard = await addBoardModel.find();
    res.json(newBoard);
});

router.get('/api/oneproduct/:id', async (req, res) => {
    const newBoard = await addBoardModel.findById(req.params.id);
    res.json(newBoard);
});

router.patch('/api/updateproduct/:id', async (req, res) => {
    console.log(req.body);
    const newBoard = await addBoardModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                productName: req.body.productName,
                desc: req.body.desc,
                price: req.body.price,
                mini: req.body.mini,
                mid: req.body.mid,
                full: req.body.full

            }
        }
    );
    res.json(newBoard);
});

router.delete('/api/deleteproduct/:id', async (req, res) => {
    const newBoard = await addBoardModel.remove({ _id: req.params.id });
    res.json(newBoard);
});




// User 
// Get all the products 
router.get('/api/allUsers', async (req, res) => {
    const newuser = await addUserModel.find();
    res.json(newuser);
});

// router.get('/api/oneUser/:username', async (req, res) => {
//     const newuser = await addUserModel.find(req.params.username);
//     res.json(newuser);
// });


router.post('/api/addUser', (req, res) => {
    const newuser = new addUserModel({
        username: req.body.username,
        password: req.body.password,
    });

    // newBoard.save() displays the information
    newuser.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error with the request", err })
        })

});




router.post('/api/newOrder', (req, res) => {
    const newOrderItem = new orderModel({
        productName: req.body.productName,
        username: req.body.username,
        price: req.body.price,
        mini: req.body.mini,
        mid: req.body.mid,
        full: req.body.full,
    });


    // newBoard.save() displays the information
    newOrderItem.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error with the request"})
        })

});

router.get('/api/allOrders', async (req, res) => {
    const newOrderItem = await orderModel.find();
    res.json(newOrderItem);
});


module.exports = router;