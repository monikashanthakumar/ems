import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Login(){
    return(
        <div>
            <div className="row bg-danger w-100">
                <div className="col col-md-6 w-100 left-box"> 
                </div>
                <div className="col col-md-6 p-5 d-flex flex-row align-items-center"> 
                    <div className="container border rounded">
                        <h2 className="text-center mt-3">User Login</h2>
                        <form className="text-white">
                            <div className="form-group">
                                <label for="usertype">User Type</label>
                                <select className="form-control">
                                <option>Admin</option>
                                <option>Technician</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="email"></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="password"></input>
                            </div>
                            <div class="form-group text-center mt-4">
                            <input type="button" value="login" class="btn btn-light" ></input>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
