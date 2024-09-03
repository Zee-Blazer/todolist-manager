import { IsString, IsStrongPassword, IsNotEmpty, IsIn } from "class-validator";

export class CreateManagerDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsIn(["manager"], { message: "The role must be a manager" })
    @IsString()
    role: string;
}
