# Deployment Guide

The easiest way to upload (deploy) your Next.js portfolio is using **Vercel** (the creators of Next.js). It's free and fast.

## Step 1: Push to GitHub
1.  Create a repository on GitHub (if you haven't already).
2.  Push your code to GitHub.
    ```bash
    git add .
    git commit -m "Ready for deploy"
    git push origin main
    ```

## Step 2: Deploy on Vercel
1.  Go to [vercel.com](https://vercel.com) and sign up (login with GitHub).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your `portfolio` repository from the list.
4.  Click **"Deploy"**.
5.  Wait about a minute, and you'll get a live URL (e.g., `your-name-portfolio.vercel.app`).

## Can it be changed after uploading?
**YES!** This is the best part.
1.  Make changes on your computer.
2.  Save and commit your changes:
    ```bash
    git add .
    git commit -m "Updated text"
    git push
    ```
3.  Vercel will **automatically** detect the new code and update your website within seconds. You don't need to do anything else!

## Important Note on Contact Form
Currently, your contact form is a "demo" and **will not send emails** on the live site.
- **Option A**: We fix it now using a service like Formspree.
- **Option B**: We leave it as is for now and update it later (which is easy, as explained above!).
