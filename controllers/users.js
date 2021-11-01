import { v4 as uuidv4 } from 'uuid';

let users = []
export const getUser = (req,res)=> {
    res.send(users);
    // res.send("HEllo Users");
}

export const getOneUser = (req,res)=>{
    const {id} = req.params;
    //we want to find the user id from our database and match with this Id
   const foundUser = users.find((user)=> user.id === id)
    res.send(foundUser)
}

export const createNewUser = (req, res) => {
    const user = req.body
    const userId = uuidv4(); //gives unique id

    const userwithId = {
        ...user,
        id: userId
    }

    users.push(userwithId)
    res.send(`User with name ${user.firstName} has been added to database!!`)
}

export const deleteUser =  (req,res)=>{
    const {id} = req.params;
    //we want to filter out the array without that particular id
    users = users.filter((user)=> user.id !== id)
    res.send(`User with id ${id} has been deleted from the database `)
}

export const patchUser= (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName, age} = req.body;
    const userToBeUpdated = users.find((user)=> user.id === id )
    if(firstName){
        userToBeUpdated.firstName = firstName;
    }
    if(lastName){
        userToBeUpdated.lastName = lastName;
    }
    if(age){
        userToBeUpdated.age = age;
    }
   
    res.send(`User with ${id} has been updated`)
}