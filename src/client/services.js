import io from "socket.io-client";
import { ObservableSocket } from "shared/observable-socket";
import { UsersStore } from "./stores/users";

export const socket = io({ autoConnect: false });
export const server = new ObservableSocket(socket);

export const usersStore = new UsersStore(server);
