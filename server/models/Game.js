const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    player1: {
      type: Object,
      require: true,
    },
    player2: {
      type: Object,
      require: true,
    },
    wonPlayer: {
      type: String,
      require: true,
    },
    moves: {
      type: Number,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    history: {
      type: Object,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Game', gameSchema);
