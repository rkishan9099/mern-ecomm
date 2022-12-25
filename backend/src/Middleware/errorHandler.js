const errorHandler=(err,req,res,next)=>{
  let status= err.status|| 500;
  let massage= err.massage || "Internal Server Error";
  res.status(status).json({status,massage});
}
export default errorHandler;