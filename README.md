This project implements a responsive sign in form with
email/password fields, forgot password link, submit button,
input validation, and error handling using React hooks and state.

Step 1: Create React project

Run npx create-react-app sign-in-form.
This will create a new folder called sign-in-form with
all the scaffolding.
Rename App.js to SignInForm.js to be the main component.

Step 2: Import React hook

Import useState hook from 'react'..\
This allow you to use state in functional components.

Step 3: Set up component state

Declare the state variables at the top using
const [email, setEmail] = useState('').
This creates email state and setEmail function to update it.
Do same for password, loading and errors.

Step 4: Create input fields

Add JSX for input fields inside return statement.
Set value and onChange props to link with component state.

Step 5: Validate function

Declare const validate outside component function.
Check if email and password are falsy and return error object.
This will be used to validate before submitting.

Step 6: Handle submit

Get submit event object e in handler.
Call e.preventDefault() to prevent default submit.
Call validate function and show errors if any.
If no errors, call loginUser function.

Step 7: Login user function

Declare async loginUser outside component.
Make POST request to /login endpoint.
Send email and password in JSON body.
Await and return response.

Step 8: Handle response

Check if(response.user) to see if login succeeded.
If success, redirect user.
If error, set form error state.

Step 9: Loading state

Show a loading spinner or text while awaiting response.
Disable submit button by setting disabled prop.

Step 10: Style form

Import a CSS file and style elements
Eg. align inputs, style buttons, color errors

Step 11: Create the App.js Component

In the App.js file, import the necessary React module.
Return JSX code to structure the layout of your application.
Create a header element to represent the header section of your application.
Add a h1 element to display the title, e.g., "Login Form".
Create a main element to represent the main content of your application.
Within this main element, include the SignInForm component.
Add a footer element at the end of the div to represent the footer section.
