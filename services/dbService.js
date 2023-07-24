import { medium_users } from "../database/models";
// ----------------------------------------------------------------
export async function create_medium_user({ firstName, lastName, userName, email, password,status }) {
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
export async function fetch_medium_users() {
  const users = await medium_users.findAll();
  return users;
}

export async function find_user({email}) {
  const user = await medium_users.findOne({ where: { email: `${email}` } });
  return user.dataValues;

}