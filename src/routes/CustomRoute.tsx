import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AppLayout } from "../layouts/app/AppLayout";

interface Props extends RouteProps {
    layout: React.ElementType,
    protected?: boolean
}

export const CustomRoute = ({
                                layout: Layout = AppLayout,
                                ...props
}: Props) => {
    return (
        <Layout>
            <Route {...props} />
        </Layout>
    );
};
