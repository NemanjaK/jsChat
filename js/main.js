var chatApplication = new function () {

	var self = this;
	var user = $.cookie('username');
	
	self.socket = io.connect('/');

	self.messageQueue = ko.observableArray([]);

	self.currentMessage = ko.observable();

	self.addMessage = function() {
		self.messageQueue.push({
			username: user,
			message: self.currentMessage()
		});

		// Broadcast it
		self.socket.emit('new-message', {
			username: user,
			message: self.currentMessage()
		});

		self.currentMessage(null);
	}

	self.socket.on('message', function(response){
		var msgList = response;
		$(msgList).each(function(key, val) {
			self.messageQueue.push(val);
		});
	});

}

ko.applyBindings(chatApplication);