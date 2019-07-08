Frontend Candidate Test
===

We have an exciting test for you! Feel free to look through the material and
ask as many questions as you like to prepare for the test. Once you start
coding, it should take 2-4 hours to complete.

You can use whatever selection of tools that you like, so long as the project is built with React. This test is designed to assess skills relating to:

- Component development and organisation
- Interactions with an API
- Attention to detail in design and implementation
- Component and app styling
- Ability to communicate
- Effective testing

User Flow
---
1. User enters any email address, and password 'meld123'
2. User clicks log in
3. User authenticated and taken to devices screen
4. User presented with up-to-date (polls every 5 seconds) view of active devices
5. User clicks 'notify' to signify completion of the test

Additionally:
- When user logs in, they should remain logged in until they click "log out", or their browser data is cleared
- If password is incorrect, error message is shown
- On the devices screen, the circles orbit around the number
- On the devices screen, the number of circles shown should equal the number of active devices

API
---
There is an API running and waiting at [http://35.201.2.209/](http://35.201.2.209/).

Submission
---

Be sure to track the project in GitHub so you can send us the repo URL once
you're done. If you find it's taking longer than 4 hours, that's fine - just
submit what you have, and we'll take it from there.

We'll follow-up with you either way to provide feedback and discuss your
solution.


Good luck!

Notes
---
Assumptions:
Display login and devices screen as in the the image provided.

Failures
1. The devices screen appbar is not exactly as the image.A bit more time can make it work 
2. Tried to use json-server to fire up a local server which was a waste of time, as the post request was rewirting the json on login - was a total waste of time
3.There are a few more minors

Not working /descoped
1. /devices api not working due to api options header do not seem to be set correctly
2. Works through postman, but display CORB/CORS error on all browsers(chrome,IE, edge)

Done:
1. Api connected - /login , /notify
2. Used mockup data for devices screen to make the circles moving around circle

Time taken: took morethan 4 hours - stuck with /device api, spend time on spinning up local server 

Repo Url : https://github.com/remyaphilip/frontend-developer-test


Thank you for this opportunity.
