
// set up global variable "data" which is the JSON database file 
var data = { "foodtext":
	[
		{
			"IDDSILevel": "0", 
			"Description": "Thin",
			"Modification": "No", 
			"Type": "Drink",
			"Transitional": "Yes",
			"Foods": false,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "<1ml",
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": "water"
		},
		{
			"IDDSILevel": "1", 
			"Description": "Slightly Thick",
			"Modification": "Yes", 
			"Type": "Drink",
			"Foods": false,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "flow through a 10 ml slip tip syringe leaving 1-4 ml in the syringe after 10 seconds",
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": "anti-regurgitation infant formulas",
			"ModificationNote": "One can use a blender to puree and liquify items. Add liquid or thickener to adjust for thickness level."				
		},
		{
			"IDDSILevel": "2", 
			"Description": "Mildly Thick",
			"Modification": "Yes", 
			"Type": "Drink",
			"Foods": false,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "flow through a 10 mL slip tip syringe leaving 4 to 8 ml in the syringe after 10 seconds",
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": "thin milkshakes",
			"ModificationNote": "One can use a blender to puree and liquify items. Add liquid, or thickener to adjust for thickness level."	
		},
		{
			"IDDSILevel": "3", 
			"Description": "Liquidized or Moderately Thick",
			"Modification": "Yes", 
			"Type": "Drink, Food",
			"Foods": true,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth, no lumps",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "flow through a 10 ml slip tip syringe leaving > 8 ml in the syringe after 10 seconds",
			"ForkDripTest": "Yes", 
			"ForkDripDescription": "drips slowly between the prongs of the fork", 
			"SpoonTiltTest": "pours easily when tilted, not stick to the spoon", 
			"ForkPressureTest": null,
			"CommonFoodExample_Drink": "baby's first food like runny rice cereal or pureed fruit",
			"CommonFoodExample_Food": "baby's first food like runny rice cereal or pureed fruit",
			"ModificationNote": "One can use a blender to puree and liquify items. Add liquid, sauce or thickener to adjust for thickness level."					
		},
		{	
			"IDDSILevel": "4", 
			"Description": "Pureed or Extremely Thick",
			"Modification": "Yes", 
			"Type": "Drink, Food",
			"Foods": true,
			"Consistency_Texture": "smooth, one texture, no lumps",
			"TextureNumber": "one",
			"TextureDescription": "smooth, no lumps",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": ">10ml",
			"ForkDripTest": "Yes", 
			"ForkDripDescription": "doesn't flow or drip continuously through prongs, can sit in a mound above fork", 
			"SpoonTiltTest": "falls off easily when tilted, not stick to the spoon", 
			"ForkPressureTest": "easily makes a clear pattern on the surface with fork with minimum pressure",
			"CommonFoodExample_Drink": "thick cereal",
			"CommonFoodExample_Food": "pureed meat",
			"ModificationNote": "One can use a blender, chopper or masher to puree items. Can add liquid to adjust for moisture or thickness level, but liquid must not separate from solid"		
		}, 
		{	
			"IDDSILevel": "5", 
			"Description": "Minced & Moist",
			"Modification": "Yes", 
			"Type": "Food",
			"Foods": true,
			"Consistency_Texture": "soft and moist with no separate thin liquid, small lumps easily squashed", 
			"TextureNumber": "one",
			"TextureDescription": "soft, moist, small squashable lumps",
			"ChewingRequired": "Yes",
			"BitingRequired": "No",
			"BitingParticleSize": "4x4x15mm", 
			"FlowTest": false,
			"ForkDripTest": "Yes", 
			"ForkDripDescription": "doesn't easily flow or drip easily through prongs, can sit in a mound above the fork", 
			"SpoonTiltTest": "falls off easily when tilted, not stick to the spoon", 
			"ForkPressureTest": "easily separated and come through the tines or prongs of a fork",
			"CommonFoodExample": "finely minced or chopped or mashed meat, fish, fruits or vegetables; drain excess liquid",
			"ModificationNote": "One can use a blender, chopper or masher to mince. One can also add a thick and smooth sauce to increase moisture level"
		},
		{	
			"IDDSILevel": "6", 
			"Description": "Soft & Bite-Sized",
			"Modification": "Yes", 
			"Type": "Food",
			"Foods": true,
			"Consistency_Texture": "soft tender and moist with no separate thin liquid, one texture", 
			"TextureNumber": "one",
			"TextureDescription": "soft, tender, moist",
			"ChewingRequired": "Yes",
			"BitingRequired": "No",
			"BitingParticleSize": "15x15x15mm", 
			"FlowTest": false,
			"ForkDripTest": "No", 
			"SpoonTiltTest": "falls off easily when tilted, not stick to the spoon", 
			"ForkPressureTest": "easily broken apart with light pressure from a fork or spoon held on its side to cut",
			"CommonFoodExample": "cooked, tender and soft meat and fish; steamed or boiled vegetables; drain or thicken excess liquid",
			"ModificationNote": "One can use tools such as a blender, chopper, masher or cooking techniques such as steaming and poaching to tenderize. Can also add a thick and smooth sauce to increase moisture level."
		}, 
		{	
			"IDDSILevel": "7", 
			"Description": "Easy To Chew",
			"Modification": "Yes", 
			"Type": "Food",
			"Foods": true,
			"Consistency_Texture": "soft and tender, dual or mixed textures", 
			"TextureNumber": "mixed",
			"TextureDescription": "soft,tender",
			"ChewingRequired": "Yes",
			"BitingRequired": "Yes",
			"BitingParticleSize": "no restriction", 
			"FlowTest": false,
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": "easily broken apart with light pressure from a fork or spoon held on its side to cut",
			"CommonFoodExample": "tender and soft fish, meat or fruit; steam or boil vegetables; thickened sauce",
			"ModificationNote": "One can use tools such as a blender, chopper, masher or cooking techniques such as steaming and poaching to tenderize. Can also add thick sauce to increase moisture level. "
		},
		{	
			"IDDSILevel": "7", 
			"Description": "Regular",
			"Modification": "No", 
			"Type": "Food",
			"Transitional": "Yes",
			"Foods": true,
			"Consistency_Texture": "no restriction, dual or mixed textures", 
			"TextureNumber": "mixed",
			"TextureDescription": "no restriction",
			"ChewingRequired": "Yes",
			"BitingRequired": "Yes",
			"BitingParticleSize": "no restriction", 
			"FlowTest": false,
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": "anything you like!"
		}
	]
}

// set up global the variable "foodtext"
	var foodtext = data.foodtext; 

// This setsup some additional global variables
	var newValue = []; 	// is the value from each selection choice, gets refreshed 
	console.log(newValue)
	var carriedValue = localStorage.getItem('newValue'); 
	console.log(carriedValue)

	var DFValue = [];  // selected value from Drink/Food/Transitional selection
	console.log(DFValue)
	var carriedDFValue = localStorage.getItem('DFValue');
	console.log(carriedDFValue)
	
	var DValue = [];  // Designate "drink" as the constant value 
	console.log(DValue)
	var carriedDValue = localStorage.getItem('DValue');
	console.log(carriedDValue)
	
	var FValue = []; // Designate "food" as the constant value 
	console.log(FValue)
	var carriedFValue = localStorage.getItem('FValue');
	console.log(carriedFValue)

	var TValue = []; // Designate "transitional" as the constant value 
	console.log(TValue)
	var carriedTValue = localStorage.getItem('TValue');
	console.log(carriedTValue)


// Sets up a global variable "newArray". 
	var newArray = [];

// Gets the newArray and do a JSON parsing to get it in the right format. 	
	var carriedArray = localStorage.getItem('newArray');
//	console.log(carriedArray)



// Setup a global variable called "currentLevel" (ie, the current level of selection on html page).
	var currentLevel = []; 

// This function updates the filtered array to the newArray, stores and log the newArray
	function UpdateSet_FArray (filteredArray) {
			newArray = filteredArray; 
			localStorage.setItem('newArray',JSON.stringify(filteredArray));	
			console.log (newArray);
	}

// Sets up Global variables (htmlString1 and carriedString1)
	var htmlString = "";
	var htmlString1 = "__";
	console.log(htmlString1)

	var carriedString1 = localStorage.getItem ('storedString');
	console.log(carriedString1)
	

// This creates global variables storedUI1(user item input), 2 (Drink), 3(Food), 4a (filtered array#), 4b (filtered array description), 5(ItemType), 6(IDDSILev)
	var storedUI1 = [];
	var storedUI2 = [];
	var storedUI3 = [];
	var storedUI4a = [];
	var storedUI4b = [];
	var storedUI5 = [];
	var storedUI6 = [];
	console.log(storedUI1,storedUI2,storedUI3,storedUI4a,storedUI4b,storedUI5,storedUI6)		

// This part sets the carriedUI - for use across html pages
	var carriedUI1 = localStorage.getItem('storedUI1');
	var carriedUI2 = localStorage.getItem('storedUI2');
	var carriedUI3 = localStorage.getItem('storedUI3');
	var carriedUI4a = localStorage.getItem('storedUI4a');
	var carriedUI4b = localStorage.getItem('storedUI4b');
	var carriedUI5 = localStorage.getItem('storedUI5');
	var carriedUI6 = localStorage.getItem('storedUI6');
	console.log(carriedUI1,carriedUI2,carriedUI3,carriedUI4a,carriedUI4b,carriedUI5,carriedUI6)


// set up global variables (containers) for render html div\
var UserInputContainer = document.getElementById("userinput");
var IDDSIContainer = document.getElementById("level-info"); 
var ErrorContainer = document.getElementById("error-info"); 
var CommentContainer = document.getElementById("comment"); 
var SelectionContainer = document.getElementById("selection-info"); 
var ModComContainer = document.getElementById("mod-comment");
//var TestContainer = document.getElementById("test-choices");




/// _________Functions____________///

/* Following three functions, clear selected or all carried variables, clear every stored variables */

	function clearCarried() { 
// 		if (carriedDFValue == "Food" || carriedDFValue == "Drink") {
			var carriedUI4a = localStorage.removeItem('storedUI4a');
			var carriedUI4b = localStorage.removeItem('storedUI4b');
			var carriedUI5 = localStorage.removeItem('storedUI5');
			var carriedUI6 = localStorage.removeItem('storedUI6');
// 			console.log(carriedUI6)	
// 		}		
	}
	
	function clearAllstored() {
		var carriedUI1 = localStorage.removeItem('storedUI1');
		var carriedUI2 = localStorage.removeItem('storedUI2');
		var carriedUI3 = localStorage.removeItem('storedUI3');
		clearCarried();
	}

	function clearEvryThing() {
 		localStorage.clear();	/* this cleared all the stored values */
  //		alert ("clearing...")
	}

/* This function combines several functions which get the dropdown value, output the filtered JS obj-array 
	and keep a log of selection choices. */

	function OutputValueArray() {
	   	GetSelectedTextValue();
    	GetFilteredArray(); 
    	SelectionHistory(newValue);
	}

/* The following 4 functions grab the value selected in the dropdown box.
It names the value as the current newValue and stores it as the carriedValue */

	function GetSelectedTextValue() {
		let id = document.getElementsByTagName("select")[0].id;
		currentLevel = id; 
		StoreLevelValue (currentLevel);	
		console.log(currentLevel)
	}
	
	function GetSelectedTextValue2() {
		let id = document.getElementsByTagName("select")[0].id;
		currentLevel = id; 
		StoreLevelValue2 (currentLevel);	
		console.log(currentLevel)
	}
	
	function StoreLevelValue (currentLevel) {
		var levelValue = document.getElementById(currentLevel).value;
			newValue = levelValue;  
			localStorage.setItem('newValue',levelValue);

		if (levelValue == "Drink" || levelValue == "drink") {
			DFValue = levelValue;
			localStorage.setItem('DFValue',levelValue);
			}		
 		if (levelValue == "Food" || levelValue == "food") {
 			DFValue = levelValue;
			localStorage.setItem('DFValue',levelValue);
 			}	
 		if (levelValue == "Transitional"){
 			DFValue = levelValue;
 			localStorage.setItem('DFValue',levelValue);
 			}			
	}

	function StoreLevelValue2 (currentLevel) {
		var levelValue = document.getElementById(currentLevel).value;
			newValue = levelValue;
			localStorage.setItem('newValue',levelValue);

		if (levelValue == "drink") {
			TValue = levelValue;
			localStorage.setItem('TValue',levelValue);
			}		
 		if (levelValue == "food") {
 			TValue = levelValue;
			localStorage.setItem('TValue',levelValue);
 			}			
	}


/* This function grabs the current array level and description, and store it. 
/* This is to be called under GetFilteredArray() */

function currentLevelDes () {

		var extractedLevel = newArray[0].IDDSILevel;  // This part is from function getLevel
 		console.log(extractedLevel)
 		var extractedDes = newArray[0].Description;	  // This part is from function getDescription
  	    console.log(extractedDes)	
  	    
  		storedUI4a = extractedLevel;
		console.log(storedUI4a)	
		localStorage.setItem('storedUI4a',extractedLevel);
		
  	    storedUI4b = extractedDes;
		console.log(storedUI4b)	
		localStorage.setItem('storedUI4b',extractedDes);
			
}


/* This function filteres the array based on selection criteria.*/
 	function GetFilteredArray() { 	
 	
 		let id = document.getElementsByTagName("select")[0].id;
 		currentLevel = id; 
 		
		 if (id == "level1") {
			var level1Value = document.getElementById(currentLevel).value;	
			if (level1Value != "Transitional") {
				var filteredArray = foodtext.filter(ele => ele.Type.includes(level1Value));
				UpdateSet_FArray (filteredArray);
				clearError();
				currentLevelDes(); 
				displayMod1(); // this is to hide previously displayed div 4 Mod button
				}
			if (level1Value == "Transitional") {
				var filteredArray = foodtext.filter(ele => ele.Transitional == "Yes");
				UpdateSet_FArray (filteredArray);				
				renderHTMLerror(currentLevel);
				clearComment();
				currentLevelDes(); 
				}						
			}	
			
		 if (id == "level2a") {
			var level2Value = document.getElementById(currentLevel).value;
			var newArray_c = JSON.parse(carriedArray); 
			if (level2Value == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.Modification == level2Value);
				UpdateSet_FArray (filteredArray);	
				console.log(newArray)
				clearComment();
				clearError();
				currentLevelDes(); 
				}
			if (level2Value == "No") {		
				newArray = newArray_c; 	
				currentLevelDes(); 
				if (carriedUI2 == "Do Not Know") {
					clearComment();
					}
				if (carriedUI2 != "Do Not Know") {
					clearComment();
					}	
				}	
			}		

		 if (id == "level2b") {
			var level2Value = document.getElementById(currentLevel).value;
			console.log (level2Value)
			carriedDValue == ""
			var newArray_c = JSON.parse(carriedArray); 
			console.log (newArray_c)
			var filteredArray = newArray_c.filter(ele => ele.Modification == level2Value);		
			console.log(filteredArray)	
			UpdateSet_FArray (filteredArray);			
			
			if (level2Value == "Yes") {			
				clearComment();
				clearError();
				currentLevelDes(); 
				displayMod1();  // add this to clear the Modification button after coming back from No selection. 
				}
			if (level2Value == "No") {
				currentLevelDes(); 
				if (carriedUI3 == "Do Not Know") {
					renderHTMLerror(currentLevel);
					clearComment();
					}
				if (carriedUI3 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}	
				}
			}		
										
		if (id == "level3a") {
			var level3aValue = document.getElementById(currentLevel).value;
			var newArray_c = JSON.parse(carriedArray); 
			if (level3aValue == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.TextureNumber.includes("one") && ele.TextureDescription.includes("smooth"));
				UpdateSet_FArray (filteredArray);	
				clearComment();
				clearError();	
				currentLevelDes(); 		 
				}	
			if (level3aValue == "No") {	
				var filteredArray = newArray_c.filter(ele => ele.TextureNumber.includes("mixed") );
				UpdateSet_FArray (filteredArray);	
				renderHTMLerror(currentLevel);
				clearComment();
				}
			}			

		if (id == "level3b") {
			var level3bValue = document.getElementById(currentLevel).value;	
			var newArray_c = JSON.parse(carriedArray); 
			if (level3bValue == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level3bValue || ele.BitingRequired == level3bValue);					 
				}		
			if (level3bValue == "No") {	
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level3bValue && ele.BitingRequired == level3bValue); 
				}	
			UpdateSet_FArray (filteredArray);		
			renderHTMLerror(currentLevel, level3bValue);
			clearComment();	
			}

		if (id == "level3c") {
			var level3cValue = document.getElementById(currentLevel).value;	
			var newArray_c = JSON.parse(carriedArray); 
			if (level3cValue == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.Modification == "No");
				UpdateSet_FArray (filteredArray);	
				currentLevelDes(); 
				if (carriedUI2 == "Do Not Know") {   
					renderHTMLerror(currentLevel);				
					clearComment();
					}
				if (carriedUI2 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}
				}		
			if (level3cValue == "No") {	
				var filteredArray = newArray_c.filter(ele => ele.Modification == "Yes");
				UpdateSet_FArray (filteredArray);	
				console.log(newArray)
				clearComment();
				clearError();
				currentLevelDes();
				displayMod1(); 	// hide Mod button if present
				}	
			}
		
		if (id == "level4a") {
			var level4Value = document.getElementById(currentLevel).value;	
			var newArray_c = JSON.parse(carriedArray); 
			if (level4Value == "No") {
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level4Value && ele.BitingRequired == level4Value);
				UpdateSet_FArray (filteredArray);	
				clearComment();
				clearError();		 
				}		
			if (level4Value == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level4Value || ele.BitingRequired == level4Value);
				UpdateSet_FArray (filteredArray);		
				renderHTMLerror(currentLevel);
				clearComment();
				}
			}				

		if (id == "level4b") {
			var level4Value = document.getElementById(currentLevel).value;
			var newArray_c = JSON.parse(carriedArray); 
			var filteredArray = newArray_c.filter(ele => ele.TextureNumber.includes(level4Value));
			UpdateSet_FArray (filteredArray);				
			if (level4Value == "mixed") {
				currentLevelDes(); 
				if (carriedUI3 == "Do Not Know") {
					renderHTMLerror(currentLevel);
					clearComment();
					}
				if (carriedUI3 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}
				}	
			if (level4Value == "one") {
				currentLevelDes(); 
				displayMod1();  				
				if (carriedUI3 == "Do Not Know") {
					renderHTMLerror(currentLevel);
					clearComment();
					}
				if (carriedUI3 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}				
				}	
			}				
			
		 if (id == "level5a") {
			var level5Value = document.getElementById(currentLevel).value;
			var newArray_c = JSON.parse(carriedArray); 
			var filteredArray = newArray_c.filter(ele => ele.ForkDripTest == level5Value);
			UpdateSet_FArray (filteredArray);		
			clearComment();
			clearError();
			currentLevelDes(); 
			}	
			
		 if (id == "level5b") {
			var level5Value = document.getElementById(currentLevel).value;
			var newArray_c = JSON.parse(carriedArray); 
			var filteredArray = newArray_c.filter(ele => ele.BitingParticleSize.includes(level5Value));
			UpdateSet_FArray (filteredArray);	
			currentLevelDes(); 	
			if (carriedUI3 == "Do Not Know") {
				renderHTMLerror(currentLevel);
				clearComment();
				}
			if (carriedUI3 != "Do Not Know") {
				renderHTMLcomment(currentLevel, newArray);
				clearError();
				}			
			}			
			
		 if (id == "level6a1") {
			var level6a1Value = document.getElementById(currentLevel).value;
			var newArray_c = JSON.parse(carriedArray); 
			var filteredArray = newArray_c.filter(ele => ele.CommonFoodExample.includes(level6a1Value));
			UpdateSet_FArray (filteredArray);	
			currentLevelDes(); 
			if (carriedUI2 == "Do Not Know")	{
				renderHTMLerror();
				clearComment();
				}
			if (carriedUI2 != "Do Not Know")	{
				renderHTMLcomment(currentLevel, newArray);
				clearError();
				}				
			}	
							
		 if (id == "level6a2") {
			var level6a2Value = document.getElementById(currentLevel).value;
			var newArray_c = JSON.parse(carriedArray); 				
			if (level6a2Value == "3" || level6a2Value == "4") {
				var filteredArray = newArray_c.filter(ele => ele.IDDSILevel === level6a2Value);
				UpdateSet_FArray (filteredArray);
				currentLevelDes(); 	
				
				if (carriedDFValue == "Food") {
					if (level6a2Value == "3" && carriedUI3 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment();
						}	
					if (level6a2Value == "3" && carriedUI3 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}				
					if (level6a2Value == "4" && carriedUI3 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment();
						}				
					if (level6a2Value == "4" && carriedUI3 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}					
					}
				
				if (carriedDFValue == "Drink") {
					if (level6a2Value == "3" && carriedUI2 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment(); 
						}				
					if (level6a2Value == "3" && carriedUI2 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}					
					if (level6a2Value == "4" && carriedUI2 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment();
						}
					if (level6a2Value == "4" && carriedUI2 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}					
					}										
				}
					
			if (level6a2Value == "No") {	
				var filteredArray = newArray_c.filter(ele => ele.Description.includes("Thick") );			
				UpdateSet_FArray (filteredArray);			
 				renderHTMLerror();
 				clearComment();
				}																
			}				
 	}


/* This function displays an alert as to the output of the test. */
	function test() {
		alert(JSON.stringify(test1));
	}


/* This function directs you to the right page depending on the dropdowwn selection. */	
 	function LinkedPage() {
		//This part reset the newValue to the value you actually selected or is currently on the screen.	
		let id = document.getElementsByTagName("select")[0].id; 		
		var newValue = document.getElementById(id).value;
		console.log(newValue)	
		
 		if (newValue == "Drink") {
 			document.location.href = "index_FTApp_2a.html";	
 		}
		if (newValue == "Food") {
			document.location.href = "index_FTApp_2b.html";
		}
		if (newValue == "Yes" && currentLevel == "level2a") {
			document.location.href = "index_FTApp_3a.html";
		}
		if (newValue == "No" && currentLevel == "level2a") {
			document.location.href = "index_FTApp_3c.html";
		}		
		if (newValue == "Yes" && currentLevel == "level2b") {
			document.location.href = "index_FTApp_3b.html";
		}			
		if (newValue == "Yes" && currentLevel == "level3a") {
			document.location.href = "index_FTApp_4a.html";
		}
		if (newValue == "Yes" && currentLevel == "level3b") {
			document.location.href = "index_FTApp_4b.html";
		}
		if (newValue == "No" && currentLevel == "level3b") {
			document.location.href = "index_FTApp_6a2.html";
		}
		if (newValue == "No" && currentLevel == "level3c") {
			document.location.href = "index_FTApp_3a.html";
		}	
		if (newValue == "No" && currentLevel == "level4a") {
			document.location.href = "index_FTApp_5a.html";
		}	
		if (newValue == "one" && currentLevel == "level4b") {
			document.location.href = "index_FTApp_5b.html";
		}				
		if (newValue == "No" && currentLevel == "level5a") {
			document.location.href = "index_FTApp_6a1.html";
		}		
		if (newValue == "Yes" && currentLevel == "level5a") {
			document.location.href = "index_FTApp_6a2.html";
		}									
		else {
			return;
		}
 	}

	function Go2Start() {
		document.location.href = "index_FTApp_H1.html";	
	}

/* Function for connecting to different Flow Tests based on IDDSI levels */
	function Flow() {
		var DlevelNumber = carriedUI2.match(/\d+/);
		var FlevelNumber = carriedUI3.match(/\d+/); // Flow test doesn't need food info. 
// 		alert ("Got to Flow")		
		
		if (carriedDFValue =="Drink") {
			if (DlevelNumber[0] == "1" ) {
				document.location.href = "index_FTApp_MFL1.html";
			}	
			if (DlevelNumber[0] == "2" ) {
				document.location.href = "index_FTApp_MFL2.html";
			}	
			if (DlevelNumber[0] == "3" ) {
				document.location.href = "index_FTApp_MFL3.html";
			}							
		}
	
		if (carriedDFValue =="Transitional" && carriedUI6 != null) {	 
			var TlevelNumber = carriedUI6.match(/\d+/);
			if (TlevelNumber[0] == "1") {
				document.location.href = "index_FTApp_MFL1.html";
			}	
			if (TlevelNumber[0] == "2" ) {
				document.location.href = "index_FTApp_MFL2.html";
			}	
			if (TlevelNumber[0] == "3" ) {
				document.location.href = "index_FTApp_MFL3.html";
			}					
		 }	
	}

/* Function for connecting to different Food Particle Size Tests based on IDDIS levels */
	function MSize(){
		alert ("Check Size")
		alert(carriedDFValue)
//		console.log (carriedDFValue, DlevelNumber, FlevelNumber); 
		var DlevelNumber = carriedUI2.match(/\d+/); /* this var will not appear as it only applies to Food */
		var FlevelNumber = carriedUI3.match(/\d+/); /* assuming carriedUI is cleared */
		
		if (carriedDFValue == "Food") {
// 			alert ("M size-Food")
			if (FlevelNumber[0] == "5") {
				document.location.href = "index_FTApp_MSize.html";
			}	
			if (FlevelNumber[0] == "6") {
				document.location.href = "index_FTApp_MSize6.html";
			}			
		}	
		if (carriedDFValue = "Transitional" && carriedUI6 != null) {
// 			alert ("M size-Transitional")
			var TlevelNumber = carriedUI6.match(/\d+/);
			if (TlevelNumber[0] == "5") {
				document.location.href = "index_FTApp_MSize.html";
			}	
			if (TlevelNumber[0] == "6") {
				document.location.href = "index_FTApp_MSize6.html";
			}		
		}				
	}

/* Function for connecting to different Fork Pressure Tests based on IDDIS levels */
	function ForkPress() {
		alert ("Fork Pressure Test")
		console.log (carriedDFValue, DlevelNumber, FlevelNumber); 
		var DlevelNumber = carriedUI2.match(/\d+/); /* will not need this since it only applies to Food */
		var FlevelNumber = carriedUI3.match(/\d+/);

		if (carriedDFValue == "Food") {
// 			alert ("ForkPress-Food")
			if (FlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MFP4.html";	
			}
			if (FlevelNumber[0] == "5") {
				document.location.href = "index_FTApp_MFP.html";
			}	
			if (FlevelNumber[0] == "6") {
				document.location.href = "index_FTApp_MFSP.html";
			}	
			if (FlevelNumber[0] == "7") {
				document.location.href = "index_FTApp_MFSP7.html";
			}			
		}	
		if (carriedDFValue == "Transitional" && carriedUI6 != null) {
// 			alert ("ForkPress-Transitional")
			var TlevelNumber = carriedUI6.match(/\d+/); /* assuming carriedUI6 is cleared from before*/
			if (TlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MFP4.html";	
			}
			if (TlevelNumber[0] == "5") {
				document.location.href = "index_FTApp_MFP.html";
			}	
			if (TlevelNumber[0] == "6") {
				document.location.href = "index_FTApp_MFSP.html";
			}	
			if (TlevelNumber[0] == "7") {
				document.location.href = "index_FTApp_MFSP7.html";
			}			
		}	
	}

/* Function for connecting to different Spoon Tilt Tests based on IDDIS levels */
	function SpoonTilt(){
		alert ("Spoon Tilt Test")
		console.log (carriedDFValue, DlevelNumber, FlevelNumber); 
		var DlevelNumber = carriedUI2.match(/\d+/);
		var FlevelNumber = carriedUI3.match(/\d+/);

		if (carriedDFValue == "Drink" && carriedUI2 != "Do Not Know") {
// 			alert ("SpoonTilt- Drink")
			if (DlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MST4.html";	
			}		
		}		
		if (carriedDFValue == "Food" && carriedUI3 != "Do Not Know") {
// 			alert ("SpoonTilt - Food")
			if (FlevelNumber[0] == "3") {
				document.location.href = "index_FTApp_MST3.html";	
			}
			if (FlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MST4.html";	
			}
			if (FlevelNumber[0] == "5") {
				document.location.href = "index_FTApp_MST.html";
			}		
		}
		
		if (carriedDFValue == "Transitional" && carriedUI5 == "drink") {
			var TlevelNumber = carriedUI6.match(/\d+/);
// 			alert ("SpoonTilt-Transitional-drink")
			if (TlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MST4.html";	
			}				 
		}
		if (carriedDFValue == "Transitional" && carriedUI5 == "food") {	
			var TlevelNumber = carriedUI6.match(/\d+/); 
// 			alert ("SpoonTilt-Transitional-food")
			if (TlevelNumber[0] == "3") {
				document.location.href = "index_FTApp_MST3.html";	
			}			
			if (TlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MST4.html";	
			}	
			if (TlevelNumber[0] == "5") {
				document.location.href = "index_FTApp_MST.html";	
			}		
		}
	}

/* Function for connecting to different Fork Drip Tests based on IDDIS levels */
	function ForkDrip() { 
		var DlevelNumber = carriedUI2.match(/\d+/);
		var FlevelNumber = carriedUI3.match(/\d+/);	
	
 		if (carriedDFValue == "Drink" && carriedUI2 != "Do Not Know"){
//  			alert ("ForkDrip-Drink")
			if (DlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MFD.html";	
			}
 		}
 		if (carriedDFValue == "Food" && carriedUI3 != "Do Not Know"){
//  			alert ("ForkDrip-Food")
			if (FlevelNumber[0] == "3") {
				document.location.href = "index_FTApp_MFD3.html";	
			}			
			if (FlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MFD.html";	
			}	
 		}				
		if (carriedDFValue == "Transitional" && carriedUI6 != null){
//  			alert ("ForkDrip-Transitional")
			var TlevelNumber = carriedUI6.match(/\d+/);
			if (TlevelNumber[0] == "3") {
				document.location.href = "index_FTApp_MFD3.html";	
			}			
			if (TlevelNumber[0] == "4") {
				document.location.href = "index_FTApp_MFD.html";	
			}			
		}		
	}


/* The following contains specific links to food prep videos */
	function Prep1() {
		document.location.href = "index_FTApp_P1.html";
	}
	function Drink1() {
		document.location.href = "index_FTApp_P1_1.html";
	}
	function Prep2() {
		document.location.href = "index_FTApp_P2.html";
	}
	function Water() {
		document.location.href = "index_FTApp_P2_1.html";
	}
	function Prep3() {
		document.location.href = "index_FTApp_P3.html";
	}
	function Milk3() {
		document.location.href = "index_FTApp_P3_1.html";
	}
	function OJ3() {
		document.location.href = "index_FTApp_P3_2.html";
	}
	function Prep4() {
		document.location.href = "index_FTApp_P4.html";	
	}
	function Drink4() {
		document.location.href = "index_FTApp_P4_0.html";
	}
	function CCake() {
		document.location.href = "index_FTApp_P4_1.html";
	}
	function FChip() {
		document.location.href = "index_FTApp_P4_2.html";
	}	
	function SChip() {
		document.location.href = "index_FTApp_P4_3.html";
	}	
	function Prep5() {
		document.location.href = "index_FTApp_P5.html";
	}
	function SandW() {
		document.location.href = "index_FTApp_P5_2.html";
	}
	function Gen5() {
		document.location.href = "index_FTApp_P5_1.html";
	}
	function Prep6() {
		document.location.href = "index_FTApp_P6.html";
	}
	function CChick() {
		document.location.href = "index_FTApp_P6_1.html";
	}


/* This function links to different IDDSI level modification videos */
 	function ModLinked() {
//  	  alert("made it to ModLinked")
			if (DFValue == "Drink" || carriedDFValue == "Drink") {
				var DlevelNumber = carriedUI2.match(/\d+/);	
				if (DlevelNumber == "1") {
						document.location.href = "index_FTApp_2c1.html";	
				}					
				if (DlevelNumber == "2") {
						document.location.href = "index_FTApp_2c2.html";
						console.log (DlevelNumber)	
				}			
				if (DlevelNumber == "3") {
						document.location.href = "index_FTApp_2c3.html";
						 console.log (DlevelNumber)		
				}		
				if (DlevelNumber == "4") {
						document.location.href = "index_FTApp_2c4.html";	
				}		
			}		
			
			if (DFValue == "Food" || carriedDFValue == "Food") {		
				var FlevelNumber = carriedUI3.match(/\d+/);
				var FDes = carriedUI3.match(/[^, ]*$/); // this only match the first word		
				if (FlevelNumber == "3") {
						document.location.href = "index_FTApp_2c3.html";	
				}
				if (FlevelNumber == "4") {
						document.location.href = "index_FTApp_2c4.html";	
				}
				if (FlevelNumber == "5") {
						document.location.href = "index_FTApp_2c5.html";	
				}		
				if (FlevelNumber == "6") {
						document.location.href = "index_FTApp_2c6.html";	
				}
				if (FlevelNumber == "7") {
						document.location.href = "index_FTApp_2c7.html";	
				}				
			}	
	
			if (DFValue == "Transitional") {  /* for transitional, this needs to be DFValue */
				document.location.href = "index_FTApp_MainMod1.html";	
			}
 	}


//* This function display the current filtered array on the html page. Not currently in use. *//
	function renderHTML(data) {
		// this part clears the previous html string 
		document.getElementById("level-info").innerHTML = ""; 
		var htmlString = ""; 
		
		for(i = 0; i < data.length; i++) {
			htmlString += '<p>' + "Matching IDDSI Level: " + data[i].IDDSILevel + ', ' + data[i].Description + '.</p>'; 
		}
		IDDSIContainer.insertAdjacentHTML('beforeend', htmlString); 
		
		// this part will clear the Comment and Error Info sections
		document.getElementById("comment").innerHTML = ""; 
		var htmlString = ""; 
		document.getElementById("error-info").innerHTML = ""; 
		var htmlString = ""; 
	}
	
	
/* The following two functions clear the content within the comment and error-info div in html. */
	function clearComment() {
		CommentContainer.innerHTML = "";
		var htmlString = "";
	}	
	function clearError() {
		ErrorContainer.innerHTML = "";
		var htmlString = "";
	}


/* The following functions store htmlStrings or keep a log of a user's selection choices in selection-info div.*/
	function SelectionHistory(newValue) {
		SelectionContainer.innerHTML = ""; 

		var htmlString1 = ""; 
		var htmlString = ""; 
	
		if (currentLevel == "level1") { 
 			htmlString1 += '<p>' + "You consider your item mostly a: " + newValue + '.</p>';	
			StoreString (htmlString1); 
			console.log(carriedString1)
			carriedString1 = "";
			htmlString += carriedString1 + htmlString1;	
// 			console.log (htmlString)
// 			console.log(carriedString1)
		}
		
		if (currentLevel == "level2a" || currentLevel == "level2b") { 
			htmlString1 += '<p>' + newValue + ", to modification needed" + '.</p>';
 			StoreString (htmlString1); 
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}

		if (currentLevel == "level3a") { 
			htmlString1 += '<p>' + newValue + ", to item being one texture, smooth and with no lumps" + '.</p>';	
 			StoreString (htmlString1); 	
 			htmlString += carriedString1 + htmlString1;	
 			StoreString_c (htmlString); 
		}	
		
		if (currentLevel == "level3c") { 
			htmlString1 += '<p>' + newValue + ", to item flows like water" + '.</p>';	
 			StoreString (htmlString1); 	
 			htmlString += carriedString1 + htmlString1;	
 			StoreString_c (htmlString); 
		}	

		if (currentLevel == "level4a" || currentLevel == "level3b") { 
			htmlString1 += '<p>' + newValue + ", to requiring chewing and/or biting" + '.</p>';	
 			StoreString (htmlString1); 	
 			htmlString += carriedString1 + htmlString1;	
 			StoreString_c (htmlString); 	
		}	
			
		if (currentLevel == "level4b" && newValue == "one") { 
			htmlString1 += '<p>' + "It is one consistency (i.e., no separable thin liquids)" + '.</p>';	
 			StoreString (htmlString1); 	
 			htmlString += carriedString1 + htmlString1;	
 			StoreString_c (htmlString); 	
		}	

		if (currentLevel == "level4b" && newValue == "mixed") { 
			htmlString1 += '<p>' + "It has more than one consistency (i.e., mixed with solids and liquids)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}					
			
		if (currentLevel == "level5a") { 
			htmlString1 += '<p>' + newValue + ", to thick enough to be picked up or stay on a fork" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}

		if (currentLevel == "level5b" && newValue == "4x4x15mm") { 
			htmlString1 += '<p>' + "Size: Up to but no more than 4x4x15mm for adults (2x2x8mm for children)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 	
		}	

		if (currentLevel == "level5b" && newValue == "15x15x15mm") { 
			htmlString1 += '<p>' + "Size: Up to but no more than 15x15x15mm for adults (8x8x8mm for children)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 	
		}	

		if (currentLevel == "level6a1" && newValue == "formulas") { 
			htmlString1 += '<p>' + " More like anti-regurgitation infant formulas" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}
		
		if (currentLevel == "level6a1" && newValue == "milkshakes") { 
			htmlString1 += '<p>' + " More like thin milkshakes (thicker than infant formulas)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}
		
		if (currentLevel == "level6a2" && newValue == "3") { 
			htmlString1 += '<p>' + "Drips slowly between the prongs of a fork and pours easily off a spoon when tilted" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}
		
		if (currentLevel == "level6a2" && newValue == "4") { 
			htmlString1 += '<p>' + "Can sit in a mound above a fork and falls off a spoon easily when tilted" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}	
			
		if (currentLevel == "level6a2" && newValue == "No") { 
			htmlString1 += '<p>' + "Neither drops slowly between the prongs of a fork nor able to sit in a mound above a fork" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;
			StoreString_c (htmlString); 
		}		

		SelectionContainer.insertAdjacentHTML('beforeend', htmlString); 

	}

	function StoreString (htmlString1) {
		storedString = htmlString1;
		localStorage.setItem('storedString',htmlString1);
		console.log (storedString)
	}
	
	function StoreString_c (htmlString) {
		storedString = htmlString;
		localStorage.setItem('storedString',htmlString);
		console.log (storedString)
	}
	
	
/* This sets up a function for displaying error messages in the error-info div.*/
	function renderHTMLerror() {
	
		ErrorContainer.innerHTML = "";
		var htmlString = ""; 

		if (currentLevel == "level1" && newValue == "Transitional") {
			htmlString += '<p>' + "Reminder - Transitional items require higher level swallowing skills, such as <u>IDDSI Level 0, Thin</u> and <u>IDDSI Level 7, Regular</u>." +'</p>';
			htmlString += '<p>' + "If your recommended Drink and Food IDDSI Levels aren't Level 0 Thin and Level 7 Regular, then it's highly recommended that you explore modification techniques below to change the item to your level." +'</p>';
			displayMod();
			}	

     	if (currentLevel == "level2a" && carriedUI2 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + ".</u> Please double check with your clinician to see whether you are safe to consume items at this level, since you don't know your recommended IDDSI " + carriedDValue + " level (" + carriedUI2 + ")." +'</p>';
  			}	

     	if (currentLevel == "level2b" && carriedUI3 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Your selection so far suggests you can handle food at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u> and should be able to consume your item <u>(" + carriedUI1 + ").</u> Since you don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to confirm." +'</p>';
  			}	
  				
		if (currentLevel == "level3a") {
			htmlString += '<p>' + "Correction Needed - To be considered a drink, make sure your item is one smooth texture and with no lumps before continuing. One easy modification technique is to puree and/or strain the item." +'</p>';
			}	
			
		if (currentLevel == "level3b" && newValue == "No") {
			htmlString += '<p>' + "Reminder - Please make sure current item is one smooth texture and with no lumps before continuing. One easy modification technique is to puree the item." +'</p>';
			}	

     	if (currentLevel == "level3c" && carriedUI2 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + ".</u> Please double check with your clinician to see whether you are safe to consume items at this level, since you don't know your recommended IDDSI " + carriedDValue + " level (" + carriedUI2 + ")." +'</p>';
  			}				
	
		if (currentLevel == "level4a") {
			htmlString += '<p>' + "Correction Needed - To be considered a drink, no chewing and biting are required. Please modify your item before continuing (i.e., use a food processor or blender to make it drinkable)." +'</p>';
			}
	
		if (currentLevel == "level4b" && newValue == "mixed" && carriedUI3 == "Do Not Know") {
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + ".</u> Since you don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to see whether you are safe to consume items at this level" +'.</p>';
			}
			
 		if (currentLevel == "level4b" && newValue == "one" && carriedUI3 == "Do Not Know" ) {
 			htmlString += '<p>' + "Reminder - Please make sure current item is soft, moist and tender before continuing (i.e., some minimum chewing is required but not biting)" +'</p>';
 			}			
					
		if (currentLevel == "level5b" && carriedUI3 == "Do Not Know" ) {
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + ".</u> Since you don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to see whether you are safe to consume items at this level." +'</p>';
			}	
					
     	if (currentLevel == "level6a1" && carriedUI2 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + ".</u> " + "Since you don't know your recommended IDDSI drink level (" + carriedUI2 + "), please double check with your clinician to see whether it is safe to consume items at this level" + '.</p>'; 
  			}

     	if (currentLevel == "level6a2" && carriedDFValue == "Drink" && carriedUI2 == "Do Not Know") {
			var extractedLevel = newArray[0].IDDSILevel;
			var extractedDes = newArray[0].Description;	 	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + ".</u> " + "Since you don't know your recommended IDDSI drink level (" + carriedUI2 + "), please double check with your clinician to see whether it is safe to consume items at this level" + '.</p>'; 
  			}	
  				
     	if (currentLevel == "level6a2" && carriedDFValue == "Food" && carriedUI3 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + ".</u> " + "Since you don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to see whether it is safe to consume items at this level" + '.</p>';
  			}	
  											
		if (currentLevel == "level6a2" && newValue == "No") {
			document.getElementById("error-info").innerHTML = ""; 
			var htmlString = ""; 
			displayMod1();	
			htmlString += '<p>' + "Correction Needed - Please modify current item so it meets either one of the above selection choices (i.e., adjust thickness level), in order to continue." +'</p>';
			}
					
		ErrorContainer.insertAdjacentHTML('beforeend', htmlString); 
	}


/* This sets up a function for displaying additional comment/instruction in the comment div. */
	function renderHTMLcomment(currentLevel, newArray) {
		
	/* might not need this next part about extractedLevel and extractedDes, redundant code */	
		var extractedLevel = newArray[0].IDDSILevel;  // This part is from function getLevel
 		console.log(extractedLevel)
 		var extractedDes = newArray[0].Description;	  // This part is from function getDescription
  	    console.log(extractedDes)	
 	    			
    
		CommentContainer.innerHTML = "";
		var htmlString = ""; 		
		
		if (carriedDFValue == "Drink" && carriedUI2 != "Do Not Know") {
			var DlevelNumber = carriedUI2.match(/\d+/);
			console.log(DlevelNumber[0])
				
			if (currentLevel == "level2a" && extractedLevel >= DlevelNumber) {
				htmlString += '<p>' + "Congratulations! Your item is safe to drink." + "Your recommended drink level is <span> " + carriedUI2 + ".</span> It indicates you can manage your item at IDDSI drink level: <u>" + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level2a" && extractedLevel < DlevelNumber) { 			
				htmlString += '<p>' + "You item doesn't match recommendation. " + "Your recommended drink level is <span> " + carriedUI2 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. " + '</p>';
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';
				displayMod();
				}
			if (currentLevel == "level3a") {
				htmlString += '<p>' + "Correction Needed: Please modify your item to be one smooth texture and with no lumps before continuing. One modification technique is to purred the item." +'</p>';
				displayMod();
				}
			if (currentLevel == "level3c" && extractedLevel >= DlevelNumber) {
				htmlString += '<p>' + "Congratulations! Your item is safe to drink." + "Your recommended drink level is <span> " + carriedUI2 + ".</span> It indicates you can manage your item at IDDSI drink level: <u>" + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level3c" && extractedLevel < DlevelNumber) { 	
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended drink level is <span> " + carriedUI2 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u>." + '</p>';
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';
				displayMod();
				}
			if (currentLevel == "level4a") {
				htmlString += '<p>' + "Correction Needed: Please modify your item so it requires no chewing and biting before continuing." +'</p>';
				}					
			if (currentLevel == "level6a1" && extractedLevel >= DlevelNumber) {
				htmlString += '<p>' + "Congratulations! Your item is safe to drink. " + "Your recommended drink level is <span> " + carriedUI2 + ".</span> It indicates you can manage your item at IDDSI drink level: <u>" + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level6a1" && extractedLevel < DlevelNumber) { 			
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended drink level is <span> " + carriedUI2 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. " + '</p>';
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';
				displayMod();
				}
			if (currentLevel == "level6a2" && extractedLevel >= DlevelNumber) {
				htmlString += '<p>' + "Congratulations! Your item is safe to drink. " + "Your recommended drink level is <span> " + carriedUI2 + ".</span> It indicates you can manage your item at IDDSI drink level: <u>" + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample_Drink + '.</p>';
				}				
			if (currentLevel == "level6a2" && extractedLevel < DlevelNumber) { 			
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended drink level is <span> " + carriedUI2 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. " + '</p>';
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';
				displayMod();
				}
			}
			
		if (carriedDFValue == "Food" && carriedUI3 != "Do Not Know" ) {
			var FlevelNumber = carriedUI3.match(/\d+/);
			console.log(FlevelNumber[0])
			var FDes = carriedUI3.match(/[^, ]*$/); // this only match the first word
			console.log(FDes[0])
		
			if (currentLevel == "level2b" && extractedLevel < FlevelNumber) {
				htmlString += '<p>' + "Congratulations! Your item is safe to eat." + "Your recommended food level is <span> " + carriedUI3 + ".</span> It indicates you can manage your item at IDDSI food level: <u>" + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level2b" && extractedLevel == FlevelNumber && extractedDes == FDes)	{
				htmlString += '<p>' + "Congratulations! Your item is safe to eat. " + "Your recommended food level is <span> " + carriedUI3 + ".</span> It indicates you can manage your item at IDDSI food level: <u>" + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';		
				}	
			if (currentLevel == "level2b" && extractedLevel == FlevelNumber && extractedDes != FDes)	{
				displayMod();
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended food level is <span> " + carriedUI3 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u>." + '</p>';
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';
				}
			if (currentLevel == "level2b" && extractedLevel > FlevelNumber) { 
				displayMod();
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended food level is <span> " + carriedUI3 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u>." + '</p>';
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';
				}
			if (currentLevel == "level3a") {
				htmlString += '<p>' + "Correction Needed: Please modify your item to be one smooth texture and with no lumps before continuing. One modification technique is to purred the item." +'</p>';
				}
			if (currentLevel == "level4a") {
				htmlString += '<p>' + "Correction Needed: Please modify your item so it requires no chewing and biting before continuing." +'</p>';
				}
			if (currentLevel == "level4b" && newValue == "one" ) {
				htmlString += '<p>' + "Reminder: Based on your selection so far, foods at current IDDSI level would require chewing but no biting." +'</p>';
				}
			if (currentLevel == "level4b" && newValue == "mixed" && extractedLevel <= FlevelNumber) {
				displayMod();	
				htmlString += '<p>' + "Congratulations! Your item is safe to eat." + "Your recommended food level is <span> " + carriedUI3 + ". </span> It indicates you can manage your item at IDDSI food level: <u>" + extractedLevel + ", " + extractedDes + "</u>. " + '.</p>';	
				htmlString += '<p>' + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				htmlString += '<p>' + "For additional video reference, click on Modification button." +'</p>';
				}	
			if (currentLevel == "level4b" && newValue == "mixed" && extractedLevel > FlevelNumber) {
				displayMod();
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended food level is <span> " + carriedUI3 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u> " + '.</p>';				
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';

				}	
			if (currentLevel == "level5b" && extractedLevel <= FlevelNumber) {
				displayMod();
				htmlString += '<p>' + "Congratulations! Your item is safe to eat. " +  "Your recommended food level is <span> " + carriedUI3 + ".</span> It indicates you can manage your item at IDDSI food level: <u>" + extractedLevel + ", " + extractedDes + "</u> " + '.</p>';
				htmlString += '<p>' + "For additional video reference, click on Modification button." +'</p>';
				}
			if (currentLevel == "level5b" && extractedLevel > FlevelNumber) {
				displayMod();
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended food level is <span> " + carriedUI3 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u> " + '.</p>';				
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';

				}
			if (currentLevel == "level6a2" && extractedLevel <= FlevelNumber) {
				displayMod1();
				htmlString += '<p>' + "Congratulations! Your item is safe to eat. " + "Your recommended food level is <span> " + carriedUI3 + ".</span> It indicates you can manage your item at IDDSI food level: <u>" + extractedLevel + ", " + extractedDes + "</u> " + '.</p>';	
				}
			if (currentLevel == "level6a2" && extractedLevel > FlevelNumber) { 	
				displayMod();		
				htmlString += '<p>' + "Your item doesn't match recommendation. " + "Your recommended food level is <span> " + carriedUI3 + ",</span> but your item is at <u>IDDSI level " + extractedLevel + ", " + extractedDes + "</u> " + '.</p>';
				htmlString += '<p>' + "To increase swallowing safety, click on the Modification button to see how to adjust your item to the recommended level" + '.</p>';
				}						
			}
	
		CommentContainer.insertAdjacentHTML('beforeend', htmlString); 
		
		}



	/* Create functions to take the inputs from user on the Home page, store it and pass it to every following page.*/
	// The following 3 functions are for getting the user input from text1, Dlevels and Flevels.	
	// Could be duplicated functions by now (May2023)
	function userinput() {
		var storedUI1 = document.getElementById("text1").value;
		console.log(storedUI1)	
	}
	function userinput2() {
		var storedUI2 = document.getElementById("Dlevels").value;
		console.log(storedUI2)	
	}
	function userinput3() {
		var storedUI3 = document.getElementById("Flevels").value;
		console.log(storedUI3)	
	}



	// This function is for storing the userinput value.
	function StoreUInputlValue(UserInputValue) {
		var inputValue1 = document.getElementById("text1").value;
		console.log(inputValue1)
		storedUI1 = inputValue1;
		localStorage.setItem('storedUI1',inputValue1);
		
		var inputValue2 = document.getElementById("Dlevels").value;
		console.log(inputValue2)
		storedUI2 = inputValue2;
		localStorage.setItem('storedUI2',inputValue2);
		
		var inputValue3 = document.getElementById("Flevels").value;
		console.log(inputValue3)
		storedUI3 = inputValue3;
		localStorage.setItem('storedUI3',inputValue3);
		
	}
		
	function StoreUInputlValue2(UserInputValue) {		
		var inputValue5 = document.getElementById("ItemType").value;
		console.log(inputValue5)
		storedUI5 = inputValue5;
		localStorage.setItem('storedUI5',inputValue5);
		
		var inputValue6 = document.getElementById("IDDSILev").value;
		console.log(inputValue6)
		storedUI6 = inputValue6;
		localStorage.setItem('storedUI6',inputValue6);	
		
		directModPages();	
	}


	/* directs or links to different Modification pages */
	function directModPages () {
		if (storedUI5 == "drink") {
			if (storedUI6 == "IDDSI 1") {
				document.location.href = "index_FTApp_2c1.html";		
			}
			if (storedUI6 == "IDDSI 2") {
				document.location.href = "index_FTApp_2c2.html";		
			}
			if (storedUI6 == "IDDSI 3") {
				document.location.href = "index_FTApp_2c3.html";		
			}			
			if (storedUI6 == "IDDSI 4") {
				document.location.href = "index_FTApp_2c4.html";		
			}				
		}	
		if (storedUI5 == "food") {		
			if (storedUI6 == "IDDSI 3") {
				document.location.href = "index_FTApp_2c3.html";		
			}
			if (storedUI6 == "IDDSI 4") {
				document.location.href = "index_FTApp_2c4.html";		
			}
			if (storedUI6 == "IDDSI 5") {
				document.location.href = "index_FTApp_2c5.html";		
			}			
			if (storedUI6 == "IDDSI 6") {
				document.location.href = "index_FTApp_2c6.html";		
			}	
			if (storedUI6 == "IDDSI 7") {
				document.location.href = "index_FTApp_2c7.html";		
			}				
		}	
	}

// 
// 	Test function, not working */
// 	function autoRefresh() {
// 		if(performance.navigation.type == 2){
//    			location.reload(true);
// 		}
// 	}



	/* This function takes the carriedUI values and generate a string output to display users' initial inputs.*/
	function RetrieveInputValue() {

		document.getElementById('userinput1').innerHTML = "<ul><li>Your item is: <span>" + carriedUI1 + "</span></li></ul>";
		document.getElementById('userinput2').innerHTML = "<ul><li>Your recommended IDDSI Drinks (Liquids) Level is:  <span>" + carriedUI2 + "</span></li></ul>";
		document.getElementById('userinput3').innerHTML = "<ul><li>Your recommended IDDSI Foods (Solids) Level is:  <span>" + carriedUI3 + "</span></li></ul>";	
	}
	
	/* This function displays the concatenated log of use selection choices at each page load. */
	function RetrieveString() {
		document.getElementById('selection-info').innerHTML = carriedString1;
	}


	///* This function takes the carriedUI4 value and generate a string output to display user self-selected final IDDSI level.*/
	function RetrieveSelfSelectValue() {
		document.getElementById('userinput4').innerHTML = "<ul><li>Your self-selected IDDSI " + carriedDFValue + " Level is:  <span>" + carriedUI4a + ", "+ carriedUI4b + "</span></li></ul>";	

		if (carriedDFValue == "Transitional") { 
			document.getElementById('userinput4').innerHTML = "<ul><li>You selected your item as:  <span>" + carriedDFValue + "</span></li></ul>";
			document.getElementById('userinput6').innerHTML = "<ul><li>You are currently exploring: " + carriedUI6 + " level " + carriedUI5 + " modification techniques.</li></ul>";
		}
	}

	function displayGenTypeLevel() {
// 		alert ("display Caption for preparation videos")
		if (carriedDFValue == "Drink" && carriedUI2 != "Do Not Know") {
			document.getElementById('userinput5').innerHTML = "Click on each button to view preparation videos for  <span>" + carriedUI2 + "</span> items.";
		}
		if (carriedDFValue == "Food" && carriedUI3 != "Do Not Know") {
			document.getElementById('userinput5').innerHTML = "Click on each button to view preparation videos for  <span>" + carriedUI3 + "</span> items.";
		}
		if (carriedDFValue == "Transitional") {
			document.getElementById('userinput5').innerHTML = "Click on each button to view preparation videos for  <span>" + carriedUI6 + " " + carriedUI5 + "</span> items.";		
		}	
	}


	/*  This function grabbing the current value in the Select box when a page refresh. To be used Onload. 
	Instead of being a separate function, incorporated it into the LinkedPage function.*/
	function RetrieveTempLevelValue () { 	
		let id = document.getElementsByTagName("select")[0].id; 		
		var templevelValue = document.getElementById(id).value;
		console.log(templevelValue)
	}
	
	function StoreDirect () {
		StoreUInputlValue();
// 		RetrieveInputValue();
		document.location.href = "index_FTApp_H1.html";
	}



	/* These two functions get the level and description information from each array. */
	function getLevel(data) {
			var extractedLevel = data[0].IDDSILevel;
			console.log(extractedLevel)
	}

	function getDescription(data) {
			var extractedDes = data[0].Description;
			console.log(extractedDes)
	}


	/* This function grabs the number portion from a string using regex.*/
	function compareIDDSILevel ()  {
		// This parts gets the number portion from carried UI3 which is food level
		 var FlevelNumber = carriedUI3.match(/\d+/);
		 console.log(levelNumber[0])

		// This parts gets the number portion from carried UI2 which is drink level. 
		 var DlevelNumber = carriedUI2.match(/\d+/);
		 console.log(levelNumber[0])
	}


// ----- This section contains function for displaying buttons ---- // 
	/* This function unhide div 4 when it is called for, div 4 is originally hidden */
	function displayMod() {
	 var mod = document.getElementById("div4");
	  if (mod.style.display = "none") {
   		 mod.style.display = "block";
 		} else {
    	mod.style.display = "none";
  		}
	}

	/* This function will hide div 4 when called for */
 	function displayMod1() {
 	 var mod = document.getElementById("div4");
 	  if (mod.style.display = "block") {
    	 mod.style.display = "none";
 		} else {
     	mod.style.display = "block";
   		}
 	}
 	
 	/* This function will unhide Size Test */
 	 function displaySize () {  	 		
	 	  var mod1 = document.getElementById("testSi");	
		  if (mod1.style.display = "none") {
	   		 mod1.style.display = "block";
 			} else {
	 	   	mod1.style.display = "none";
  			}
     	  var modB1 = document.getElementById("button6");	
		  if (modB1.style.display = "none") {
	   		 modB1.style.display = "block";
 			} else {
	 	   	modB1.style.display = "none";
  			}	 			
 	}
 	
  	/* This function will unhide Fork Drip Test */	 	
 	function displayFD () {  	 		
	 	  var mod1 = document.getElementById("testFD");	
		  if (mod1.style.display = "none") {
	   		 mod1.style.display = "block";
 			} else {
	 	   	mod1.style.display = "none";
  			}
     	  var modB1 = document.getElementById("button9");	
		  if (modB1.style.display = "none") {
	   		 modB1.style.display = "block";
 			} else {
	 	   	modB1.style.display = "none";
  			}	 			
 	}
 	
  	/* This function will unhide Spoon Tilt Test */	
 	 	function displaySpT () {  	 		
 	 	  var mod2 = document.getElementById("testSpT");	
		  if (mod2.style.display = "none") {
	   		 mod2.style.display = "block";
 			} else {
	 	   	mod2.style.display = "none";
  			} 	
      	  var modB2 = document.getElementById("button8");	
		  if (modB2.style.display = "none") {
	   		 modB2.style.display = "block";
 			} else {
	 	   	modB2.style.display = "none";
  			}	 			
 	}
 	
   	/* This function will unhide Fork Pressure Test */	
 	 	function displayFP () {  
 	   	  var mod3 = document.getElementById("testFP");	
		  if (mod3.style.display = "none") {
	   		 mod3.style.display = "block";
 			} else {
	 	   	mod3.style.display = "none";
  			} 				
  		  var modB3 = document.getElementById("button7");	
		  if (modB3.style.display = "none") {
	   		 modB3.style.display = "block";
 			} else {
	 	   	modB3.style.display = "none";
  			}	
 	}

 /* This function unhide the Tests associated with IDDSI3 , originally hidden */		
	function displayTest() {
 		if (carriedDFValue == "Drink") {  
//  		  	alert("displayTest-Drink section")
			var DlevelNumber = carriedUI2.match(/\d+/);
			if (DlevelNumber[0] != "4") {
			  var mod = document.getElementById("testFL");
				console.log (carriedDFValue, mod)	 	
			  if (mod.style.display = "none") {
				 mod.style.display = "block";
				} else {
				mod.style.display = "none";
				}
			  var modB = document.getElementById("button10");
				console.log (carriedDFValue, mod)	 	
			  if (modB.style.display = "none") {
				 modB.style.display = "block";
				} else {
				modB.style.display = "none";
				}		
			}
			if (DlevelNumber[0] == "4") {
  	 			displayFD ();
  	 			displaySpT ();				
			}						
		}
 		if (carriedDFValue == "Transitional" && carriedUI5 == "drink") {  
//  		  	 alert("displayTest-transitional-drink section")
			if (carriedUI6 != "IDDSI 4") {
			  var mod = document.getElementById("testFL");
				console.log (carriedUI6, mod)	
			  if (mod.style.display = "none") {
				 mod.style.display = "block";
				} else {
				mod.style.display = "none";
				}
			  var modB = document.getElementById("button10");
				console.log (carriedUI6, mod)	 	
			  if (modB.style.display = "none") {
				 modB.style.display = "block";
				} else {
				modB.style.display = "none";
				}		
			}
			if (carriedUI6 == "IDDSI 4") {
  	 			displayFD ();
  	 			displaySpT ();				
			}						
		}
		
  	 	if (carriedDFValue == "Food") {  
//   	 		alert("displayTest-Food section")
  	 		var FlevelNumber = carriedUI3.match(/\d+/);
	
  	 		if (FlevelNumber[0] == "3") {
  	 			displayFD ();
  	 			displaySpT ();			
			}	
  	 		if (FlevelNumber[0] == "4") {
  	 			displayFD ();
  	 			displaySpT ();	
  	 			displayFP ();			
			}	
  	  	 	if (FlevelNumber[0] == "5") {
				displaySize ();
  	 			displaySpT ();	
  	 			displayFP ();			
			} 		
  	  	 	if (FlevelNumber[0] == "6") {
				displaySize ();
  	 			displayFP ();			
			} 	
	  	  	if (FlevelNumber[0] == "7") {
  	 			displayFP ();			
			} 	
		}			
  	 	if (carriedDFValue == "Transitional" && carriedUI5 == "food") {  
//   	 		alert("displayTest-transitional-food section")
  	 		if (carriedUI6 == "IDDSI 3") {
  	 			displayFD ();
  	 			displaySpT ();			
			}	
  	 		if (carriedUI6 == "IDDSI 4") {
  	 			displayFD ();
  	 			displaySpT ();	
  	 			displayFP ();			
			}	
  	  	 	if (carriedUI6 == "IDDSI 5") {
				displaySize ();
  	 			displaySpT ();	
  	 			displayFP ();			
			} 		
  	  	 	if (carriedUI6 == "IDDSI 6") {
				displaySize ();
  	 			displayFP ();			
			} 	
	  	  	if (carriedUI6 == "IDDSI 7") {
  	 			displayFP ();			
			} 
  		}		
	}	
	
	
	
	/* This sets up a function for displaying comment/instruction for Modification div. */
	function renderHTMLmodcomment() {

		ModComContainer.innerHTML = "";
		var htmlString = ""; 	
			
		if (carriedDFValue == "Drink" && carriedUI2 != "Do Not Know") {
			var DlevelNumber = carriedUI2.match(/\d+/);
			console.log(DlevelNumber[0])
			var DDes = foodtext[DlevelNumber].Description;		
			console.log(DDes)

			if (DlevelNumber[0] == "1") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + DlevelNumber + " " + DDes + '</u>' + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[DlevelNumber].ModificationNote +'.</p>';		
			}	
		
			if (DlevelNumber[0] == "2") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + DlevelNumber + " " + DDes + '</u>' + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[DlevelNumber].ModificationNote +'.</p>';		
			}	
		
			if (DlevelNumber[0] == "3") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + DlevelNumber + " " + DDes + '</u>' + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[DlevelNumber].ModificationNote +'</p>';		
			}	
			
			if (DlevelNumber[0] == "4") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + DlevelNumber + " " + DDes + '</u>' + " are typically too thick to be drunk form a cup or sucked through a straw; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[DlevelNumber].ModificationNote +'.</p>';		
			}

			htmlString += '<p>' + "To qualify for <u>IDDSI level " + DlevelNumber + " " + DDes + "</u>, your " + carriedDFValue + " item must pass the following test(s). <br /> See video guide below for details" + '.</p>';
		}
			
		if (carriedDFValue == "Food" && carriedUI3 != "Do Not Know" ) {
			var FlevelNumber = carriedUI3.match(/\d+/);
			console.log(FlevelNumber[0])

			var FDes = foodtext[FlevelNumber].Description;		
			console.log(FDes)

			if (FlevelNumber[0] == "3") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + FlevelNumber + " " + FDes + '</u>' + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[FlevelNumber].ModificationNote +'.</p>';		
			}	
			if (FlevelNumber[0] == "4") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + FlevelNumber + " " + FDes + '</u>' + " has no lumps; doesn't require chewing or biting. <br />" + foodtext[FlevelNumber].ModificationNote +'.</p>';		
			}	
			if (FlevelNumber[0] == "5") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + FlevelNumber + " " + FDes + '</u>' + " must be soft and moist; requires some chewing but not biting. <br />" + foodtext[FlevelNumber].ModificationNote +'.</p>';		
			}
			if (FlevelNumber[0] == "6") {
				htmlString += '<p>' + '<u>' +  "IDDSI level " + FlevelNumber + " " + FDes + '</u>' + " must be soft, tender and moist; no separate thin liquids; requires chewing but no biting. <br />" + foodtext[FlevelNumber].ModificationNote +'.</p>';		
			}	
			if (FlevelNumber[0] == "7") {
				htmlString += '<p>' + '<u>' + "IDDSI level " + FlevelNumber + " " + FDes + '</u>' + " must be soft with tender texture; can have liquids, but not thin liquid; requires chewing and biting. <br />" + foodtext[FlevelNumber].ModificationNote +'.</p>';
				htmlString += '<p>' + "Avoid: hard, tough, chewy, fibrous, stringy, crunchy, or crumbly bits, pips, seeds, fibrous parts of fruit, husks or bones" + '.</p>';
			}	
						
			htmlString += '<p>' + "To qualify for <u>IDDSI level " + FlevelNumber + " " + FDes + "</u>, your " + carriedDFValue + " item must pass the following test(s). <br /> See video guide below for details" + '.</p>';
		}
		
 		if (carriedDFValue == "Transitional") {  /* it appears the carriedDFValue got over written during the second selection */
			var TlevelNumber = carriedUI6.match(/\d+/);
				console.log(TlevelNumber[0])
 			var TDes = foodtext[TlevelNumber].Description;		
 			console.log(TDes)
 			
			if (carriedUI5 == "drink") {
				if (carriedUI6 == "IDDSI 1") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}		
				if (carriedUI6 == "IDDSI 2") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}	
				if (carriedUI6 == "IDDSI 3") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}	
				if (carriedUI6 == "IDDSI 4") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " are typically too thick to be drunk form a cup or sucked through a straw; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}	
			}
			if (carriedUI5 == "food") {
				if (carriedUI6 == "IDDSI 3") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " can be drunk form a cup; has smooth texture with no lumps; doesn't require chewing or biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}		
				if (carriedUI6 == "IDDSI 4") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + "  has no lumps; doesn't require chewing or biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}	
				if (carriedUI6 == "IDDSI 5") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " must be soft and moist; requires some chewing but not biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}	
				if (carriedUI6 == "IDDSI 6") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " must be soft, tender and moist; no separate thin liquids; requires chewing but no biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
				}
				if (carriedUI6 == "IDDSI 7") {
					htmlString += '<p>' + carriedUI6 + " " + carriedUI5 + " " + " must be soft with tender texture; can have liquids, but not thin liquid; requires chewing and biting. <br />" + foodtext[TlevelNumber].ModificationNote +'.</p>';		
					htmlString += '<p>' + "Avoid: hard, tough, chewy, fibrous, stringy, crunchy, or crumbly bits, pips, seeds, fibrous parts of fruit, husks or bones" + '.</p>';
				}															
			}	
		
			htmlString += '<p>' + "To qualify for " + carriedUI6 + " " + carriedUI5 + ", your item must pass the following test(s). <br /> See video guide below for details" + '.</p>';						
 		}				
						
		ModComContainer.insertAdjacentHTML('beforeend', htmlString); 

	}
	

	/* Function for displaying Test Section information */

	function testSectionDisp () {
	
		var DlevelNumber = carriedUI2.match(/\d+/);
		var FlevelNumber = carriedUI3.match(/\d+/);
		
		if (carriedDFValue == "Drink") {
// 			alert ("Got to Test Section-Drink")	
			if (DlevelNumber[0] == "1") {
			document.getElementById('testFL').innerHTML = "Flow Test: Drinks that can " + foodtext[DlevelNumber].FlowTest + ".";
			}						
			if (DlevelNumber[0] == "2") {
			document.getElementById('testFL').innerHTML = "Flow Test: Drinks that can " + foodtext[DlevelNumber].FlowTest + ".";
			}				
			if (DlevelNumber[0] == "3") {
			document.getElementById('testFL').innerHTML = "Flow Test: Drinks that can " + foodtext[DlevelNumber].FlowTest + ".";
			}	
			if (DlevelNumber[0] == "4") {
			document.getElementById('testFD').innerHTML = "Fork Drip Test: Item that " + foodtext[DlevelNumber].ForkDripDescription + ".";
			document.getElementById('testFP').innerHTML = "Fork Pressure Test: Item that are " + foodtext[DlevelNumber].ForkPressureTest + ".";
			document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[DlevelNumber].SpoonTiltTest + ".";		
			}	
		}		
	
// 		if (FlevelNumber !== null)	{   // this solves the issue of pulling up a null value
		if (carriedDFValue == "Food") {
// 			alert ("Got to Test Section-Food")
			if (FlevelNumber[0] == "3") {
			document.getElementById('testFD').innerHTML = "Fork Drip Test: Food that are " + foodtext[FlevelNumber].ForkDripDescription + ".";
	// 		document.getElementById('testFP').innerHTML = "Fork Pressure Test: Food that are " + foodtext[FlevelNumber].ForkPressureTest + ".";
			document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[FlevelNumber].SpoonTiltTest + ".";		
			}	
			if (FlevelNumber[0] == "4") {
			document.getElementById('testFD').innerHTML = "Fork Drip Test: Food that are " + foodtext[FlevelNumber].ForkDripDescription + ".";
			document.getElementById('testFP').innerHTML = "Fork Pressure Test: Food that are " + foodtext[FlevelNumber].ForkPressureTest + ".";
			document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[FlevelNumber].SpoonTiltTest + ".";		
			}	
			if (FlevelNumber[0] == "5") {
			document.getElementById('testSi').innerHTML = "Size: No more than " + foodtext[FlevelNumber].BitingParticleSize + ", fit between the tines of a standard fork.";
			document.getElementById('testFP').innerHTML = "Food Pressure Test: Food that are " + foodtext[FlevelNumber].ForkPressureTest + ".";
			document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[FlevelNumber].SpoonTiltTest + ".";		
			}
			if (FlevelNumber[0] == "6") {
			document.getElementById('testSi').innerHTML = "Size: No more than " + foodtext[FlevelNumber].BitingParticleSize + ", about the width of a standard dinner fork.";
			document.getElementById('testFP').innerHTML = "Food Pressure Test: Food that are " + foodtext[FlevelNumber].ForkPressureTest + ".";	
			}
			if (FlevelNumber[0] == "7") {
			document.getElementById('testFP').innerHTML = "Food Pressure Test: Food that are " + foodtext[FlevelNumber].ForkPressureTest + ".";
			}
		}		
		if (carriedDFValue == "Transitional") {
			var TlevelNumber = carriedUI6.match(/\d+/);
// 			alert ("Got to Test Section-Transitional")
			if (carriedUI5 == "drink") {	
// 				alert ("Got to the drink portion")
				if (carriedUI6 == "IDDSI 1") {
				document.getElementById('testFL').innerHTML = "Flow Test: Drinks that can " + foodtext[TlevelNumber].FlowTest + ".";
				}						
				if (carriedUI6 == "IDDSI 2") {
				document.getElementById('testFL').innerHTML = "Flow Test: Drinks that can " + foodtext[TlevelNumber].FlowTest + ".";
				}				
				if (carriedUI6 == "IDDSI 3") {
				document.getElementById('testFL').innerHTML = "Flow Test: Drinks that can " + foodtext[TlevelNumber].FlowTest + ".";
				}	
				if (carriedUI6 == "IDDSI 4") {
				document.getElementById('testFD').innerHTML = "Fork Drip Test: Item that are " + foodtext[TlevelNumber].ForkDripDescription + ".";
				document.getElementById('testFP').innerHTML = "Fork Pressure Test: Item that are " + foodtext[TlevelNumber].ForkPressureTest + ".";
				document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[TlevelNumber].SpoonTiltTest + ".";		
				}
			}			
			if (carriedUI5 == "food") {	
// 				alert ("Got to the Food portion")
				if (carriedUI6 == "IDDSI 3") {
				document.getElementById('testFD').innerHTML = "Fork Drip Test: Food that are " + foodtext[TlevelNumber].ForkDripDescription + ".";
				document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[TlevelNumber].SpoonTiltTest + ".";		
				}	
				if (carriedUI6 == "IDDSI 4") {
				document.getElementById('testFD').innerHTML = "Fork Drip Test: Food that are " + foodtext[TlevelNumber].ForkDripDescription + ".";
				document.getElementById('testFP').innerHTML = "Fork Pressure Test: Food that are " + foodtext[TlevelNumber].ForkPressureTest + ".";
				document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[TlevelNumber].SpoonTiltTest + ".";		
				}	
				if (carriedUI6 == "IDDSI 5") {
				document.getElementById('testSi').innerHTML = "Size: No more than " + foodtext[TlevelNumber].BitingParticleSize + ", fit between the tines of a standard fork.";
				document.getElementById('testFP').innerHTML = "Food Pressure Test: Food that are " + foodtext[TlevelNumber].ForkPressureTest + ".";
				document.getElementById('testSpT').innerHTML = "Spoon Tilt Test: Item should " + foodtext[TlevelNumber].SpoonTiltTest + ".";		
				}
				if (carriedUI6 == "IDDSI 6") {
				document.getElementById('testSi').innerHTML = "Size: No more than " + foodtext[TlevelNumber].BitingParticleSize + ", about the width of a standard dinner fork.";
				document.getElementById('testFP').innerHTML = "Food Pressure Test: Food that are " + foodtext[TlevelNumber].ForkPressureTest + ".";	
				}
				if (carriedUI6 == "IDDSI 7") {
				document.getElementById('testFP').innerHTML = "Food Pressure Test: Food that are " + foodtext[TlevelNumber].ForkPressureTest + ".";
				}				
			}	
		
		}	

	}
	
	
/* Dynamic Dropdown see ref. */

   function dynamicdropdown(listindex)
    {
        switch (listindex)
        {
        case "drink" :
            document.getElementById("IDDSILev").options[0]=new Option("-Select One-","");
            document.getElementById("IDDSILev").options[1]=new Option("IDDSI Level 1, Slightly Thick","IDDSI 1");
            document.getElementById("IDDSILev").options[2]=new Option("IDDSI Level 2, Mildly Thick","IDDSI 2");
            document.getElementById("IDDSILev").options[3]=new Option("IDDSI Level 3, Liquidized or Moderately Thick","IDDSI 3");           
            document.getElementById("IDDSILev").options[4]=new Option("IDDSI Level 4, Pureed or Extremely Thick","IDDSI 4");
            document.getElementById("IDDSILev").options[5]=new Option("");      
            break;
            
        case "food" :
            document.getElementById("IDDSILev").options[0]=new Option("-Select One-","");
            document.getElementById("IDDSILev").options[1]=new Option("IDDSI Level 3, Liquidized or Moderately Thick","IDDSI 3"); 
            document.getElementById("IDDSILev").options[2]=new Option("IDDSI Level 4, Pureed or Extremely Thick","IDDSI 4");
            document.getElementById("IDDSILev").options[3]=new Option("IDDSI Level 5, Minced & Moist","IDDSI 5");
            document.getElementById("IDDSILev").options[4]=new Option("IDDSI Level 6, Soft & Bite-Sized","IDDSI 6");           
            document.getElementById("IDDSILev").options[5]=new Option("IDDSI Level 7, Easy to Chew","IDDSI 7");   
            break;
        }
        return true;
    	
    }



