import { Expose } from "class-transformer";

export class ManagerDto {
    @Expose()
    id: number;

    @Expose()
    username: string;

    @Expose()
    role: string;
}
