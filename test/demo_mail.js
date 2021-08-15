var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'lam.tranledien@gmail.com',
		pass: 'Hayashi0811'
	}
});

var mailOptions = {
	from: 'lam.tranledien@gmail.com',
	to: 'hayashibutler@gmail.com',
	subject: 'sending Email using Node.js',
	text: 'that was easy'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error) {
		console.log(error)
	} else {
		console.log('Email sent:' + info.response);
	}
});

