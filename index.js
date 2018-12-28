const config = require('./config.json');
const client = require('discord-rich-presence')(config.ClientID);

try {
	client.updatePresence({
		details: config.Title,
		state: config.Description,
		startTimestamp: Date.now(),
		// endTimestamp: Date.now() + 1337,
		largeImageKey: config.LargeImageName,
		smallImageKey: config.SmallImageName,
		instance: true,
	});

	console.log("Succesfully added your richpresence!");
} catch (err) {
	console.log(err);
}