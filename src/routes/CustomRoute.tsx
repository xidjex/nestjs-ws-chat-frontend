import React, { FC } from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import AppLayout from '../layouts/app/AppLayout';

interface Props extends RouteProps {
    layout: React.ElementType;
    renderComponent: React.ElementType;
    protected?: boolean;
}

const CustomRoute: FC<Props> = ({
	layout: Layout = AppLayout,
	renderComponent: Component,
	...props
}: Props) => (
	<Layout>
		<Route
			{...props}
			render={(componentProps: RouteComponentProps) => <Component {...componentProps} />}
		/>
	</Layout>
);

export default CustomRoute;
