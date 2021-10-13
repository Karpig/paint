import React, { FC, useEffect, SVGProps, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as ErrorIcon } from '@assets/icons/ban.svg';
import { ReactComponent as LoadingIcon } from '@assets/icons/spinner.svg';

import styles from './Icon.css';

interface Props extends SVGProps<SVGSVGElement> {
  name: string;
}

interface IconState {
  icon: FC<SVGProps<SVGSVGElement>>;
  status: 'error' | 'loading' | 'success';
}

const Icon: FC<Props> = props => {
  const { className = '', name, ...attrs } = props;
  const [iconState, setIconState] = useState<IconState>({
    icon: LoadingIcon,
    status: 'loading',
  });

  useEffect(() => {
    let isMounted = true;
    const importIcon = async (): Promise<void> => {
      await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!@assets/icons/${name}.svg`).then(
        response => {
          if (!isMounted) return;
          setIconState({
            icon: response.default,
            status: 'success',
          });
        },
        () => {
          if (!isMounted) return;
          setIconState({
            icon: ErrorIcon,
            status: 'error',
          });
        }
      );
    };
    importIcon();

    return () => {
      isMounted = false;
    };
  }, [name]);

  const { icon: IconComponent } = iconState;

  return (
    <IconComponent
      {...attrs}
      className={cn(styles.root, styles[`container_${iconState.status}`], className)}
    />
  );
};

export default Icon;
