import GitHubImage from './../../assets/img/github.svg'

const github = () => {
    return (
        <div className="py-5">
            <img src={GitHubImage} className="responsive rounded-circle" alt="" height="200px" />
            <h1 className="pt-5">
                <a href="https://github.com/eloaca"> Eloa Cardozo </a>
            </h1>
            <h3> Campinas / SP</h3>
        </div>
    );
}

export default github;