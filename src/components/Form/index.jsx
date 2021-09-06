const form = () => {
    return (
        <form>
            <div className="form-group">
                <label>Github user:</label>
                <div className="input-group">
                    <input type="text" className="form-control" required />
                    <span className="input-group-btn">
                        <input type="submit" className="btn btn-success" />
                    </span>
                </div>
            </div>
        </form>
    );
}

export default form;