import { React, useState} from 'react';


function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div className="flex flex-col items-center p-8 shadow-lg rounded-xl bg-base-200">
          <form className="flex flex-col w-full" onSubmit={handleLogin}>
                <label>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="p-2 border rounded-md input input-bordered input-primary"
            //   ref={userRef}
            //   onChange={handleEmailInput}
            />

            <label>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
              className="p-2 border rounded-md input input-bordered input-primary"
            //   onChange={handlePasswordInput}
            />
        </form>
    </div>
    )
}

export default Login;