const bookschema = require('../model/bookModel')
// const authorschema = require('../model/authorModel')
const creatBook = async (req,res)=>{
    try {
        console.log(req.body)
        
        let data = await bookschema.create (req.body)

        res.send ({"message":"book added successfully",creatBook:data});

    } catch (error) {
    res.send({message:error.message})    
    }
}

const getbook = async (req,res)=>{
    try {
        let data = await bookschema.find()

        res.send ({"message":"book get successfully",Books:data});
    } catch (error) {
        res.send ({"message":"error.message"})
        }
}


const getbookbyname = async (req,res)=>{
    try {

     
 let data = await bookschema.aggregate([

  
    {
      "$match":{book_name:req.body.name}
    },

    {
      $lookup: {
        from: "authors",
        localField: "author",
        foreignField: "_id",
        as: "authorInfo"
      }

    },
    {
      $project: {
        book_name: 1,
        author_name: "$authorInfo.name"
      }
    }
    
  
  ])

        res.send ({"message":"book get successfully",getbookbyname:data});
    } catch (error) {
        res.send ({message:error.message})
        }
}

const updatebook = async (req, res) => {
    try {
      const { id } = req.body; // Assuming the book's ID is passed in the request body
      const updatedbookdata = req.body;
  
      const updatedbook = await bookschema.findByIdAndUpdate(id, updatedbookdata, {
        new: true,
      });
  
      if (!updatedbook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.send({ message: 'Book updated successfully', book: updatedbook });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };
  
  const deleteBook = async (req, res) => {
    try {
      const { id } = req.body; // Assuming the book's ID is passed in the request body
  
      const deletedBook = await bookschema.findByIdAndRemove({_id:id});
  
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.send({ message: 'Book deleted successfully', book: deletedBook });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };
  
  

module.exports={creatBook,getbook,getbookbyname,updatebook,deleteBook}
