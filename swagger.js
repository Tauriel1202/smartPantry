//swagger control
const swagAuto = require("swagger-autogen")();

//doc details
const doc = {
  info: {
    title: "Smart Pantry",
    description: "An API for tracking food and supply inventory",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

//swagger json creator
const swagJson = "./swagger.json";

//send it to route
const endpoint = ["./routes/index.js"];

//create the file
// swagAuto(swagJson, endpoint, doc);

//run it
swagAuto(swagJson, endpoint, doc).then(async () => {
  await import("./server.js");
});
