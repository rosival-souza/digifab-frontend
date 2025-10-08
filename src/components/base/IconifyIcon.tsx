import { Box, BoxProps } from '@mui/material';
import { Icon, IconProps } from '@iconify/react';

interface IconifyProps extends BoxProps {
  icon: IconProps['icon'];
}

const IconifyIcon = ({ icon, width, height, ...rest }: IconifyProps) => {
  return <></>;
};

export default IconifyIcon;
