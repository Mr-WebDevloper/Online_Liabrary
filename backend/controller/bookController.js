const bookschema = require('../model/bookmodel');

// const cloudinary = require('cloudinary')

// const createBook = async (req,res) =>{
//     try {
//         let data = await bookschema.create (req.body)
//         // const file = req.file.book_image
//         // cloudinary.UploadStream.upload(file.tempFilePath,(err,result)=>{
//         //   console.log(result)
//         // })

//         res.send ({"message":"Book added Successfully" , createBook:data});

//     } catch (error) {
//         res.send({messeage:error.messeage})
//     }
// }

const createBook = async (req, res) => {
  try {
    // Create the book entry in the database
    let data = await bookschema.create(req.body);

    // If you have the image file in the request, upload it to Cloudinary
    if (req.file && req.file.book_image) {
      // Upload the image to Cloudinary
      cloudinary.uploader.upload(req.file.book_image.tempFilePath, (error, result) => {
        if (error) {
          console.error("Error uploading image to Cloudinary:", error);
          // If there's an error, you may want to handle it accordingly.
        } else {
          console.log("Cloudinary result:", result);
          // You can access the uploaded image URL using `result.secure_url`.
          // For example, you might want to save this URL to the `data` object or update the book entry in the database with it.
        }
      });
    }

    res.send({ message: "Book added Successfully", createBook: data });
  } catch (error) {
    res.send({ message: error.message });
  }
};


const getBook = async (req, res)=>{
    try {
        let data = await bookschema.find()

        res.send({"message":"Book Details Get Successfully",getBook:data});

    } catch (error) {
        res.send({messeage:error.messeage})
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

  module.exports={createBook,getBook,updatebook,deleteBook}