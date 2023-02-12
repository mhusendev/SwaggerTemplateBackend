const {getPeople, savePeople} = require('../../../controllers/people')
module.exports = function () {
    let operations = {
      GET,
      POST

    };
  
    async function GET(req, res, next) {
         let getdata = await getPeople(req)
         if(!getdata.message) return  res.status(200).send(getdata)
         res.send(JSON.stringify(getdata.message))
    }
   
    async function POST(req, res, next) {
        let saveData = await savePeople(req);
        if(saveData == 201) return res.sendStatus(saveData)
        res.send(JSON.stringify(saveData.message))
       }


    GET.apiDoc = {
      tags: ['people'],
      summary: "Fetch People.",
      operationId: "getPeople",
      responses: {
        200: {
          description: "Info of People.",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/People",
            },
          },
        },
        401: {
            description: "Unauthorized"
        }
      },
    };
  
    
  POST.apiDoc = {
      tags: ['people'],
      summary: "Create People.",
      operationId: "createPeople",
      consumes: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "Customer",
          schema: {
            $ref: "#/definitions/People",
          },
        },
      ],
      responses: {
        201: {
          description: "Created",
        },
      },
    };
    return operations;
  };
