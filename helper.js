const text = `<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GIDE</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <style>
    body {
    font-family: "Titillium Web", sans-serif !important;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
    }
    body {
    margin: 0;
    }
    .content {
    min-height: 250px;
    padding: 15px;
    }
    section{
    display: block;
    }
    .row {
    margin-right: -15px;
    margin-left: -15px;
    }
    .button {
      background-color: #3fb1fe;
      border: none;
      border-radius: 5px;
      color: white;
      padding: 10px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 18px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
    }
    .button1 {
      background-color: #AAAAAA; 
      color: #fff; 
      border: 2px solid #AAAAAA;
    }
    .button1:hover {
      background-color: #AAAAAA;
      color: #fff;
    } 
  </style>
  </head>
  <body>
    <section class="content" width="500px;" style="background-color:#f1f1f1;">
      <div class="row">
        <table align="center" width="360px;" style="background-color: #fff; color: #000;" border="0">
          <tr>
            <td>
              <div style="margin:10px;"><img src="'+process.env.APP_LOGO_URL+'" alt="" height="70"></div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="margin:10px;">
                <span style="font-weight:bold;">{ROLE_NAME}</span> role has assigned to you for the 
                <span style="font-weight:bold;">{COMPANY_NAME}.</span> account.
              </div>
            </td>
          </tr>
        </table>
      </div>
  
      <div class="row" style="margin-top:10px;">
        <table align="center" width="360px;" border="0">
          <tr>
            <td>
              <a href="'+process.env.APP_DEEP_LINK_DOMAIN+'" target="_blank" style="text-decoration:none;"><button class="button button1">Open in GIDE</button></a>
            </td>
          </tr>
        </table>
      </div>
  
      <div class="row" style="margin-top:50px;">
        <table align="center" width="360px;" border="0" style="text-align:center">
          <tr>
            <td>Powered by <a href="https://www.gide.ai" style="text-decoration:none; color:#333">GIDE</a></td>
          </tr>
        </table>
      </div>
    </section>
  </body>
  </html>`

  const roleObj = {
    role_name: "GIDE ADMIN"
  }

  text.replace(/\{ROLE_NAME\}/g, roleObj.role_name)

  // console.log(text)

  let testText = `{ROLE_NAME} must be replaced`
 testText =  testText.replace(/\{ROLE_NAME\}/g, 'ADMIN')
  // console.log(testText)

const {base64encode, base64decode} = require("nodejs-base64")

console.log(base64decode("eyJhIjoiVXJhbml1bSIsImIiOiJQbHV0b25pdW0iLCJjIjoiVW4gVW4gc2VwdGl1bSIsImQiOiJCZXJ5bGxpdW0ifQ=="))
let answerChoices = base64decode("eyJhIjoiVXJhbml1bSIsImIiOiJQbHV0b25pdW0iLCJjIjoiVW4gVW4gc2VwdGl1bSIsImQiOiJCZXJ5bGxpdW0ifQ==")
console.log(answerChoices)
answerChoices = JSON.parse(answerChoices)
const result = Object.keys(answerChoices).sort().reduce ( (obj,key) => {
  obj[key] = answerChoices[key]
  return obj
}, {} )

console.log(result)
