import Amplify from "aws-amplify";

const configuration = {
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_Ptpa4PIdp",
        APP_CLIENT_ID: "40nojsn0q9li7uoqfdta00ng37",
        IDENTITY_POOL_ID: "eu-west-1:faea1182-9597-4fce-ae0b-0f8f537ee56f"
    }
};

export const configAWS = () => {
    Amplify.configure({
        Auth: {
            mandatorySignIn: true,
            region: configuration.cognito.REGION,
            userPoolId: configuration.cognito.USER_POOL_ID,
            identityPoolId: configuration.cognito.IDENTITY_POOL_ID,
            userPoolWebClientId: configuration.cognito.APP_CLIENT_ID
        }
    });
}