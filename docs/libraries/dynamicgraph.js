/**
 * Creates colors by starting at a color and then subtracking one step ar a time from rh RGB-value
 * 
 * @param {*} length The number of colors into which the scheme should be split
 * @param {*} startR
 * @param {*} startG 
 * @param {*} startB 
 * @param {*} stepR 
 * @param {*} stepG 
 * @param {*} stepB 
 * @param {*} a The opacity of the color
 */

const getColorResult = (length, startR, startG, startB, stepR, stepG, stepB, a) => {
    const result = [];
    for(let i = 1; i <= length; i++) {
        result.push(`rgba(${startR - stepR * i}, ${startG - stepG * i}, ${startB - stepB * i}, ${a})`);
    }
    return result;
}

/**
 * 
 * @param {string} color The color for which the scheme should be created. If left undefined, a random scheme will be created 
 * @param {*} a The opacity of the color
 * @param {*} length The number of colors into which the scheme should be split
 * 
 * @return {[string]} an Array of colors in the format: rgba(number, number, number, number)
 */
const getColorScheme = (color, a, length) => {
    let startR;
    let startG;
    let startB;

    let middleR;
    let middleG;
    let middleB;

    let endR;
    let endG;
    let endB;

    let stepRToMiddle;
    let stepGToMiddle;
    let stepBToMiddle;

    let stepRToEnd;
    let stepGToEnd;
    let stepBToEnd;

    let result = [];

    switch(color) {
        case 'red':
            startR = 255;
            startG = 204;
            startB = 204;

            middleR = 255;
            middleG = 0;
            middleB = 0;

            endR = 153;
            endG = 0;
            endB = 0;

            break;
        case 'orange':
            startR = 255;
            startG = 229;
            startB = 204;

            middleR = 255;
            middleG = 128;
            middleB = 0;

            endR = 153;
            endG = 76;
            endB = 0;

            break;
        case 'yellow':
            startR = 255;
            startG = 255;
            startB = 204;

            middleR = 255;
            middleG = 255;
            middleB = 0;

            endR = 153;
            endG = 153;
            endB = 0;

            break;
        case 'green':
            startR = 229;
            startG = 255;
            startB = 204;

            middleR = 128;
            middleG = 255;
            middleB = 0;

            endR = 76;
            endG = 153;
            endB = 0;

            break;
        case 'darkgreen':
            startR = 204;
            startG = 255;
            startB = 204;

            middleR = 0;
            middleG = 255;
            middleB = 0;

            endR = 0;
            endG = 153;
            endB = 0;

            break;
        case 'turquoise':
            startR = 204;
            startG = 255;
            startB = 229;

            middleR = 0;
            middleG = 255;
            middleB = 128;

            endR = 0;
            endG = 153;
            endB = 76;

            break;
        case 'lightblue':
            startR = 204;
            startG = 255;
            startB = 255;

            middleR = 0;
            middleG = 255;
            middleB = 255;

            endR = 0;
            endG = 153;
            endB = 153;

            break;
        case 'blue':
            startR = 204;
            startG = 229;
            startB = 255;

            middleR = 0;
            middleG = 128;
            middleB = 255;

            endR = 0;
            endG = 76;
            endB = 153;

            break;
        case 'darkblue':
            startR = 204;
            startG = 204;
            startB = 255;

            middleR = 0;
            middleG = 0;
            middleB = 255;

            endR = 0;
            endG = 0;
            endB = 153;

            break;
        case 'purple':
            startR = 229;
            startG = 204;
            startB = 255;

            middleR = 127;
            middleG = 0;
            middleB = 255;

            endR = 76;
            endG = 0;
            endB = 153;

            break;
        case 'pink':
            startR = 255;
            startG = 204;
            startB = 255;

            middleR = 255;
            middleG = 0;
            middleB = 255;

            endR = 153;
            endG = 0;
            endB = 153;

            break;
        case 'rose':
            startR = 255;
            startG = 204;
            startB = 229;

            middleR = 255;
            middleG = 0;
            middleB = 127;

            endR = 153;
            endG = 0;
            endB = 76;

            break;
        case 'grey':
            startR = 224;
            startG = 224;
            startB = 224;

            middleR = 128;
            middleG = 128;
            middleB = 128;

            endR = 64;
            endG = 64;
            endB = 64;

            break;
        default: // = random colors
            startR = 200 + Math.floor(Math.random() * 40) + 1;
            startG = 200 + Math.floor(Math.random() * 40) + 1;
            startB = 200 + Math.floor(Math.random() * 40) + 1;

            middleR = 100 + Math.floor(Math.random() * 150) + 1;
            middleG = 100 + Math.floor(Math.random() * 150) + 1;
            middleB = 100 + Math.floor(Math.random() * 150) + 1;

            endR = Math.floor(Math.random() * 150) + 1;
            endG = Math.floor(Math.random() * 150) + 1;
            endB = Math.floor(Math.random() * 150) + 1;

            break;
    }

    stepRToMiddle = Math.round((startR - middleR) / (length / 2));
    stepGToMiddle = Math.round((startG - middleG) / (length / 2));
    stepBToMiddle = Math.round((startB - middleB) / (length / 2));

    stepRToEnd = Math.round((middleR - endR) / (length / 2));
    stepGToEnd = Math.round((middleG - endG) / (length / 2));
    stepBToEnd = Math.round((middleB - endB) / (length / 2));

    result.push(...getColorResult(Math.floor(length/2), startR, startG, startB, stepRToMiddle, stepGToMiddle, stepBToMiddle, a));
    result.push(...getColorResult(Math.ceil(length/2), middleR, middleG, middleB, stepRToEnd, stepGToEnd, stepBToEnd, a));
    
    return result;
}


/**
 * Checks if a 2-dimensional array contains an object at the second level
 * 
 * @param {[[*]]} array 
 * 
 * @return {boolean} true, if the array contains an object, otherwise false
 */
const containsObjects = (array) => {
    for (let a of array[1]) {
        if (typeof a === "object") return true;
    }
};

/**
 * Returns the sum of all elements of an array at position pos
 * 
 * @param {[number]} array The array containing all elements
 * @param {number} pos The position of the elements that should be summed
 * 
 * @return {number} the sum of all elements at position pos
 */
const sum = (array, pos) => {
    let sum = 0;
    array.forEach(a => sum += a[pos]);
    return sum;
}

/**
 * Returns the avgerage of all elements of an array at position pos
 * 
 * @param {[number]} array The array containing all elements
 * @param {number} pos The position of the elements that should be summed
 * 
 * @return {number} the average of all elements at position pos
 */
const avg = (array, pos) => {
    let sum = 0;
    array.forEach(a => sum += a[pos]);
    return sum / Math.max(array.length, 1);
};

/**
 * Returns the maximum of all elements of an array at position pos
 * 
 * @param {[number]} array The array containing all elements
 * @param {number} pos The position of the elements that should be summed
 * 
 * @return {number} the maximum of all elements at position pos
 */
const max = (array, pos) => {
    let max;
    array.forEach(a => {
        if (!max || a[pos] > max) max = a[pos];
    });
    return max;
};

/**
 * Returns the minimum of all elements of an array at position pos
 * 
 * @param {[number]} array The array containing all elements
 * @param {number} pos The position of the elements that should be summed
 * 
 * @return {number} the minimum of all elements at position pos
 */
const min = (array, pos) => {
    let min;
    array.forEach(a => {
        if (!min || a[pos] < min) min = a[pos];
    });
    return min;
};

const customReduce = (array, pos, mode) => {
    if (mode && mode.function !== undefined) return mode.function(array, pos);
    switch (mode) {
        case "avg": return avg(array, pos);
        case "max": return max(array, pos);
        case "min": return min(array, pos);
        default: return sum(array, pos);
    }
};

/**
 * Converts an multi-layered object into a 1 layered object.
 * Example:
 * {name: {
 *      first: 'Alex',
 *      last: 'Bush'
 *      },
 * id: 1
 * }
 * 
 * is converted into:
 * 
 * {
 * namefirst: 'Alex',
 * namelast: 'Bush',
 * id: 1
 * }
 * 
 * @param {*} obj The object that gets flattened
 * @param {string} label The label that should be added to each key of the new object
 * 
 * @return {object} An object of the structure {labels: [...string], values: [...*]}
 */
const flattenObjects = (obj, label) => {
    const labels = [];
    const values = [];

    if (Object.prototype.toString.call(obj) === "[object Object]") {
        for (let key of Object.keys(obj)) {
            if (Object.prototype.toString.call(obj[key]) === "[object Object]" || Object.prototype.toString.call(obj[key]) === "[object Map]") {
                const result = flattenObjects(obj[key], key);

                for (let i = 0; i < result.labels.length; i++) {
                    labels.push(label + result.labels[i]);
                    values.push(result.values[i]);
                }
            } else {
                labels.push(label + key);
                values.push(obj[key]);
            }
        }
    } else {
        for (let key of obj.keys()) {
            if (Object.prototype.toString.call(obj[key]) === "[object Object]" || Object.prototype.toString.call(obj[key]) === "[object Map]") {
                const result = flattenObjects(obj.get(key), key);

                for (let i = 0; i < result.labels.length; i++) {
                    labels.push(label + result.labels[i]);
                    values.push(result.values[i]);
                }
            } else {
                labels.push(label + key);
                values.push(obj.get(key));
            }
        }
    }
    return { labels: labels, values: values };
};

/**
 * Similar to flattenObjects, but uses an array with an excel-like structure
 * 
 * @see flattenObjects()
 * @param {[[]*]} array
 * @return {[[*]]}
 */
const flattenArray = (array) => {
    if (array.length < 2) return array;

    for (let i = 0; i < array[1].length; i++) {
        if (Object.prototype.toString.call(array[1][i]) === "[object Object]" || Object.prototype.toString.call(array[1][i]) === "[object Map]") {
            const label = array[0][i];
            const result = flattenObjects(array[1][i], label);
            array[0].splice(i, 1, ...result.labels);

            for (let j = 1; j < array.length; j++) {
                const result = flattenObjects(array[j][i], label);
                array[j].splice(i, 1, ...result.values);
            }
        }
    }
    return array;
}

/**
 * Converts a 2-dimensional array into multiple 1-dimensional arrays.
 * Example:
 * [1, ['Alex', 'Bush'], 'hi']
 * 
 * is coverted into
 * [
 * [1, 'Alex', 'hi],
 * [1, 'Bush', 'hi]
 * ]
 * 
 * @param {[[*]]} values The 2-dimensional array
 * 
 * @return {[[*]]} multiple 1-dimensional arrays
 */
const expandArray = (values) => {
    const result = [];
    const arrayPos = []; // Contains the index of each value that is an array
    let largestArray = 0;
    for (let i = 0; i < values.length; i++) {
        if (Object.prototype.toString.call(values[i]) === "[object Array]") {
            arrayPos.push(i);
            if (values[i].length >= largestArray) largestArray = values[i].length;
        }
    }

    if (arrayPos.length < 1) return values;

    for (let j = 0; j < largestArray; j++) {
        const helper = values.slice(0);
        for (let pos of arrayPos) {
            helper.splice(pos, 1, values[pos][j]);
        }
        result.push(helper);
    }
    return result;
};

/**
 * Expands mutpliw arrays
 * Example structure:
 * [[projectid, projectsteps]
 * [1, [1, 2, 3]]
 * [2, [1]]]
 * 
 * is converted to
 * [[projectid, projectsteps]
 * [1, 1],
 * [1, 2],
 * [1, 3],
 * [2, 1]]
 * 
 * @param {[[*]]} values Multiple 2-dimensional array
 * 
 * @return {[[*]]} multiple 1-dimensional arrays
 */
const expandArrays = (values) => {
    for (let i = 0; i < values.length; i++) {
        const result = expandArray(values[i]);

        if (Object.prototype.toString.call(result[0]) === "[object Array]") {
            values.splice(i, 1, ...result);
            i += result.length - 1;
        } else {
            values.splice(i, 1, result);
        }
    }

    return values;
};

class DynamicGraph {
    /**
     * Creates a new instance of DynamicGraph
     * 
     * @this {DynamicGraph}
     * @param {string} canvasId the ID of the canvas
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvasHeight = this.canvas.height;
        this.canvasWidth = this.canvas.width;
        this.chart;
        this.data;
    }

    /**
     * Draw a chart on the canvas
     * 
     * @this {DynamicGraph}
     * @param {string} type The type of chart (see chart.js for awaylable options)
     * @param {*} labels The values shown on the x-Axis
     * @param {*} datasets For structure see chart.js
     * @param {Object} options The options with which the graph will be drawn (see chart.js for structure)
     */
    drawGraph(type, labels, datasets, options) {
        this.resetCanvas();
        if(options === undefined) options = {};
        this.chart = new Chart(this.canvas, {
            type: type,
            data: {
                labels: labels,
                datasets: datasets
            },
            options: options
        });
    }

    /**
     * Resets the size of the canvas (Graph.js multiplies the size by 2 every time a Graph is drawn)
     */
    resetCanvas() {
        const canvasParent = this.canvas.parentNode;
        const oldCanvas = this.canvas;
        const newCanvas = this.canvas = this.canvas.cloneNode(true);
        newCanvas.height = this.canvasHeight;
        newCanvas.width = this.canvasWidth;
        canvasParent.replaceChild(newCanvas, oldCanvas);
    }

    /**
     * Draws a Graph from an Excel-like data structure
     *      
     * @this {DynamicGraph}
     * @param {string} type The type of chart (see chart.js for awaylable options)
     * @param {[[string | number]]} data The data in an excel-like data structure: [
     *      [label1, label2, label3], <- table head
     *      [data, {label2.1: data, label2.2: data}, data], <- data1
     *      [data, {label2.1: data, label2.2: data}, data] <- data2
     *      ]
     * @param {[string]} xArray The names of columns that should be displayed on the x-Axis
     * @param {[string]} yArray The names of columns that should be displayed on the y-Axis
     * @param {[Object]} filterArry The filters that should be applied ot the data in following structure: {label: string, (optional) condition: string, (option) function: string}
     *                              condition can be anything that can be evaulated via eval() e.g. > 2
     *                              function can be a function that returns true or false and uses d as a variable to access the value of each row
     * @param {string} color The color-scheme of the graph
     * @param {Object} options The options with which the graph will be drawn (see chart.js for structure)
     */
    createGraphFromArray(type, data, xArray, yArray, filterArray, color, options) {
        if (data.length < 2) return null;

        // Flatten objects in arrays
        for (let i = 0; i < data[1].length; i++) {
            if (Object.prototype.toString.call(data[1][i]) === "[object Object]") {
                const label = data[0][i];
                const result = flattenObjects(data[1][i], label);
                data[0].splice(i, 1, ...result.labels);

                for (let j = 1; j < data.length; j++) {
                    const result = flattenObjects(data[j][i], label);
                    data[j].splice(i, 1, ...result.values);
                }
            }
        }

        let helperData = data.slice(1);

        // Filter data
        if(filterArray === undefined) filterArray = [];
        if(typeof filterArray === 'string' || typeof filterArray === 'number') filterArray = [filterArray];
        
        for (let filter of filterArray) {
            let pos = data[0].indexOf(filter.label);
            if (pos < 0) continue;

            if (filter.condition !== undefined) {
                helperData = helperData.filter(d => eval((typeof d[pos] === 'string' ? `'${d[pos]}'` : d[pos]) + filter.condition));
            } else if (filter.function !== undefined) {
                let f = new Function('d', filter.function);

                helperData = helperData.filter(d => f(d[pos]));
            }
        }

        let helper = new Map();
        helper.set('', helperData);

        // Format data for x-Axis
        if(xArray === undefined) xArray = [];
        if(typeof xArray === 'string' || typeof xArray === 'number') xArray = [xArray];

        for (let x of xArray) {
            let pos = data[0].indexOf(x);
            if (pos < 0) continue;

            let helper2 = new Map();

            for (let [key, value] of helper.entries()) {
                for (let i = 0; i < value.length; i++) {
                    if (!helper2.has(key + " " + value[i][pos])) helper2.set(key + " " + value[i][pos], []);
                    helper2.get(key + " " + value[i][pos]).push(value[i]);
                }
            }

            helper = helper2;
        }

        const labels = Array.from(helper.keys());
        const datasets = [];

        // Format data for y-Axis
        if(yArray === undefined) yArray = [];
        if(typeof yArray === 'string' || typeof yArray === 'number') yArray = [yArray];

        for (let y of yArray) {
            let dataset;
            if (y.function !== undefined || y.mode !== undefined) {
                let pos = data[0].indexOf(y.label);
                if (pos < 0) continue;

                dataset = {
                    label: y.label,
                    data: Array.from(helper.values()).map(h => customReduce(Array.from(h), pos, y)),
                    backgroundColor: getColorScheme(color, 0.2, labels.length), 
                    borderColor: getColorScheme(color, 1, labels.length),
                    borderWidth: 1
                }
            } else {
                let pos = data[0].indexOf(y);
                if (pos < 0) continue;

                dataset = {
                    label: y,
                    data: Array.from(helper.values()).map(h => customReduce(Array.from(h), pos)),
                    backgroundColor: getColorScheme(color, 0.2, labels.length),
                    borderColor: getColorScheme(color, 1, labels.length),
                    borderWidth: 1
                } 
            }
            datasets.push(dataset);
        }
        this.drawGraph(type, labels, datasets, options);
    }

    /**
     * Draws a Graph from an object or a map data structure
     *      
     * @this {DynamicGraph}
     * @param {string} type The type of chart (see chart.js for awaylable options)
     * @param {[[string | number]]} data The data in an object or a map: 
     * {
     * user: {
     *      id: 1,
     *      name: test
     *          },
     * values: [1, 2, 3, 4],
     * colors: ['blue', 'blue', 'red', 'yellow', 'green'],
     * id: 1
     * }
     * !!!IMPORTANT!!! All arrays have to be the same size
     * @param {[string]} xArray The names of columns that should be displayed on the x-Axsis
     * @param {[string]} yArray The names of columns that should be displayed on the y-Axsis
     * @param {[Object]} filterArry The filters that should be applied ot the data in following structure: {label: string, (optional) condition: string, (option) function: string}
     *                              condition can be anything that can be evaulated via eval() e.g. > 2
     *                              function can be a function that returns true or false and uses d as a variable to access the value of each row
     * @param {string} color The color-scheme of the graph
     * @param {Object} options The options with which the graph will be drawn (see chart.js for structure)
     */
    createGraphFromObject(type, data, xArray, yArray, filterArray, color, options) {
        let flattendData = flattenObjects(data, '');
        let arrayData = expandArray(flattendData.values);
        arrayData.splice(0, 0, flattendData.labels);

        while (containsObjects(arrayData)) {
            flattendData = flattenArray(arrayData);
            arrayData = expandArrays(flattendData.slice(1));
            arrayData.splice(0, 0, flattendData[0]);
        }

        this.createGraphFromArray(type, arrayData, xArray, yArray, filterArray, color, options);
    }

    /**
     * Loads the data from an Excel-like data structure into the DynamicGraph
     *      
     * @this {DynamicGraph}
     * @param {string} type The type of chart (see chart.js for awaylable options)
     * @param {[[string | number]]} data The data in an excel-like data structure: [
     *      [label1, label2, label3], <- table head
     *      [data, {label2.1: data, label2.2: data}, data], <- data1
     *      [data, {label2.1: data, label2.2: data}, data] <- data2
     *      ]
     *
     * @return {[*]} an array containing the labels that can be used to manipulate the data
     */
    loadArray(data) {
        if (data.length < 2) return null;

        // Flatten objects in arrays
        for (let i = 0; i < data[1].length; i++) {
            if (Object.prototype.toString.call(data[1][i]) === "[object Object]") {
                const label = data[0][i];
                const result = flattenObjects(data[1][i], label);
                data[0].splice(i, 1, ...result.labels);

                for (let j = 1; j < data.length; j++) {
                    const result = flattenObjects(data[j][i], label);
                    data[j].splice(i, 1, ...result.values);
                }
            }
        }
        this.data = data;
        return data[0];
    }

     /**
     * Loads the data from an object or a map data structure into the DynamicGraph
     *      
     * @this {DynamicGraph}
     * @param {string} type The type of chart (see chart.js for awaylable options)
     * @param {[[string | number]]} data The data in an object or a map: 
     * {
     * user: {
     *      id: 1,
     *      name: test
     *          },
     * values: [1, 2, 3, 4],
     * colors: ['blue', 'blue', 'red', 'yellow', 'green'],
     * id: 1
     * }
     * !!!IMPORTANT!!! All arrays have to be the same size
     *
     * @return {[*]} an array containing the labels that can be used to manipulate the data    
     */
    loadObject(data) {
        let flattendData = flattenObjects(data, '');
        let arrayData = expandArray(flattendData.values);
        arrayData.splice(0, 0, flattendData.labels);

        while (containsObjects(arrayData)) {
            flattendData = flattenArray(arrayData);
            arrayData = expandArrays(flattendData.slice(1));
            arrayData.splice(0, 0, flattendData[0]);
        }

        return this.loadArray(arrayData);
    }

    /**
     * Draws a Graph from the data saved in the DynamicGraph
     *      
     * @this {DynamicGraph}
     * @param {string} type The type of chart (see chart.js for awaylable options)
     * @param {[string]} xArray The names of columns that should be displayed on the x-Axis
     * @param {[string]} yArray The names of columns that should be displayed on the y-Axis
     * @param {[Object]} filterArry The filters that should be applied ot the data in following structure: {label: string, (optional) condition: string, (option) function: string}
     *                              condition can be anything that can be evaulated via eval() e.g. > 2
     *                              function can be a function that returns true or false and uses d as a variable to access the value of each row
     * @param {string} color The color-scheme of the graph
     * @param {Object} options The options with which the graph will be drawn (see chart.js for structure)
     * @return null if data is empty
     */
    createGraphFromMemory(type, xArray, yArray, filterArray, color, options) {
        if(this.data === undefined) return null;
        this.createGraphFromArray(type, this.data, xArray, yArray, filterArray, color, options)
    }
}

