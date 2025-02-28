import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidation implements ValidatorConstraintInterface {    
    constructor(private userRepository: UserRepository) {}
    
    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const userWithEmail = await this.userRepository.findByEmail(value);

        return !userWithEmail;
    }

}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
    return (obj: Object, propriedade: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: propriedade,
            options: validationOptions,
            constraints: [],
            validator: UniqueEmailValidation,
        })
    }
}