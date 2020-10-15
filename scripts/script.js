
let rand = document.getElementById('rand');
let quoteText = document.getElementById('quoteText');
let quoteAuthor = document.getElementById('quoteAuthor');

const quotes = [

 [['Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.'],['Jack Handey']],

 [['Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.'],['Cullen Hightower']],

 [['The difference between stupidity and genius is that genius has its limits'],['Albert Einstein']],

 [['Analyzing humor is like dissecting a frog. Few people are interested and the frog dies of it.'],['E. B. White']],

 [['People say, ‘But Betty, Facebook is a great way to connect with old friends.’ Well, at my age, if I want to connect with old friends I need a Ouija board.'],['Betty White']],

 [['A stockbroker urged me to buy a stock that would triple its value every year. I told him, ‘At my age, I don’t even buy green bananas.'],['Claude Pepper']],

 [['Life begins at 40 – but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times'],['Helen Rowland']],

 [['I have noticed that even people who claim everything is pre­determined and that we can do nothing to change it look before they cross the road.'],['Stephen Hawking']],

 [["I may be a living legend, but that sure don't help when I've got to change a flat tire."],['Roy Orbison']],

 [['If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee'],['Abraham Lincoln']],

 [['Inflation is when you pay fifteen dollars for the ten-dollar haircut you used to get for five dollars when you had hair.'],['Sam Ewing']],

 [["Here’s something to think about: How come you never see a headline like ‘Psychic Wins Lottery’?"],['Jay Leno']],

 [['From the ages of eight to 18, me and my family moved around a lot. Mostly we would just stretch, but occasionally one of us would actually get up to go to the fridge.'],['Jarod Kintz']],

 [['I have never been hurt by what I have not said.'],['Calvin Coolidge']],

 [['The best way to teach your kids about taxes is by eating 30 percent of their ice cream'],['Bill Murray']],

 [['Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.'],['Jerry Seinfeld']],

 [['The difference between fiction and reality? Fiction has to make sense.'],['Tom Clancy']],

 [['Tact is the ability to describe others as they see themselves.'],['Abraham Lincoln']],

 [['The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.'],['Bill Watterson']],

 [['The most ineffective workers are systematically moved to the place where they can do the least damage: management.'],['Scott Adams']],

 [['I don’t want any yes-men around me. I want everybody to tell me the truth even if it costs them their job.'],['Samuel Goldwyn']],

 [['There is nothing better than a friend, unless it is a friend with chocolate'],['Linda Grayson']],

 [['A lie gets halfway around the world before the truth has a chance to get its pants on'],['Winston Churchill']],

 [['A woman is like a tea bag – you can’t tell how strong she is until you put her in hot water.'],['Eleanor Roosevelt']],

 [['Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.'],['Ellen DeGeneres']],

 [['Every time you feel yourself being pulled into other people’s drama, repeat these word: Not my circus, not my monkeys.'],['Polish Proverb']],

 [['If at first you don’t succeed, try, try again. Then quit. There’s no point in being a damn fool about it.'],['W. C. Fields']],

 [['I have a lot of growing up to do. I realized that the other day inside my fort.'],['Zach Galifianakis']],


];

rand.onclick =  (e) => {
    randomIndex = Math.round(Math.random()*(quotes.length-1))
    quoteData = quotes[randomIndex];
    quote = quoteData[randomIndex];
    author = quoteData[1][0];
    quoteText.textContent = quote;
    quoteAuthor.textContent = author;
};

