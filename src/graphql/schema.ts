import { gql } from "apollo-server";

export const typeDefs = gql`
  type Donation {
    id: String
    userId: String
    amount: Float
    tip: Float
  }

  type User {
      id:String
      firstName : String
      lastName : String
      email : String
  }

  type Query {
    donations: [Donation]
    getDonationByUserId(userId:String) : [Donation] 
    users : [User]
  }

  type Mutation {
    createDonations(userId: String, amount: Float, tip: Float): Donation!
    updateDonations(id:String, amount: Float, tip: Float):Donation!
    removeDonations(id:String):String
  }
`;