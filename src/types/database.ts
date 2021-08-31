import { userType, donationType } from 'types/';

export interface DatabaseType {
    user: UserType;
    donations: DonationsType;
}

export interface UserType {
    users: userType[];
    getUsers: () => userType[];
    createUsers: (firstName: string, lastName: string, email: string) => userType;
    updateUsers: (id: string, firstName: string, lastName: string, email: string) => userType;
    removeUsers: (id: string) => string;
}

export interface DonationsType {
    donations: donationType[];
    getDonations: () => donationType[];
    createDonations: (userId: string, amount: number, tip: number) => donationType;
    updateDonations: (id: string, userId: string, amount: number, tip: number) => donationType;
    removeDonations: (id: string) => string;
}