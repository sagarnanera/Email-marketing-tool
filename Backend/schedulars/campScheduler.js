const sendMail = require('../module/sendMail');
const schedule = require('node-schedule');


const campScheduler = (campKey, scheduleTime) => {


    //retrive data from the db using campKey


    //sample data


    const sender = {
        name: 'SKN'
    };

    const sendingdata = {
        subject: 'hello new sub',
        html: '<h1>new mail</h1>'
    };

    let recievers = ["sagarnanera30@gmail.com", "bote85831@gmail.com"];




    //then schedule the job by given time : scheduleTime



    schedule.scheduleJob(scheduleTime, function () {
        console.log('job is running');

        recievers.forEach(reciever => {
            sendMail(sender, sendingdata, reciever, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            })
        });
    });

}

module.exports = campScheduler;