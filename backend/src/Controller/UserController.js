function userRegister(req,res,next){
  res.status(201).json({
    massage:"user Created Successfully"
  })
}
function userLogin(req,res,next){
  res.status(201).json({
    massage:"user Login Successfully"
  })
}
export {userLogin,userRegister}