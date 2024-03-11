const FormRegister = () => {
    return (
        <>
        <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="fullname">Fullname</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="fullname" type="text" placeholder="insert your name here..." name="fullname" id="fullname"/>
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="email" type="email" placeholder="example@mail.com" name="email" id="email"/>
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="password" type="password" placeholder="*****" name="password" id="password"/>
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="confirmPassword" type="password" placeholder="*****" name="confirPassword" id="confirmPassword"/>
          </div>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-600 w-full text-white">
              Register
          </button>
        </>
    )
}

export default FormRegister
