import Page from 'components/Page';
import Button from 'components/Button';
import Icon from 'components/Icon';
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
    <div>account</div>
  </Page>
);
