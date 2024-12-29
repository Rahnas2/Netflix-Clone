
import HomeNav from "./HomeNav"
import HomeSec1 from "./HomeSec1"

import LoginNav from "./LoginNav"
import LoginBox from "./LoginBox"
import LoginFooter from "./LoginFooter"
import SignUpBox from "./SignUpBox"


function Hero({ Where }) {
    return (
        <div className={`h-screen ${Where !== 'Home' ? 'bg-hero-banner-login': 'bg-hero-banner'} bg-cover flex flex-col`}>
            {
                Where === 'Home' ? (
                    <>
                      <HomeNav />
                      <HomeSec1 />
                    </>
                  ) : Where === 'Login' ? (
                    <>
                      <LoginNav />
                      <LoginBox />
                      <LoginFooter />
                    </>
                  ) : (
                    <>
                      <LoginNav />
                      <SignUpBox />
                      <LoginFooter />
                    </>
                  )
            }
        </div>
    )
}

export default Hero