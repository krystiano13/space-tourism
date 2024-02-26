import moon from '../../assets/destination/image-moon.webp';
import mars from '../../assets/destination/image-mars.webp';
import europa from '../../assets/destination/image-europa.webp';
import titan from '../../assets/destination/image-titan.webp';

/**
 *
 * @type {[{img: {}, distance: string, name: string, id: number, travel: string, desc: string},{img: {}, distance: string, name: string, id: number, travel: string, desc: string},{img: {}, distance: string, name: string, id: number, travel: string, desc: string},{img: {}, distance: string, name: string, id: number, travel: string, desc: string}]}
 */
export const planets = [
    {
        id: 0,
        name: "MOON",
        desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain\n" +
            "perspective and come back refreshed. While you’re there, take in some history by visiting the\n" +
            "Luna 2 and Apollo 11 landing sites.",
        travel: "3 DAYS",
        distance: "384,000 KM",
        img: moon
    },
    {
        id: 1,
        name: "MARS",
        desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        travel: "9 MONTHS",
        distance: "225 MIL. KM",
        img: mars
    },

    {
        id: 2,
        name: "EUROPA",
        desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        travel: "3 YEARS",
        distance: "628 MIL. km",
        img: europa
    },
    {
        id: 3,
        name: "TITAN",
        desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        travel: "7 YEARS",
        distance: "1.6 BIL. km",
        img: titan
    },
];