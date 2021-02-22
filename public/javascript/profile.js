const readmore = document.querySelector('#readmore-link');
const displayNameEl = document.querySelector('.display-name');
const profPicEl = document.querySelector('.profile-pic');
const bioEl = document.querySelector('.bio');

const getBio = (bio_html) => {
    let bioStr = String;
    const bioArr = bio_html.split('>');
    if (bioArr[1]) {
        bioStr = bioArr[1].split('<')[0].concat(bioArr[4].split('<')[0]);
    } else {
        bioStr = bioArr.toString();
    }

    return bioStr
}

const expand = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const readmoreLink = document.getElementById("readmore-link");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readmoreLink.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        readmoreLink.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

async function updateDB() {
    const displayName = displayNameEl.value.trim();
    const profPic = profPicEl.getAttribute('src');
    const bio = getBio(bioEl.outerHTML);

/*     console.log({
        displayName,
        profPic,
        bio
    }); */

    if (displayName) {
        /*const response = await fetch('/api/users/PATH_TO_DB', {
            method: 'post',
            body: JSON.stringify({
                displayName,
                profPic,
                bio
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        const response = {}

        if (response.ok) {
            document.location.replace('/profile/');
        } else {
            alert(response.statusText);
        }*/
    }
}

readmore.addEventListener('click', expand);
displayNameEl.addEventListener('blur', updateDB);
profPicEl.addEventListener('blur', updateDB);
bioEl.addEventListener('blur', updateDB);
