const express = require("express");
const indexRouter = require('./routes/index');
const cors = require('cors');
const { Server } = require("socket.io");
const mongoose = require('mongoose');
const { createServer } = require("http");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer,{
    path: "/api/chat"
});

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use('/api/v1',indexRouter);
// app.use();

mongoose.connect('mongodb://admin:easydoor777@35.154.32.149:27017/easydoor?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb');
});
httpServer.listen(7000, () => {
    console.log("Server is running on port 7000");
});