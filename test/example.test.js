// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('renderDogCard function returns a DOM node (consisted of an anchor element with an img and p tag wrapped inside a div element)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'Boogie',
        id: 2,
        breed: 'corgi',
        img: `./assets/corgi.jpeg`
    };
    
    const expected = `<a href="./detail/?id=2"><div class="dog-card"><p>Boogie</p><img src="./assets/corgi.jpeg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(testDog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected, 'returns a DOM node consisted of an anchor element with an img and p tag wrapped inside a div element');
});


test('renderDogDetail function returns a DOM node consisted of 2 div elements and a p element of dog description. div with the class of dog-detail includes a "p" and an "img" tag. div with the class of "age-and-breed" includes 2 "p" tags of age and breed.', (expect) => {
   //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'Boogie',
        breed: 'corgi',
        age: 5,
        id: 2,
        img: `./assets/corgi.jpeg`,
        description: 'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.'
    };
    
    const expected = `<div class="dog-detail"><p class="name">Boogie</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">corgi</p></div><p class="description">Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(testDog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected, 'returns a DOM node consisted of 2 div elements and a p element of dog description. div with the class of dog-detail includes a "p" and an "img" tag. div with the class of "age-and-breed" includes 2 "p" tags of age and breed.');

});