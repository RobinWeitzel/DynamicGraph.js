﻿/**
 * Copyright 2017 Robin Weitzel
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * See https://github.com/RobinWeitzel/DynamicGraph.js for more information
 */

let globalMeta;

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
    if (Object.prototype.toString.call(array[1].data) === "[object Object]" || Object.prototype.toString.call(array[1].data) === "[object Map]") return true;
    for (let a of array[1].data) {
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
    const processedIds = [];
    if(typeof array[0].data[pos] === "number") { 
        array.forEach(a => {
            if(processedIds.indexOf(a.meta[pos]) < 0) {
                sum += a.data[pos];
                processedIds.push(a.meta[pos]);
            }
        });
    } else {
        // Convert currencies
        let result = array.map(a => a.data[pos].replace("$", ""));
        result = result.map(r => r.replace("€", ""));
        result = result.map(r => r.replace("£", ""));

        if(isNaN(result[0])) {
            array.forEach(a => {
                if(processedIds.indexOf(a.meta[pos]) < 0) {
                    sum += 1;
                    processedIds.push(a.meta[pos]);
                }
            });
        } else {
            result = result.map(r => parseFloat(r));
            for(let i = 0; i < result.length; i++) {
                if(processedIds.indexOf(array[i].meta[pos]) < 0) {
                    sum += result[i];
                    processedIds.push(array[i].meta[pos]);
                }
            }
        }
    }
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
    const processedIds = [];
    if(typeof array[0].data[pos] === "number") { 
        array.forEach(a => {
            if(processedIds.indexOf(a.meta[pos]) < 0) {
                sum += a.data[pos];
                processedIds.push(a.meta[pos]);
            }
        });
    } else {
        // Convert currencies
        let result = array.map(a => a.data[pos].replace("$", ""));
        result = result.map(r => r.replace("€", ""));
        result = result.map(r => r.replace("£", ""));

        if(isNaN(result[0])) {
            array.forEach(a => {
                if(processedIds.indexOf(a.meta[pos]) < 0) {
                    sum += 1;
                    processedIds.push(a.meta[pos]);
                }
            });
        } else {
            result = result.map(r => parseFloat(r));
            for(let i = 0; i < result.length; i++) {
                if(processedIds.indexOf(array[i].meta[pos]) < 0) {
                    sum += result[i];
                    processedIds.push(array[i].meta[pos]);
                }
            }
        }
    }
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
    if(typeof array[0].data[pos] === "number") {      
        array.forEach(a => {
            if (!max || a.data[pos] > max) max = a.data[pos];
        });  
    } else {
        // Convert currencies
        let result = array.map(a => a.data[pos].replace("$", ""));
        result = result.map(r => r.replace("€", ""));
        result = result.map(r => r.replace("£", ""));

        if(isNaN(result[0])) {
            const maxObj = {};
            array.forEach(a => {
                maxObj[a.data[pos]] = maxObj[a.data[pos]] + 1 || 1;
            });
    
            Object.entries(maxObj).forEach((key, value) => {
                if (!max || value > max) max = value;
            });
        } else {
            result = result.map(r => parseFloat(r));
            result.forEach(r => {
                if (!max || r > max) max = r;
            });  
        }    
    }
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
    if(typeof array[0].data[pos] === "number") { 
        array.forEach(a => {
            if (!min || a.data[pos] < min) min = a.data[pos];
        });
    } else {
        // Convert currencies
        let result = array.map(a => a.data[pos].replace("$", ""));
        result = result.map(r => r.replace("€", ""));
        result = result.map(r => r.replace("£", ""));

        if(isNaN(result[0])) {
            const minObj = {};
            array.forEach(a => {
                minObj[a.data[pos]] = minObj[a.data[pos]] + 1 || 1;
            });
    
            Object.entries(minObj).forEach((key, value) => {
                if (!min || value < min) min = value;
            });
        } else {
            result = result.map(r => parseFloat(r));
            result.forEach(r => {
                if (!min || r < min) min = r;
            });  
        }
    }
    return min;
};

/**
 * Returns the aggregated distinct value of all elements of an array at position pos
 * 
 * @param {[number]} array The array containing all elements
 * @param {number} pos The position of the elements that should be summed
 * 
 * @return {*} the distinct value if all objects in the array are the same
 */
const distinct = (array, pos) => {
    let last = array[0][pos];
    array.forEach(a => {
        if (a[pos] !== last) return;
    });
    return last;
};

/**
 * Reduces an array to one value using on eof multiple aggregation methods
 * 
 * @param {*} array The array containing all elements
 * @param {*} pos The position of the elements that should be summed
 * @param {*} mode The aggreagtion mode
 * 
 * @return {*} the aggregated value
 */
const customReduce = (array, pos, mode) => {
    if (mode && mode.function !== undefined) return mode.function(array, pos);
    switch (mode.mode) {
        case "avg": return avg(array, pos);
        case "max": return max(array, pos);
        case "min": return min(array, pos);
        case "distinct": return distinct(array, pos);
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
    } else if (Object.prototype.toString.call(obj) === "[object Map]") {
        for (let key of obj.keys()) {
            if (Object.prototype.toString.call(obj.get(key)) === "[object Object]" || Object.prototype.toString.call(obj.get(key)) === "[object Map]") {
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
    } else {
        return { labels: [label], values: obj };
    }
    return { labels: labels, values: values };
};

/**
 * Similar to flattenObjects, but uses an array with an excel-like structure
 * 
 * @see flattenObjects()
 * @param {[[*]]} array
 * @return {[[*]]}
 */
const flattenArray = (array) => {
    if (array.length < 2) return array;

    for (let i = 0; i < array[1].data.length; i++) {
        if (Object.prototype.toString.call(array[1].data[i]) === "[object Object]" || Object.prototype.toString.call(array[1].data[i]) === "[object Map]") {
            const label = array[0][i];
            const result = flattenObjects(array[1].data[i], label);
            array[0].splice(i, 1, ...result.labels);
            globalMeta.splice(i, 1, ...result.values.map(r => globalMeta[i]));

            for (let j = 1; j < array.length; j++) {
                const result = flattenObjects(array[j].data[i], label);
                array[j].data.splice(i, 1, ...result.values);
                array[j].meta.splice(i, 1, ...result.values.map(r => array[j].meta[i]));
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
 *  {
 *      data: [1, 'Alex', 'hi],
 *      meta: [1, 1, 1]
 *  },
 *  {
 *      data: [1, 'Bush', 'hi'],
 *      meta: [1, 2, 1]
 *  }
 * ]
 * 
 * @param {[[*]]} values The 2-dimensional array
 * 
 * @return {[[*]]} multiple 1-dimensional arrays
 */
const expandArray = (values) => {
    const result = [];
    const arrayPos = []; // Contains the index of each value that is an array
    
    if(values.meta === undefined) {
        globalMeta = values.map(v => 1); // Contains the meta-data to each array element
        values = {
            data: values,
            meta: globalMeta
        };
    }
    
    let largestArray = 0;

    for (let i = 0; i < values.data.length; i++) {
        if (Object.prototype.toString.call(values.data[i]) === "[object Array]") {
            arrayPos.push(i);
            if (values.data[i].length >= largestArray) largestArray = values.data[i].length;
        }
    }

    if (arrayPos.length < 1) return values;

    for (let j = 0; j < largestArray; j++) {
        const helper = values.data.slice(0);
        const metaHelper = values.meta.slice(0);
        for (let pos of arrayPos) {
            helper.splice(pos, 1, values.data[pos][j]);
            metaHelper[pos] = globalMeta[pos]++;
        }
        result.push({data: helper, meta: metaHelper});
    }
    return result;
};

/**
 * Expands multiple arrays
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
 * @param {[[*]]} values Multiple 2-dimensional arrays
 * 
 * @return {[[*]]} multiple 1-dimensional arrays
 */
const expandArrays = (values) => {
    for (let i = 0; i < values.length; i++) {
        const result = expandArray(values[i]);

        if (Object.prototype.toString.call(result) === "[object Array]") {
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
    drawGraph(type, xLabels, yLabels, datasets, options) {
        this.resetCanvas();
        if(options === undefined) options = {};
        this.chart = new Chart(this.canvas, {
            type: type,
            data: {
                xLabels: xLabels,
                yLabels: yLabels,
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
     * Transforms data 
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
     */
    createGraph(type, xArray, yArray, filterArray, color, options) {
        const data = this.data;
        if (data.length < 2) return null;

        let helperData = data.slice(1);

        // Filter data
        if(filterArray === undefined) filterArray = [];
        if(typeof filterArray === 'string' || typeof filterArray === 'number') filterArray = [filterArray];
        
        for (let filter of filterArray) {
            let pos = data[0].indexOf(filter.label);
            if (pos < 0) continue;

            if (filter.condition !== undefined) {
                helperData = helperData.filter(d => eval((typeof d.data[pos] === 'string' ? `'${d.data[pos]}'` : d.data[pos]) + filter.condition));
            } else if (filter.function !== undefined) {
                let f = new Function('d', filter.function);

                helperData = helperData.filter(d => f(d.data[pos]));
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
                    if (!helper2.has(key + " " + value[i].data[pos])) helper2.set(key + " " + value[i].data[pos], []);
                    helper2.get(key + " " + value[i].data[pos]).push(value[i]);
                }
            }

            helper = helper2;
        }

        const xLabels = Array.from(helper.keys());
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
                    backgroundColor: getColorScheme(color, 0.2, xLabels.length), 
                    borderColor: getColorScheme(color, 1, xLabels.length),
                    borderWidth: 1
                }
            } else {
                let pos = data[0].indexOf(y);
                if (pos < 0) continue;

                dataset = {
                    label: y,
                    data: Array.from(helper.values()).map(h => customReduce(Array.from(h), pos)),
                    backgroundColor: getColorScheme(color, 0.2, xLabels.length),
                    borderColor: getColorScheme(color, 1, xLabels.length),
                    borderWidth: 1
                } 
            }
            datasets.push(dataset);
        }
        this.drawGraph(type, xLabels, [], datasets, options);
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
        this.loadArray(data);
        this.createGraph(type, xArray, yArray, filterArray, color, options);
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
        loadObject(data); 

        this.createGraph(type, xArray, yArray, filterArray, color, options);
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
        
        const labels = data[0];
        
        let counter = 1;
        data = data.slice(1).map(da => {
            const result = {
                data: da,
                meta: da.map(d => counter)
            };
            counter++;
            return result;
        });
        data.splice(0, 0, labels);
        this.data = data;
        return labels;
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
        if (Object.prototype.toString.call(data) === "[object Array]") data = {'' : data};
        
        let flattendData = flattenObjects(data, '');
        let arrayData = expandArray(flattendData.values);
        arrayData.splice(0, 0, flattendData.labels);

        while (containsObjects(arrayData)) {
            flattendData = flattenArray(arrayData);
            arrayData = expandArrays(flattendData.slice(1));
            arrayData.splice(0, 0, flattendData[0]);
        }
        //return this.loadArray(arrayData);

        this.data = arrayData;
        return arrayData[0];
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
        this.createGraph(type, xArray, yArray, filterArray, color, options);
    }
}

