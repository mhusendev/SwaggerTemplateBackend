const customerSchema = require('./schemas/customer')
const peopleSchema = require('./schemas/people')
const address = require('./schemas/address')
const apiDoc = {
  swagger: "2.0",
  tags: [{
    name: "users",
    description: "The Users Managing API"
  },
  {
    name: "users address",
    description: "API"
  }],
  info: {
    title: "Keycloak app API.",
    version: "1.0.0",
  },
  securityDefinitions: {
    Bearer: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description: "Enter the token"
    }
  },
  definitions: {
  },
  paths: {}

};
apiDoc.definitions["Customer"] = customerSchema
apiDoc.definitions['People'] = peopleSchema 
apiDoc.definitions['address'] = address

module.exports = apiDoc;
