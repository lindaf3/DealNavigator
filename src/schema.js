const { gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar JSON
  type DealType {
    internalName: String
    title: String
    metacriticLink: String
    dealID: String
    storeID: String
    gameID: String
    salePrice: String
    normalPrice: String
    isOnSale: String
    savings: String
    metacriticScore: String
    steamRatingText: String
    steamRatingPercent: String
    steamRatingCount: String
    steamAppID: String
    releaseDate: Int
    lastChange: Int
    dealRating: String
    thumb: String
  }
  type GameInfoType {
    storeID: String
    gameID: String
    name: String
    steamAppID: String
    salePrice: String
    retailPrice: String
    steamRatingText: String
    steamRatingPercent: String
    steamRatingCount: String
    metacriticScore: String
    metacriticLink: String
    releaseDate: Int
    publisher: String
    steamworks: String
    thumb: String
  }
  type CheaperStoreType {
    dealID: String
    storeID: String
    salePrice: String
    retailPrice: String
  }
  type CheapestPriceType {
    price: String
    date: Int
  }
  type SpecificDealType {
    gameInfo: GameInfoType
    cheaperStores: [CheaperStoreType]
    cheapestPrice: CheapestPriceType
  }
  type GameType {
    gameID: String
    steamAppID: String
    cheapest: String
    cheapestDealID: String
    external: String
    internalName: String
    thumb: String
  }
  type InfoType {
    title: String
    steamAppID: String
    thumb: String
  }
  type CheapestPriceEverType{
    price: String
    date: Int
  }
  type SpecificGameDealType {
    storeID: String
    dealID: String
    price: String
    retailPrice: String
    savings: String
  }
  type SpecificGameType {
    info: InfoType
    cheapestPriceEver: CheapestPriceEverType
    deals: [SpecificGameDealType]
  }
  type ImagesType {
    banner: String
    logo: String
    icon: String
  }
  type StoreType {
    storeID: String
    storeName: String
    isActive: Boolean
    images: ImagesType
  }

  type Query {
    getDealLink(id: String!): String
    getDeals(storeID: String pageNumber: Int pageSize: Int sortBy: String desc: Boolean lowerPrice: Int upperPrice: Int metacritic: Int 
      steamRating: Int steamAppID: String title: String exact: Boolean AAA: Boolean steamworks: Boolean onSale: Boolean output: String): [DealType]
    getSpecificDeal(id: String!): SpecificDealType
    getGames(title: String! steamAppID: Int limit: Int exact: Boolean): [GameType]
    getSpecificGame(id: Int!): SpecificGameType
    getMultipleGames(ids: String!): JSON
    getStores: [StoreType]
  }
`;
module.exports = typeDefs;