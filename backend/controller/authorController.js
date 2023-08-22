const authorschema = require('../model/authormodel')

const registerAuthor = async (req,res) =>{
   try {
        
       let data = await authorschema.create(req.body)
       res.send({"massage":" author added successfully",registerAuthor:data})
       
   } catch (error) {
       res.send({massage:error.massage})
   }};


const getauthors = async (req,res)=>{
   try {
       let data = await authorschema.find()

    res.send({massage:"author get successfully",authors:data})   
   } catch (error) {
       res.send({massage:error.massage})
  
   }};



const findauthorbyid = async (req,res)=>{

try {
   let data = await authorschema.find({_id:req.body.id})
   res.send({"massage":"author find successfully",findauthorbyid:data})

  if (!findauthorbyid){
    return res.status(404).json({ message: 'Author not found' });
  }
} catch (error) {
   res.send({massage:error.massage})
   
}
}

const updateauthor = async (req, res) => {
    try {
      const { id } = req.body; // Assuming the author's ID is passed in the request body
      const updatedAuthorData = req.body;
  
      const updatedAuthor = await authorschema.findByIdAndUpdate(id, updatedAuthorData, {
        new: true,
      });
  
      if (!updatedAuthor) {
        return res.status(404).json({ message: 'Author not found' });
      }
  
      res.send({ message: 'Author updated successfully', author: updatedAuthor });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };
 
  const deleteauthor = async (req, res)=> {
    try {
      const {id} = req.body

      const deletedauthordata = await authorschema.findByIdAndRemove({_id:req.body.id})

      res.send({"message":"Author Deleted Sussessfully",deleteauthor:deletedauthordata})

      if (!deleteauthor){
        res.send ({"message":"Author Not Fond"})
      }
      
    } catch (error) {
      req.send({message:error.message})
      
    }

  }

  



module.exports = {registerAuthor,getauthors,findauthorbyid,updateauthor,deleteauthor}

