import React, { useState } from 'react';
import GitHubImage from './../../assets/img/github.svg'

function Form() {
    const [search, setSearch] = useState();
    const [userData, setUserData] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(userResponse => setUserData(userResponse));
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Github user:</label>
                    <div className="input-group">
                        <input type="text" required className="form-control" value={search} onChange={handleChange} />
                        <span className="input-group-btn">
                            <input type="submit" className="btn btn-success" />
                        </span>
                    </div>
                </div>
            </form>

            <div className="py-4">
                {!userData && (
                    <img src={GitHubImage} className="responsive rounded-circle" alt="" height="200px" />
                )}
                {userData && (
                    <div>
                        <img src={userData.avatar_url} className="responsive rounded-circle" alt="" height="200px" />

                        <h1 className="pt-3">
                            <a href={userData.html_url}> {userData.name} </a>
                        </h1>
                        <h3> {userData.location} </h3>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Form;