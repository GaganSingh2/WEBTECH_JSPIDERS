import React from 'react'

function ArtWorking({artWorkDetails}) {
    const {title, price, isOriginal, medium} = artWorkDetails;
  return (
    <div className='motorcycle-card'>
        <h1>Title: {title}</h1>
        <p>
            <strong>Price: </strong>{price}
        </p>
        
        <p>
            <strong>Medium: </strong>
            <span>{isOriginal? "🌟Original Painting": "Art Print"}</span>
        </p>
    </div>
  )
}

export default ArtWorking
{/*
    The Requirements and Question:
    1)Create a child component called "ArtWorking"
    2)The component should accept four props:
        a)title(String) 
        b)Price (number)
        c)isOriginal (boolean)
        d)medium (String, eg: "Oil on Canvas" or "Watercolor)
    3)Inside ArtWorkCard, display the title, medium and price using appropriate HTML tags
    4)Use the isOriginal boolean to conditionally display a text, if true, display a message "Original Painting", if false, display "Art Application"
    5)In your main App component, render at least three ArtWorkCard component with different data. make sure at least one of the represent a one-of-keing "Original Paintin"*/}
