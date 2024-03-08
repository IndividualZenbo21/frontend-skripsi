import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const errort = useRouteError()
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
            <p className="my-5 text-xl">{errort.statusText || errort.message}</p>
        </div>
    )
}

export default ErrorPage