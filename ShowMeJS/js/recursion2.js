﻿// For each item in the input array, list the items associated with that value 
// in config, if the item doesn't show as a config value, still show the item

var RecursionExample = (function () {
    var publicAPI;

    function getTasks() {
        var input = ["dist"],
            config = {
                "dist": ["build", "deploy"],
                "build": ["js", "css", "version-rev"],
                "js": ["lint", "uglify"],
                "css": ["sass", "css-min"]
            },
            tasks = [];

        input.forEach(function (task) {
            if (config[task]) {
                config[task].forEach(function (task) {
                    if (config[task]) {
                        config[task].forEach(function (task) {
                            if (config[task]) {
                                config[task].forEach(function (task) {
                                    tasks.push(task);
                                })
                            } else {
                                tasks.push(task);
                            }
                        })
                    } else {
                        tasks.push(task);
                    }
                })
            } else {
                tasks.push(task);
            }
        });

        return tasks;
    };

    function getTasksWithRecursion() {
        var input = ["dist"],
            config = {
                "dist": ["build", "deploy"],
                "build": ["js", "css", "version-rev"],
                "js": ["lint", "uglify"],
                "css": ["sass", "css-min"]
            },
        tasksWithRecursion = [];

        input.forEach(function (task) {
            if (config[task]) {
                getTasksWithRecursion(config[task]);
            } else {
                tasksWithRecursion.push(task);
            }
        })

        return tasksWithRecursion;
    };

    publicAPI = {
        getTasks: getTasks,
        getTasksWithRecursion: getTasksWithRecursion
    }

    return publicAPI;

})();
