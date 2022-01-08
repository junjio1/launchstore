const db = require ("../../config/db")
const fs = require=("fs")
module.exports= {
    create({filename, path , product_id}) {

        console.log(path)
        const query =`
            INSERT INTO files (
                name,
                path,
                product_id
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
    
        const values = [
            filename,
            path,
            product_id
        ]

        return db.query(query, values)
    },
    delete(id){


        return db.query(`DELELTE * FROM files WHERE id = $1 `,[id])
    }
}