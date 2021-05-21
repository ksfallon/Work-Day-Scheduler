# Work-Day-Scheduler

**Link to my site**
https://ksfallon.github.io/Work-Day-Scheduler/

## Homework Assignment 
1. Create a work day calendar, 9am through 5pm, made from 3 columns, and a row to represent each hour. The first column on the left is for each hour. The middle column is for the hour specific event input. The final column is a button that saves the event input. 
2. Based on the current time of day the event input area will change color if it is in the: past(gray), present(red), future(green).
3. The buttons will save the event input and the event input should stay on the page even when refreshed. It can also be changed/updated.
4. It requires the use of jQuery and Moment.js. to create our functions in JS
5. Bootstrap can be used in the HTML to create the desired row/column containers.

## Adding to HTML
The starter index.html already had the links to jquery, bootstrap, and moment.js. So all I really needed to do was add a container with my columns and rows to the body.
- I used code from bootstrap to create my grandparent container which contained 9 parent rows. For each row I added the class "time-block" from the style.css and also gave it the class "row". 
- within each parent container were 3 children elements and using bootstrap i was able to give them column lengths and other specifications specific to the individual child, such as "form-control" for text area, to give it some styling in the html. 
- I also added the appropriate classes to each column from style.css ("hour" for the time column, "description" for the textarea column and "saveBtn for the button column). I did this for all 9 row containers. 
- All of the children shared the same class with corresponding children in other rows, but they all have different IDs to distinguish them based on time.

## JavaScript with jQuery and moment.js
I needed to create 4 functions in JS: display current date, change text color based on time, save input to local storage, display local storage in text input.
1. To display current Month, Day of the Week and Date in the header was pretty straight forward. I just needed to use the today function from moment.js and distinguish I just wanted these three things: Month(dddd), Day of the Week(MMM) and Date(Do) and provide the html ID so it would be displayed in the right area on the web page.
```javascript
var today = moment();
$("#currentDay").text(today.format('dddd, MMM Do'));
```
2. I then worked on changing the colors of the background based on the current time. 
- I used moment.JS again and would need to compare that result to the id of each textarea. I realized that this would be easier if I only got the current hour, because then I dont need to worry about minutess and seconds. Later on, while writing my for loop, I realized if the Ids and the moment.js variable were all based on **Military time** it would make comparing whether a number is < or = or > MUCH easier.
- I created a variable from the current Military time to compare with my ids:
```javascript
var currentHourEl = moment().format("HH");
```
- I needed the IDs to compare with my *currentHourEL*, so I grabbed the ids from all of the "description" classes, split them by the "-" and paresed number left over into an integer and set that to the variable *blockId* - the ids were "text-9", "text-10", etc.
```javascript
var blockId = parseInt($(this).attr("id").split("-")[1])
```
- I used jquery each() to write my 4 loop, and wrote an if, else if, else statement. 
    - if currentHourEl > blockId, and I added class past, , else if currentHourEl === blockId i removed class past and added class present, and else would remove classes past and present and add future.
    - by doing this the color changes as the time changes.
![Hour-Colors](https://github.com/ksfallon/Work-Day-Scheduler/blob/main/images%26gifs/WebsiteShowingTime.png)

3. To save input to local storage, I set a click event to every div with the class "saveBtn" which every hour has. I wanted to save the id from the textarea as the key and the textarea input as the value in local storage. I did this in order to be able to apend them properly in my final displayLocalStorage function. 
- To go from the "saveBtn" class of the button div to the "text-i" id of the textarea div required some children to parent and then parent to children variables.
    - children with "saveBtn" class to parent's with "row" class.
    - parent's with "row" class to chilren with "description" class.
- Once I have the information, its set to localStorage.
```javascript
 var rowParent = $(this).parent();
        var textChild = $(rowParent).children(".description")
        var textID = ($(textChild).attr("id"))
        var eventText = ($(textChild).val());
        
        localStorage.setItem(textID, eventText)
```
![Local-Storage](https://github.com/ksfallon/Work-Day-Scheduler/blob/main/images%26gifs/pageWithLocalStorage.png)

4. Finally I need to display local storage in text input so it doesn't disappear from the screen when the webpage is refreshed. 
- This one was a little tricky because I wasn't sure how to actually get the key names (which were set to the textarea ids) so I could compare them in a for loop to the html textarea ids. I knew how to do it if I wrote a function for every individual button, but I knew there had to be DRYer code LOL.
- The things I knew I needed:
    - a for loop where i = 9, which was our starting time, and i < 18 because the calendar stops at 5pm or 17:00 hrs.
    - I needed to be able to compare the key names to the textarea IDs
    - I needed to be able to get the value from each key.
- With some help I was able to get the key names by simply adding ( "text-" + i ) which was set to the variable *keyName*.
- the next variable *displayTask* needed to get the key value, which could be done by just plugging "keyName" into localStorage.getItem().
- I had to make another variable becaue jquery won't let $("#" + variable) run as a function.
    - *keySelector* = "#" + keyName - was created to put the hastag in front of keyName in order to run a function in jquery with the textarea ids!
- Finally, to append the localStorage to the textarea we have our variables: keySelector and displayTask!

```jQuery
 $(keySelector).append(displayTask);
```
