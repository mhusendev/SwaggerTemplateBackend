const apiDoc = {
    swagger: "2.0",
    basePath: "/",
    info: {
      title: "Keycloak app API.",
      version: "1.0.0",
    },
    definitions: {
      Users: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          message: {
            type: "string",
          },
        },
        required: ["id", "message"],
      },
    },
    paths: {},
  };
  
  module.exports = apiDoc;