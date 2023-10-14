import catchAsyncError from '../middlewares/catchAsyncError.js';
import ErrorHandler from '../utils/errorHandler.js';
import LinvesModel from '../models/lives.js'



export const create = catchAsyncError(async (req, res, next) => {
    const {title} = req.body;
    
    if (!title)
      return next(new ErrorHandler("Please enter all field", 400));
    

    const user = req.user;

    const livesRoom = await LinvesModel.create({title,user});
    
    const roomUrl = `/lives/${livesRoom._id}`;
    res.status(201).json({
      message: '',
      url: roomUrl
    });
});

export const singleLive = catchAsyncError(async (req, res, next) => {
  const {id} = req.params;
  const live = await LinvesModel.findById(id).populate('user');
  res.status(200).json(live);
});


export const getLives = catchAsyncError(async (req, res, next) => {
    const lives = await LinvesModel.find().populate('user');

    res.status(200).json(lives)
});