import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as bookstore from './model.mjs';

const PORT = process.env.PORT;

const app = express();

app.use(express.json()); 

//Books
app.post('/books', asyncHandler(async function(req, res) {
    try{
        const book = await bookstore.createBook(req.body.title, req.body.author, req.body.category, req.body.price, req.body.date)
        res.status(201).json(book)
        
    }catch (Error) {
        res.status(400).json({Error: 'Invalid request'});
    }  
}));

app.get('/books', asyncHandler(async function(req, res){
    try{
       let filter = {};
       const book = await bookstore.findBook(filter, '',0)
       res.status(200).json(book);
    }catch(Error){
        res.status(400).json({ Error: 'Not found' });
    };
}));

app.put('/books/:_id', asyncHandler(async function(req, res){
    try{
        const modifiedCounter = await  bookstore.updateBook(req.params._id, req.body.title, req.body.author, req.body.category, req.body.price, req.body.date)
        console.log(modifiedCounter)
        if (modifiedCounter === 1) {
            res.status(200).json({ _id: req.params._id, title: req.body.title, author: req.body.author, category: req.body.category, price: req.body.price, date: req.body.date})
        }else{
            res.status(400).json({ Error: 'Invalid request' });
        }
    }catch(Error){
            res.status(400).json({ Error: 'Invalid request' });
    };
}));

app.delete('/books/:_id', asyncHandler(async function(req, res){
    try{
        const deletedCounter = await bookstore.deleteBook(req.params._id)
        if (deletedCounter === 1) {
            res.status(204).send();
        }
    } catch(Error) {
            res.status(404).json({ Error: 'Not found'});
    };
}));

//Members
app.post('/members', asyncHandler(async function(req, res) {
    try{
        const member = await bookstore.createBook(req.body.name, req.body.email, req.body.address)
        res.status(201).json(member)
        
    }catch (Error) {
        res.status(400).json({Error: 'Invalid request'});
    }  
}));

app.get('/members', asyncHandler(async function(req, res){
    try{
       let filter = {};
       const member = await bookstore.findMember(filter, '',0)
       res.status(200).json(member);
    }catch(Error){
        res.status(400).json({ Error: 'Not found' });
    };
}));

app.put('/members/:_id', asyncHandler(async function(req, res){
    try{
        const modifiedCounter = await  bookstore.updateMember(req.params._id, req.body.name, req.body.email, req.body.address)
        console.log(modifiedCounter)
        if (modifiedCounter === 1) {
            res.status(200).json({ _id: req.params._id, name: req.body.name, email: req.body.email, address: req.body.address})
        }else{
            res.status(400).json({ Error: 'Invalid request' });
        }
    }catch(Error){
            res.status(400).json({ Error: 'Invalid request' });
    };
}));

app.delete('/members/:_id', asyncHandler(async function(req, res){
    try{
        const deletedCounter = await bookstore.deleteMember(req.params._id)
        if (deletedCounter === 1) {
            res.status(204).send();
        }
    } catch(Error) {
            res.status(404).json({ Error: 'Not found'});
    };
}));

//Recommendations
app.get('/recommendations', asyncHandler(async function(req, res){
    try{
       let filter = {};
       const recommendation = await bookstore.findRecommendation(filter, '',0)
       res.status(200).json(recommendation);
    }catch(Error){
        res.status(400).json({ Error: 'Not found' });
    };
}));

app.delete('/recommendations/:_id', asyncHandler(async function(req, res){
    try{
        const deletedCounter = await bookstore.deleteRecommendation(req.params._id)
        if (deletedCounter === 1) {
            res.status(204).send();
        }
    } catch(Error) {
            res.status(404).json({ Error: 'Not found'});
    };
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});