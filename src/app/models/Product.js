const db = require ("../../config/db")

module.exports= {
    create(data) {

        const query =`
            INSERT INTO instructors (
                name,
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `
    
        const values = [
            data.name,
        ]

        db.query(query, values)
    },
}