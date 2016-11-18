window.onerror = function(msg, file, line, col, error) {
    StackTrace.fromError(error).then(
		function(stackframes) {
			var log = {
				msg: msg,
				fingerprint: 2,
				trace: stackframes,
				platform: {
					browser: navigator.userAgent,
					cookiesEnabled: navigator.cookieEnabled
				}
			};
			
			new Fingerprint2().get(function(fingerprint, components){
				log.fingerprint = fingerprint;
				
				$.ajax(
					{
						type: "POST",
						url: "/api/1/logger",
						data: JSON.stringify(log),
						dataType: "json",
						contentType: "application/json"
					}
				);
			});
		}
	)
	.catch(
		function(e) {
			console.log("could not send my messages to the logger service :(");
		}
	);
};