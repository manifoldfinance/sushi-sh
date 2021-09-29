/**
 * @package sushi-sh
 * @license MIT
 * @version 0.2.0
 * @summary SushiSwap Protocol command line client
 *
 */


 import { GraphQLClient } from "graphql-request";
 import { Command } from "@oclif/command";
 const consola = require('consola')


 interface QueryHandlerProps {
   command: Command;
   query: string;
   variables?: Record<string, any>;
 }




const client = new GraphQLClient("https://api.thegraph.com/subgraphs/name/sushiswap/exchange");

const handler = ({ command, query, variables }: QueryHandlerProps) => {
  return client
    .request(query, variables)
    .then(consola.success(command.log))
    .catch(consola.error(command.error));
};

export default handler;
