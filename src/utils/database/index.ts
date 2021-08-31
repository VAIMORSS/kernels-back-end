import { DatabaseType } from "types/";
import DonationsCURD from "./donation";
import UsersCURD from "./users";

export class Database implements DatabaseType {
    user = new UsersCURD();
    donations = new DonationsCURD();
}