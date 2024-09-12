import { IsString, IsIn } from "class-validator";

export class CreateStaffDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsIn(["staff"], { message: "The role must be a manager" })
    @IsString()
    role: string;
}
