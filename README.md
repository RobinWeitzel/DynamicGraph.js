# DynamicGraph.js

Wrapper for **Chart.js**.
Converts data-structures into the format required by Chart.js.
Formats include:
- Excel-like array structures
- Complex objects
- Complex maps

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Requires [Chart.js](https://github.com/chartjs/Chart.js).

### Installing

Include file in your HTML document.

```
<script src="dynamicgraph.js" type="text/javascript"></script>
```

## How to use

### Excel-like data structure
Simple Array

```
<body>
    <canvas id="myChart" width="400" height="400"></canvas>
    <script src="dynamicgraph.js" type="text/javascript"></script>
    <script>
        // Example data
        const data = [
            ['sum', 'user', 'time'],
            [10, 'Anderson', 1],
            [2, 'Miller', 2],
            [5, 'Smith', 3]
        ];

        // Graph.js options
        const options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: false
            };

        // reading in the array
        const graph = new DynamicGraph("myChart");
        graph.createGraphFromArray('bar', data, ['usernamefirst'], ['sum'], [], 'blue', options);
    </script>
</body>
```
The result:

![](https://raw.githubusercontent.com/RobinWeitzel/DynamicGraph.js/master/pictures/graphFromArraySimple.png) 

The array can also contain Objects or Maps

```
<body>
    <canvas id="myChart" width="400" height="400"></canvas>
    <script src="dynamicgraph.js" type="text/javascript"></script>
    <script>
        // Example data
        const map = new Map();
            map.set('first', "David");
            map.set('last', "Anderson");

        const data = [
            ['sum', 'user', 'time'],
            [10, {id: 1, name: map}, 1],
            [2, {id: 2, name: {first: 'Alex', last: 'Miller'}}, 2],
            [5, {id: 3, name: {first: 'Julia', last: 'Smith'}}, 3]
        ];

        // Graph.js options
        const options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: false
            };

        // reading in the array
        const graph = new DynamicGraph("myChart");
        graph.createGraphFromArray('bar', data, ['usernamefirst'], ['sum'], [], 'blue', options);
    </script>
</body>
```

Result:

![](https://raw.githubusercontent.com/RobinWeitzel/DynamicGraph.js/master/pictures/graphFromArrayComplex.png)  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details