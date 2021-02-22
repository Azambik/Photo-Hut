var userSearchEl = $("#user-search");

// Array for users
var users = [];
// array for username suggestions
var usernames = []; 


// fetch list of users to add to suggestion (CALLS SUGGEST user)
async function fetchUsers() {
    const response = await fetch('/api/users/', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
        const data = await response.json();
        suggestUser(data); // populate suggestions
    } else {
        alert(response.statusText);
    }
}

var submitHandler = function(event) {
    // prevent from refreshing page
    event.preventDefault();

    // check if user entered exists
    if(!userSearchEl.val() || !usernames.includes(userSearchEl.val())) {
        $(userSearchEl)
            .val("")
            .attr("placeholder", "User not found, try another search");
    } else {
        var searchId = users.find(element => element.username === userSearchEl.val()).id
        // send to user profile
        document.location.replace(`/profile/${searchId}`);
    }
}

// push data from api/db to users array for suggestion
var suggestUser = function(data) {
    data.forEach(element => {
        users.push({username: element.username, id: element.id});
        usernames.push(element.username);
    });
}

// show/hide search field
function toggleSearch() {
    console.log("clicked");
    if($("#searchForm").hasClass("visible")) {
        $("#searchForm").removeClass("visible");
    } else {
        $("#searchForm").addClass("visible");
    }
}

// auto complete users search
userSearchEl.autocomplete({ 
    source: usernames,
    appendTo: "#suggestions-wrapper",
    autoFocus: true
});

// submit listener
$("#searchForm").on("submit", submitHandler);
// Search btn clicked
$("#searchBtn").on("click", toggleSearch);
userSearchEl.on("focusout", toggleSearch);

fetchUsers();

