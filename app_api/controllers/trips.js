const mongoose = require('mongoose');
const model  = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
      const trips = await model.find({}).exec();
      if (!trips) {
        return res.status(404).json({ "message": "trip not found" });
      } else {
        return res.status(200).json(trips);
      }
    } catch (err) {
      return res.status(404).json(err);
    }
  };

const tripsFindByCode = async (req, res) => {
    try {
      const trip = await model.find({'code': req.params.tripCode}).exec();
      if(!trip || trip.length == 0){
        return res.status(404).json({"message": "trip not found"});
      }else{
        return res.status(200).json(trip);
      }
    }catch (err) {
        return res.status(404).json(err);
    }
};

  

module.exports = {
    tripsList,
    tripsFindByCode
};