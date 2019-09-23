const dialogflow = require('dialogflow').v2beta1;
const client = new dialogflow.AgentsClient({
  projectId: 'familydaycarebot-ovqjgs',
  keyFilename: './keyfile.json',
});
const uuid = require('uuid');
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/dialogflow', async (req, res) => {

  await Promise.all([queryMainKnowledgeBase(req.body.query), querySecondaryKnowledgeBase(req.body.query)]).then(values => {
    let answers = values[0].concat(values[1]);
		if (answers)
			res.send(answers);
    else
      res.send({});
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function queryMainKnowledgeBase(userQuery) {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    projectId: 'familydaycarebot-ovqjgs',
    keyFilename: './keyfile.json',
  });
  const sessionPath = sessionClient.sessionPath('familydaycarebot-ovqjgs', sessionId);
  const knowbase = new dialogflow.KnowledgeBasesClient();
  const knowledgeBasePath = knowbase.knowledgeBasePath(
    'familydaycarebot-ovqjgs',
    '/MTE3ODU4Mjc4NjU4NTE4NTQ4NDg'
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: userQuery,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
    queryParams: {
      knowledgeBaseNames: [knowledgeBasePath],
    },
  };
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
/*
  // Send request and log result
  console.log('Detected intent');
  //console.log(JSON.stringify(responses));
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
  console.log(result.knowledgeAnswers, result.knowledgeAnswers.answers.length);
*/
  if (result.knowledgeAnswers && result.knowledgeAnswers.answers.length > 0) {
	  return result.knowledgeAnswers.answers;
  } else {
	return [];
  }
}

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function querySecondaryKnowledgeBase(userQuery) {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    projectId: 'familydaycarebot-ovqjgs',
    keyFilename: './keyfile.json',
  });
  const sessionPath = sessionClient.sessionPath('familydaycarebot-ovqjgs', sessionId);
  const knowbase = new dialogflow.KnowledgeBasesClient();
  const knowledgeBasePath = knowbase.knowledgeBasePath(
    'familydaycarebot-ovqjgs',
    '/MjQ3NjM3NzI2MjY4MTc1MTU1Mg'
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: userQuery,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
    queryParams: {
      knowledgeBaseNames: [knowledgeBasePath],
    },
  };
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  if (result.knowledgeAnswers && result.knowledgeAnswers.answers.length > 0) {
	  return result.knowledgeAnswers.answers;
  } else {
	return [];
  }
}
