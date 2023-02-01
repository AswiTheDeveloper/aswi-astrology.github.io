import React, { useState } from 'react';
import expressionNumber from '../calculations/expressionNumber';
import { expressArray, heartArray } from '../calculations/data';
import checkIcon from '../styles/media/1024px-Eo_circle_red_white_checkmark.svg.png';

const Personality = ({ setPersonality }) => {
    const [name, setName] = useState('');
    const [head, setHead] = useState('');
    const [about, setAbout] = useState({
        about: '',
        qualities: []
    });
    let expNumber, heartDesireNumber;
    const [aboutHeart, setAboutHeart] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((/\d/g).test(name) || name.length < 4) alert('Invalid Details');
        else {
            [expNumber, heartDesireNumber] = expressionNumber(name);
            console.log(expNumber, heartDesireNumber);
            expressArray.forEach((e, i) => {

                if (e.number == expNumber) {
                    setAbout({
                        about: e.about(),
                        qualities: e.listQualities()
                    });
                }
            })
            heartArray.forEach((e, i) => {

                if (e.number == heartDesireNumber) {
                    console.log(heartDesireNumber, 'here', e);


                    setAboutHeart(e.aboutHeart());


                }
            })

            console.log(aboutHeart);
        }

        setHead(name.toUpperCase());
        setName('');
    }

    return (
        <main className='personality'>
            <form>

                <input value={name} type='text' onFocus={setPersonality} onChange={(e) => {
                    setName(e.target.value)
                }} placeholder='Your Name' />
                <button onClick={handleSubmit}>Calculate</button>

            </form>

            {about.about && <article>
                <header>
                    <h3>{head}</h3>
                    <ul>
                        {
                            about.qualities
                        }
                    </ul>
                </header>
                <section>
                    <h4> Destiny / Expression number:</h4>

                    <p>
                        {about.about}
                    </p>

                </section>


                <aside>
                    <h4>Heart Desire / Soul Urge Number:</h4>
                    <p>
                        {
                            aboutHeart && aboutHeart.split('.').map(e => {
                                if (e != '') return <li>{e}</li>
                            }
                            )
                        }
                    </p>
                    <img src={checkIcon} alt='checkMark' />
                </aside>
            </article>
            }
        </main>

    )
}







export default Personality;