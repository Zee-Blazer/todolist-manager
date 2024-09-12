import { IsString, IsOptional } from "class-validator";

export class UpdateStaffDto {
    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    password: string;
}