import router, { post } from "./booksRoutes";
const bookModel = require("../ model / bookModel,");
    //This section is post request 

    //This section is post request 
    post("/add", async (req, res) => {
        try {
            const data = req.body;
            const newBook = new bookModel(data);
            await newBook.save().then(() => {
                res.status(200).json({ message: " This Book Has Been Added " });
            });
        } catch (error) {
            console.log(error);
        }

    }),

    //Get Request
    router.get("/getBooks",async(req,res)=>{
        let books;
        try {    
            books=await bookModel.find();
        } catch (error) {
            console.log(error); 
        }
    });
    //Get Req with ID
    router.get("/getBooks/:id",async(req,res)=>{
        const id = req.parms.id;
        let books;    
        try {
            books = await bookModel.findById(id);
            res.status(200).json({books});
        } catch (error) {
          console.log(error);  
        }
    });
    await book.save().then(()=>res.send(200).json({message:"Data updated Successfully"}));
        
    //Update Books By ID

    router.put("/updateBook/:id",async(req,res)=>{
        const id =req.params.id;
        const {bookname,description,author,image,price} = req.body;
        try {
            await bookModel.findByIdAndUpdate(id,{
                bookname,
                description,
                author,
                image,
                price,
            });
        } catch (error) {
          console.log(error);  
        }
    });
//Delete Book By ID
router.delete("/deleteBook/:id" , async (req,res)=>{
    const id =req.params.id;
    try {
        await bookModel
            .findByIdByIdAnsDelete(id)
            .then(()=>res.status(201).json({"message":"Deleted Successfulyy "}));

        
    } catch (error) {
      console.log(error);  
        
    }
})
    module.exports = router;
