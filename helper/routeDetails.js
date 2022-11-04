function routeDetails(req, res, next) {
	res.body = {
		baseUrl: req.baseUrl,
		path: req.path,
		fullPath: req.baseUrl + req.path,
		TLS: req.secure,
		hostname: req.hostname,
	};
	next();
}

module.exports = routeDetails;
