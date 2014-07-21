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
		var opt = new StationView({model: stat});
		opt.render();
		this.$el.append(opt.el);
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
		var opt = new StationView({model: stat});
		if(stat.get('isFinal')) {
			opt.render();
			this.$el.append(opt.el);
		}
	},
	render: function(){
		this.collection.forEach(this.addOne, this);
	}
});