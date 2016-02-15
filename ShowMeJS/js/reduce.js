function Reduce() {
    //egghead.io lesson by mykola bilokonsky
    // https://egghead.io/lessons/javascript-introducing-reduce-common-patterns

    var data = [1, 2, 3, 4, 5, 6];

    //double all values using reduce
    var doubled = data.reduce(function (acc, value) {
        acc.push(value * 2);

        return acc;
    }, []);

    //double all values using map
    var doubledMappped = data.map(function (item) {
        return item * 2;
    });

    console.log("My doubled data:", doubled);
    console.log("My doubled data:", doubledMappped);

    //filter values using reduce
    var evens = data.reduce(function (acc, value) {
        if (value % 2 === 0) {
            acc.push(value);
        }

        return acc;
    }, []);

    //filter values using filter
    var evensFilter = data.filter(function (item) {
        return (item % 2 === 0);
    });

    console.log("Filter using reduce:", evens);
    console.log("Filter using filter:", evensFilter);

    //large data set
    var bigData = [];
    for (var i = 0; i < 10000000; i++) {
        bigData[i] = i;
    }

    //combine filter and map using reduce
    console.time("bigDataWithReduce");
    var filterMapReduce = bigData.reduce(function (acc, value) {
        if (value % 2 === 0) {
            acc.push(value * 2);
        }

        return acc;
    }, []);
    console.timeEnd("bigDataWithReduce");


    //combine filter and map
    console.time("bigDataWithoutReduce");
    var filterMapped = bigData.filter(function (item) {
        return (item % 2 === 0);
    }).map(function (item) {
        return item * 2;
    });
    console.timeEnd("bigDataWithoutReduce");

    //Notes:  for smaller data sets combine map and filter, for larger data sets use reduce
    //        because with reduce you only pass over the data set once, for the test data set
    //        using reduce by itself cut the time in more than half
};