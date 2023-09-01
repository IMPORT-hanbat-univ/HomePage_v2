const { RootPost, RootComment, User,ListPost,CardPost,ListPostComment,ProjectComment,PatchNoteComment,CardPostComment, Project,PatchNote, ClubUser} = require("../../models");
const express = require('express');
const passport = require('passport');
const jwt =require("jsonwebtoken")
const { v4: uuidv4 } = require('uuid');
const {Op} = require("sequelize");
const {config} = require("dotenv");
const cors = require('cors');
const axios = require('axios');
const { update } = require("../../models/user");
const {admin,verifyToken} = require('../api/middlewares')
const corsOptions = {
    origin: ['http://www.import-hanbat.com','http://localhost:3000','https://kauth.kakao.com','http://kauth.kakao.com'],
    credentials:true,
  };
  
  const router = express.Router();
  //const frontURL =  'http://localhost:3000';
  const frontURL = 'http://www.import-hanbat.com'
  
//목록
const getdatas = async (table) =>{
    
    const datas = await table.findAll({
        raw: true,
        include: [
            {
                model: User,
                attributes: ["rank", "nick_name"],
                raw: true,
            },
        ],
    });
    
    datas.forEach((obj) => {
        obj.rank = obj["User.rank"];
        obj.nick_name = obj["User.nick_name"];
        delete obj["User.rank"];
        delete obj["User.nick_name"];
        obj.userId = obj["UserId"];
        delete obj["UserId"];
    });
    return datas;
}

//모든 글 띄워주기
router.get('/',verifyToken,admin,async(req,res)=>{
    const cardPosts = await getdatas(CardPost);
    console.log(cardPosts)
    const listPosts = await getdatas(ListPost)
    console.log(listPosts)
    const patchNote = await getdatas(PatchNote);
    
    const project = await getdatas(Project);
    const rootPost=await getdatas(RootPost);
    console.log(rootPost)

    const allPosts = [...cardPosts,...listPosts,...rootPost,...patchNote,...project]
    console.log("all: ",allPosts)

    return res.json(allPosts)

    
})



module.exports = router;