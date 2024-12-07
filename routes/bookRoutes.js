const express = require('express');
const Book =require("../model/bookModel")
const bookRoutes = express.Router();




bookRoutes.get('/', async(req, res)=>{    
    return res.render('BookForm');
})
bookRoutes.get('/allBooks', async(req, res)=>{
    let books = await Book.find();
   
    return res.render('allBooks', {books});
})

bookRoutes.post('/addBook', async(req, res)=>{
    console.log(req.body);
    let newBook = await Book.create(req.body);
    if(newBook){
        console.log('New Book Added!!!!');
        return res.redirect('/BookForm/allBooks');
    }else{
        console.log('Somthing Wrong...');
        return res.redirect('/BookForm/allBooks');
    }
});

bookRoutes.get('/deleteBook/:id', async(req, res)=>{
    let rec = await Book.findById(req.params.id);
    if(rec){
        await Book.findByIdAndDelete(req.params.id);
        console.log('Delete Record Success');
        return res.redirect('/BookForm/allBooks');
    }
    else{
        console.log("Somthing wrong");
        return res.redirect("/BookForm/allBooks");
    }
});

bookRoutes.get("/editBook/:id", async(req, res)=>{
    let rec = await Book.findById(req.params.id);
    if(rec){
        return res.render('editBook', {Book: rec})
    }
    else{
        console.log("Sometghing wrong");
        return res.redirect("/BookForm/allBooks");
    }
});

bookRoutes.post('/updatebook/:id', async(req, res) => {
    let rec = await Book.findById(req.params.id);
    if(rec){
            await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
            console.log('Update Record Success');
            return res.redirect('/BookForm/allBooks');
    }else{
        console.log('Something Wrong');
        return res.redirect('/BookForm/allBooks');
    }
})

module.exports = bookRoutes;