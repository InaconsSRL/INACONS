import { gql } from '@apollo/client';
import client from '../apolloClient'; 

const LOGIN_MUTATION = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                id
                username
            }
        }
    }
`;

export const loginUserService = async (username: string, password: string) => {
    const response = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables: { username, password },
    });
    return response.data.login;
};
