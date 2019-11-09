import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Icon from 'components/Icon';

import './TabBar.less';
export default function TabBar() {
  const router = useRouter();
  return (
    <div className='tab-bar'>
      <ul className='links'>
        <li className={router.route.indexOf('/chats') >= 0 ? 'active' : null}>
          <Link href='/chats' as='/chats'>
            <a>
              <Icon type='xiaoxi' />
            </a>
          </Link>
        </li>
        <li
          className={router.route.indexOf('/sessions') >= 0 ? 'active' : null}
        >
          <Link href='/sessions' as='/sessions'>
            <a>
              <Icon type='jiqiren' />
            </a>
          </Link>
        </li>

        <li
          className={router.route.indexOf('/meetings') >= 0 ? 'active' : null}
        >
          <Link href='/account'>
            <a>
              <Icon type='bullhorn' />
            </a>
          </Link>
        </li>
        <li
          className={router.route.indexOf('/meetings') >= 0 ? 'active' : null}
        >
          <Link href='/account'>
            <a>
              <Icon type='shandian' />
            </a>
          </Link>
        </li>
        <li className={router.route.indexOf('/account') >= 0 ? 'active' : null}>
          <Link href='/account'>
            <a>
              <img className='icon-inner' src='/animals/Aquarium.svg' />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
