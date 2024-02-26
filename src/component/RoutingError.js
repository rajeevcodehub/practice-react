import { useRouteError } from 'react-router-dom';
const RoutingError = () => {
    const error = useRouteError();
    return (
        <div>
        <div>Page is not available</div>
        <div>{error.status}</div>
        <div>{error.statusText}</div>

        </div>
    )
}

export default RoutingError;