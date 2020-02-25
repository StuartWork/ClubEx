function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the terms, video titles:*/
var suggestions = ["15-Minute Beginner's At-Home Cardio Workout","20min-cardio-Aerobics","Abhyasa","Abs","Acarya","Advaita","Aerobics","Aerobics Action","Aerobics Career","Aerobics Music",
					"Aerobics Clothes","Aerobics dance exercise","Aerobics for beginners","Ahamkara","Ahimsa","Akasha","Amrita","Ananda","Anga","Arjuna","Asana","Ashrama",
					"Ashta-anga-yoga","Ashtanga-yoga","Asmita","Atman","Avadhuta","Avidya","Ayurveda","Ayur-veda",
					"B.E.A.M.","Bandha","Bantamweight","Barrels","Beginner's At-Home Cardio Workout","Below the belt","Bhagavad Gita","Bhagavata-Purana","Bhakta",
					"Bhakti","Bhakti-Sutra","Bhakti Yoga","Bindu","Blow","Bodhi","Bodhisattva","Body-mind connection",
					"Body punches","Boxer's handshake","Boxing","Bolo punch","Bout","Brahma","Brahmacharya","Brahman",
					"Brahmana","Brawler","Breadbasket","Breathe Energize Align Move","Breathing 100s","Buddha","Buddhi",
					"Cadillac","Cakra","Card","Catchweight","Centering","Chair aerobics","Chakra","Chin tucked",
					"Choreography Aerobics","Cin-mudra","Cit","Citta","Class FitSugar","Clinch","Combination","Contrology","Corner",
					"Corner man","Count","Counter punch","Cruiserweight","Curacao","Darshana","Deva","Devi","Dharana",
					"Dharma","Dhyana","Diksha","Disqualification","Down and out","Down for the count","Draw","Drishti",
					"Duhkha","Fall through the ropes","Featherweight","Feint","First-generation teacher","Flyweight",
					"Foot on the walk","Fouls","Gate","Gayatri-mantra","Gheranda-Samhita","Glass Jaw","Gloves","Goraksha",
					"Go the distance","Go to the scorecards","Granthi","Guna","Guru","Guru-bhakti","Guru-Gita",
					"Guru-Yoga","Hamsa","Hatha Yoga","Hatha-Yoga-Pradipika","Haymaker","Headbutt","Headlights","Heavyweight",
					"Hi-Low cardio aerobics-burn over 700 calories","Hip belt","Hiranyagarbha","Hitting on the break","Hook","Ida-nadi","Imprinting","Inner eye",
					"Inside fighter","Intercostal muscles","Ishvara","Ishvara-pranidhana","Jab","Jaina","Japa","Jiva-atman",
					"jivatman","Jivan-mukta","Jivan-mukti","Jnana","Jnana-Yoga","Junior heavyweight","Kaivalya","Kali",
					"Kali-yuga","Kama","Kapila","Karman","karma","Karma Yoga","Karuna","Khecari-mudra","Kickboxing Aerobics",
					"Kidney punch","Kissed the canvas","Knockdown","Knockout","KO","Kosha","Krishna","Kumbhaka",
					"Kundalini-shakti","Kundalini-Yoga","Lacing","Laya Yoga","Level your eyes","Light flyweight",
					"Light heavyweight","Lightweight","Linga","Liver punch","Low Impact Aerobics","Magic Circle",
					"Mahabharata","Mahatma","Maithuna","Majority decision","Majority draw","Manager","Manas","Mandala",
					"Mandatory eight count","Mantra","Mantra-Yoga","Marionette string","Marman","Mat","Matsyendra","Maya",
					"Memorial ten count","Middleweight","Minimumweight/Mini flyweight","Moksha","Mudra","Muni","Nada",
					"Nada-Yoga","Nadi","Nadi-shodhana","Narada","Natha","Navel to spine","Neck lengthened","Neti-neti",
					"Neutral corner","Neutral pelvis","Neutral spine","Nirodha","Niyama","No decision","Nyasa","Ojas","Om",
					"On the ropes","Orthodox","Outside fighter","Palooka","Parallel stance","Parama-atman","Parama-hamsa",
					"Patanjali","Peek-a-boo","Pelvic floor muscles","Pilates","Pilates Principles","Pilates stance",
					"Pingala-nadi","Pooched abs","Popping the ribs","Pound for pound","Powerhouse","Power punches","Prajna",
					"Prakriti","Prakriti-laya","Prana","Pranayama","Prasada","Pratyahara","Prizefighter","Promoter","Puja",
					"Punch","Punch drunk","Puraka","Purana","Purse","Purusha","Rabbit punch","Radha","Raja-Yoga","Rama",
					"Ramayana","Recaka","Reformer","Rig-Veda","Rishi","Ropes","Rope a dope","Rounds","Sadhana","Sahaja",
					"Saint Pierre & Siddhi","Samadhi","Samatva","samata","Samkhya","Samnyasa","Samnyasin",
					"Samprajnata-samadhi","Samsara","Samskara","Samyama","Sanctioning Body","Sat","Sat-sanga",
					"Saved by the Bell","Satya","Scooping your abs","Second-generation teache","Shakti","Shakti-pata",
					"Shankara","Shishya","Shiva","Shiva-Sutra","Shodhana","Shoulder blades into your back pockets","Shraddha",
					"Shuddhi","Siddha","Siddha-Yoga","Sitting up out of your hips","Smile muscles","Sniff sniff, blow blow",
					"Southpaw","Spanda","Spine Corrector","Split decision","Step Aerobics","Stick and move","Sucker punch",
					"Super bantamweight","Super featherweight","Super flyweight","Super lightweight","Super middleweight",
					"Super welterweight","Sushumna-nadi","Sutra","Svadhyaya","Take a dive","Tantra","Tapas","Tattva",
					"Technical draw","TKO","Technical knockout","Throw in the towel","Triangles","Turiya","Two-way energy",
					"Undercard","Universal Reformer","Upanishad","Upaya","Uppercut","Vairagya","Vertebrae","Vishal Prajapati","Water Aerobics",
					"Weigh-in","Weight classes","Welterweight","Wunda Chair","Yoga","Zipper"];

/*initiate the autocomplete function on the "myInput" element, and pass along the suggestions array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), suggestions);

function searchItem(){
	var search = document.querySelector("#myInput").value;
	var res = search.toLowerCase();
	
	if (res == "yoga"){		
		newSearch.action = "#yoga-id";
		}else if (res == "pilates"){		
			newSearch.action = "#pilates-id"; 
		}else if (res == "boxing"){		
			newSearch.action = "#boxing-id";
		}else if (res == "aerobics"){		
			newSearch.action = "#aerobics-id";
		}else 	alert("Sorry no results found.");
}

