const Merchant = require('../../models/merchantModel');
const User = require('../../models/userModel');

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
}

async function getUsers(req, res) {
  try {
    const merchants = await Merchant.find();
    res.json(merchants);
  } catch (err) {
    res.json({ message: err });
  }
}

async function createUser(req, res) {
  const merchant = new Merchant({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    website: req.body.website,
    image: req.body.image,
    description: req.body.description,
    user: req.body.user,
  });
  try {
    const savedMerchant = await merchant.save();
    res.json(savedMerchant);
  } catch (err) {
    res.json({ message: err });
  }
}

async function updateUser(req, res) {
  try {
    const merchant = await Merchant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(merchant);
  } catch (err) {
    res.json({ message: err });
  }
}

async function deleteUser(req, res) {
    try {
      const merchant = await Merchant.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(merchant);
    } catch (err) {
      res.json({ message: err });
    }
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    createUser,
    deleteUser,

};