import { medium_users, usersPosts, rooms_chats } from "../database/models";
const { Op } = require('sequelize');

//------------------------------------------------------------------------
async function verificador(model, data, ignoreKey){
  try {
    let res = true;
    const incomplete = [];
    const response  = await  model.describe();
    
    Object.entries(response).forEach(([key, value]) => {
      if (!ignoreKey.includes(key)){
        if (data[key] == null || data[key] == ''){
          incomplete.push(key);
          res = false;
        }
      }
    })
    
    return {res, incomplete};
  } catch (error) {
    console.log(error);
  }
}

// -------------------------- USERS DATABASE CONTROLLER --------------------------------------
export async function create_medium_user({ firstName, lastName, userName, email, password, status }) {
  try {
    const users = await medium_users.create({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
      status: status,
    });
    return users.dataValues;
  } catch (error) {
    console.log(error.fields)
    return error;
  }
}

//--------------------------------------------------------------------------
export async function fetch_medium_users() {
  const users = await medium_users.findAll();
  return users;
}

//--------------------------------------------------------------------------
export async function find_user({email}) {
  const user = await medium_users.findOne({ 
    where: { email: `${email}` } 
  });
  return user.dataValues;
}

//--------------------------------------------------------------------------
export async function find_userName({userName}) {
  const user = await medium_users.findOne({ 
    where: { userName: `${userName}` } 
  });
  return user.dataValues;
}


//---------------------------- POST DATABASE CONTROLLER ----------------------------------------------
export async function create_post(postData = {name, description, petType, location, gender, size, dewormed, vaccinated, chip, sterilized, img1, img2, img3, userEmail}) {
  try {
    const post = await usersPosts.create(postData)
    
    return post.dataValues;
  } catch (error) {
    return error;
  }
}

//--------------------------------------------------------------------------
export async function fetch_userPosts({userEmail}){
  const getPost = await usersPosts.findAll(
    {
      where: {
        userEmail: `${userEmail}`
      }
    });
    return getPost;
  }

  //------------------------------------------------------------------------
  export async function fetch_userPosts_all() {
    const users = await usersPosts.findAll();
    return users;
  }

  //------------------------------------------------------------------------
  export async function fetch_post(postId){
    const getPost = await usersPosts.findAll({
      where: {
        id: postId
      }
    });
    return getPost;
  }
  
  
  export async function verificadorUserPosts(data){
    const ignoreKey = ['id', 'img2', 'img3', 'createdAt', 'updatedAt', 'dewormed', 'vaccinated', 'chip', 'sterilized' ] 
    return verificador(usersPosts, data, ignoreKey);
  }
  

  // -------------------------- ROOMS_CHAT DATABASE CONTROLLER --------------------------------------

  export async function create_room_chat({postId, title, User1, User2, last_msg}){
    try {
      const room = await rooms_chats.create({
        postId,
        User1,
        User2,
        title,
        last_msg,
      })

      return room.dataValues;
    } catch (error) {
      console.log(error.fields)
      return error;
    }
  }


  export async function fetch_rooms_all() {
    try {
      const allRoomsChat = await rooms_chats.findAll();
      return allRoomsChat;
    } catch (error) {
      return error;
    }
  }



  export async function fetch_rooms_user(user) {
    try {
      const allRoomsChat = await rooms_chats.findAll({
        where: {
          [Op.or]: [
            {User1: user},
            {User2: user}
            ]
        }
      });
      return allRoomsChat;
    } catch (error) {
      return error;
    }
  }