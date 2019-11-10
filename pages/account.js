import Page from 'components/Page';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Avatar from 'components/Avatar';
import List from 'components/List';
export default () => (
  <Page
    className='account'
    title='Account'
    actions={
      <div className='actions'>
        <Button>
          <Icon type='jiahao' />
        </Button>
        <Button>
          <Icon type='shoucang' />
        </Button>
        <Button>
          <Icon type='more' />
        </Button>
      </div>
    }
  >
    <List>
      <List.Item>
        <Avatar type='Bird' size='large' />
        <List.Label>
          <h3>Bird</h3>
          <p>+86 15678123873</p>
        </List.Label>
      </List.Item>
    </List>
    <List>
      <List.Header>Settings</List.Header>
      <List.Item>
        <Icon type='privacy' />
        <List.Label>Privacy</List.Label>
      </List.Item>
      <List.Item>
        <Icon type='sunset' />
        <List.Label>Theme</List.Label>
        <List.Note>Dark</List.Note>
      </List.Item>
      <List.Item>
        <Icon type='earth' />
        <List.Label>Language</List.Label>
        <List.Note>English</List.Note>
      </List.Item>
    </List>
  </Page>
);
