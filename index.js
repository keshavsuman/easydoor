const express = require("express");
const authToken = require('./middlewares/authToken');
const indexRouter = require('./routes/index');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors({
    origin: '*'
}));
// app.use(authToken);
app.use(express.json());
app.use('/api/v1',indexRouter);

mongoose.connect('mongodb://admin:easydoor777@35.154.32.149:27017/easydoor?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb');
});
app.listen(7000, () => {
    console.log("Server is running on port 7000");
});