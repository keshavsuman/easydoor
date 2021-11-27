const mongoose = requrie('mongoose');

const couponSchema = mongoose.Schema({
    expiredAt:{
        type:Date
    }
});

module.exports = couponSchema;