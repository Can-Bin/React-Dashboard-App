import React from 'react';
import {ColorModeContext, useMode} from "./theme"
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar"
import Dashboard from "./scenes/dashboard"
import {Routes, Route} from "react-router-dom"
import SideBar from "./scenes/global/SideBar"
import Team from './scenes/team';
import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoices"



const App = () => {
    const [theme, colorMode] = useMode()
    
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className='app'> 
                    <SideBar/>
                    <main className='content'>
                        <Topbar/>
                        <Routes>
                            {/* <Route path='/' element={<Dashboard/>}/> */}
                            <Route path='/team' element={<Team/>}/>
                            <Route path='/contacts' element={<Contacts/>}/>
                            <Route path='/invoices' element={<Invoices/>}/>
                            {/* <Route path='/form' element={<Form/>}/> */}
                            {/* <Route path='/bar' element={<Bar/>}/> */}
                            {/* <Route path='/pie' element={<Pie/>}/> */}
                            {/* <Route path='/line' element={<Line/>}/> */}
                            {/* <Route path='/faq' element={<Faq/>}/> */}
                            {/* <Route path='/geography' element={<Geography/>}/> */}
                            {/* <Route path='/calendar' element={<Calendar/>}/>  */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
        
    )
}

export default App
