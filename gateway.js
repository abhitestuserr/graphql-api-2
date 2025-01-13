const { ApolloServer } = require("apollo-server");
const { ApolloGateway, IntrospectAndCompose } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "Persons", url: "https://formidable-felecia-abhi-test-org-ffc6ed09.koyeb.app/graphql" }
    ],
    debug: true
  }),
});

const server = new ApolloServer({
  gateway,
});

server
  .listen({
    port: 4001,
  })
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
