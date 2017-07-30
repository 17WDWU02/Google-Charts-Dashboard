google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Car Make');
	data.addColumn('number', 'Count');
	data.addRows([
		['Pontiac', 21],
		['GMC', 45],
		['Mercedes-Benz', 57],
		['Toyota', 50],
		['Honda', 16]
	]);
	
	var dashboard = new google.visualization.Dashboard(document.getElementById('chart1'));

	var rangeSlider = new google.visualization.ControlWrapper({
		'controlType': 'NumberRangeFilter',
		'containerId': 'chart1_filter',
		'options': {
			'filterColumnLabel': 'Count'
		}
	});

	var graph = new google.visualization.ChartWrapper({
		'chartType' : 'PieChart',
		'containerId': 'chart1_chart',
		'options': {
			'width' : 500,
			'height' : 500
		}
	});

	dashboard.bind(rangeSlider, graph);

	dashboard.draw(data);
}












