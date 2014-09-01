//* VIEWS
//* 
var StationView = Backbone.View.extend({
	tagName: 'option',
	className: 'station',
	template: _.template('<%= title %>'),
	attributes: function() {
		return {
			'data-attr': this.model.title
		};
	},
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		this.$el.attr('value', attributes.id);
	}
});

var StationFrom = Backbone.View.extend({
	tagName: 'select',
	className: 'stationFrom',
	value: 0,
	events: {
		'change': 'changeStationFrom'
	},
	initialize: function() {
		this.render();
	},
	changeStationFrom: function() {
		this.value = this.$el[0].value;
		//stationTo.checkStation(this.value);
		alert(this.$el[0].value);
	},
	addOne: function(stat){
		var option = new StationView({model: stat});
		option.render();
		this.$el.append(option.el);
	},
	render: function(){
		this.collection.forEach(this.addOne, this);
	}
});

var StationTo = Backbone.View.extend({
	tagName: 'select',
	className: 'stationTo',
	value: 5,
	events: {
		'change': 'changeStationTo'
	},
	initialize: function() {
		this.render();
	},
	changeStationTo: function() {
		alert(this.$el[0].value);
	},
	checkStation: function(id) {
		alert('Check station: ' + id);
	},
	addOne: function(stat){
		var option = new StationView({model: stat});
		if(stat.get('isFinal')) {
			option.render();
			this.$el.append(option.el);
		}
	},
	render: function(){
		this.collection.forEach(this.addOne, this);
	}
});

var DaysView = Backbone.View.extend({
	tagName: 'select',
	id: 'days',
	optionTemplate: '<option value="<%= slug %>"><%= title %></option>',
	initialize: function() {
		this.render();
	},
	addOption: function(option) {
		console.log('addOption: ', option);
		this.$el.append(this.optionTemplate(option));
	},
	render: function() {
		this.$el.html('');
		var attributes = this.model.toJSON();
		console.log(attributes);
		for(var i = 0; i < attributes.types.length; i++) {
			this.addOption(attributes.types[i]);
		}
	}
})

var ArrivesView = Backbone.View.extend({
	tagName: 'table',
	id: 'arrives',
	cellTemplate: _.template('<tr><td><%= time %></td></tr>'),
	initialize: function() {
		this.render();
	},
	addCell: function(cell) {
		console.log(cell);
		this.$el.append(this.cellTemplate({time: cell}));
	},
	render: function() {
		this.$el.html('');
		var attributes = this.model.toJSON();
		console.log(attributes.cells);
		for(var i =0; i < attributes.cells.length; i++) {
			this.addCell(attributes.cells[i]);
		}
	}
});