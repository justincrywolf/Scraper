const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JamSchema = new Schema ({
	jam: {
		type: String,
		unique: true
	},
	summary: {
		type: String
	},
	link: {
		type: String
	},
	photo: {
		type: String
	},
	date: {
		type: Date
	},
	saved: {
		type: Boolean,
		default: false
	},
	note: [
		{
			type: Schema.Types.ObjectId,
			ref: "Note"
		}
	]
});

const Jam = mongoose.model("Jam", JamSchema);

module.exports = Jam;