const getRoom = (req, res) => {
    const roomId = req.params.roomId;
  
    // Check the room and add the user to the room
    // ...
  
    const socketUrl = `http://localhost:3000?roomId=${roomId}`;
    res.json({ socketUrl });
  };
  
  module.exports = {
    getRoom,
  };