// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('renderDogCard function should take in a dog and return a DOM node (consisted of an anchor element with an img and p tag wrapped inside a div element)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'Boogie',
        id: 2,
        breed: 'corgi',
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

    const testDog = {
        name: 'Sadie',
        breed: 'collie',
        age: 4,
        id: 3,
        description: 'Boofers lotsa pats big ol many pats boofers shoober very good spot long bois, heckin h*ck fluffer yapper boofers stop it fren. Very hand that feed shibe blop doggorino wrinkler such treat, doggorino boofers smol, sub woofer adorable doggo long bois. You are doin me a concern heckin good boys bork much ruin diet heck puggo, he made many woofs woofer very taste wow woofer. Boof blop you are doin me a concern boofers, puggorino.'
    };
    
    const expected = `<div class="dog-detail"><p class="name">Sadie</p><img src="../assets/collie.jpeg"><div class="age-and-breed"><p class="age">4 years old</p><p class="breed">collie</p></div><p class="description">Boofers lotsa pats big ol many pats boofers shoober very good spot long bois, heckin h*ck fluffer yapper boofers stop it fren. Very hand that feed shibe blop doggorino wrinkler such treat, doggorino boofers smol, sub woofer adorable doggo long bois. You are doin me a concern heckin good boys bork much ruin diet heck puggo, he made many woofs woofer very taste wow woofer. Boof blop you are doin me a concern boofers, puggorino.</p></div>`;

    const actual = renderDogDetail(testDog);

    expect.deepEqual(actual.outerHTML, expected, 'the string representation of the actual element shoudl be the same as described in the test');
});
