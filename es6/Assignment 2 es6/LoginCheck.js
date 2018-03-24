let checkLogin = (email,password,allUsers)=>{
	let isUserFound=false;
	let passwordCorrect=false;
	for(currentUser of allUsers){
		if(currentUser.email==email){
			if(currentUser.password==password){
				isUserFound=true;
				passwordCorrect=true;
				break;
			}
			else{
				isUserFound=true;
				passwordCorrect=false;
				break;
			}
		}
		else{
			isUserFound=false;
		}
	}//End Loop
	if(isUserFound==true && passwordCorrect==true)
	{
		alert('You are logged in');
	}
	else if(isUserFound==true && passwordCorrect==false)
	{
		alert('You have provided incorrect password');
	}
	else
	{
		alert('No user with this email found');
	}
}//End function

const usersArray=[
{email:"123@gmail.com",
password:"pppp1"},
{email:"abc@gmail.com",
password:"pppp2"},
{email:"xyz@gmail.com",
password:"pppp3"}
];

checkLogin("123@gmail.com","pppp1",usersArray);