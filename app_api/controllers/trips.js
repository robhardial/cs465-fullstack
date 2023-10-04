const mongoose = require('mongoose');
const model  = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
      const trips = await model.find({}).exec();
      if (!trips) {
        return res.status(404).json({ message: "trip not found" });
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
      if(!trip || !trip.length){
        return res.status(404).json({message: "trip not found"});
      }else{
        return res.status(200).json(trip);
      }
    }catch (err) {
        return res.status(404).json(err);
    }
};

const tripsAddTrip = async(req, res) => {
  try{
    const trip = await model.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description});
    
      if (trip) {
        return res.status(201).json({ message : "Trip created successfully", trip });
      } else {
        return res.status(500).json({ message : "Failed to create the trip" });
      }
    } catch (err) {
        return res.status(404).json(err);
    }
  };

const tripsUpdateTrip = async (req, res) => {
  try{
    const updatedTrip = await model.findOneAndUpdate({'code' : req.params.tripCode}, {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    }, {new: true});

    if(updatedTrip){
      return res.status(200).json(updatedTrip);
    }else{
      return res.status(404).json({message: "Trip not found with code" + req.params.tripCode});
    }
  }catch (err){
    if(err.kind === 'ObjectId'){
      return res.status(404).json({message : "Trip not found with code" + req.params.tripCode});
    }
    
    return res.status(500).json(err);
  }
}; 

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};