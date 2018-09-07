/* Get Programming with JavaScript
 * Part 1
 * Jahver's Ship
 */

// The spacer namespace

var spacer = {
	blank: function () {
		return "";
	},

	newLine: function () {
		return "\n";
	},

	line: function (length, character) {
		var longString = "****************************************";
		longString += "----------------------------------------";
		longString += "========================================";
		longString += "++++++++++++++++++++++++++++++++++++++++";
		longString += "                                        ";

		length = Math.max(0, length);
		length = Math.min(40, length);
		return longString.substr(longString.indexOf(character), length);
	},
	
	wrap : function (text, length, character) {
		var padLength = length - text.length - 3;
		var wrapText = character + " " + text;      
		wrapText += spacer.line(padLength, " ");
		wrapText += character;
		return wrapText;
	},

	box: function (text, length, character) {
		var boxText = spacer.newLine();
		boxText += spacer.line(length, character) + spacer.newLine();
		boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
		boxText += spacer.line(length, character) + spacer.newLine();
		return boxText;
	}
};


// The Player Constructor

var Player = function (name, health) {
	var newLine = spacer.newLine();
	
	this.name = name;
	this.health = health;
	this.items = [];
	this.place = null;

	this.addItem = function(item){
		this.items.push(item);
	};

	this.getNameInfo = function(){
		return this.name;
	};

	this.getHealthInfo = function () {
		return this.name + " has health " + this.health;
	};

	this.getPlaceInfo = function () {
		return this.name + " is in " + this.place.title;
	};

	this.getItemsInfo = function () {
		var itemsString = "Items:" + newLine;
			 
		this.items.forEach(function(item, i){
			itemsString += "   - " + item + newLine;
		});

		return itemsString;
	};

	this.getInfo = function (character) {  
		var place = this.getPlaceInfo();
		var health = this.getHealthInfo();
		var longest = Math.max(place.length, health.length) + 4;

		var info = spacer.box(this.getNameInfo(), longest, character);
		info += spacer.wrap(place, longest, character);
		info += spacer.newLine() + spacer.wrap(health, longest, character);
		info += newLine + spacer.line(longest, character);

		info += newLine;
		info += "  " + this.getItemsInfo();
		info += newLine;
		info += spacer.line(longest, character);
		info += newLine;

		return info;
	}; 

	this.showInfo = function(character) {
		console.log(this.getInfo(character));
	};
};


// The Place Constructor

var Place = function (title, description) {
		var newLine = spacer.newLine();
	
		this.title = title;
		this.description = description;
		this.items = [];
		this.exits = {};

	
		this.getItemsInfo = function () {
				var itemsString = "Items: " + newLine;
				this.forEach(function (item) {
						itemsString += "   - " + item;
						itemsString += newLine;
				});
				return itemsString;
		};
	
		this.getExitsInfo = function () {
				var exitsString = "Exits from " + this.title;
				exitsString += ":" + newLine;
				
				Object.keys(this.exits).forEach(function (key) {
						exitsString += "   - " + key;
						exitsString += newLine;
				});
			
				return exitsString;
		};

		this.getTitleInfo = function () {
				return spacer.box(
						this.title,
						this.title.length + 4,
						"="
				);
		};

		this.getInfo = function () {
				var infoString = this.getTitleInfo();
				infoString += this.description;
				infoString += newLine + newLine;
				infoString += this.getItemsInfo() + newLine;
				infoString += this.getExitsInfo();
				infoString += spacer.line(40, "=") + newLine;
				return infoString;
		};

	
		this.showInfo = function () {
				console.log(this.getInfo());
		};

		this.addItem = function (item) {
				this.items.push(item);
		};
	
		this.addExit = function (direction, exit) {
				this.exits[direction] = exit;
		};
};





// Game controls

var render = function () {
		console.clear();
		player.place.showInfo();
		player.showInfo("*");  
};

var go = function (direction) {
		var place = player.place;
		var destination = place.exits[direction];
		player.place = destination;
		render();
		return "";
};

var get = function () {
		var place = player.place;
		var item = place.items.pop();
		player.addItem(item);
		render();
		return "";
};



// Map

var ramp = new Place(
		"The Entrance",
		"You are on the access ramp of a small space-freighter, The Sparrow. The entrance is open and the ramp leads inside.\n\nUse get() to pick up items.\n\nUse, for example, go('up') to move"
);

var corridor = new Place(
		"The Corridor",
		"You are in a corridor on the ship. The floor looks solid enough..."
);
var hub = new Place(
		"The Hub",
		"You are in a spacious, circular room. It looks like a nice place to hang out."
);
var hold = new Place(
		"The Smugglers' Hold",
		"You are in a secret hold under the floor panel. It's dark and gloomy. And there's an unsettling smell of damp fur."
);
var pit = new Place(
		"The Maintenance Pit",
		"You are in a pit for ship repairs. Whoever's been looking after this ship hasn't been looking after this ship!"
);
var bench = new Place(
		"The Games Area",
		"You are in the games area of The Hub. There's a game of holo-chess in progress. One creature holds another above its head before slamming it to the ground."
);
var cor2 = new Place(
		"The Cockpit Approach",
		"You are in a corridor outside the cockpit. There is an access ladder to a pair of gun emplacements."
);
var gun1 = new Place(
		"The Top Gun",
		"You are in a gunner's chair. You grasp the control grips and whirl on the chair and quietly whisper 'pew. pew pew pew.'"
);
var gun2 = new Place(
		"The Bottom Gun",
		"You are in a gunner's chair. You grasp the control grips but the gun is broken, stuck in one position. You'll need a great pilot to get any use out of it."
);
var cockpit = new Place(
		"The Cockpit",
		"You are in the cockpit. A bewildering array of buttons, switches, levers and lights confronts you. Out of the viewport you can see a small moon. Hang on..."
);


hub.addItem("a ball droid");
hold.addItem("a walking carpet");
pit.addItem("a hunk of junk");
bench.addItem("a droid's arm");
gun1.addItem("cocky");
cockpit.addItem("a bad feeling about this");

ramp.addExit("up", corridor);
corridor.addExit("fore", hub);
corridor.addExit("under", hold);
hub.addExit("aft", corridor);
hub.addExit("pit", pit);
hub.addExit("sit", bench);
hub.addExit("fore", cor2);
cor2.addExit("aft", hub);
cor2.addExit("up", gun1);
cor2.addExit("down", gun2);
cor2.addExit("fore", cockpit);
cockpit.addExit("aft", cor2);
gun2.addExit("up", cor2);
gun1.addExit("down", cor2);
bench.addExit("stand", hub);
hold.addExit("up", corridor);
hold.addExit("fore", pit);
pit.addExit("aft", hold);
pit.addExit("up", hub);

// Game initialization

var player = new Player("Jahver", 50);
player.addItem("Blaster");
player.place = ramp;

render();

go('up');
go('fore');
go('sit');
go('stand');
/* Further Adventures
 *
 * 1) Move Kandra to a different place
 *    and display info about Kandra
 *    and the place.
 *
 * 2) Improve the output to space
 *    out information about different
 *    objects: people, places, items, exits.
 *
 * Challenge:
 *
 * 3) Write a go function that accepts
 *    a direction as an argument and
 *    moves the player to the place
 *    in that direction.
 *    e.g. > go("north");
 *
 */











