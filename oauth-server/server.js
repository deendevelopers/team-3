// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const {google} = require('googleapis');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

async function callAppsScript(auth) { // eslint-disable-line no-unused-vars
  const script = google.script('v1');

  // Make the API request. The request object is included here as 'resource'.
  return script.scripts.run({
    auth: auth,
    resource: {
      function: 'doIt',
    },
    scriptId: '1BRvmd7m4nXnXM-kbE81ct5U2cgkagL-KttlInMrtWkfuhgWBxTFll-YL',
  }, function(err, resp) {
    if (err) {
      // The API encountered a problem before the script started executing.
      console.log('The API returned an error: ' + err);
      return 'Error';
    }
    if (resp.error) {
      // The API executed, but the script returned an error.

      // Extract the first (and only) set of error details. The values of this
      // object are the script's 'errorMessage' and 'errorType', and an array
      // of stack trace elements.
      const error = resp.error.details[0];
      console.log('Script error message: ' + error.errorMessage);
      console.log('Script error stacktrace:');

      if (error.scriptStackTraceElements) {
        // There may not be a stacktrace if the script didn't start executing.
        for (let i = 0; i < error.scriptStackTraceElements.length; i++) {
          const trace = error.scriptStackTraceElements[i];
          console.log('\t%s: %s', trace.function, trace.lineNumber);
        }
      }
      
      return 'Error, executed but no return.'
    } else {
      // The structure of the result will depend upon what the Apps Script
      // function returns. Here, the function returns an Apps Script Object
      // with String keys and values, and so the result is treated as a
      // Node.js object (folderSet).
      console.log('success ' + JSON.stringify(resp))
      return 'Success'
    }
  });
}

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// const REDIR_LOC = 'http://localhost:5000/options'
const REDIR_LOC = 'https://spicy-bandana.glitch.me/sync'

app.get('/auth-me', function(request, response) {
 
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    REDIR_LOC
  );

  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope you can pass it as a string
    scope: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events'
    ]
  });
  
  
  response.json({authUrl: url})
})


app.get('/sync', async function(request, response) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      REDIR_LOC
    );
  
    const strit = JSON.stringify

    const {tokens} = await oauth2Client.getToken(request.query.code);
    console.log(`query=${strit(request.query)}, token=${strit(tokens)}`)
    oauth2Client.credentials = tokens;
  
    // response.json({'response': callAppsScript(oauth2Client)})
    // response.end();
  
    console.log("authResp=" + (await callAppsScript(oauth2Client)))
  
    response.redirect('http://localhost:5000/options')
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
