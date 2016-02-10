//create an array literal (best practice) 
// implies that index starts with 0, prevents from overriding
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];
//console.log(colorList);
//output the first item to the console 
//console.log(colorList[0]); 
//sort the colors
//colorList.sort(); //sorts the array alphabetically 
//colorList.reverse(); //sorts the array from Z-A
//console.log(colorList);
//make a list of scores (numbers) 
var scores = [12, 2, 300, 40, 23, 53, 13, 25, 65, 90, 55, 89];
//console.log(scores); 
//colorList.pop(); //if we run this, it removes the end element and returns the element through the console 
//asign the end element to a result variable, resuse

//var endElement = colorList.pop();

//colorList.shift(); //removes the first elements in the array 
//colorList.unshift("brown"); //add to the front of the list 
colorList.splice(0,2); //splice says start at index position, 0 and take out 2 from that position on. Splices takes out or or many elements.
//first argument: starting position 
//second argument: how many to take out 



var myThumbsDiv = document.getElementById("thumbs"); 

//variables IN functions (function scope), can see global varibles)
//index, when repetitive, we can build these arrays dynamically 
var imageListA = [] //new Array();
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = [] //new Array();
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = [] //new Array();
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
    output += '<div class="thumbs_block"> '; 
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
	output += '</div>';
  output += '<div class="thumbs_block"> '; 
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
  output += '</div>';
  output += '<div class="thumbs_block"> '; 
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
  output += '</div>';

	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}





window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

//create a new array (list) to hold the purchased images
var purchasedImages =[];

 myThumbsDiv.addEventListener("click", onImageClick, false)

//attach a click event to the DIV with id="thumbs" 

//the function handler
function onImageClick(evt) 
{ 
  
//we only want the src attritute of the image so we need to assign attribute of img tag we click on.. 
  var onlyPath = evt.target.getAttribute("src"); 
  //console.log(onlyPath);
  var imageIndex = imageListA.indexOf(onlyPath); 
  
//console.log(imageIndex);
var selectedImage = imageListA.splice(imageIndex, 1);
  //console.log(selectedImage); 
  
  // add this image path to the purchasedImage array
  purchasedImages.push(selectedImage); //push adds the element tot he new array
  
  update_shopping_cart();
  buildThumbnails();
}

function update_shopping_cart()
{
  //make a shortcut to the div id="shopping_cart_div");
  var cart = document.getElementById("shopping_cart_div'); 
                          var output = ""; 
                          for(var i=0; i <= purchasedImages.length -1; i++ ) 
  //use a -1 after imagelist.length so the condition is always one less (to match the index number)
  {
    output += '<img src="' + purchasedImags[i] + '"width="70" height="50" />'; 
    }
    cart.innerHTML = output; 
}
              
  
  //splice, go to the first element and remove it and assign it to the image
  
  
  //8:01pm event happening, going through element, element it reaches to prepare for something, this element has been clicked on, once it reach element, the click has happened, go back to the top, bubble back to the top -susan
//false, just going up as a default. not going down and then going up, just going up. -susan
//attach a click event to DIV -jason 


//the function handler, which on imageclick 
//create function for first time = function


  //console.log(evt.target); //bring back just the element that gets clicked
  //evt.target.setAttribute("src", "images/drawing/thumbs/artwork_5.jpg");

  
 var imageIndex = imageListA.indexOf("images/drawing/thumbs/artwork_5.jpg");
 console.log(imageIndex);
 }



