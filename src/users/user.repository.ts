import { Injectable } from "@nestjs/common";
import { createUserDTO } from "./dto/createUser.dto";

@Injectable()
export class UserRepository {
    private users: any[] = [];

    async save(user) {
        this.users.push(user);
    }

    async getAllUsers() {
        return this.users;
    }
}