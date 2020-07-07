# -planitar_part2

Part II
Created a one-page wiki management application. The application uses the web server, written in the first part, as a repository for articles.

# API:
### Index page  "/" 

● Displays the names of all stored articles 
● Every article name is a link to the article’s viewing page 

### Article viewing page  "/:name" 
● Displays the article name as a header at the top of the page 
● Displays a visible edit button at the top of the page leading to the article’s edit page 
● Displays the article’s content rendered as HTML 
● Use Edit button in the header to add it.` message instead of the article’s content if the article is not found 

### Article edit page  "/edit/:name" 
●Displays article name as a header at the top 
of the page 
●Has means to edit the article’s content as 
plain text 
●Has means to preview the article’s content 
rendered as HTML before saving it 
●Displays Save and Cancel buttons 



### Develop by: Alex Shkarin

Date: Jun. 25, 2020
