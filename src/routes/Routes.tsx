import React from 'react';
import { Switch } from 'react-router-dom';

// Layouts
import {AuthLayout} from "../layouts/auth/AuthLayout";

// Components
import { CustomRoute } from './CustomRoute';

export const Routes = () => {
    return (
        <Switch>
            <CustomRoute
                exact
                layout={AuthLayout}
                path="/"
            >
                <div>Test</div>
            </CustomRoute>
            <CustomRoute
                layout={AuthLayout}
                path="/login"
            >
                <div>Login</div>
            </CustomRoute>
        </Switch>
    );
};
