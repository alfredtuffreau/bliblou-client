import Amplify from "aws-amplify";

const config = {
  cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_xLNIrRp8S", // "eu-west-1_bj7lJyEF8", // 
      APP_CLIENT_ID: "2ckp095u0glt2ntosiuad8nu7g", // "5s0tso0q1bpjkbg2ti4ov1nmo0", // 
      IDENTITY_POOL_ID: "eu-west-1:b2daa923-d888-4b5a-9942-02557d3a2afb" // "eu-west-1:688b7895-0d7d-4e96-a725-9e0bd9657a35", // 
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://d0grim5u4b.execute-api.eu-west-1.amazonaws.com/prod", // "https://v8npcn8ovb.execute-api.eu-west-1.amazonaws.com/dev", // 
  },
  s3: {
    REGION: "eu-west-1",
    BUCKET: "bliblou-recipes-api-prod-picturesbucket-d2aqey6i2ktz" // "bliblou-recipes-api-dev-picturesbucket-8eu0p18fuosu", // 
  },
};

export const configAWS = () => {
    Amplify.configure({
        Auth: {
            mandatorySignIn: true,
            region: config.cognito.REGION,
            userPoolId: config.cognito.USER_POOL_ID,
            identityPoolId: config.cognito.IDENTITY_POOL_ID,
            userPoolWebClientId: config.cognito.APP_CLIENT_ID
        },
        Storage: {
          region: config.s3.REGION,
          bucket: config.s3.BUCKET,
          identityPoolId: config.cognito.IDENTITY_POOL_ID
        },
        API: {
          endpoints: [
            {
              name: "recipes",
              endpoint: config.apiGateway.URL,
              region: config.apiGateway.REGION
            },
          ]
        }
    });
}