window.onerror = function(msg, file, line, col, error) {
    StackTrace.fromError(error).then(
		function(stackframes) {
			var log = {
				msg: msg,
				trace: stackframes
			}
			
			$.ajax(
				{
					type: "POST",
					url: "/api/1/logger",
					data: JSON.stringify(log),
					dataType: "json",
					contentType: "application/json"
				}
			);
		}
	)
	.catch(
		function(e) {
			console.log("could not send to logger");
		}
	);
};