import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.index,
  },
  UserByeId: {
    method: "GET",
    url: "/user",
    preHandler: [validateRequest],
    handler: UserController.UserByeId,
  },
  RemoveUser: {
    method: "DELETE",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.removeUser,
  },
  updateUser: {
    method: "PUT",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.updateUser,
  },
};
