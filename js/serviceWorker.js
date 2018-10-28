if (navigator.serviceWorker) {
	navigator.serviceWorker.register('./service.js')
	.then(function () {
		console.log('sw Registered succesfully');
	})
	.catch(function () {
		console.log('registeration Failed');
	});
}