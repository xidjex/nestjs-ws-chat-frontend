import React, { FunctionComponent, ReactElement } from 'react';
import {
	Route as ReactRouterRoute,
	RouteComponentProps,
	RouteProps,
} from 'react-router-dom';

import AppLayout from '../layouts/app/AppLayout';

export interface Props extends RouteProps {
    layout: React.ElementType;
    renderComponent: React.ElementType;
}

const Route: FunctionComponent<Props> = ({
	layout: Layout = AppLayout,
	renderComponent: Component,
	...props
}: Props) => {
	const routeRender = (componentProps: RouteComponentProps): ReactElement => (
		<Component {...componentProps} />
	);

	return (
		<Layout>
			<ReactRouterRoute {...props} render={routeRender} />
		</Layout>
	);
};

export default Route;
