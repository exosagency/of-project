import ErrorPage from "components/error-page";

import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: props.hasError };
    }

    componentDidUpdate() {
        if (!this.state.hasError) {
            this.setState({ hasError: this.props.hasError });
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <ErrorPage />
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
