const helper = require('../.././../keycloak/helper')

module.exports = function () {
    let operations = {
      GET,
      POST,
      PUT,
      DELETE,

    };
  
    async function GET(req, res, next) {
        var response = await helper.getInfocustomer(req)
        // console.log(respond.status)
        res.status(response.status).send(response.value)
    }
  
    function POST(req, res, next) {
     console.log("data ada disini :"+req.body.sub)
      console.log(`About to create Customer: ${JSON.stringify(req.body)}`);
      res.status(201).send();
    }
  
    function PUT(req, res, next) {
      console.log(`About to update Customer id: ${JSON.stringify(req.query)}`);
        if(req.query.id == 2){
            res.status(404).json({ id:0, error_message: " data kosong" });
        }
        res.status(200).json({ id:0, message: req.query.id+" data valid" });
    }
  
    function DELETE(req, res, next) {
      console.log(`About to delete Customer id: ${req.query.id}`);
      res.status(200).send();
    }
  
    GET.apiDoc = {
      tags: ['users'],
      summary: "Fetch Customer.",
      operationId: "getCustomer",
      security: [
        {
          Bearer: [],
          
        },
      ],
      responses: {
        200: {
          description: "Info of Customer.",
          schema: {
            type: 'object',
            properties: {
              schema_frontend: {
                type: 'array',
                items: {
                 type:'string'
                }
              },
              data:{
                type: 'object',
                  $ref: "#/definitions/Customer",
                

              }
            }
          },
        },
        401: {
            description: "Unauthorized"
        }
      },
    };
  
    POST.apiDoc = {
      tags: ['users'],
      summary: "Create Customer.",
      operationId: "createCustomer",
      consumes: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "Customer",
          schema: {
            $ref: "#/definitions/Customer",
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
      tags: ['users'],
      summary: "Update Customer.",
      operationId: "updateCustomer",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: "number",
        },
        {
          in: "body",
          name: "Customer",
          schema: {
            $ref: "#/definitions/Customer",
          },
        },
      ],
      responses: {
        400:{
            description: "Fail Customer.",
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
                type:"object",
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

  
    return operations;
  };
