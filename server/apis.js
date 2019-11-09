const Router = require('koa-router');

const base = new Router({
  prefix: '/api'
});
base.get('/', ctx => {
  ctx.body = {
    msg: 'api base ok'
  };
});

base.get('/meeting/days', ctx => {
  ctx.body = [
    {
      day: 1572969600000,
      meetings: [
        {
          id: '1',
          start: 1573007400000,
          end: 1573014600000,
          title: 'DSD SDWMMWKL',
          role: 'creater',
          members: [
            {
              id: '3',
              name: 'ES'
            },
            {
              id: '4',
              name: 'LA'
            }
          ],
          attachements: []
        },
        {
          id: '2',
          start: 1573018200000,
          end: 1573025400000,
          title: 'EUWK SJFJWJ ALQLSDF',
          role: 'inner',
          members: [
            {
              id: '1',
              name: 'AM'
            },
            {
              id: '2',
              name: 'FM'
            }
          ],
          attachements: []
        }
      ]
    },
    {
      day: 1573142400000,
      meetings: [
        {
          id: '3',
          start: 1573171200000,
          end: 1573178400000,
          title: 'EUWK SJFJWJ ALQLSDF',
          role: 'inner',
          members: [
            {
              id: '1',
              name: 'AM'
            },
            {
              id: '2',
              name: 'PM'
            }
          ],
          attachements: [
            {
              id: '10011',
              name: 'work.pdf',
              url: 'https://www.baidu.com'
            }
          ]
        },
        {
          id: '4',
          start: 1573180200000,
          end: 1573183800000,
          title: 'DSD SDWMMWKL',
          role: 'creater',
          members: [
            {
              id: '3',
              name: 'ES'
            },
            {
              id: '4',
              name: 'LA'
            }
          ],
          attachements: []
        },
        {
          id: '5',
          start: 1573191000000,
          end: 1573194600000,
          title: 'DSD SDWMMWKL',
          role: 'creater',
          members: [
            {
              id: '3',
              name: 'ES'
            },
            {
              id: '4',
              name: 'LA'
            }
          ],
          attachements: []
        },
        {
          id: '6',
          start: 1573198200000,
          end: 1573201800000,
          title: 'DSD SDWMMWKL',
          role: 'creater',
          members: [
            {
              id: '3',
              name: 'LS'
            },
            {
              id: '4',
              name: 'BA'
            }
          ],
          attachements: []
        }
      ]
    },
    {
      day: 1573315200000,
      meetings: [
        {
          id: '7',
          start: 1573353000000,
          end: 1573356600000,
          title: 'EUWK SJFJWJ ALQLSDF',
          role: 'inner',
          members: [
            {
              id: '1',
              name: 'AM'
            },
            {
              id: '2',
              name: 'PM'
            }
          ],
          attachements: []
        },
        {
          id: '2',
          start: '2019-11-11 10:30',
          end: '2019-11-11 12:30',
          title: 'DSD SDWMMWKL',
          role: 'creater',
          members: [
            {
              id: '3',
              name: 'ES'
            },
            {
              id: '4',
              name: 'LA'
            }
          ],
          attachements: []
        }
      ]
    },
    {
      day: 1573488000000,
      meetings: [
        {
          id: '8',
          start: 1573529400000,
          end: 1573531200000,
          title: 'EUWK SJFJWJ ALQLSDF',
          role: 'inner',
          members: [
            {
              id: '1',
              name: 'TM'
            },
            {
              id: '2',
              name: 'KM'
            }
          ],
          attachements: []
        }
      ]
    }
  ];
});
module.exports = base;
