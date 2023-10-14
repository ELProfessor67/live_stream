import catchAsyncError from '../middlewares/catchAsyncError.js';
import { sendToken } from '../utils/sendToken.js';
import ErrorHandler from '../utils/errorHandler.js';
import UserModel from '../models/user.js'


export const register = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password)
      return next(new ErrorHandler("Please enter all field", 400));
  
    let user = await UserModel.findOne({ email });
  
    if (user) return next(new ErrorHandler("User Already Exist", 409));
  
    user = await UserModel.create({
      name,
      email,
      password
    });
  
    sendToken(res, user, "Registered Successfully", 201);
  });

  export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password)
      return next(new ErrorHandler("Please enter all field", 400));
  
    const user = await UserModel.findOne({ email }).select("+password");
  
    if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));
  
    const isMatch = await user.comparePassword(password);
  
    if (!isMatch)
      return next(new ErrorHandler("Incorrect Email or Password", 401));
  
    sendToken(res, user, `Welcome back, ${user.name}`, 200);
  });


  export const getMyProfile = catchAsyncError(async (req, res, next) => {
    const user = await UserModel.findById(req.user._id);
  
    res.status(200).json({
      success: true,
      user,
    });
  });