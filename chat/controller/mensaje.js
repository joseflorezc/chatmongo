const conn = require("../lib/MongoUtils");

// const getMensajes = (callback) =>
//   conn.then((client) => {
//     client
//       .db("chatdb")
//       .collection("mensajes")
//       .find({})
//       .toArray((err, data) => {
//         callback(data);
//       });
//   });

const addMensaje = (mensaje) =>
  conn.then((client) => {
    console.log(mensaje, "holaaa");
    client
      .db("chatdb")
      .collection("mensajes")
      .insertOne(mensaje)
      .then((data) => {
        console.log(data);
      });
  });

const mensaje = { addMensaje };

module.exports = mensaje;
