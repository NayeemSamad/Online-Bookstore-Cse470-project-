import router, { post } from "./booksRoutes";
const bookModel = require("../ model / bookModel,");
    //This section is post request 

    //This section is post request 
    post("/add", async (req, res) => {
        try {
            const data = req.body;
            const newBook = new bookModel(data);
            await newBook.save().then((res) => {
                res.status(200).json({ message: " This Book Has Been Added " });
            });
        } catch (error) {
            console.log(error);
        }

    }),

    module.exports = router;
