import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Icon from 'components/Icon';
import Avatar from 'components/Avatar';

import './TabBar.less';

interface ITabBar {
  className?: string;
}

const TabBar: FunctionComponent<ITabBar> = ({ className }) => {
  const router = useRouter();
  return (
    <div className={'tab-bar ' + className}>
      <ul className='links'>
        <li className={router.route.indexOf('/chats') >= 0 ? 'active' : ''}>
          <Link href='/chats' as='/chats'>
            <a>
              <Icon type='xiaoxi' />
            </a>
          </Link>
        </li>
        <li className={router.route.indexOf('/sessions') >= 0 ? 'active' : ''}>
          <Link href='/sessions' as='/sessions'>
            <a>
              <Icon type='jiqiren' />
            </a>
          </Link>
        </li>

        <li className={router.route.indexOf('/meetings') >= 0 ? 'active' : ''}>
          <Link href='/account'>
            <a>
              <Icon type='bullhorn' />
            </a>
          </Link>
        </li>
        <li className={router.route.indexOf('/meetings') >= 0 ? 'active' : ''}>
          <Link href='/account'>
            <a>
              <Icon type='shandian' />
            </a>
          </Link>
        </li>
        <li className={router.route.indexOf('/account') >= 0 ? 'active' : ''}>
          <Link href='/account'>
            <a>
              <Avatar type='Aquarium' size='small' />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default TabBar;
