import db from "../../utils/db"
import userItem from "../../data/users.json"
import User from "../../models/user"

async function handler(req, res) {
    await db.connect()

    await User.insertMany(userItem)

    res.send({ message: "user added" })
}


export default handler