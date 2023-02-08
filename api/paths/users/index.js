module.exports = function () {
    let operations = {
      GET,
      POST,
      PUT,
      DELETE,
    };
  
    function GET(req, res, next) {
      res.status(200).json([
        { id: 0, message: "First Users" },
        { id: 1, message: "Second Users" },
      ]);
    }
  
    function POST(req, res, next) {
      console.log(`About to create Users: ${JSON.stringify(req.body)}`);
      res.status(201).send();
    }
  
    function PUT(req, res, next) {
      console.log(`About to update Users id: ${JSON.stringify(req.query)}`);
        res.status(200).json({ id: 1, message: req.query.id+" data valid" });
      
    }
  
    function DELETE(req, res, next) {
      console.log(`About to delete Users id: ${req.query.id}`);
      res.status(200).send();
    }
  
    GET.apiDoc = {
      summary: "Fetch users.",
      operationId: "getusers",
      responses: {
        200: {
          description: "List of users.",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    };
  
    POST.apiDoc = {
      summary: "Create Users.",
      operationId: "createUsers",
      consumes: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "Users",
          schema: {
            $ref: "#/definitions/Users",
          },
        },
      ],
      responses: {
        201: {
          description: "Created",
        },
      },
    };
  
    PUT.apiDoc = {
      summary: "Update Users.",
      operationId: "updateUsers",
      parameters: [
        {
          in: "query",
          name: "id",
          required: true,
          type: "string",
        },
        {
          in: "body",
          name: "Users",
          schema: {
            $ref: "#/definitions/Users",
          },
        },
      ],
      responses: {
        400:{
            description: "Fail users.",
            schema: {
                type:"object",
                properties: {
                    id: {
                        type: "number",
                    },
                    error_message: {
                        type: "string",
                    }
                },
              } ,
          },
        200: {
            description: "success update.",
            schema: {
                type:"string",
                properties: {
                    id: {
                        type: "number",
                    },
                    message: {
                        type: "string",
                    }
                },
            },
          },
      },
    };
  
    DELETE.apiDoc = {
      summary: "Delete Users.",
      operationId: "deleteUsers",
      consumes: ["application/json"],
      parameters: [
        {
          in: "query",
          name: "id",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "Delete",
        },
      },
    };
  
    return operations;
  };