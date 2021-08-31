import { UserInputError } from "apollo-server";
import { UserType, userType } from 'types/';
import { uniqueIdGenerator } from "..";
import { usersData } from '../../assets/data';

export default class UsersCURD implements UserType {

    users: userType[] = usersData;

    getUsers() {
        return this.users;
    }

    createUsers(firstName: string, lastName: string, email: string) {
        if (firstName && lastName && email) {
            const tempDonation: userType = {
                id: uniqueIdGenerator(),
                firstName: firstName,
                lastName: lastName,
                email: email,
            }
            this.users.push(tempDonation);
            return this.users[this.users.length - 1];
        } else {
            throw new UserInputError('Missing values : firstName, lastName and email required');
        }
    }

    updateUsers(id: string, firstName: string, lastName: string, email: string) {
        const tempObjIndex = this.findIndexById(id);
        if (tempObjIndex > -1) {
            const tempDonation: userType = {
                id: id,
                firstName: firstName || this.users[tempObjIndex].firstName,
                lastName: lastName || this.users[tempObjIndex].lastName,
                email: email || this.users[tempObjIndex].email,
            }
            this.users[tempObjIndex] = tempDonation;
            return this.users[tempObjIndex];
        } else {
            throw new UserInputError('Invalid argument value');
        }
    }

    removeUsers(id: string) {
        const tempObjIndex = this.findIndexById(id);
        if (tempObjIndex > -1) {
            this.users.splice(tempObjIndex, 1);
            return id;
        } else {
            throw new UserInputError('Id not found in the database');

        }
    }

    findIndexById(id: string) {
        return this.users.findIndex(singleDonation => singleDonation.id == id);
    }
}