const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:cZnR7iwFbpYAFqx4@cluster0.yunslut.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');

//'mongodb://localhost:27017/EmployeeDB'