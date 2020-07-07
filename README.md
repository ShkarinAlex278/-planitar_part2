# -planitar_part2

Created a one-page wiki management application. The application uses the web server, written in the first part, as a repository for articles.

# API:
### Index page  "/" 

● Displays the names of all stored articles.

● Every article name is a link to the article’s viewing page.

### Article viewing page  "/:name" 
● Displays the article name as a header at the top of the page.

● Displays a visible edit button at the top of the page leading to the article’s edit page.

● Displays the article’s content rendered as HTML.

● Use Edit button in the header to add it.


### Article edit page  "/edit/:name" 
● Displays the title of the article as a title at the top of the page.

● Has the ability to edit the contents of the article in plain text (implemented by adding a new article).

● Has the means to preview the contents of an article in HTML format before saving it.

● Displays Save and Cancel buttons.



### Develop by: Alex Shkarin

Date: Jul. 7, 2020
