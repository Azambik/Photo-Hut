const {format_date, format_plural, format_url, format_bio} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('checks that format_plural() correctly pluralizes words', () => {
    expect(format_plural('Lion', 1)).toBe('Lion');
    expect(format_plural('Tiger', 2)).toBe('Tigers');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});

test('format_bio adds readmore feature to bio if char length exceeds 100', () => {
    const bio_short = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    const bio_long = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quam accusamus. Saepe aspernatur excepturi in! Reprehenderit repudiandae rerum dolore laboriosam quisquam voluptatibus porro atque, quae inventore tempora, facilis laborum qui!';


    expect(format_bio(bio_short)).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    expect(format_bio(bio_long)).toBe(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quam accusamus. Saepe aspernatur<span id="dots">...</span><span id="more"> excepturi in! Reprehenderit repudiandae rerum dolore laboriosam quisquam voluptatibus porro atque, quae inventore tempora, facilis laborum qui! </span><a href='#' id="readmore-link">Read More</a>`);
})