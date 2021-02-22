//format dates and handle plural/single grammar 
module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    format_url: url => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
    
        return word;
    },
    format_bio: (bio) => {
        if (bio.length > 100) {
            for (let i=100;i>60;i--) {
                if (bio[i]===" ") {
                    const bio_display = bio.slice(0,i);
                    const bio_hidden = bio.slice(i);
    
                    const bio_html = `${bio_display}<span id="dots">...</span><span id="more">${bio_hidden} </span><a href='#' id="readmore-link">Read More</a>`;
                    console.log(bio_html);
                    return bio_html
                }
            }
        }
        return bio
    }
};