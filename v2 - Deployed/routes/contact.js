const express = require("express");
const router = express.Router();

// Contact
router.get("/contact", (request, response) => {
    response.render("contact.ejs", {page: "contact"});
});

router.post("/contact", (request, response) => {
    // NODEMAILER
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailInfo = {
        from: "'Personal Website' <morganlewiswalsh.test@gmail.com>",
        to: "morganlewiswalsh.test@gmail.com",
        subject: request.body.subject,
        text: "Email recieved from: " 
            + request.body.userEmail 
            + "\n\n" + "Message:\n" 
            + request.body.message
    };
    
    transporter.sendMail(mailInfo, (error, data) => {
        if(error){
            console.log("Error", error);
        }
        else {
            console.log("Email sent", data.response);
        }
    });

    response.redirect("/");
});

module.exports = router;