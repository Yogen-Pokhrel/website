1) the function converted with es6 features are in file
      >loginCheck.js
      >bubbleSort.js
      > html file for this both are index.html

2) the function for 2nd question using jason and es6 features are  in file assign1.js
        >the html file for it is assign1.html
        > the input to this function are given manually so please give your input by opening   assign1.js file and giving your input as a parameter to these function . the output are displayed in console


    >>// FIRST funtion function that takes Season number and episode   number as input and gives all the information about that particular episode as output

       >  episodeInformation(2,1);
          
          in this function store the all the jason episodes information in episodes variable 
           and iterate across all data with for loop. inside for loop there is if condition that checks for the valid season number and the episode number . if its true then episode information is displayed
             if not then flag is false so prints the wrong season number or episode number

    >>//SECOND function that can take any number of episode ids as input and returns all the information about those episodes


       >  AnyInputEpisodeInformation(1,4,50);


         in this function any number of episode ids are passed as argument and this argument are taken by use of REST parameter in function defination. all the episode ids are stored in 
          epID array variable. now using for of loop each ids are iterated in loop followed by nested for of loop which iterates all the episodes data so inside loop by using if condition the episode ids is compared with episodes data id  if true then those episode ids information are displayed if not flag is false so print error measage



     >>//THIRD  function to search episode by its name


        >  searchEpisodeByName("Pilot");


          in this function the episode name is given as input and respective episode number is displayed as output. so here first of all all the data of episodes are stored in episodes
           variable. now using for of loop each episode details are iterated and inside for loop the if condition is used to check given input name is equal to the episode name present in jason file , if true then print the respective episode id if false then print error message 
