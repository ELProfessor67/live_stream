import { server } from "./socket.js";
import {connectDB} from './config/database.js';

const PORT = process.env.PORT || 4000;
connectDB();


server.listen(PORT,() => {
    console.log(`server listning on port ${PORT}`);
});