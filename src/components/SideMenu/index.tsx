import React from 'react';

//import { CompleteForm} from '../Autocomplete';

declare Global {
    interface Window {
        toggleActiveMenu:   (() => void  ) | undefined;
    }
}

const scrollThreshold = 300;

const SideMenu : React.FC = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [ scrollY, setScrollY ] = useState(0);

    useEffect(() => {
        function onScroll ( ) {
            setScrollY( windows.scrollY );
            setIsActive (false);
        }

        window.addEventListener('scroll', onScroll);
        return ( ) => window.removeEventListener('scroll', onScroll);
    },
        [scrollY]);


 
}

export default SideMenu;

