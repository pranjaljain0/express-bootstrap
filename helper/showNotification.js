var notifier = require('node-notifier');

function showNotification(err, str, req) {
	var title = 'Error in ' + req.method + ' ' + req.url;
	notifier.notify({
		title: title,
		message: str,
	});
}

module.exports = showNotification;
