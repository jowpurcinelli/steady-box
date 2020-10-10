import React from 'react';



import { 
    Container, 
    Navigation, 
    DropboxLogo, 
    Form } 
    from './styles';

const MenuForm: React.FC = ( ) => {
    function handleToggle( ) {
        if (window.toggleActiveMenu)
        window.toggleActiveMenu( );
    }

    return (
        <Container>
            <Navigation>
                <h1>
                    <DropboxLogo />
                    <span>Dropbox</span>
                </h1>
                <button
                className="ation--close"
                onClick={handleToggle}>
                    X
                </button>
            </Navigation>
        </Container>
    )

}


export default MenuForm;
