import { Database } from 'utils/database';

const database = new Database();

export const resolvers = {
    Query: {
        donations: () => database.donations.getDonations(),
        getDonationByUserId: (parent, args, context, info) => database.donations.getDonationByUserId(args.userId),
        users: () => database.user.getUsers()
    },
    Mutation: {
        createDonations: (parent, args, context, info) => database.donations.createDonations(args.userId, args.amount, args.tip),
        updateDonations: (parent, args, context, info) => database.donations.updateDonations(args.id, args.userId, args.amount, args.tip),
        removeDonations: (parent, args, context, info) => database.donations.removeDonations(args.id),
    }
};