/**
 * @package sushi-sh
 * @license MIT
 * @version 0.2.0
 * @summary SushiSwap Protocol command line client
 * 
 */


import { GraphQLClient } from 'graphql-request';
import { Command } from '@oclif/command';
// const { Command, Flags } = require('@oclif/core')

interface QueryHandlerProps {
  command: Command;
  query: string;
  variables?: Record<string, any>;
}

const client = new GraphQLClient('https://api.thegraph.com/subgraphs/name/sushiswap/exchange');

const handler = ({ command, query, variables }: QueryHandlerProps) => client
    .request(query, variables)
    .then(x => command.log(JSON.stringify(x, null, '  ')))
    .catch(command.error);

export default handler;
