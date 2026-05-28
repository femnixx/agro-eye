const db = require('./db');

async function runTest() { 
    try {
        console.log("Contacting local database");

        const result = await db.query("SELECT NOW()");

        console.log("Successfully connected");
        console.log("Database server time: ", result.rows[0].now);

        process.exit(0);
    } catch (e) { 
        console.error("Connection failed");
        console.error("Error message: ", e.message);
        process.exit(1);
    }
}

runTest();