question number 1
 > jason file consist of array of objects where each object have name and value pair as
    "productName": "Camera",
    "productId": 1,
    "productCategories": "electronics",
    "Manufacturer": "sony",
    "cost": 2000,
    "warrantyperiod": "1 Year",
    "batteryUsage": "3000mhp"


question number 2
 first assign all jason object into fullGame variable
 > first function

    pokemonSearch()
      takes an argument as name of the pokemon 
          i.e n=pokemonName
          i.e initialise flag=0 to indicate if given name is in the jason file or not
           >use for loop that iterates to all the fullGame.pokemon data
            >with if condition check weather given name is equal to fullGame.pokemon[i].name
               if true then display the all pokemon data in console ;
                  then break out of loop 
            > else no match then  flag=1;
            finally check if flag=1 
                              then wrong pokemon name


 > second function

    findnextEvolutionPokemonName(n)
      takes an argument as name of the pokemon 
          i.e n=pokemonName
          i.e initialise flag=0 to indicate if given name is in the valid or not
           >use for loop that iterates to all the fullGame.pokemon data
             > use another loop to iterates fullGame.pokemon[i].next_evolution array
                >with if condition check weather given name is equal to fullGame.pokemon[  i].next_evolution[j].name 
                    > if true then display the all pokemon data Pokemon Name whose next_evolution was given pokemon name in console ;
                  then break out of loop 
            > else no match then  flag=1;
            finally check if flag=1 
                              then wrong pokemon name ,sorry no pokemon have given pokemon name as next evolution pokemon

  > third function 

     findWeakness();
               takes an argument as name of the pokemon 
          i.e n=pokemonName
          i.e initialise flag=0 to indicate if given weakness is in the jason file or not
           >use for loop that iterates to all the fullGame.pokemon data
            >with if condition check weather given weakness is equal to any pokemon weakness
               if true then display the  pokemon name in console ;
                  then break out of loop 
            > else no match then  flag=1;
            finally check if flag=1 
                              then wrong pokemon name

                      


