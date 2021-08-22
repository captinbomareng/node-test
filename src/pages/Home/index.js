import React from 'react'
import ContactButton from '../../components/contactButton'
import Header from '../../components/Header'

function Home() {
    return (
        <>
            <Header />
           <div className='main-container' id='maincontainer'>
               <h1>front end developer</h1>
               <ContactButton /> 
            </div>
        </>
    )
}

export default Home
