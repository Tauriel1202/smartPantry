const express = require ('express');
const app = express();
const port = process.env.PORT || 3000 ;

// If the app is listeneing at a port, run this route
app.use('/', require('./routes/index'));

// Funtion for listening at a port
app.listen(port, () => {
    console.log(`🎵 Listening on port ${port} 🎵`);
});

