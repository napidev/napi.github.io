
  function openPage(id) {
    //Hide All Tabs
    document.getElementById('home').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('skills').style.display="none";

    //Show the Selected Tab
    document.getElementById(id).style.display="block";  
  }