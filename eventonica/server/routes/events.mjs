import express from "express";
import db from "../db/db-connection.js";
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'This is my events route.' });
// });

router.get('/', async function (req, res, next) {
    try {
      const events = await db.any('SELECT * FROM events', [true]);
      res.send(events);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
  
  /* post request goes here */
  /* Add users listing. */
  router.post('/', async (req, res) => {
    const newEvent = {
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        description: req.body.description,
        category: req.body.category
      };
      try {
        const createdEvent = await db.one(
            'INSERT INTO events(name, date, description, category) VALUES($1, $2, $3 , $4) RETURNING *',
          [newEvent.name, newEvent.date, newEvent.description, newEvent.category]
        );
        console.log(createdEvent);
        res.send(createdEvent);
      } catch (e) {
        return res.status(400).json({ e });
      }
  });


  router.delete('/:id', async (req, res) => {
    // : acts as a placeholder
    const eventId = req.params.id;
    try {
      await db.none('DELETE FROM events WHERE id=$1', [eventId]);
      res.send({ status: 'success' });
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
export default router;