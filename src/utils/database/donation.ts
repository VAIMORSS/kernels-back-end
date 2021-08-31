import { UserInputError } from "apollo-server";
import { donationType, DonationsType } from 'types/';
import { findIndexById, uniqueIdGenerator } from "..";
import { donationsData } from '../../assets/data';

export default class DonationsCURD implements DonationsType {

    donations: donationType[] = donationsData;

    getDonations() {
        return this.donations;
    }

    createDonations(userId: string, amount: number, tip: number) {
        if (userId && amount) {
            const tempDonation: donationType = {
                id: uniqueIdGenerator(),
                userId: userId,
                amount: amount,
                tip: tip || 0,
            }
            this.donations.push(tempDonation);
            return this.donations[this.donations.length - 1];
        } else {
            throw new UserInputError('Missing values : userId and amount required');
        }
    }

    updateDonations(id: string, userId: string, amount: number, tip: number) {
        const tempObjIndex = findIndexById(id, this.donations);
        if (tempObjIndex > -1) {
            const tempDonation: donationType = {
                id: id,
                userId: userId || this.donations[tempObjIndex].userId,
                amount: amount || this.donations[tempObjIndex].amount,
                tip: tip || this.donations[tempObjIndex].tip,
            }
            this.donations[tempObjIndex] = tempDonation;
            return this.donations[tempObjIndex];
        } else {
            throw new UserInputError('Invalid argument value');
        }
    }

    removeDonations(id: string) {
        const tempObjIndex = findIndexById(id, this.donations);
        if (tempObjIndex > -1) {
            this.donations.splice(tempObjIndex, 1);
            return id;
        } else {
            throw new UserInputError('Id not found in the database');

        }
    }

    getDonationByUserId(userId: string) {
        return this.donations.filter(donation =>
            donation.userId.localeCompare(userId) == 0
        );
    }
}