/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
const name1 = document.getElementById('name1');
name1.innerHTML="Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

const position2 = document.getElementById('position2');
position2.innerHTML='Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/


const alias3 = document.getElementById('alias3');
alias3.innerHTML="Concatentation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

const profile = document.getElementsByClassName('profile');
profile[0].innerHTML = 'purple rain';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

profile[1].innerHTML='Be Like Water';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

const alias = document.getElementsByClassName('alias');
alias[2].innerHTML="Shaft";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

const peter = document.createElement('div');
peter.id= 'name7';
peter.innerHTML='Peter Griffin';
const nameParent = document.getElementById('nameParent');
nameParent.appendChild(peter);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
const alias8 = document.createElement('div');
alias8.id='alias8';
alias8.innerHTML='Old Man Riverwalk';
const aliasParent = document.getElementById('aliasParent');
aliasParent.appendChild(alias8); 


//Final Boss
/*9. Create your own profile.*/

const name9 = document.createElement('div');
const block3= document.getElementsByClassName('block3');
name9.className='name';
name9.innerHTML='Vegeta';
block3[2].appendChild(name9);

const position9 = document.createElement('div');
position9.className='position';
position9.innerHTML='Super Saiyan';
block3[2].appendChild(position9);

const saiyanPrince = document.createElement('div');
saiyanPrince.className=('alias');
saiyanPrince.innerHTML='The Saiyan Prince';
block3[2].appendChild(saiyanPrince);

const vegetaQuote=document.createElement('div');
vegetaQuote.className='profile';
vegetaQuote.innerHTML="'I do not fear this new challange, rather like a true warrior I will rise to meet it'"
block3[2].appendChild(vegetaQuote);