
console.log('person1 : show ticket');
console.log('person2 : show ticket');

const preMovie = async ()=> {

    const promiseWifeBringingTicket = new Promise ((resolve,reject) => {
        setTimeout(() => {
          resolve('ticket');
        },3000)
    });

    const getPopcorn =new Promise ((resolve,reject) => resolve (`popcorn`));

    const addbutter =new Promise ((resolve,reject) => resolve (`butter`));

    const getColdDrink =new Promise ((resolve,reject) => resolve (`coldDrink`));


    let ticket = await promiseWifeBringingTicket;

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: No Im hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got the ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I want butter on Popcorn');

    let butter = await addbutter;

    console.log(`husband: I got the ${butter} on Popcorn`);
    console.log('husband: Anything else darling');
    console.log('wife: Lets go we are getting late');
    console.log('husband: Thank you for reminder');

    let coldDrink = await getColdDrink;

    console.log(`wife: I want  ${coldDrink}`);
    console.log('husband: ok I got the coldDrink');
    console.log('wife: ');
    console.log('husband: ');

    return ticket;
}

preMovie().then((message) => console.log(`person3 : show ticket`));

console.log('person4 : show ticket');
console.log('person5 : show ticket');







