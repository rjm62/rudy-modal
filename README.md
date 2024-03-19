#          package rudy-modal
This is a React component for the 14th project of Openclassrooms


## Prerequistes:
* Node version : 20.6.0
* npm version : 9.8.1
* VS Code version : 1.87.0



## How to use:
### install the package :
    
         npm install rudy modal
 

 ### comment:
 
     in your project: 

           * add the text that you'ld like display

           * add the function of the confirmation' return when the cross "X" 
             in the modal has been clicked


 ### exemple of use:
 
    import {Modal} from 'rudy-modal';

    function App() {
        const [visibility, setVisibility] = useState("true");                             
        const text = "....."       // put your message;

        const modalState = () {
            setVisibility("false")
        }

        return (
            <>
                {visibility =="true" ?
                    <Modal message={text} closeModal={modalState} />
                : ""}
            </>
        )
    }








