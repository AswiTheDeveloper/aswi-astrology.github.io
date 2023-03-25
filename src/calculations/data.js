import matchers from "@testing-library/jest-dom/matchers";
import React from "react";
class DataExpressionNumber {
    constructor(number, planet, personality, qualities) {
        this.number = number;
        this.personality = personality;
        this.qualities = qualities;
        this.planet = planet;
    }
    about() {
        return `Your Destiny/Expression number is ${this.number}. The ${this.planet} rules the number.${this.personality}`
    }
    listQualities() {
        return this.qualities.map((e, i) => <li key={i}>{e}</li>)
    }

}
class DataHeartDesireNumber {
    constructor(number, about) {
        this.number = number;
        this.about = about;
    }
    aboutHeart() {
        return `According to the vowels in your name, Soul Urge number is ${this.number}. The ${this.number} means ${this.about}`
    }
}





//EXPRESSION NUMBERS

const one = new DataExpressionNumber(1, 'SUN', `You are influenced by the qualities of planet Sun, like firmly determined, brave, and leadership qualities.  You have the quality to control everything around you. Sometimes,
you become stubborn and angry when things do not happen according to your desires. You may play a good role as an inventor, leader, explorer, and
head of the family`, ['Leader', 'Independent', 'Creative']);



const two = new DataExpressionNumber(2, 'MOON', `You are ruled and influenced by the Moon. Number 2 represents sensitivity, imagination and dream
oriented nature. You are such a romantic and co-operative person that people want to live with you as people
know you as a real peacemaker.The more energy of
number two may make you shy, oversensitive and makes you a fantasy dreamer`, ['Diplomat', 'Sensitive', 'Peacemaker']);



const three = new DataExpressionNumber(3, 'planet Jupiter', `You have the qualities of the planet Jupiter and you are influenced by Jupiter in your whole life. The person of
number 3 is a social person who is creative, communicative and dramatic. The number 3 represents artistic
talents, charismatic personality and cheerful behavior. You are a religious, truthful, highly educated or highly
skilled person.You love to travel and learn the new ways of joy and
happiness. You trust in total freedom in every aspect of life, especially freedom of speech. You can become a
good lawyer, artist, writer or publisher`, ['Creative', 'Entertainer', 'Ideal']);


const four = new DataExpressionNumber(4, 'planet Uranus', `The Uranus or Rahu is known for the sudden and unexpected events in mysterious ways. The Uranus or Rahu
influences you in your life. You face many unexpected events in life due to this. You are a practical person who
believes in individualism, tolerance and originality.you should avoid stubbornness and
rigid behavior towards others.`, ['Secretive', 'Dependable', 'Practical']);

const five = new DataExpressionNumber(5, 'planet Mercury', `You have the traits of the planet Mercury such as fast movement, versatile nature, communication skill and multitalents. These qualities give you the opportunity to become a actor, writer and media. You are clever and can make quick responses or ideas for
any problem.Due to analytical nature, you
disappoint the people who are close to you.`, ['Communicator', 'Restless', 'Versatile']);

const six = new DataExpressionNumber(6, 'planet Venus', `You are influenced by Venus, the planet of love, romance, beauty, art, and truth. So, you are a loving person with
a romantic image. You strongly trust in truth, justice, and humanity. You are a born teacher and healer, who is
always ready to help others with counseling skills. The person of number six is a divine lover and always stands
for family and friends`, ['Healer', 'Teacher', 'Counselor']);

const seven = new DataExpressionNumber(7, 'planet Neptune', `You are under the influence of Neptune or Ketu planet. This planet represents spirituality, philosophy and
mystery. You always search for answers to questions, which you face in your life journey. The number 7 forces
you to make illusions and delusions.You are an introverted person and often do not share your feelings and problems with others.`, ['Spiritual', 'Investigator', 'Seeker'])

const eight = new DataExpressionNumber(8, 'planet saturn', `You are under the influence of the planet Saturn. This planet represents stability, true judgment and great
responsibility. You have the born qualities to manage financial things and politics,You can balance everything in life and between
situations`, ['Game Changer', 'Money Maker', 'Manager'])

const nine = new DataExpressionNumber(9, 'planet Mars', `You are an aggressive person, who is not afraid to take risks, a
courageous person with the traits of humanity and kindness. You are always ready to help others when they need
you. You get everything, what you are determined to get by taking any level of risk. You trust everyone and are
often defeated by hidden enemies, Anger and impatience is a bad part of your nature`, ["Courageous", "Humanitarian", "Aggressive"])

const eleven = new DataExpressionNumber(11, 'MOON', `it means you have double and special powers with this number.
             It represents high sensitivity, spiritual and high imagination powers.You may become an intuitive and psychic
        person.Because of the Moon, you are very soft towards others.`, [' Highly sensitive', 'Spiritual', 'Secretive']);


const twentyTwo = new DataExpressionNumber(22, 'Planet Uranus', `You have your own world of illusion, and are often awake after falling into danger.Unexpected events are the main traits of number 22`,
    ['Dreamer', 'Systematic', 'Illusionist']);



const thirtyThree = new DataExpressionNumber(33, 'Planet Venus', `Due to the double power of the master number this is a fortunate digit.This is lucky for love
    matters, finance and money matters.You are a true and charming lover for your partner.You are overconfident,
    but a skilled and highly creative person too`, ['Healer', 'Teacher', 'Counselor']);






let expressArray = [one, two, three, four, five, six, seven, eight, nine, eleven, twentyTwo, thirtyThree];



//HEART DESIRE NUMBERS


const emptyHeart = new DataHeartDesireNumber(0, ` Which describes your inner potentials and inner resources.
Your name does not contain a Soul Urge number. It doesn't mean that you don't have an inner personality. In
the absence of a Soul Urge number, your outer personality will be visible in your inner personality.`)

const oneHeart = new DataHeartDesireNumber(1, `Accomplisher and Desire for
leadership. The number 1 is influenced by the Sun, the planet Sun gives you a deep desire to be the leader of
family and others. You want respect and credit from the people surrounding you.`);

const twoHeart = new DataHeartDesireNumber(2, ` Peacemaker and Desire for love.The number 2 is influenced by the Moon, which gives you the inner quality of peacemaking, You need a deep inner desire for love, peace and harmony.`);

const threeHeart = new DataHeartDesireNumber(3, ` Cheerful and Artistic desire. The
Soul urge number three is influenced by Jupiter, so your inner desire reflects the traits of Jupiter such as artistic
talents, charismatic personality and cheerful behavior. You tend to be joyful for yourself and others. `)

const fourHeart = new DataHeartDesireNumber(4, `Realistic and  you have a strong desire for a safe and secure future.You want respect and love
    from family and friends.You tend to be a powerful person.
    You always plan for the future, but you should be cautious about future events because of your illusion nature.`)


const fiveHeart = new DataHeartDesireNumber(5, `Learner and Desire for freedom.
Mercury influences the Soul Urge number five, so you have the strong inner desire for freedom in every aspect of
life. You have a deep curiosity to know, learn and execute any work. This number tends to be adventurous with
new and unusual things. You want change, either at your home or your workplace.
`)


const sixHeart = new DataHeartDesireNumber(6, `Responsible and Desire for
luxury. Venus influences the heart desire number 6, therefore you want to be an ideal person in the family. You
have a deep affection and a sense of responsibility for your spouse and family. You are a good healer, nurturer
and want to do more for people you love a lot. You have a desire for love, luxury life, and harmony.`);


const sevenHeart = new DataHeartDesireNumber(7, ` Intellectual and Desire for
learning. The Soul Urge number 7 is influenced by Neptune/Ketu, therefore you have the great need to know
and learn spiritual aspects. You have the desire to spend life with peace and comfort.`);

const eightHeart = new DataHeartDesireNumber(8, ` Dependable and Desire for
authority. Saturn influences this heart desire number 8, so you have a deep heart's desire to be the leader in a
workplace or in a business. You want to secure the future and success in a financial manner. You want to be a
powerful person with authority. I`)

const nineHeart = new DataHeartDesireNumber(9, ` Knowledgeable and Desire of
humanity. Mars influences the Soul Urge number nine, therefore, you have a deep desire to serve humanity and
the world with your knowledge and experiences without expecting anything. You tend to be a courageous person
for taking risks.`);

const elevenHeart = new DataHeartDesireNumber(11, ` Dreamer and Desire for
spirituality. The Heart Desire number 11 is known as the master number with traits of number 2, which is
influenced by the Moon. Therefore, you have a strong desire to be a spiritual, peace maker and psychic person.
You are a dreamer and want that the dreams should come true in your way.
`)

const twentyTwoHeart = new DataHeartDesireNumber(22, ` Realistic and Desire for a safe
future. The Soul Urge number 22 is known as the master number with traits of number 4, which is influenced by
the Uranus/Rahu. Therefore, you have a strong desire for a safe and secure future. You want respect and love
from family and friends. You tend to be a powerful person and realistic.`)

const ThirtyThreeHeart = new DataHeartDesireNumber(33, ` Responsible and Desire for
    luxury. The Heart Desire number 33 is known as the master number with traits of number 6, which is influenced
    by Venus. Therefore, you have a deep desire for luxury and love from family. You want to secure your family in a
    financial and health manner. You tend to be responsible for family and the work.
    `);



let heartArray = [emptyHeart, oneHeart, twoHeart, threeHeart, fourHeart, fiveHeart, sixHeart, sevenHeart, eightHeart, nineHeart, elevenHeart, twentyTwoHeart, ThirtyThreeHeart];



export { expressArray, heartArray };
