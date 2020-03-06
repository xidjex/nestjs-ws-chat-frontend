import Tooltip from '@material-ui/core/Tooltip';
import React, { FC, ReactElement } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

import MutedIcon from '@material-ui/icons/VolumeOff';
import BannedIcon from '@material-ui/icons/Block';


// Types
import UserStatus from '../../types/UserStatus';

interface Props {
	status: UserStatus;
}

interface IconsType {
	[key: number]: ReactElement<SvgIconProps>;
}

const icons: IconsType = {
	[UserStatus.muted]: <Tooltip title="Muted"><MutedIcon /></Tooltip>,
	[UserStatus.baned]: <Tooltip title="Banned"><BannedIcon /></Tooltip>,
};

const UserStatusIcon: FC<Props> = ({
	status,
}): ReactElement<SvgIconProps> | null => icons[status] || null;

export default UserStatusIcon;
