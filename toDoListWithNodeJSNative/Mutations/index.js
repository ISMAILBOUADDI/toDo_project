module.exports = mutations = {
    addTask: (Ttask, date,description,priority ) => `INSERT INTO tasks(TaskName,Date,Description,Priority) VALUES ('${Ttask}', '${date}', '${description}', '${priority}')`,
    getTask: ()=>`SELECT * FROM test`
}

