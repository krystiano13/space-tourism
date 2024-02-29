// Portrait
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg';
import capsule from '../../assets/technology/image-space-capsule-portrait.jpg';

// Landscape
import launchMobile from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportMobile from '../../assets/technology/image-spaceport-landscape.jpg';
import capsuleMobile from '../../assets/technology/image-space-capsule-landscape.jpg';

/**
 *
 * @type {[{img: {}, alt: string, id: number, title: string, img2: {}, desc: string},{img: {}, alt: string, id: number, title: string, img2: {}, desc: string},{img: {}, alt: string, id: number, title: string, img2: {}, desc: string}]}
 */
export const info = [
    {
        id: 0,
        title: "LAUNCH VEHICLE",
        desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        img : launch,
        img2: launchMobile,
        alt: "space rocket"
    },
    {
        id: 1,
        title: "SPACEPORT",
        desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        img : spaceport,
        img2 : spaceportMobile,
        alt: "spaceport"
    },
    {
        id: 2,
        title: "SPACE CAPSULE",
        desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        img : capsule,
        img2 : capsuleMobile,
        alt: "space capsule"
    },
];