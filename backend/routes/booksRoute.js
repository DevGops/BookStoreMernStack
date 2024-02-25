import express from "express";
import {Book} from '../models/bookModel.js'

const router = express.Router()


router.get('/',async (request,response)=>{
    try {
        console.log(request);
        const books = await Book.find({})
        return response.status(200).json({
            count: books.length, 
            data: books
        })
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

router.get('/:id',async (request,response)=>{
    try {

        const {id}=request.params;

        console.log(request);
        const book = await Book.findById(id)
        return response.status(200).json(book)
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})


router.post('/', async(request,response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear'
            })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };
        const book = await Book.create(newBook);
        
        
    return response.status(201).send(book)

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message});
    }

})

router.put('/:id',async (request,response)=>{
    try {

        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear'
            })
        }
        const {id}=request.params;

        console.log(request);
        const result = await Book.findByIdAndUpdate(id, request.body)
        if(!result){
            response.status(404).send({message:'Book Not Found'})
        }
        return response.status(200).json(`book has been updated`)
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

router.delete('/:id', async (request,response)=>{
    try {
        const {id}=request.params;
        const result = await Book.findByIdAndDelete(id)

        if(!result){
            response.status(404).send({message:'Book does not exist in Database'})
        }
        return response.status(200).json(`book has been Deleted successfully`)
        
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})


export default router;