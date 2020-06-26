const express = require('express');
const Flight = require('mongoose').model('Flight');

 router = express.Router();

const redir = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3001/';

router.get('/', (req, res) => {
  res.json({message: "Assalamualikum"});
})
router.post('/flight', (req, res) => {
   const { 
           AircraftId, AircraftType, MessageType, 
           FlightRules, Equipment, Departure, 
           Route, Destination, Other
         } = req.body;

    const flight = new Flight({ 
      aircraft_id: AircraftId,
      aircraft_type: AircraftType,
      message_type: MessageType,
      flight_rules: FlightRules,
      equipment: Equipment,
      departure: Departure,
      route: Route,
      destination: Destination,
      other: Other
    });
    flight.save((err, data) => {
            let result = { 
              AircraftId: data.aircraft_id,
              AircraftType: data.aircraft_type,
              MessageType: data.message_type,
              FlightRules: data.flight_rules,
              Equipment: data.equipment,
              Departure: data.departure,
              Route: data.route,
              Destination: data.destination,
              Others: data.other
            }
            res.json(result);
    });
});

module.exports = router;
