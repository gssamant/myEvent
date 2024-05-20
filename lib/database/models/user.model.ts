import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: false, default:'' },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: false, default: '' },
  lastName: { type: String, required: false, default: '' },
  photo: { type: String, required: false, default:' ' },
});

const User = models.User || model('User', UserSchema);

export default User;
