import project1 from"../assets/project1.jpg"
import pro2 from"../assets/name.jpg"
import pro3 from"../assets/project1.jpg"


const ProjectCardData = [
    {
        imgsrc:project1,
        title:"React validation form",
        text:"   Form validation in React allows an error message to be displayed if the user has not correctly filled out the form with the expected type of input. There are several ways to validate forms in React; however, this shot will focus on creating a validator function with validation rules.It can mainly used in signup or login pages.",
        view:"   https://github.com/meashna/React-form-validation "
    },
    {
        imgsrc: pro2,
        title:"Rock Papper scissor",
        text:" Python offers multiple options for developing a GUI (Graphical User Interface). Here I  created a rock paper and scissor game using Tkinter. Rock paper scissor is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are “rock”, “paper”, and “scissors”. ",
        view:"https://www.lipsum.com/"
    },
    {
        imgsrc: pro3,
        title:"Password generator",
        
        text:" I created a  mixture of numbers, alphabets, and other symbols found on the computer keyboard to form a 12-character password which is unpredictable and cannot easily be memorized. The components of the password are represented in the form of arrays.Use the random method to select at least one character from each array of characters.",
         view:"https://www.lipsum.com/"
    },
];

export default ProjectCardData;