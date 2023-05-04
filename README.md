# Charter/Spectrum Front-End Code Challenge
By - Sreevastav Sreenivasan 

Date - 5/4/23

## Description 
This project showcases a movie website that allows users to search, filter, and view additional details of movies. All data from the project is pulled from the given 
[API](https://code-challenge.spectrumtoolbox.com/api/movies).

## Deployed Link
[LINK](https://sreesreevast.github.io/CharterMovies/)

## Project Criteria 
* A user should be able to view a home page with a list of movies with their image and title.
* A user should be able to filter movies by genre. This filter should default to “All” and take immediate effect
when a selection is made. No additional clicks should be necessary when filtering.
* A user should be able to search for a movie by title.
* A user should be able to click into a movie to view additional detail.
* The genre filter and search should work together. The genre filter should not reset the search and the search
should not reset the genre filter. When both are used, only results that fit both criteria should be shown, not
either one or the other.
* A user should be able to reset the search by clearing the text value in the search input.
* If any of the filters do not return any movies, the UI should indicate that no results were found.
* If the image for a specific movie is not found, the application should display the included “defaultImage”

## Approach
First, I intialized the React project. 
```bash
npx create-react-app 
```
Then, I started by fetching the json data from the API to see what data I was working with. Using 
```json
{"id": "title": "genres": }
```
After, I started by intializing the file strucuture. 
The public folder holds all the images given in the movie poster zip. 
I found that I need a Components folder that included MovieList.js and a PopUp.js. The MovieList.js is the main component
of the website that renders the movie posters and titles. The PopUp.js is to view more details such as the genres. 

App.js

The main file that uses useStates() for fetched API data, search terms, and filter terms.
* Process 
  * API fetches json data with API key 
  * Checks for search term and filter term
    * if both empty, render all movies from API, pass all data to MovieList 
    * if one has a value, render movies based on criteria, pass filtered data to MovieList
    * if both have a value, render movies that meet both criteria, pass filtered data to MovieList
 Using map and filter methods, the fetched data is sorted appropriately before setting movie data. The useEffect() will call fetchData everytime search and/or
 filter inputs. 
    
MovieList.js

The file that renders movie posters, title, and genre based on the date passed. 
* Process
  * Based on data recieved from App.js deconstructs each element --- id, title, genres
  * Using src public folder, renders image using the id 
  * Displays title and genres hidden through PopUp.js 

PopUp.js

The file that shows additional details about movies.
* Process
  * Based on props trigger, will display or exit the pop up menu with the title and genres of selected movie
  
Searches and filters can be cleared completely using backspace or delete. Checks for no valid movies by 
rendering "SORRY, NO SEARCH RESULTS FOUND! TRY AGAIN!" using conditional if else to check if object movies is empty. 

## Specifications

Search/Filter Algorithm
* Take input for search and filter and set state on change 
* useEffect() to fetch API data on change of either or both inputs 
* Check 4 criteria 
  * Search term empty and filter term empty 
  * Search term not empty and filter term empty 
  * Search term empty and filter term not empty 
  * Search and filter term not empty 
* Either map json data or filter json data before seting object movies
* Call MovieList based on movies object 




