const mongoose = require('mongoose');

const projectmemberSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId,
     ref: 'Project',
      required: true 
    },
  memberId: [{ 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
      required: true 
    }],
  // Other relevant team fields
});

module.exports = mongoose.model('projectmember', projectmemberSchema)