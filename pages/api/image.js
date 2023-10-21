import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import { create_post, verificadorUserPosts } from "@/services/dbService";
// import sharp from "sharp";

export const config = {
  api: {
    bodyParser: false,
  },
};

// const helperImage = (filePath, fileName, size = 300) => {
//   return sharp(filePath)
//       .resize(size)
//       .toFile(`./optimize/${fileName}.png`)
// }

const handler = async (req, res) => {
    const options = {};
      options.uploadDir = path.join(process.cwd(), "/public/uploads");
      options.filename = (name, ext, path, form) => {
        return Date.now().toString() + '.png';
      };
    options.maxFileSize = 4000 * 1024 * 1024;
    const form = formidable(options);
    try {
      await fs.readdir(path.join(process.cwd() + "/public", "/uploads"));
    } catch (error) {
      await fs.mkdir(path.join(process.cwd() + "/public", "/uploads"));
    }  
    await form.parse(req,  async (err, fields, files) => {
        if (err) {
            next(err);
            return;
          }
        let img1 = '';
        let img2 = '';
        let img3 = '';

        files.img1 ? img1 = files.img1[0].newFilename : img1 = ''
        files.img2 ? img2 = files.img2[0].newFilename : img2 = null
        files.img3 ? img3 = files.img3[0].newFilename : img3 = null

        const post = {
            name: fields.name[0],
            description: fields.description[0],
            petType: fields.petType[0],
            age: fields.age[0],
            location: fields.location[0],
            gender: fields.gender[0],
            size: fields.size[0],
            dewormed: fields.dewormed[0],
            vaccinated: fields.vaccinated[0],
            chip: fields.chip[0],
            sterilized: fields.sterilized[0],
            img1,
            img2,
            img3,
            userEmail: fields.userEmail[0]
      }

        const v = await verificadorUserPosts(post)
        if (v.res){
          const response = await create_post(post);
          res.status(200).json({msg: 'upload succesful', id: response.id})
        } else {
          res.status(400).json({incomplete: v.incomplete})
          await fs.rm(process.cwd() + '/public/uploads/' + img1);
        }
        return;
    });
};

export default handler;