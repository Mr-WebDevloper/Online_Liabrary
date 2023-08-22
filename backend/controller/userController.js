const userschema = require("../model/usermodel");

const bcrypt = require("bcrypt");

// const registeruser = async (req,res) =>{
// try {
//     let data=await userschema.create(req.body)
//     let {password} = req.body.password

//   const hashedPassword = await bcrypt.hash(password, 10);

//     res.send ({"Message":"New User Registerd Successfully", registeruser:data})
// } catch (error) {

//     res.send ({Message:error.Message})

// }

// }

const registeruser = async (req, res) => {
  try {
    let { email, name, password } = req.body;
    if (!email) {
      res.status(404).send({ message: "email required" });
    }
    if (!password) {
      res.status(404).send({ message: "password required" });
    }
    if (!name) {
      res.status(404).send({ message: "name required" });
    }

    // Create a new user with the hashed password
    let data = await userschema.create({
      email:req.body.email,
      name:req.body.name,
      password: await bcrypt.hash(password, 10),
    });

    res.send({ Message: "New User Registered Successfully", data: data });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    let { email ,password} = req.body;

    if (!email) {
      res.send.status(404).json({ Message: "Please enter valid email" });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
const isUser= await userschema.findOne({email:req.body.email});
if(!isUser){
  res.status(404).send({"massage":"User not found"})
}

    const isPasswordMatch = await bcrypt.compare(password,isUser.password );

    if (!isPasswordMatch) {
      return res.status(401).json({ Message: "Invalid password" });
    }

    res.status(200).send({ Message: "Login successful!" });
  } catch (error) {
    res.send({ Message: error.Message });
  }
};

const getuser = async (req, res) => {
  try {
    let data = await userschema.find();

    res.send({ Message: "all User get Successfully", getuser: data });
  } catch (error) {
    res.send({ Message: error.Message });
  }
};

const finduserbyid = async (req, res) => {
  try {
    let data = await userschema.findById({ _id: req.body.id });

    res.send({ Message: " User found Successfully", getuser: data });

    if (!finduserbyid) {
      res.semd.status(404).json({ Messge: "User Not Found" });
    }
  } catch (error) {
    res.send({ Message: error.Message });
  }
};

const updateuser = async (req, res) => {
  try {
    const { id } = req.body;
    const updateduserdata = req.body;

    const updateduser = await userschema.findByIdAndUpdate(
      id,
      updateduserdata,
      {
        new: true,
      }
    );

    if (!updateduser) {
      return res.status(404).json({ message: "user not found" });
    }

    res.send({ message: "user updated successfully", user: updateduser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const deleteuser = async (req, res) => {
  try {
    const { id } = req.body; // Assuming the book's ID is passed in the request body

    const deleteduser = await userschema.findByIdAndRemove({ _id: id });

    if (!deleteduser) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.send({ message: "user data deleted successfully", book: deleteduser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  registeruser,
  userLogin,
  getuser,
  finduserbyid,
  deleteuser,
  updateuser,
};
