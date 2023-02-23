import User from "../../models/user.model";
import dbConnect from "../../config/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { name, email, password } = req.body;
    // Check if this user already exisits
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("That user already exists!");
    }
    // Insert the new user if they do not exist yet
    user = await User.create({ name, email, password });

    res.status(201).json({ user });
  }
}
