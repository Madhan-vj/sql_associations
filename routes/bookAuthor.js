const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    console.log("fetching ");
    await db.BooksAuthor.findAll().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(404).json({
            message : err
        })
    })
})

router.post('/',async(req,res) => {
    console.log('posting');
    await db.BooksAuthor.create({
        bookId: req.body.bookId,
        authorId: req.body.authorId
    }).then(result => {
        res.send(result);
    }).catch(err => {
        res.status(404).json({
            message : err
        })
    })
})

router.delete('/:id', async(req,res) => {
    console.log('deleting');
    await db.BooksAuthor.destroy({
        where : {id : req.params.id}
    }).then(result => {
        res.status(500).json({
            message: "Deleted"
        }).catch(err => {
            res.status(404).json({
                message: err
            })
        })
    })
})

module.exports = router;