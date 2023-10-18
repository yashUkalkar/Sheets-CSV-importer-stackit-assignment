# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

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

## Developer's Section

### Overview

I have worked on the project in phases implementing the required features one by one. I have used **Google Apps Script** for the task and created an addon for the _Google Sheets_ application.

### Current status of application

As of now, using this addon, a user can drop his/her **_CSV_** files in the drop area of the addon and all the selected files will be used to create new Sheets for each file in the _Google Sheets_ application.

### Solution working demo

https://github.com/yashUkalkar/Sheets-CSV-importer-stackit-assignment/assets/73520396/5a5f92d4-b4b3-4900-a0c8-f28dec86ec39

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
