import { where } from "sequelize";
import { medium_users, usersPosts } from "../database/models";
// ----------------------------------------------------------------
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
    return error;
  }
}
//--------------------------------------------------------------------------


//--------------------------------------------------------------------------
export async function fetch_medium_users() {
  const users = await medium_users.findAll();
  console.log(users);
  return users;
}



//--------------------------------------------------------------------------
export async function find_user({email}) {
  const user = await medium_users.findOne({ where: { email: `${email}` } });
  return user.dataValues;
}


//---------------------------- POST DATABASE CONTROLLER ----------------------------------------------
export async function create_post(postData = {name, description, petType, location, gender, size, dewormed, vaccinated, chip, sterilized, img1, img2, img3, userId}) {
  try {
    const post = await usersPosts.create(postData)
    
    return post.dataValues;
  } catch (error) {
    return error;
  }
}

//--------------------------------------------------------------------------
export async function fetch_userPosts({userId}){
  const getPost = await usersPosts.findAll(
    {
      where: {
        userId: userId
      }
    });
    return getPost;
  }
  
  //------------------------------------------------------------------------
  async function verificador(model, data, ignoreKey){
    try {
      let res = true;
      const incomplete = [];
      const response  = await  model.describe();
      
      Object.entries(response).forEach(([key, value]) => {
        if (!ignoreKey.includes(key)){
          if (data[key] == null || data[key] == ''){
            // console.log(key)
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
  
  export async function verificadorUserPosts(data){
    const ignoreKey = ['id', 'img2', 'img3', 'createdAt', 'updatedAt', 'dewormed', 'vaccinated', 'chip', 'sterilized' ] 
    return verificador(usersPosts, data, ignoreKey);
  }
  
  //------------------------------------------------------------------------
  export async function fetch_userPosts_all() {
    const users = await usersPosts.findAll();
    console.log(users);
    return users;
  }