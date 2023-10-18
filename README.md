# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**

We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:

- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it _Jugaad_
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:

- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰

The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:

- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [x] My code's working just fine! 🥳
- [x] I have recorded a video showing it working and embedded it in the README ▶️
- [x] I have tested all the normal working cases 😎
- [ ] I have even solved some edge cases (brownie points) 💪
- [ ] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓

Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section

### Overview

I have worked on the project in phases implementing the required features one by one. I have used **Google Apps Script** for the task and created an addon for the _Google Sheets_ application.

### Current status of application

As of now, using this addon, a user can drop his/her **_CSV_** files in the drop area of the addon and all the selected files will be used to create new Sheets for each file in the _Google Sheets_ application.

### Solution working demo

### Approach

After reading the problem statement my first guess at a solution, as a web developer, was to simply use React and whatnot to create a UI where users can authenticate themselves using Google auth and then allow them to select multiple CSV files and do the needful.

This although was not so easy to implement and also a roundabout solution from my perspective. Then I thought if I had to make an interface, it would be a much better idea and UX to provide that in the Google Sheets application itself.

Researching more on it and talking to people I came across the Google Apps Script, hinted by one of my friends, which definitely made developing the project much simpler. Then I started learning about the platform and identifying what kind of UI would make this solution easy to use.

On the way of making I faced many errors, some because the internet was too slow to do anything, some because I could not access the proper functions and IF I did, then the functions would throw some random error. Got to know about the need to **_serialize_** data(files) before transfers because of these errors.

A great learning experience I would say thanking the StackIt organization for providing such a meaningful and fun interview process, regardless of what the result is.

### Future prospects

Many more improvements can be done to the application in terms of adding features as well as beautifying the UI and enhancing the accessibility and UX.

Following are the most immediate changes that I will be looking to make :

1. Validate the dropped files to check if all files are _CSV_ files or not.
2. Allow the user to select which columns from each file he/she wants to import.
3. Provide pre-filtering functionality allowing the user to be able to filter the data before importing.
