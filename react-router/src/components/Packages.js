import {  Link } from 'react-router-dom'


export default function Packages({packages}) {

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>

                <ul>
                    <li>
                        <Link to='/packages/activate'>{packages[0]}</Link>
                    </li>
                    <li>{packages[1]}</li>
                    <li>{packages[2]}</li>
                    <li>{packages[3]}</li>
                    <li>{packages[4]}</li>
                </ul>

            </div>
        </div>
    )
}