import React from 'react'
import RestaurantCard from '../cards/RestaurantCard'
import Container from './Container'

const Feed = ({ feedUI }) => {
  if (feedUI.length === 0) {
    return (
      <Container>
        <div className='w-scren h-screen flex justify-center items-center'>
          <h2 className='text-xl'>Loading....</h2>
        </div>
      </Container>
    )
  } else {
    return (
      <>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center	 space-x-4 space-y-4'>
            {feedUI?.map((restaurant) => {
              return (
                <RestaurantCard
                  {...restaurant?.data}
                  key={restaurant?.data?.id}
                />
              )
            })}
          </div>
        </Container>
      </>
    )
  }
}

export default Feed
