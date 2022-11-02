import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

function Home() {
  return (
    <>
      <div className="home" id='home'>
        <main>
        <h1>TechStar</h1>
        <p>Solution to all your coding problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis quaerat inventore sit,
           quos eius suscipit rem amet ratione distinctio. 
           Adipisci, dolore officia illo aperiam ullam
            aliquid eveniet officiis reprehenderit.
        </p>
      </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor hic dolores atque odio nostrum fugiat tenetur, 
          cum officia amet blanditiis incidunt libero nisi tempore eveniet minima. Dolor esse beatae tempore iure! Eos 
          tempore, inventore adipisci quo, provident 
          dicta velit qui aperiam optio nesciunt id nulla voluptatibus eaque sapiente. 
          Iste quod autem tenetur laboriosam dolore ratione nihil consequuntur rerum animi deserunt.
        </p>
      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:".3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
          </div>
          <div style={{animationDelay:".5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
          </div>
          <div style={{animationDelay:".7s"}}>
              <AiFillInstagram />
              <p>Instagram</p>
          </div>
          <div style={{animationDelay:".9s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home