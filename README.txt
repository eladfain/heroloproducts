this is a delivery tracking app it is consisted of 2 routes 
route 1: the product tracking:
this route is made of 2 tabs
the active delivery and archived deliveryin the active delivery tab you can view items wating for delivery 
as well as add new items to track and also the option to move an item to the archive 
the add item button opens a dialog that lets you add new items
in the products api i was asked to use i didnt find in the docs any option of filtering my results so i fetched
all the resultes onload and filterd them as the user typed if i had the option of filtering from the API (maybe i did 
and i missed it somehow) i would call the API for user input
after the user finihed the submitted the form the item is added to the table
i made the assumtion that the input is valid
in the archive tab you see all the items that were archived sorted by date

route 2: a summery of all the users products sorted by store and and the sum form that store

