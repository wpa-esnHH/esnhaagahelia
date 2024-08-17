import '../css/About.css';
export default function About(props) {
    return (
        <div>
            <div className="photo-text-box">
                <div className="photo-container">
                    <img src={props.imagePath} alt="Description" className="photo" />
                </div>
                <div className="text-container">
                    <h2>We are Esn <del>Helga</del> Haaga-Helia</h2>
                    <p>We organize various trips and events for the incoming exchange students. ESN Haaga-Helia co-operates closely with Haaga-Helia International Services and Helga's international tutors. Outside of Haaga-Helia we co-operate with other schools in the Helsinki area. Through our membership in ESN (Erasmus Student Network) we strongly co-operate with Helsinki University, Laurea University of Applied Sciences, Aalto University, Metropolia University of Applied Sciences and several other universities around Finland as well as internationally.</p>
                    <h2>How does ESN Haaga-Helia works</h2>
                    <p>ESN Helga is run in an open and democratic way. We have an elected board, each member with their own area of responsibility. Board together with a team of active members runs the everyday activities of ESN Helga. Everyone who takes part in the running of ESN Helga is a volunteer and not paid for their work. Board members are elected mainly for one calendar year in the end of the autumn semester. Nevertheless, board members can also be elected during the year if needed.</p>
                    <h2>Send us an E-mail</h2>
                    <p>To send an email to all board members, email: <b>board@esnhaagahelia.eu</b></p>
                    <p>To send an email to a specific board member: </p>
                    <p>president@esnhaagahelia.eu<br></br>
                        vp@esnhaaghelia.eu<br></br>
                        communication@esnhaagahelia.eu<br></br>
                        trips@esnhaagahelia.eu<br></br>
                        projects@esnhaagahelia.eu<br></br>
                        events@esnhaagahelia.eu<br></br>
                        wpa@esnhaagahelia.eu
                    </p>
                </div>

            </div>

        </div>
    )
}
