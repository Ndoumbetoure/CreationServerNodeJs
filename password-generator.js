var generator = require('generate-password');

var password = generator.generate({
	length: 15,
	numbers: true,
});

// 'uEyMTw32v9'
console.log(password);

