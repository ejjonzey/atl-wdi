const express = require('express');

const User = require('../models/user');
const Item = require('../')
const router = expresss.Router({ mergeParams: true });

router.get('/', (req, res) => {
    const userIdToFind = req.params.userId;

    user.findById(userIdToFind)
        .then((user) => {
            res.render(
                'items/index', {
                    userId = user._id,
                    userName: user.first_name,
                    items: user.items
                }
            )
        });
});

router.get('/:itemId' (req, res) => {
    const userId = req.params.id;
    const itemId = req.params.itemId;
    user.findById(userId);
    .then((user) => {
            const foundItem; = user.items.find(items) => {
                return item.id === itemId
            });

        res.render(
            'items/show', {
                itemId: foundItems._id,
                itemName: foundItems.name
            }
        );
    })
.catch((error) => {
    console.log('failed to find user');
})
})

//ROUTE THAT RENDERS EDIT FORM

router.get('/:itemId/edit', (req, res) => {
            const userId = req.params.userId;
            const itemId = req.params.itemId;

            user.findById(userId);
            .then((user) => {
                    const foundItem = user.items.find(items) => {
                        return item.id === itemId
                    }); res.render('items/edit') {
                    userId,
                    item: foundItem
                }
            })

        router.put('/:itemId', (req, res) => {
                const itemId = req.params.itemid;
                const userId = req.params.userId;
                user.findById(userId);
                .then((user) => {
                        const foundItem = user.items.find(items) => {
                            return item.id === itemId
                        }); foundItem.name = req.body.name user.save()
                    .then((user) => {
                            res.render(
                                'items/index', {
                                    userId = user._id,
                                    userName: user.first_name,
                                    items: user.items
                                }
                            })

                    })

                //DELETE
                router.delete('/:itemId', (req, res) => {
                        const userId = req.params.userId;
                        const itemId = req.params.itemId;
                        user.findById(userId)
                            .then((user) => {
                                    const itemToDelete = user.items.find((item) => {
                                        return item.id === itemId;
                                    })
                                    const indexToDelete = user.items.indexOf(itemToDelete);
                                    user.items.splice(indexToDelete, 1);
                                    user.save().then((user) => {
                                        res.send('worked');
                                    })
                                    res.render(
                                        'items/index', {
                                            userId = user._id,
                                            userName: user.first_name,
                                            items: user.items
                                        }
                                    })
                            })
                });

            //RENDER NEW FORM
            router.get('/new', (req, res) => {
                res.render('items/new') {
                    userId: req.params.userId
                }
            })

            router.post('/', (req, res) => {
                const userId = req.params.userId;
                const newItemInfo = req.body;
                user.findById(userId)
                    .then((user) => {
                        const newItem = new Item(newItemInfo);
                        user.items.push(newItem);
                        user.save()
                            .then((user) => {
                                res.render(
                                    'items/show',
                                    userId,
                                    username: user.first_name,
                                    itemId: newItem._id,
                                    itemName: newItem.name
                                )
                            })
                    })
            })

            module.exports = router;