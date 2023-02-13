let data = {
    type: "object",
    properties: {
      sub: {
        type: "string",
      },
      image: {
        type: "object",
        properties: {
          filename: {
            type: "string",
          },
          file_ext: {
            type: "string",
          },
        },
      },
      gender: {
        type: "string",
      },
      phone: {
        type: "string",
      },
      name: {
        type: "string",
      },
      birth: {
        type: "object",
        properties: {
          day: {
            type: "string",
          },
          month: {
            type: "string",
          },
          year: {
            type: "string",
          },
        },
      },
      preferred_username: {
        type: "string",
      },
      given_name: {
        type: "string",
      },
      family_name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      alamat_info: {
        type: "array",
        items: {
          type:'object',
          $ref: "#/definitions/address",
        },
      },
    },
    required: ["sub"],
  }

  module.exports = data