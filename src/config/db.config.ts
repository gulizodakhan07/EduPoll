export const  dbConfig = ()=>({
    database: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        db_user: process.env.DB_USER

    }
})