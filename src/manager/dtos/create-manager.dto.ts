import { IsString, IsStrongPassword, IsIn } from "class-validator";

export class CreateManagerDto {
    @IsString()
    username: string;

    @IsString()
    @IsStrongPassword()
    password: string;

    @IsIn(["manager"], { message: "The role must be a manager" })
    @IsString()
    role: string;
}
