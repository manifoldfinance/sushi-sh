/**
 * @package sushi-sh
 * @license MIT
 * @version 0.2.0
 * @summary SushiSwap Protocol command line client
 * 
 */


import { GraphQLClient, gql } from 'graphql-request';
import { Command } from '@oclif/command';
// const { Command, Flags } = require('@oclif/core')

interface QueryHandlerProps {
  command: Command;
  query: string;
  variables?: Record<string, any>;
}

async function main() {
  const endpoint = 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange'
const client = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
  
})

const handler = ({ command, query, variables }: QueryHandlerProps) => {
  return client
    .request(query, variables)
    .then(command.log)
    .catch(command.error);
};


main().catch((error) => console.error(error))
}
export default main;
