# Harrisonville COC documentation
## Updating or setting Nodemailer user authentication
### Checking to see what the username and password is set in firebase:
> firebase functions:config:get --project <project_id_here>
### Setting the username and password in firebase for google:
>Before starting make sure you are in your functions folder, not the main branch. <br>
>firebase functions:config:set gmail.username="your username here" gmail.password="your_password_here"

##Firebase Environment Configuration Documentation. You can set username and password for any configuration using this documentation:
>https://firebase.google.com/docs/functions/config-env

