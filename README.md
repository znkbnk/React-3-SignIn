This project implements a responsive sign in form with email/password fields, forgot password link, submit button, input validation, and error handling using React hooks and state.

Create React project
Run npx create-react-app sign-in-form
This will create a new folder called sign-in-form with all the scaffolding
Rename App.js to SignInForm.js to be the main component
Import React hooks
Import useState and useEffect hooks from 'react'
These allow you to use state and side effects in functional components
Set up component state
Declare the state variables at the top using const [email, setEmail] = useState('')
This creates email state and setEmail function to update it
Do same for password, loading and errors
Create input fields
Add JSX for input fields inside return statement
Set value and onChange props to link with component state
Validate function
Declare const validate outside component function
Check if email and password are falsy and return error object
This will be used to validate before submitting
Handle submit
Get submit event object e in handler
Call e.preventDefault() to prevent default submit
Call validate function and show errors if any
If no errors, call loginUser function
Login user function
Declare async loginUser outside component
Make POST request to /login endpoint
Send email and password in JSON body
Await and return response
Handle response
Check if(response.user) to see if login succeeded
If success, redirect user
If error, set form error state
Loading state
Show a loading spinner or text while awaiting response
Disable submit button by setting disabled prop
Style form
Import a CSS file and style elements
Eg. align inputs, style buttons, color errors
