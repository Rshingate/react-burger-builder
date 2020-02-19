import React from 'react';
import Aux from '../../hoc/Aux';

import classes from '../Layout/Layout.css';


const layout = (props) => {

       return (<Aux>
            <div>Sidebar</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>)

}

export default layout;