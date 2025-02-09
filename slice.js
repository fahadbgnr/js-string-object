const address = 'barisal'
const part = address.slice(2, 5);
console.log(part);

const sentence = 'i am a good person.'
console.log(sentence.split(' '));
console.log(sentence.split('a'));


const friendsStr = 'rahim,karim,dahim,fahim,sahum';
const friends = friendsStr.split(',');
console.log(friends);

const realFriends = [ 'rahim', 'karim', 'dahim', 'fahim', 'sahum' ];
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));