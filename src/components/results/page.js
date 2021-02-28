import React, { Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../appBar'
function Page(props){
    return(
        <Fragment>
            <CssBaseline></CssBaseline>
            <AppBar></AppBar>
            Componente Results
        </Fragment>
    );
}
export default Page;