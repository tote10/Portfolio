# How to Set Up Real Emails with Formspree

I have already installed the code for you. Now you just need to connect it to your email.

## 1. Get your Form ID
1.  Go to [https://formspree.io/register](https://formspree.io/register) and create a free account.
2.  Verified your email address.
3.  Click **"New Form"** on the dashboard.
    *   **Name**: Portfolio Contact
    *   **Send emails to**: (Your email should be there)
4.  Click **"Create Form"**.
5.  You will see a "Form Endpoint" or "Integration" page.
    *   Copy the **8-character code** from the end of the URL.
    *   Example: if the URL is `https://formspree.io/f/mqkvojzb`, your ID is `mqkvojzb`.

## 2. Add it to your Code
1.  Open the file `components/Contact.tsx`.
2.  Find line 9 (I put a big comment there for you).
3.  Replace `"YOUR_FORM_ID"` with your actual ID.
    *   **Before**: `useForm("YOUR_FORM_ID")`
    *   **After**: `useForm("mqkvojzb")` (or whatever your code is)

## 3. Test It
1.  Save the file.
2.  Go to your website preview.
3.  Fill out the form and click Send.
4.  Check your email (and spam folder) – you should receive the message!
