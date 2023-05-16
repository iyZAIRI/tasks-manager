const mongoose = require('mongoose');
const ToDoList = require('./TodoList');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    todolists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ToDoList' }],

});

const User = mongoose.model('User', userSchema);

module.exports = User;