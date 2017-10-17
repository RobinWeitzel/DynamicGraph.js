# DynamicGraph.js

Wrapper for **Chart.js**.
Converts data-structures into the format required by Chart.js.
Formats include:
- Excel-like array structures
- Complex objects
- Complex maps

An interactive example can be found [here](https://robinweitzel.github.io/DynamicGraph.js/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Requires [Chart.js](https://github.com/chartjs/Chart.js).

### Installing

Include file in your HTML document.

```
<script src="dynamicgraph.js" type="text/javascript"></script>
```

## How to use

Read in arrays or objects and define, what should be displayed on the x-axis and y-axis:

```html
<body>
    <canvas id="myChart" width="400" height="400"></canvas>
    <script src="dynamicgraph.js" type="text/javascript"></script>
    <script>
        const graph = new DynamicGraph("myChart");
        graph.createGraphFromArray(graph type, data, x-axis, y-axis, filter, color, options);
    </script>
</body>
```

## Documentation

### Excel-like data structures

Read in simple arrays:

```html
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

The array can also contain Objects or Maps:

```html
<body>
    <canvas id="myChart" width="400" height="400"></canvas>
    <script src="dynamicgraph.js" type="text/javascript"></script>
    <script>
        // Example data
        const map = new Map();
            map.set('first', "David");
            map.set('last', "Miller");

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

### Objects and Maps

More naturally ocoording data structures like arrays and maps can also be parse:

```html
<body>
    <canvas id="myChart" width="400" height="400"></canvas>
    <script src="dynamicgraph.js" type="text/javascript"></script>
    <script>
        // Example data
        const data2 = {
                    user: {
                        name: 'Michael',
                        id: 999
                    },
                    values: [1, 2, 3, 4, 5],
                    colors: ['blue', 'blue', 'green', 'yellow', 'red'],
                    id: 2
                };

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
        graph.createGraphFromObject('bar', data2, ['colors'], ['values'], [], 'green', options);
    </script>
</body>
```

### Read in data without drawing it

Data can be read in without drawing it:

```html
<script>
    const graph = new DynamicGraph("myChart");
    const labels = graph.loadObject(data2); 
    // labels = ['username', 'userid', 'values', 'colors', 'id']
</script>
```

The returned object contains an array of all labels.
These labels can be used to manipulate the data.

```html
<script>
    // labels = ['username', 'userid', 'values', 'colors', 'id']
    graph.createGraphFromMemory('bar', labels[3], labels[2], [], 'yellow', options);
</script>
```

### Select labels for x-axis

One or more dimensions can be displayed on the x-axis.

```html
<script>
    const graph = new DynamicGraph("myChart");

    const xDimension = ['usernamelast', 'time']

    graph.createGraphFromArray('bar', data, xDimension, ['sum'], [], 'blue', options);
</script>
```

### Select labels for y-axis

One or more dimensions can be displayed on the y-axis.

```html
<script>
    const graph = new DynamicGraph("myChart");

    const yDimension = ['sum', 'time']

    graph.createGraphFromArray('bar', data, 'usernamelast', yDimension, [], 'blue', options);
</script>
```

### Filter data

Simple filters can be applied by passing in a string condition

```html
<script>
    const graph = new DynamicGraph("myChart");

    const filter = {label: 'time', condition: '<= 2'};

    graph.createGraphFromArray('bar', data, 'usernamefirst', 'sum', [filter], 'blue', options);
</script>
```

Compley filters can be applied by passing in a function that returns a boolean.
The function can access the data via the variable 'd'.

```html
<script>
    const graph = new DynamicGraph("myChart");

    const filter = {label: 'time', function: 'return d % 2 === 1'};

    graph.createGraphFromArray('bar', data, 'usernamefirst', 'sum', [filter], 'blue', options);
</script>
```

### Aggregate data

The functions **max**, **min**, **sum** and **avg** are available to aggregate data:

```html
<script>
    const graph = new DynamicGraph("myChart");

    graph.createGraphFromArray('bar', data, 'usernamelast', [{label: 'sum', mode: "max"}], [], 'blue', options);
</script>
```

Additionally, custom functions can be passed in to aggregate data:

```html
<script>
    const graph = new DynamicGraph("myChart");


    const f = (array, pos) => {
        const mode = {};
        let maxOccurance = 0;
        let maxOccuranceValue;

        array.forEach(a => {
            mode[a[pos]] = mode[a[pos]] ? mode[a[pos]] + 1 : 1;

            if(maxOccurance < mode[a[pos]]) {
                maxOccurance = mode[a[pos]];
                maxOccuranceValue = a[pos];
            }
        });
        return maxOccuranceValue;
    };

    const yDimension = [{label: 'sum', function: f}]

    graph.createGraphFromArray('bar', data, 'usernamelast', yDimension, [], 'blue', options);
</script>
```

### Different color schemes

Different colors schemes are available as well as an option for a random scheme.

```html
<script>

    const color = ['yellow', 'orange', 'red', 'green', 'darkgreen', 'turquoise', 'lightblue', 'blue', 'darkblue', 'purple', 'pink', 'rose', 'grey', 'random'];

    graph.createGraphFromArray('bar', data, 'usernamefirst', 'sum', [filter], color[0], options);
</script>
```

### Different graph types

The type of graph can be change by changing the type-parameter:

```html
<script>
    const type = 'pie';

    graph.createGraphFromArray(type, data, 'usernamefirst', 'sum', [filter], 'blue', options);
</script>
```

All options offered by Graph.js are available.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details