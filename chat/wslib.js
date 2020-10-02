const WebSocket = require("ws");

const mensaje = require("./controller/mensaje");

const clients = [];

const wsConnection = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    clients.push(ws);
    // sendMessages();

    ws.on("message", (message) => {
      const mensajeAEnviar = { mensaje: message };
      mensaje.addMensaje(mensajeAEnviar);

      //   sendMessages();
    });
  });

  //   const sendMessages = () => {
  //     clients.forEach((client) =>
  //       client.send(JSON.stringify(mensaje.getMensajes()))
  //     );
  //   };
};

exports.wsConnection = wsConnection;
