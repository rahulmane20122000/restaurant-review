import express from 'express';
import { registerApp } from './modules/routes/routes.register';



export const startApp = ()=>{
    const app = express();

    const { PORT } = process.env;
  registerApp(app);
    app.listen(PORT , ()=>console.log(`server listening at port : ${PORT}`));
}