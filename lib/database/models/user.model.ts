import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, default:'' },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true, default: '' },
  lastName: { type: String, required: true, default: '' },
  photo: { type: String, required: true, default:' ' },
});

const User = models.User || model('User', UserSchema);

export default User;
