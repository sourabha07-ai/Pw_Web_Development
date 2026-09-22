function runTask() {
    console.log("Task started");

    setTimeout(runTask, 1000);
}

runTask();