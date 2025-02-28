import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user);
    }

    async getAllUsers() {
        return this.users;
    }

    async findByEmail(email: string) {
        const filteredUsers = this.users.find(user => user.email === email);

        return filteredUsers !== undefined;
    }

    private async findById(id: string) {
        const filteredUsers = this.users.find(user => user.id === id);

        if (!filteredUsers) {
            throw new Error('Usuário não encontrado');
        }

        return filteredUsers;
    }

    async updateUser(id: string, newData: Partial<UserEntity>) {
        const user = await this.findById(id);

        Object.entries(newData).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }

            user[key] = value; 
        })

        return user;
    }

    async deleteUser(id: string) {
        const user = await this.findById(id);

        this.users = this.users.filter(value => value.id !== id);

        return user;
    }
}