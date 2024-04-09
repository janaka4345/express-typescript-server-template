import express from 'express'
export const userRouter=express.Router()
// get all users
userRouter.get('/',(req,res)=>{
    res.json({message:'get all users'})
  })
  
  // get a single user
  userRouter.get('/:id',(req,res)=>{
    const {id}=req.params
    res.json({message:'get a user',id})
  })
  
  // post a user
  userRouter.post('/',(req,res)=>{
    const body=req.body
    res.json({message:'post a user',body})
  })
  // delete a user
  userRouter.delete('/:id',(req,res)=>{
    const {id}=req.params
    res.json({message:'delete a user',id})
  })
  // update a user
  userRouter.patch('/:id',(req,res)=>{
    const {id}=req.params
    res.json({message:'update a user',id})
  })