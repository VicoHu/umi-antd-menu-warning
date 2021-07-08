import { Button, Card, Menu } from 'antd';
import styles from './index.less';

export default function IndexPage(props: any) {
  return (
    <div>
      <Menu mode="horizontal" style={{ width: '100%' }}>
        {Array.from({ length: 10 }, (v, k) => (
          <Menu.Item key={k}>目录{k}</Menu.Item>
        ))}
      </Menu>
      <Button type="primary">按钮</Button>
      <Card>{props.children}</Card>
    </div>
  );
}
