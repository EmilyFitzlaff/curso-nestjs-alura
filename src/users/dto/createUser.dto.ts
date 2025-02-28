import { IsEmail, IsNotEmpty, isNotEmpty, isString, minLength, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/unique-email";

export class createUserDTO { 
    @MinLength(3, { message: "O nome deve ter no mínimo 3 caracteres"})
    @IsNotEmpty({ message: "Campo obrigatório" })
    name: string; 

    @IsEmail(undefined, { message: "E-mail inválido" })
    @UniqueEmail({ message: "Já existe um usuário com este e-mail"})
    email: string; 

    @MinLength(6, { message: 'A senha deve possuir no mínimo 6 caracteres'})
    @IsNotEmpty({ message: "Campo obrigatório" })
    password: string 
}