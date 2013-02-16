var chatApplication = new function () {

	var self = this;

	self.messageQueue = ko.observableArray([
		{
			username: 'Username 1',
			message: "Lorem ipsum"
		},
		{
			username: 'Username 2',
			message: "Lorem ipsum"
		}
	]);

	self.currentMessage = ko.observable();

	self.addMessage = function() {
		self.messageQueue.push({
			username: "me",
			message: self.currentMessage()
		});

		self.currentMessage(null);
	}

}

ko.applyBindings(chatApplication);