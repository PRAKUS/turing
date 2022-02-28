if (navigator.serviceWorker) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("serviceworker.js")
			.then((reg) => console.log("ServiceWorker registered"))
			.catch((err) => console.log(`service ${err}`));
	});
}
