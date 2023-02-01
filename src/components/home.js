import React, { useState } from 'react';
import '../styles/home.css';
import Personality from './personality';


const Home = () => {

    const [showPersonality, setPersonality] = useState(false);
    if (showPersonality) {
        return (
            < Personality />
        )

    }

    return (
        <main className='home'>
            <section>



                <h1>
                    {/* <span> It is logical that the planets</span>
                    can influence man on earth, since human body is made up of earthly mater like water, iron, calcium, etc. */}

                    The real modern use of Astrology is as a <strong>COUNSELLING TOOL.</strong>

                    It is a very accurate method of assessing:–
                    personality of the individual
                    strengths and weaknesses
                    skills and talents.
                </h1>
                {/* <h2>
                    The real modern use of Astrology is as a <strong>COUNSELLING TOOL</strong>.

                    It is a very accurate method of assessing:–
                    personality of the individual
                    strengths and weaknesses
                    skills and talents.
                </h2> */}
            </section>

            <h4>So if you are open minded and want to entertain yourself then see for yourself. You may be very <strong>surprised by what you discover!</strong>
            </h4>
            < Personality setPersonality={() => setPersonality(true)} />




        </main>)
}







export default Home;